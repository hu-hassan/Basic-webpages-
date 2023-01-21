// Declaring and initializing all the constant values whaic are going to use in the program
const slidercontainer = document.querySelector('.slider-container')
const rightslider = document.querySelector('.right-slide')
const leftslider = document.querySelector('.left-slide')
const upbutton = document.querySelector('.up-button')
const downbutton = document.querySelector('.down-button')
const slidelength = leftslider.querySelectorAll('div').length
// Setting a variable for tracking the active index of slide
let activeslideindex = 0
// Setting the action click to the values up and down for the respective buttons (upbutton and down buyyon)
upbutton.addEventListener('click', ()=> changeslide('up'))
downbutton.addEventListener('click', ()=> changeslide('down'))
// Making a function which take value from changeslide and processing it inside of the function
const changeslide = (direction) => {
// Setting the height of the class which contain all the sliders
    const sliderheight = slidercontainer.clientHeight
// Applying the sliding of three different sliders when user clicks down button
    if(direction === 'down'){
        activeslideindex++
// Specifying that when the variable which keep track of the active index of slide reachs it's maximum capcity 
// then reset it's value to the begining slider
        if(activeslideindex > slidelength-1){
            activeslideindex= 0
        }
    } 
// Applying the sliding of three different sliders when user clicks up button
    else if(direction === 'up'){
        activeslideindex--
// Applying the condition that whenever the variable which keep track of the active index of slide gets 
// lesser than zero then set it's value to it's maximum capacity
        if(activeslideindex < 0){
            activeslideindex= slidelength-1}
    }
// Getting the slider slide with rest to the value of the variable which keep track of the active index of slide
// and the height setted above in the program for both left and right side of button
    rightslider.style.transform = `translateY(-${activeslideindex * sliderheight}px)`
    leftslider.style.transform = `translateY(-${activeslideindex * sliderheight}px)`

}