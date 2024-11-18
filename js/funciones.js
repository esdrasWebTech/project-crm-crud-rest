//Functions 
export function createAlert(message) {

    //Validate if an alert exists
    const alert = document.querySelector('.invalid');

    if (!alert) {

        //create new alert message
        const alertMessage = document.createElement('P');
        alertMessage.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'invalid');

        alertMessage.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${message}</span>
        `;

        //Insert alert HTML
        const newClientForm = document.querySelector('#formulario');
        newClientForm.appendChild(alertMessage);

        const submitBtn = document.querySelector('input[type="submit"]');
        submitBtn.disabled = true; 
        
        //remove alert HTML
        setTimeout(() => {
            submitBtn.disabled = false; 
            alertMessage.remove();
        }, 3000);
    }
}; 