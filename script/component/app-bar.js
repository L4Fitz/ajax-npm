class AppBar extends HTMLElement {
    
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
                  <style>
                  *{
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                  }
                  :host{
                    display: block;
                    width: 80%;
                    backgorund-color: #FEFF86;
                    color: #DAF5FF;
                    box-shadow: 0 2px 8px rgba(0,0,3);
                    text-align: center;
                  }
                  h2{
                    padding: 14px;
                  }
                  </style>

                  <h2> Informasi Part Komputer <h2>
                  `;

    }
}

if (!customElements.get('app-bar')) {customElements.define('app-bar',AppBar);}