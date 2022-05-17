const bulbWhite='./images/bulb.svg';
const bulbBlack='./images/bulbBlack.svg';

const body=document.body
const btn=document.getElementById('bulbs');


const sections=document.querySelectorAll('section');
const navli=document.querySelectorAll('nav div#nav-links ul li');   

btn.addEventListener('click', ()=>{
    if(btn.src.includes('/images/bulb.svg')){
        btn.src=bulbBlack;
       body.style.backgroundColor='gray';
       body.style.color='white';
    }
    else{
        btn.src=bulbWhite;
        body.style.backgroundColor='white';
        body.style.color='black';

    }
})

document.addEventListener('scroll', ()=>{
    let current='';
   
    sections.forEach(section => {
        const sectionTop =(section.offsetTop);
        const sectionHeight = section.clientHeight;
        if(scrollY <=10){
            current='about'
        }
        else if( scrollY >=(sectionTop-sectionHeight-250)   ) { 
            current=section.getAttribute('id');
        }
    
        
    })
    navli.forEach(li=>{
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
        
    })
})