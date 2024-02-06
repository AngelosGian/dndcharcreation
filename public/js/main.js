const url = 'https://www.dnd5eapi.co/api'
const races = document.querySelector('#races');
const classes = document.querySelector('#classes');
const alignments = document.querySelector('#alignments');
const features = document.querySelector('#alignments');

fetch(`${url}/races/`, {method: 'GET'})
    .then(result => result.json())
    .then(result => {
        // console.log(result)
        result.results.map(elem => {
            console.log(elem.name)
            const option =document.createElement('option');
            // console.log(typeof elem.name )
            races.appendChild(option).innerText = elem.title
            option.text = elem.name
            option.value= elem.index
            races.appendChild(option)
            // if(option.value){
            //     fetch(`${url}/races/${option.value}`)
            //         .then( results => results.json())
            //         .then( data => {
            //             console.log(data);
                        
            //         })   
            // }            
        })
    })

fetch(`${url}/classes/`, {method: 'GET'})
    .then( results => results.json())
    .then( data => {
        // console.log(data);

        data.results.map(elem => {
            // console.log(elem.name)
            const option =document.createElement('option');
            // console.log(typeof elem.name )
            // races.appendChild(option).innerText = elem.title
            option.text = elem.name
            option.value= elem.index
            classes.appendChild(option)
            // I need to add the specific characteristics of the classes
            // so fetch from url/classes/class 
            // fetch(`${url}/classes/${option.value}`, {method: 'GET'})
            // when I choose a class and it will brink me those characteristics
        
        })
    })    

fetch(`${url}/alignments/`, {method: 'GET'})
    .then( results => results.json())
    .then( data => {
        // console.log(data);
      
        data.results.map(elem => {
            // console.log(elem.name)
            const option =document.createElement('option');
            // console.log(typeof elem.name )
            // races.appendChild(option).innerText = elem.title
            option.text = elem.name
            option.value= elem.index
            alignments.appendChild(option)
            // I need to add the specific characteristics of the classes
            // so fetch from url/classes/class 
            // fetch(`${url}/classes/${option.value}`, {method: 'GET'})
            // when I choose a class and it will brink me those characteristics
                        
        })
    })    
fetch(`${url}/features/`, {method: 'GET'})
    .then( results => results.json())
    .then( data => {
        // console.log(data);
      
        data.results.map(elem => {
            // console.log(elem.name)
            const paragraph =document.createElement('p');
            // console.log(typeof elem.name )
            // races.appendChild(option).innerText = elem.title
            paragraph.text = elem.name
            paragraph.value= elem.index
            features.appendChild(paragraph)
            // I need to add the specific characteristics of the classes
            // so fetch from url/classes/class 
            // fetch(`${url}/classes/${option.value}`, {method: 'GET'})
            // when I choose a class and it will brink me those characteristics
                        
        })
    })    
    let btn = document.querySelector('#data-send');
    btn.addEventListener("click", (e) =>{
        e.preventDefault();

        console.log(e)
        localStorage.setItem('races', JSON.stringify(races.value));
        localStorage.setItem('classes', JSON.stringify(classes.value));

    })