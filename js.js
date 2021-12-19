

/*top 버튼*/
let topBtn = document.querySelector('#topBtn');

topBtn.addEventListener('click',clickMe);

function clickMe(){
    console = (1);
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
};







/*이미지 슬라이드*/

var slideWidth = 580;
/*let windowWidth = 1920; */

windowWidth = window.innerWidth; 

window.onload = function()
{
    checkScreenSize();
}

window.onresize = function()
{
    checkScreenSize();
}

function checkScreenSize()
{
    var screenWidth = screen.availWidth;

    if (screenWidth < 599)
    {
        slideWidth = 330;
    }
    else if (screenWidth > 599)
    {
        slideWidth = 580;
    }
}



let nowSlide;
let currentIdx0= 0, currentIdx1= 0, currentIdx2= 0, currentIdx3= 0, currentIdx4= 0, currentIdx5 = 0;



var slide = document.querySelectorAll('.slide');

let slideBox = document.querySelectorAll('.slide Img');

let leftBtns = document.querySelectorAll('.leftBtn, .leftBtnA');
let rightBtns = document.querySelectorAll('.rightBtn, .rightBtnA');


let slideCount = slide.length; 

for(let j = 0; j < slide.length; j++)
{
    slide[j].style.width = slideWidth * slideCount + 'px';
}



function moveSlide(num)
{
    if(nowSlide == 0)
    {
        slide[0].style.left = -num * slideWidth + 'px';
        currentIdx0 = num;
    }
    else if(nowSlide == 1)
    {
        slide[1].style.left = -num * slideWidth + 'px';
        currentIdx1 = num;
    }
    else if(nowSlide == 2)
    {
        slide[2].style.left = -num * slideWidth + 'px';
        currentIdx2 = num;
    }
    else if(nowSlide == 3)
    {
        slide[3].style.left = -num * slideWidth + 'px';
        currentIdx3 = num;
    }
    else if(nowSlide == 4)
    {
        slide[4].style.left = -num * slideWidth + 'px';
        currentIdx4 = num;
    }
    else if(nowSlide == 5)
    {
        slide[5].style.left = -num * slideWidth + 'px';
        currentIdx5 = num;
    }
};




for(let i = 0; i<rightBtns.length; i++){
    rightBtns[i].addEventListener('click', function(){
        //console.log(this);
        //console.log(this.getAttribute('clickVal'));
        let tempIndex = this.getAttribute('clickVal');
        nowSlide = tempIndex;
        if(tempIndex == 0)
        {
            if( currentIdx0 < 2 ){
                moveSlide( currentIdx0 + 1 );

            }else{
                moveSlide( currentIdx0 - 2 );
            }
        }
        else if(tempIndex == 1)
        {
            if( currentIdx1 < 2 ){
                moveSlide( currentIdx1 + 1 );
            }else{
                moveSlide( currentIdx1 - 2 );
            }
        }
        else if(tempIndex == 2)
        {
            if( currentIdx2 < 2 ){
                moveSlide( currentIdx2 + 1 );
            }else{
                moveSlide( currentIdx2 - 2 );
            }
        }
        else if(tempIndex == 3)
        {
            if( currentIdx3 < 2 ){
                moveSlide( currentIdx3 + 1 );
            }else{
                moveSlide( currentIdx3 - 2 );
            }
        }
        else if(tempIndex == 4)
        {
            if( currentIdx4 < 2 ){
                moveSlide( currentIdx4 + 1 );
            }else{
                moveSlide( currentIdx4 - 2 );
            }
        }
        else if(tempIndex == 5)
        {
            if( currentIdx5 < 2 ){
                moveSlide( currentIdx5 + 1 );
            }else{
                moveSlide( currentIdx5 - 2 );
            }
        }
    });
}


for(let i = 0; i<leftBtns.length; i++){
    leftBtns[i].addEventListener('click', function(){
        //console.log(this);
        //console.log(this.getAttribute('clickVal'));
        let tempIndex = this.getAttribute('clickVal');
        nowSlide = tempIndex;
        if(tempIndex == 0)
        {
            if( currentIdx0 > 0 ){
                moveSlide(currentIdx0 - 1 );
            }else{
                moveSlide( currentIdx0 + 2 );
            }
        }
        else if(tempIndex == 1)
        {
            if( currentIdx1 > 0 ){
                moveSlide(currentIdx1 - 1 );
            }else{
                moveSlide( currentIdx1 + 2 );
            }
        }
        else if(tempIndex == 2)
        {
            if( currentIdx2 > 0 ){
                moveSlide(currentIdx2 - 1 );
            }else{
                moveSlide( currentIdx2 + 2 );
            }
        }
        else if(tempIndex == 3)
        {
            if( currentIdx3 > 0 ){
                moveSlide(currentIdx3 - 1 );
            }else{
                moveSlide( currentIdx3 + 2 );
            }
        }
        else if(tempIndex == 4)
        {
            if( currentIdx4 > 0 ){
                moveSlide(currentIdx4 - 1 );
            }else{
                moveSlide( currentIdx4 + 2 );
            }
        }
        else if(tempIndex == 5)
        {
            if( currentIdx5 > 0 ){
                moveSlide(currentIdx5 - 1 );
            }else{
                moveSlide( currentIdx5 + 2 );
            }
        }
    });
}
