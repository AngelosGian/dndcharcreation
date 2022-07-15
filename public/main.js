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

