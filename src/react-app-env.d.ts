/// <reference types="react-scripts" />

//Declaraçao do objeto que contem variáveis de ambiente
interface Window extends Window {
    env: any
}

window.env = window.env || {};
