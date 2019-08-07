var $burger=$("#burger-icon"),$nav=$("nav[data-nav]"),$navA=$("nav[data-nav] a"),isVisible=!1;function mouseClick(){console.log("click"),!1===isVisible?($nav.show(),isVisible=!0):($nav.hide(),isVisible=!1)}$burger.on("click",mouseClick),$navA.on("click",mouseClick);


var $topLine = $('#burger-container div:nth-child(1)');
var $middleLine = $('#burger-container div:nth-child(2)');
var $bottomLine = $('#burger-container div:nth-child(3)');
var $burgerContainer = $('#burger-container');
var animationSpeed = 0.25;
var ifClicked = false;

function burgerClick(){
    console.log("clicks");
    if(ifClicked === false){
        TweenMax.to($topLine,animationSpeed,{rotation:45, y:20});
        TweenMax.to($middleLine,animationSpeed,{alpha:0, scaleX:0});
        TweenMax.to($bottomLine,animationSpeed,{rotation:-45, y:-20});
        ifClicked = true;
    }else{
        TweenMax.to($topLine,animationSpeed,{rotation:0, y:0});
        TweenMax.to($middleLine,animationSpeed,{alpha:1, scaleX:1});
        TweenMax.to($bottomLine,animationSpeed,{rotation:0, y:0});
        ifClicked = false;
    }
}

$burgerContainer.on("click", burgerClick);
