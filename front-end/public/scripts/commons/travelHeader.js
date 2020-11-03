import dataParser from "../modules/dataParser.js"
import urlParser from "../modules/urlParser.js"
const travelTitleField = document.querySelector("div.destino-viagem");
const travelDateField = document.querySelector("div.data-viagem");
const travelImageField = document.querySelector("img.imagem-viagem");

const dtp = dataParser();
const urlp = urlParser();

function setTravelHeaderAttributes(nameField, dateField, imageField,data){

    imageField.src = data.imagem;
    nameField.innerText = data.titulo;
    dateField.innerText = data.month + "\n" + data.year;
}

fetch("/data/viagens.json")
    .then(res => res.json())
    .then(json => {

        const mappedUrlVariables = urlp.mapVariables(location.href);

        setTravelHeaderAttributes(travelTitleField, travelDateField, travelImageField, dtp.dateParser(json.find(element => element.id == mappedUrlVariables.travel_id ))) //Apenas testes!!!!! Mudar assim que o backend funcionar!!!!!!!!!!!!!
})