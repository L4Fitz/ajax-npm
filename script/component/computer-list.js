import './computer-item.js';

class computerList extends HTMLElement{
        constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    set computer(computer){
        this._computer = computer;
        this.render();
    }

   renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
    .placeholder {
        font-weight: light;
        color: rgba(0,0,0,0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    </style>
    `;
    this.shadowDOM.innerHTML+= `<h2 class="placeholder">${message}</h2>`;
   }

   render() {
    this.shadowDOM.innerHTML='';
    this._computer.forEach(computer => {
        const computerItemElement = document.createElement('computer-item');
        computerItemElement.computer = computer;
        this.shadowDOM.appendChild(computerItemElement);
    });
   }
}

if (!customElements.get('computer-list')){customElements.define('computer-list', computerList);}