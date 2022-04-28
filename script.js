

const eventTitles = document.querySelectorAll('.event-title');
const events = document.querySelectorAll('.event');
const article = document.querySelector('.article')
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide')

article.addEventListener('click', e =>{
    let id = e.target.dataset.id;
    console.log(id)
    if(id) {

        eventTitles.forEach(titleEvent =>{
            titleEvent.classList.remove('active');
            e.target.classList.add('active');
        })    
        events.forEach(event =>{
            event.classList.remove('active');
            //event.classList.add('active');
            console.log(event)
                
        })
        let element = document.getElementById(id); 
        element.classList.add('active')
    }
})

let counter = 0;

const slider = () => {
    if(counter === slides.length){
        counter = 0;

    }
    
    if(counter < 0) {
        counter = slides.length -1;
    }

    slides.forEach(slide =>{
        console.log(slide)
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}





prevBtn.addEventListener('click', e =>{
    counter --;
    slider();
})

nextBtn.addEventListener('click', e =>{
    counter ++;
    slider();
})
