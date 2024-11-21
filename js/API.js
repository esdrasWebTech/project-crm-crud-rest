const url = 'http://localhost:4000/clientes';

// adding new client in DB
export const addClient = async clientObj => {

    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(clientObj),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        window.location.href = 'index.html';

    }catch(error){
        console.log(error);
    };

};

//get clients from DB
export const getClients = async () =>{

    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;

    }catch(error){
        console.log(error);
    };
};

//Delete client of the list
export const deleteClient = async id => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });

    }catch (error){
        console.log(error);
    };
};