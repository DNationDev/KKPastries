

const eventTitles = document.querySelectorAll('.event-title');
const events = document.querySelectorAll('.event');
const article = document.querySelector('.article')

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide')

const search = document.getElementById('search');
const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container')
const searchItem = document.querySelectorAll('.search-item');
const dropDown = document.querySelector('.dropdown')


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


let newItems = [];
searchContainer.addEventListener('input', e =>{
    let input = e.target.value.toLowerCase();
    

    products.forEach(item =>{
        let {id, name} = item;
        let isVisible = name.toLowerCase().includes(input);
        
        searchItem.forEach((items, index) =>{
            items.setAttribute('id', index)
            if(!isVisible && id === (index + 1)){
                
                items.style.cursor = 'pointer';
                items.innerHTML = `<a href=''>${item.name}</a>`;
                
                items.classList.toggle('hide');
                console.log(items)
            } 
            
        })
        console.log(input);
        
        
    })
})