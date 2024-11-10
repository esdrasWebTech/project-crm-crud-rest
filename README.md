# Project: CRM CRUD REST 

In this application I give an example on how to use de HTTP verbs in a mock REST API, with help of the powerful tool JSON Server.

## Create API with JSON Server and NPM
* First download and install Node.js LTS version: [download link](https://nodejs.org/en/) to get NPM
* Now install the package of JSON Server on your computer, from terminal:
```bash
npm install json-server
```
* In the package.json file add a new one in the scripts:
```json
"scripts":{
    "json-server": "json-server --watch file-name.json --port 4000"
}
```
* To run the JSON Server, use the command:
```bash
npm run json-server
```
* For more documentation visit: [Github JSON server](https://github.com/typicode/json-server)
* Or: [NPM JSON server](https://www.npmjs.com/package/json-server)
