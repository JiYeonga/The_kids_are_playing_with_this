

let windowWidth;
let windowHeight;

let scrollY = 0;
let relativeScrollY = 0;
let totalScrollHeight = 0;
let currenScene = 0;
let calAnimationVal;

let prevDurations = 0;
let pixelDuration = 0;


// scene 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
let animationKeyframes = [
    { // contentsB in
        animationVal:{
            opacity:[1]
        }
    },
    { // contentsB out
        animationVal:{
            opacity:[1, 0]
        }
    },
    { // contentsH in
        animationVal:{
            opacity:[0, 1]
        }
    },
    { // contentsH out
        animationVal:{
            opacity:[1, 0]
        }
    },
    { // contentsR in
        animationVal:{
            opacity:[0, 1]
        }
    },
    { // contentsR out
        animationVal:{
            opacity:[1, 0]
        }
    },
    { // contentsM in
        animationVal:{
            opacity:[0, 1]
        }
    },
    { // contentsM out
        animationVal:{
            opacity:[1, 0]
        }
    },
    { // contentsG in
        animationVal:{
            opacity:[0, 1]
        }
    },
    { // contentsG out
        animationVal:{
            opacity:[1, 0]
        }
    },
    { // contentsA in
        animationVal:{
            opacity:[0, 1]
        }
    }
]  

let elemBody = document.body;

function init()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
}

function scrollHandler()
{

    scrollY = window.pageYOffset;

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }

    if(scrollY > pixelDuration+prevDurations)
    {
        prevDurations += pixelDuration;
        currenScene++;
    }
    else if(scrollY < prevDurations)
    {
        currenScene--;
        prevDurations -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDurations;

    //render(currenScene);
   
    if( windowWidth > 599)
    {
        render(currenScene);
    }
}


function resizeHandler() //애니메이션 프래임 수를 조정한다.
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    totalScrollHeight = 0;   
    pixelDuration = windowHeight * 0.55;

    for( let i = 0; i < animationKeyframes.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }
    totalScrollHeight += windowHeight;

    elemBody.style.height = totalScrollHeight + 'px';
}

function render(nowState)
{
    let targetElem = document.querySelectorAll('.container');

    switch(nowState)
    {
        case 0:{ //contentB in
            let opacityVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[0].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 1:{ //contentB out
            let opacityVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[1].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 2:{ // contentH in
            let opacityVal;
            let zero = targetElem[0].querySelectorAll('.contents');
            let scrollAniElem = targetElem[1].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[2].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
            zero[0].style.opacity = 0;
        }break;
        case 3:{ // contentH out
            let opacityVal ;
            let scrollAniElem = targetElem[1].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[3].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 4:{ // contentR in
            let opacityVal;
            let zero = targetElem[1].querySelectorAll('.contents');
            let scrollAniElem = targetElem[2].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[4].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
            zero[0].style.opacity = 0;
        }break;
        case 5:{ // contentR out
            let opacityVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[5].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 6:{ // contentM in
            let opacityVal;
            let zero = targetElem[2].querySelectorAll('.contents');
            let scrollAniElem = targetElem[3].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[6].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
            zero[0].style.opacity = 0;
        }break;
        case 7:{ // contentM out
            let opacityVal;
            let scrollAniElem = targetElem[3].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[7].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 8:{ // contentG in
            let opacityVal;
            let zero = targetElem[3].querySelectorAll('.contents');
            let scrollAniElem = targetElem[4].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[8].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
            zero[0].style.opacity = 0;
        }break;
        case 9:{ // contentG out
            let opacityVal;
            let scrollAniElem = targetElem[4].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[9].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
        }break;
        case 10:{ // contentA in
            let opacityVal;
            let zero = targetElem[4].querySelectorAll('.contents');
            let scrollAniElem = targetElem[5].querySelectorAll('.contents');
            opacityVal = calcAni(animationKeyframes[10].animationVal.opacity);
            scrollAniElem[0].style.opacity = opacityVal;
            zero[0].style.opacity = 0;
        }break;
    }
    
}

function calcAni(value)
{
    return( relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
}

init();
