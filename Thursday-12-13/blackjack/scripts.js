const freshDeck = createDeck()
let theDeck = freshDeck.slice()
let playerHand = []
let dealerHand = []

$('.deal-button').click(()=>{
    console.log('click')
    // console.log("User clicked the deal button")
    // we need a deck!
    shuffleDeck(theDeck)
    // shift takes pulls the first card off the array and returns it.
    console.log(theDeck)
    let topCard = theDeck.shift()
    console.log(topCard)
    console.log(theDeck)

})

function createDeck(){
    let newDeck = []
    //I am a local variable, and no one has access to newDeck but me.
    // a forEach loop takes one arg - function
    // that function gets 2 args:
    // 1.what to call this element in loop
    // 2. index loop is on

    // outer loop is for suits, inner is for number
    const suits = ['s','h','d','c']
    suits.forEach((s,index)=>{
        for(let c=1; c<=13;c++){
            newDeck.push(`${c}${s}`)
        }
    })
    return newDeck
}

function shuffleDeck(aDeckToBeShuffled) {
    // loop. A lot. Like those machines in casinos that 
    // make funny noises.
    for (let i=0; i<100000; i++){
        let rand1 = Math.floor(Math.random()*52)
        let rand2 = Math.floor(Math.random()*52)
        // we need to switch aDeckToBeShuffled[rand1] with aDeckToBeShuffled[rand2].
        // But we have to save the value of the one to keep it for later
        let cardDefender = aDeckToBeShuffled[rand1]
        aDeckToBeShuffled[rand1]=aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2]= cardDefender 
    }
    console.log(aDeckToBeShuffled)
}