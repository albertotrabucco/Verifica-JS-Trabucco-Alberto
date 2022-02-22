


let container = document.getElementById('container')
let table = document.createElement('table')
container.append(table)

let buttonsid = [1,2,3,4,5,6]

//prendo data dal url
let heads = ['Nome','Cognome','Email']

fetch('https://reqres.in/api/users')
    .then(function(response) {
        if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
        }
    return response.json();
    })
    .then(function(json){
        let header = document.createElement('tr')
        header.setAttribute('id', 'righe-lista')
        table.append(header)
        let nome = document.createElement('th')
        let cognome = document.createElement('th')
        let email = document.createElement('th')
        header.append(nome)
        header.append(cognome)
        header.append(email)

        nome.innerText = 'Nome'
        cognome.innerText = 'Cognome'
        email.innerText = 'Email'
        
         for(let dati of json['data']){
             let rows = document.createElement('tr')
             rows.setAttribute('id', 'righe-lista')
             table.append(rows)
             let cellNome = document.createElement('td')
             let cellCognome = document.createElement('td')
             let cellEmail = document.createElement('td')
            rows.append(cellNome)
            rows.append(cellCognome)
            rows.append(cellEmail)

            cellNome.innerText = dati['first_name']
            cellCognome.innerText = dati['last_name']
            cellEmail.innerText = dati['email']
         }        
    })

    fetch('https://reqres.in/api/colors')
        .then(function(response) {
            if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
            }
        return response.json();
        })
        .then(function(colori){
            let lista = document.createElement('ul')
            lista.setAttribute('id', 'color-list')
            container.append(lista)
            for(let colore of colori['data']){
                let listel = document.createElement('li')
                listel.setAttribute('id', colore['name'])
                lista.append(listel)            
                let label = document.createElement('label')
                listel.append(label)
                
                let btn = document.createElement('input')
                listel.append(btn)
                btn.setAttribute('type', 'checkbox')
                btn.setAttribute('id', colore['id'])
                label.innerText = colore['name']

                btn.addEventListener('click', function(){
                    let idcolor = colore['color']
                    table.style.backgroundColor = idcolor
                    btn.setAttribute('checked','')
                })            
            } 
            //if(btn.hasAttribute('checked')){
            //    btn.addEventListener('click',function(){
            //        btn.removeAttribute('checked')
            //    })
            //}

        })