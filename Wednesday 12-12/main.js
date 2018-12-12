// console.log($)
// a $ means I am writing javascript. But more specifically, jQuery

// targeting stuff
// console.log(document.getElementsByTagName(".container"))
// console.log(document.getElementsByTagName(`.div`))
// console.log(document.getElementsByTagName(`container`))
$(`.container`)
console.dir($(`.container`))
// say I want to get the specific p tag from the row id...
console.log($(`#row p`))

// jquery targets (with CSS rules), adds listeners as methods, i.e. click = .click()
// a listener takes 1 arg: code to run when an event happens.

$('#hide').click(function(){
    // console.log("SOmeone clicked on hide!!")
    $('#thing').hide()
})

$('#show').click(function(){
    $('#thing').show()
})

$('#toggle').click(function(){
    $('#thing').toggle()
})

$('#html').click(function(){
    // document.querySelector('#thing').innerHTML = "<p></p>"
    $('#thing').html("<p>New Html here</p>")
})

$('#text').click(function(){
    $('#thing').text("<p>Change the text!</p>")
})

$('#css').click(function(){
    // .css takes a JS Object...
    // key is a string for any css property
    // value is want you to apply
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    })
})

$('#add-class').click(function(){
    $('#thing').addClass('btn-danger')
})

$('#toggle-class').click(function(){
    $('#thing').toggleClass('btn-danger')
})

$('#prepend').click(function(){
    $('#thing').prepend('Some prepended text')
})

$('#append').click(function(){
    $('#thing').append('Some appended text')
})
// fadeToggle works the same as toggle, but it adds
// an aniamted fade
$('#fade-out').click(function(){
    $('#thing').fadeToggle(1500)
})

$('#slide').click(function(){
    $('#thing').slideToggle(1500)
})

$('#animate').click(function(){
    $('#thing').animate({
        'background-color': 'red',
        'height': '200px',
        'margin-left': '100px',
    },3000)
})

$('#goodbye').click(function(){
    $('#thing').animate({
        'margin-left': '10000px',
    },500)
})
$('#hello').click(function(){
    $('#thing').animate({
        'margin-left': '0px',
    },500)
})

$('#children').click(function(){
    $('#thing').children()
})

$('#clone').click(function(){
    $('#thing').clone()
})

$('#select').click(function(){
    $('#thing').select()
})

$('#slice').click(function(){
    $('#thing').slice()
})

$('#unbind').click(function(){
    $('#thing').unbind()
})

// this next thing is the exact same as the previous.. clear indication as to why 
// it helped.
// document.getElementById(`hide`).addEventListener('click', function(){
//     console.log("someone clicked on Hide") 
// })