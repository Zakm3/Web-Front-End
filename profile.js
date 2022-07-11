console.log('we can begin')

function myFavoriteColor(event){
    event.preventDefault();
    alert('blue')
}
function myFavoritePlace(){
 alert('Los Angeles, California')
}
function myFavoriteRitual(){
    alert('what team galaxy did to summon dialga and palkia, that one lol.')
}
let buttonOne = document.querySelector('#color')
let buttonTwo = document.querySelector('#place')
let buttonThree = document.querySelector('#ritual')
buttonOne.addEventListener('click', myFavoriteColor)
buttonTwo.addEventListener('click', myFavoritePlace)
buttonThree.addEventListener('click', myFavoriteRitual)