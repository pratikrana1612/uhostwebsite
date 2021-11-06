var backdrop = document.querySelector('.back-drop');
var selectplanbutton = document.querySelectorAll('.product-price button');
var modal = document.querySelector('.modal');
var buttonNO = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
// var fanimation=document.querySelector('.animation');
var starthosting=document.querySelector('.addanimation');

// console.dir(backdrop.style.backgroundImage);
// console.dir(backdrop.style['background-image']);
for (var i = 0; i < selectplanbutton.length; i++) {
    selectplanbutton[i].addEventListener('click', function () {
        // modal.style.display='block';
        // backdrop.style.display='block';
        // backdrop.className='open';this will actually overwrite the class name 
        // modal.className='open';
        modal.classList.add('open');
        backdrop.classList.add('open');
    }
    );
}
function closemodel() {
    // modal.style.display='none';
    // backdrop.style.display='none';
if(modal)
{

    modal.classList.remove('open');
}
    backdrop.classList.remove('open');
}


if(buttonNO)
{
    buttonNO.addEventListener('click', closemodel);
}
backdrop.addEventListener('click', function () {
    // mobileNav.style.display='none';
    mobileNav.classList.remove('open');
    closemodel();
    modal.style.display='block';
    starthosting.classList.remove('animation');
}
);
toggleButton.addEventListener('click', function () 
    {
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    // modal.style.display='none';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    starthosting.classList.add('animation');
    }
);

// backdrop.style.display='block';
animation.addEventListener('animationstart',function(event)
{
    console.log('Animation started',event)
})
animation.addEventListener('animationend',function(event)
{
    console.log('Animation end',event)
})
animation.addEventListener('animationiteration',function(event)
{
    console.log('Animation started',event)
})