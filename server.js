const express = require('express')
const app = express()
const PORT = 8000

const quotes = {
    'michael scott':{
        'quote': 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.',
        'episode': 'S02, E06',
        'episodeName': 'The Fight'
    },
    'jim halpert':{
        'quote': 'Right now, this is just a job. If I advance any higher in this company, this would be my career. And, uh, if this were my career, I\'d have to throw myself in front of a train.',
        'episode': 'S01, E03',
        'episodeName': 'Health Care'
    },
    'kevin malone':{
       'quote': 'I just want to lie on the beach and eat hot dogs.',
       'episode': 'S03, E23',
        'episodeName': 'Beach Games'
    },
    'dwight schrute':{
        'quote': 'Identity theft is not a joke, Jim! Millions of families suffer every year.',
        'episode': 'S03, E21',
        'episodeName': 'Product Recall'
     },
     'phyllis lapin':{
        'quote': 'I wonder what people like about me. Probably my jugs.',
        'episode': 'S05, E01-02',
        'episodeName': 'Weight Loss'
     },
     'pam beesley':{
        'quote': 'And I feel god in this Chili\'s tonight.',
        'episode': 'S02, E01',
        'episodeName': 'The Dundies'
     },
     'stanley hudson':{
        'quote': 'Life is short. Drive fast and leave a sexy corpse. That\'s one of my mottos.',
        'episode': 'S08, E15',
        'episodeName': 'Tallahassee'
     },
     'unknown':{
        'quote': 'unknown',
        'episode': 'unknown',
        'episodeName': 'unknown'
     }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:quoteBy', (request, response)=>{
    const officeCharacter = request.params.quoteBy.toLowerCase()
    if(quotes[officeCharacter]){
        response.json(quotes[officeCharacter])
    }else{
        response.json(quotes['unknown'])
    }
})


app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}! Betta go catch it!`)
})