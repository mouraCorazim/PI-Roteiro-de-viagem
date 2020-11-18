import updateUserInfos from "./requests/updateUserInfos.js"
import imagePreviewer from "./utils/imagePreviewer.js"
import postUploadUserImage from "./requests/postUploadUserImage.js"
import gtHeaders from "./requests/gtHeaders.js";

const navMenu = document.getElementById("menu");
const inputUsername = document.querySelector('input#edicao_nome_usuario');
const inputName = document.querySelector('input#edicao_nome_perfil');
const inputImg = document.querySelector('input#edicao_perfil_inputImagem');
const imgPreview = document.querySelector('img#edicao_perfil_img');
const sendButton = document.querySelector('button#edicao_salvar');
const inputsList = [inputName, inputUsername];
									
inputImg.addEventListener('change', imagePreviewer({input: inputImg, previewBox: imgPreview}));

sendButton.addEventListener('click', () => {

    const requestBody = inputsList.reduce((acc, currentInput) => (acc[currentInput.name] = currentInput.value, acc), {});

    const request = updateUserInfos(gtHeaders.authorized(), requestBody)

    fetch(request.url, request.init)
        .then(res => res.json())
        .then(res => console.log(res))
})

sendButton.addEventListener('click', () => {

    const formdata = new FormData();

    formdata.append("foto", inputImg.files[0]);

    const requestBody = formdata;

    const request = postUploadUserImage(requestBody)

    fetch(request.url, request.init)
})

navMenu.addEventListener("menuWasBuilded", e => {

    imgPreview.setAttribute('src', e.detail.foto)
    inputName.setAttribute('value', e.detail.nome)
    inputUsername.setAttribute('value', e.detail.username)
})