import { createAlert, validateClientForm } from './funciones.js';
import { addClient } from './API.js';

( function(){

    //variables
    const newClientForm = document.querySelector('#formulario');

    //Event Listeners
    newClientForm.addEventListener('submit', newClient);

    //Adding new client
    function newClient(e){
        e.preventDefault();

        //Get form values
        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        const clientObj = {
            name,
            email,
            phone,
            company
        };

        //Validating client form fields
        if(validateClientForm(clientObj)){
            createAlert('Todos los campos son obligatorios');
            return;
        }
        
        //add new client in DB
        addClient(clientObj);

    };

})();