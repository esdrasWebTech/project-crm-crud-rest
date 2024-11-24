import { checkClient, updateClientInfo } from "./API.js";
import { createAlert, validateClientForm } from './funciones.js';

(function () {
    //variables
    const inputClientName = document.querySelector('#nombre');
    const inputClientEmail = document.querySelector('#email');
    const inputClientPhone = document.querySelector('#telefono');
    const inputClientCompany = document.querySelector('#empresa');
    const inputClientID = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametersURL = new URLSearchParams(window.location.search);
        const clientID = parametersURL.get('id');

        // get client to edit
        const clientToEdit = await checkClient(clientID);
        showClient(clientToEdit);

        //Send client information to edit
        const editClientForm = document.querySelector('#formulario');

        editClientForm.addEventListener('submit', validateClient);

    });

    //Fill out the form fields to edit.
    function showClient(client) {
        const { name, email, phone, company, id } = client;

        inputClientName.value = name;
        inputClientEmail.value = email;
        inputClientPhone.value = phone;
        inputClientCompany.value = company;
        inputClientID.value = id;
    };

    function validateClient(event){

        event.preventDefault();

        //get new client information 
        const clientName = inputClientName.value;
        const clientEmail =inputClientEmail.value;
        const clientPhone =inputClientPhone.value;
        const clientCompany = inputClientCompany.value;
        const clientID = inputClientID.value;

        const clientObj = {
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            company: clientCompany,
            id: clientID
        }

        //Validating client form fields
        if(validateClientForm(clientObj)){
            createAlert('Todos los campos son obligatorios');
            return;
        }

        //rewrite client information
        updateClientInfo(clientObj);

    };

})();