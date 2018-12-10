// console.log("sanity check");
var button = document.getElementsByClassName('button')[0]
function updateTimer(){
    // new Date() will create a new Date object with the current time
    // where current time = the moment the line ran
    var now = new Date()
    // getTime() can be run against a Date Object, and will convert to the #
    // of millseconds since 1-1-1970
    var nowAsTimestamp = now.getTime()
    // console.log(nowAsTimestamp)
    var timeRemaining = timeStamp - nowAsTimestamp;
    // console.log(timeRemaining)
    
	var seconds = Math.floor((timeRemaining / 1000) % 60)
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7)
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7))
    
    // console.log(seconds)
    // console.log(minutes)

    // getElementsByClassName ALWAYS returns an Array, even if there is 0 or 1 thing
    document.getElementsByClassName('weeks')[0].innerHTML = weeks
    // querySelector will use css rules to find a match,
    // and only get the first one... NOT an array
    document.querySelector('.days').innerHTML = days
    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds


    // == compares values
    // === compares values and data type
    // var minutes  = "0"
    // minutes == 0 IS TRUE
    // minutes === 0 IS FALSE

    if (seconds > 55){
        // updates the dom to say "Hooray, another minute closer to Christmas!"
        document.querySelector('.message').innerHTML = `Hooray, another minute closer to Christmas!`
    } else {
        document.querySelector('.message').innerHTML = ``
    }
}
function newDate(){
    // console.log("new date")
    var updatedDate = new Date(prompt("What new date would you like?"))
    console.log(updatedDate)
    endDate = updatedDate
    timeStamp = updatedDate.getTime()
    console.log(timeStamp)
}
button.addEventListener('click', newDate)
var endDate = new Date("December 25, 2018");
console.log(endDate)
timeStamp = endDate.getTime()
console.log(timeStamp);

// console.log(updatedDate)

// setInterval will:
//  1. call the function in arg1
//  2. every arg2 milliseconds
setInterval(updateTimer,1000)

