const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const cards ={
    'prosper':{
        'name': 'Prosper, Tome-Bound',
        'cardType': 'Legendary Creature - Tiefling Warlock',
        'manaCost': '2CBR',
        'Power and Toughness': '1/4',
        'text': 'Deathtouch Mystic Arcanum — At the beginning of your end step, exile the top card of your library. Until the end of your next turn, you may play that card. Pact Boon — Whenever you play a card from exile, create a Treasure token.' 
    },
    'alela':{
        'name': 'Alela, Artful Provocateur',
        'cardType': 'Legendary Creature — Faerie Warlock',
        'manaCost': '1CWUB', 
        'Power and Toughness': '2/3',
        'text': 'Flying, deathtouch, lifelink Other creatures you control with flying get +1/+0. Whenever you cast an artifact or enchantment spell, create a 1/1 blue Faerie creature token with flying.'
    },
    'roon':{
        'name': 'Roon of the Hidden Realm',
        'cardType': 'Legendary Creature — Rhino Soldier',
        'manaCost': '2CGWU', 
        'Power and Toughness': '4/4',
        'text': 'Vigilance, trample {2}, {T}: Exile another target creature. Return that card to the battlefield under its owner’s control at the beginning of the next end step.'
    },
    'veyran':{
        'name': 'Veyran, Voice of Duality',
        'cardType': 'Legendary Creature — Efreet Wizard',
        'manaCost': '1CUR',
        'Power and Toughness': '2/2',
        'text': 'Magecraft — Whenever you cast or copy an instant or sorcery spell, Veyran, Voice of Duality gets +1/+1 until end of turn. If you casting or copying an instant or sorcery spell causes a triggered ability of a permanent you control to trigger, that ability triggers an additional time.'
    },
    'mowu':{
        'name': 'Mowu, Loyal Companion',
        'cardType': 'Legendary Creature — Dog',
        'manaCost': '3CG',
        'Power and Toughness': '3/3',
        'text': 'Vigilance, trample If one or more +1/+1 counters would be put on Mowu, Loyal Companion, that many plus one +1/+1 counters are put on it instead.'
}
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:cardName', (request,response)=>{
    const cardsName = request.params.cardName.toLowerCase()
    if(cards[cardsName]){
        response.json(cards[cardsName])
    }else{
        response.json(cards['go play yugioh, nerd!'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})