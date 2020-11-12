import viewTaskCard from "./modules/viewTaskCard.js"
import urlParser from "./modules/urlParser.js"

const urlp = urlParser();

const blocoTarefa = document.querySelector('div.tarefa');
const templateTarefa = document.getElementById('t-tarefa-atual');
const mappedUrlParams = urlp.mapVariables(location.href);

window.addEventListener('load', function getTask(){
    
    const urlToGetTaskById = `http://localhost:3333/tarefas/ler/${mappedUrlParams.task_id}`

    fetch(urlToGetTaskById)
        .then(res => res.json())
        .then(json => {
            const card = viewTaskCard().buildCard(templateTarefa, json);
            blocoTarefa.appendChild(card);
        });
})