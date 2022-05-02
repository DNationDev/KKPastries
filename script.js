

const eventTitles = document.querySelectorAll('.event-title');
const events = document.querySelectorAll('.event');
const article = document.querySelector('.article')

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide')

const search = document.getElementById('search');
const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container')


let products = [{
    name: 'lemon cookies',
    id: 1}, {
    name: 'strawberry crunch cookies',
    id: 2}, {
    name: 'chocolate chip cookies',
    id: 3}, {
    name: 'shortbread cookies',
    id: 4}, {
    name: 'trolls cake',
    id: 5}, {
    name: 'crown cake',
    id: 6}, { 
    name: 'henny cake',
    id: 7}
];



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


searchContainer.addEventListener('click', e =>{
    let input = e.target.value.toLowerCase();
    products.forEach(item =>{
        console.log(item)
        let isVisible = item.name.toLowerCase().includes(input);
        if(isVisible){
            console.log(item.id)
        }
    })
    console.log(input);
})