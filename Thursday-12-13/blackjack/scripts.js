const freshDeck = createDeck()
let theDeck = freshDeck.slice()
let playerHand = []
let dealerHand = []
let hasAce=false
let topCard = []
let stay = false

$('.deal-button').click(()=>{
    // console.log('click')
    // console.log("User clicked the deal button")
    // we need a deck!
    shuffleDeck(theDeck)
    // shift takes pulls the first card off the array and returns it.
    topCard = theDeck.shift()
    dealerHand.push(topCard)
    topCard=theDeck.shift()
    playerHand.push(topCard)
    topCard=theDeck.shift()
    dealerHand.push(topCard)
    topCard=theDeck.shift()
    playerHand.push(topCard)
    placeCard(`player`,1,playerHand[0])
    placeCard(`dealer`,1,dealerHand[0])
    placeCard(`player`,2,playerHand[1])
    placeCard(`dealer`,2,dealerHand[1])
    calculateTotal(playerHand, 'player')
    calculateTotal(dealerHand, 'dealer')
    $('.deal-button').css(`display`, `none`)
})

function placeCard(who, where, what){
    // who got it, 
    // who got it, -  option player or dealer
    // where is it in the hand - option 1-6
    // what card was it - 1-13h, 1-13s, etc...
    const classSelector = `.${who}-cards .card-${where}`
    $(classSelector).html(`<img src="/cards/${what}.png" />`)
}

function createDeck(){
    let newDeck = []
    //I am a local variable, and no one has access to newDeck but me.
    // a forEach loop takes one arg - function
    // that function gets 2 args:
    // 1.what to call this element in loop
    // 2. index loop is on
    // outer loop is for suits, inner is for number
    const suits = ['s','h','d','c']
    suits.forEach((s,i)=>{
        for(let c=1; c<=13;c++){
            newDeck.push(`${c}${s}`)
        }
    })
    return newDeck
}

function shuffleDeck(deckToBeShuffled) {
    // loop. A lot. Like those machines in casinos that 
    // make funny noises.
    for (let i=0; i<100000; i++){
        let rand1 = Math.floor(Math.random()*52)
        let rand2 = Math.floor(Math.random()*52)
        // we need to switch deckToBeShuffled[rand1] with deckToBeShuffled[rand2].
        // But we have to save the value of the one to keep it for later
        let cardHolder = deckToBeShuffled[rand1]
        deckToBeShuffled[rand1]=deckToBeShuffled[rand2]
        deckToBeShuffled[rand2]= cardHolder 
    }
}
function calculateTotal(hand, who){
    // purpose: findout the humber, and return it
    let handTotal = 0
    let cardValues = []
    let hasAce = false
    hand.forEach((card,i)=>{
        let thisCardValue = card.slice(0,-1)
        console.log(`the card length for this ${card} is ${card.length}`)
        if(card.length>2){
            // handles JQK
            thisCardValue = 10
        }
        if(thisCardValue == '1'){
            thisCardValue = 11
            hasAce = true
        }
        handTotal+= Number(thisCardValue)
        cardValues.push(thisCardValue)
    })
    console.log(handTotal)
    if (who =='player'){
    $('.playerTotal').html(`${handTotal}`)
    } else{
    $(`.dealerTotal`).html(`${handTotal}`)
    }
    return handTotal
}

$(`.hit-button`).click(() =>{
    const topCard = theDeck.shift()
    playerHand.push(topCard)
    placeCard(`player`,playerHand.length,topCard)
    calculateTotal(playerHand,'player')
    if (stay == true){
        $('.hit-button').css(`display`, `none`)
    }
})
$(`.stay-button`).click(() =>{
    let dealersTotal = calculateTotal(dealerHand, `dealer`)
    console.log(`dealersTotal is ${dealersTotal}`)
    while (dealersTotal<17&&hasAce==false){
        topCard=theDeck.shift()
        dealerHand.push(topCard)
        placeCard(`dealer`,dealerHand.length, topCard)
        dealersTotal = calculateTotal(dealerHand, `dealer`)
        stay = true
        $('.stay-button').css(`display`, `none`)
    }
})

// function checkLoss(){
//     (if dealersTotal>21){
//     player wins
// }
//     if (playerTotal)

// }
