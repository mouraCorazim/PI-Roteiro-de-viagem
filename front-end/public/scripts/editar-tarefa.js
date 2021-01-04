import urlParser from './modules/urlParser.js'
import gtHeaders from './requests/gtHeaders.js';
import swal from 'sweetalert';

const urlp = urlParser();

const dia = document.querySelector('div#dia');
const tarefas = document.querySelector('div.div-tarefas');
const templateCardTarefas = document.getElementById('t-card-tarefa');
const descriptionInput = document.querySelector('textarea#descricao');
const titleInput = document.querySelector('input#titulo');
const costInput = document.querySelector('input#custo');
const hourInput = document.querySelector('input#hora');
const minInput = document.querySelector('input#min');
const sendButton = document.querySelector('button.btn-salvar');
const radioInputsList = [...document.getElementsByName('moeda'), ...document.getElementsByName('transporte')];
const inputsList = [titleInput, costInput];
const inputsListTotal = [minInput, hourInput, titleInput, costInput, descriptionInput];
const divErro = document.getElementById('erro');
const urlParams = urlp.mapVariables(location.href);
const diaSelecionado = urlParams.day.split("-")[2];

function addZero(value){
	return value.length < 2? ("0" + value): value;
}

// sendButton.addEventListener('click', () => {

// 	const inputsValues = radioInputsList.filter(radio => radio.checked)
// 									    .concat(...inputsList)
// 									    .reduceRight((acc, currentInput, index, array) => index + 5 === array.length? (acc[currentInput.name] += ":" + addZero(currentInput.value), acc): (acc[currentInput.name] = currentInput.value, acc), {})

// 	const paramsValues = { "data": urlParams.day,
// 						   "viagem": { "id": Number.parseInt(urlParams.travel_id) },
// 						   "usuario": { "id": localStorage.getItem("USER_ID") },
// 						   "finalizada": false }

//     const request = postNewTask(gtHeaders.authorized(), {...inputsValues, ...paramsValues})

// 	fetch(request.url, request.init)
// 		.then(res => res.json())
// 		.then(json => console.log(json))
// })

window.addEventListener('load', function getTask(){

    dia.innerHTML = `${diaSelecionado}`;
    
    const urlToGetTaskById = `http://localhost:3333/tarefas/ler/${urlParams.task_id}`
    
    const init = { "headers": gtHeaders.authorized(), 
                    "redirect": "follow" }

    fetch(urlToGetTaskById, init)
        .then(res => res.json())
        .then(json => {
            
            const splittedHourly = json.horario.split(":")

            hourInput.setAttribute('value', splittedHourly[0])
            minInput.setAttribute('value', splittedHourly[1])
            descriptionInput.innerHTML = `${json.descricao}`;

            inputsList.forEach(input => input.setAttribute('value', json[input.name]))
        });
})

sendButton.addEventListener('click', () => {

    const urlToGetTaskById = `http://localhost:3333/tarefas/editar/${urlParams.task_id}`

    const inputsValues = radioInputsList.filter(radio => radio.checked)
                                        .concat(...inputsListTotal)
									    .reduceRight((acc, currentInput, index, array) => index + 5 === array.length? (acc[currentInput.name] += ":" + addZero(currentInput.value), acc): (acc[currentInput.name] = currentInput.value, acc), {})
    
    const init = { "headers": gtHeaders.authorized(), 
                    "method": "PUT", 
                    "body": JSON.stringify(inputsValues),
                    "mode": "cors",
                    "redirect": "follow" }

    fetch(urlToGetTaskById, init)
		.then(res => res.json())
		.then(json => {
			if(json.message !== undefined){
				divErro.innerHTML = `<p>${json.message}</p>`;
			} else {
				swal ("Tarefa atualizada!" , { 
					icon: "success",
					buttons : false, 
					timer : 2000 })
				.then((value) => window.location.href = `agenda-viagem.html?travel_id=${urlParams.travel_id}`);
			}
		})
})


// window.addEventListener('load', () => {

// 	dia.innerHTML = `${diaSelecionado}`;

// 	fetch("/data/tarefas.json")
// 		.then(res => res.json())
// 		.then(json => {
			
// 			json.filter(tarefa => tarefa.viagem.id == urlParams.travel_id && urlParams.day === tarefa.data) //Apenas para testes!!!!!!!
// 				.map(tarefa => taskCards().buildCard(templateCardTarefas, tarefa))
// 				.forEach(card => tarefas.appendChild(card))   
// 		})
// })