console.log("Popup js");

const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const popupblur = document.getElementsByClassName('.popupblur');

window.onload = function(){
    setTimeout(
        function(){
            popup.style.display = "block";
            popupblur.style.display = "block";
        },2000
        )
    }
    
    close.addEventListener('click', ()=>{
    popup.style.display = "none";
    popupblur.style.display = "none";
})


// slider

var counter = 1;
var id = document.getElementById('radio');
setInterval(function(){
    (id+counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 1000);
