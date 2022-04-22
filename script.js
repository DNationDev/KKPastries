

const eventTitles = document.querySelectorAll('.event-title');
const events = document.querySelectorAll('.event');
const article = document.querySelector('.article')


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
