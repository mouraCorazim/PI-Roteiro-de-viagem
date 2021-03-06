import passwordVisibility from './modules/passwordVisibility.js'
import { typeToggler, sourceToggler } from './utils/togglers.js'
import forggotPassword from "./requests/forggotPassword.js"
import gtHeaders from "./requests/gtHeaders.js"
import Inputs from './modules/Inputs.js';
import swal from 'sweetalert';

const newPasswordInput = document.querySelector("input#nova-senha");
const newPasswordButton = document.querySelector("div#nova-senha-visibilidade");
const confirmPasswordInput = document.querySelector("input#confirmar-senha");
const confirmPasswordButton = document.querySelector("div#confirmar-senha-visibilidade");
const divErro = document.getElementById('erro');
const passwordInputTypes = Object.defineProperties({}, { primary: { value: "password", writable: false} , secondary: { value: "text", writable: false }});
const passwordIconSources = Object.defineProperties({}, { primary: { value: "../public/icons/olho-aberto.svg", writable: false} , secondary: { value: "../public/icons/olho-fechado.svg", writable: false }});

const pv = passwordVisibility(typeToggler, sourceToggler, passwordInputTypes, passwordIconSources);

const newPasswordField = pv.defineField(newPasswordButton, newPasswordInput);
const confirmPasswordField = pv.defineField(confirmPasswordButton, confirmPasswordInput);
const passwordFieldsList = [newPasswordField, confirmPasswordField];

const saveBtn = document.getElementById('salvar-senha');
const inputsList = [newPasswordInput, confirmPasswordInput];

window.addEventListener('load', () => {

	passwordFieldsList.forEach(field => (pv.addTypeListeners(field), pv.addSourceListeners(field)));

})

saveBtn.addEventListener('click', () => {

    const user = { "id": localStorage.getItem("USER_ID") }

    const requestBody = inputsList.reduce(Inputs.reduceByInputName, {"usuario": user});

    const request = forggotPassword(gtHeaders.authorized(), requestBody)

	fetch(request.url, request.init)
	.then(res => res.json())
	.then(json => {
		if(json.message !== undefined){
			divErro.innerHTML = `<p>${json.message}</p>`;
		} else {
			swal ("Senha Alterada com sucesso!" , { 
				icon: "success",
				buttons : false, 
				timer : 2000 })
			.then((value) => window.location.href = "index.html");
		}
	})
})