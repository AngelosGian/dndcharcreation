const url = 'https://www.dnd5eapi.co/api'


fetch(`${url}/races/`, {method: 'GET'})
    .then(result => result.json())
    .then(result => {
        console.log(result)
        const races = document.querySelector('#races');
        result.results.map(elem => {
            console.log(elem.name)
            const option =document.createElement('option');
            // console.log(typeof elem.name )
            // races.appendChild(option).innerText = elem.title
            option.text = elem.name
            option.value= elem.index
            races.appendChild(option)
            if(option.value){
                fetch(`${url}/races/${option.value}`)
                    .then( results => results.json())
                    .then( data => {
                        console.log(data.size);
                        
                    })   
            }            
        })
    })

fetch(`${url}/classes/`, {method: 'GET'})
    .then( results => results.json())
    .then( data => {
        console.log(data);
        const classes = document.querySelector('#classes');
        data.results.map(elem => {
            console.log(elem.name)
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
        console.log(data);
        const alignments = document.querySelector('#alignments');
        data.results.map(elem => {
            console.log(elem.name)
            const option =document.createElement('option');
            // console.log(typeof elem.name )
            // races.appendChild(option).innerText = elem.title
            option.text = elem.name
            option.value= elem.index
            alignments.appendChild(option)
            console.log(alignments.appendChild(option).value)
            // I need to add the specific characteristics of the classes
            // so fetch from url/classes/class 
            // fetch(`${url}/classes/${option.value}`, {method: 'GET'})
            // when I choose a class and it will brink me those characteristics
        
        })
    })    

console.log(document.querySelector('#alignments'))