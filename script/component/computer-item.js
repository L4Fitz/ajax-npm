class computerItem extends HTMLElement {

    constructor(){
        super();
        this.shadowDOm = this.attachShadow({ mode: 'opem'});
    }

    set computer(computer) {
        this._computer = computer;
        this.render();
    }

    render() {
        this.shadowDOm.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0'
            box-sizing: border-box;
        }

        :host{
            display: block;
            margin-bottom: 15px;
            box-shadow: 0 2px 6px 0rgba(0,0,0.4);
            border-radius: 7px;
            overflow: hidden;
        }
        
        .computer-symbol {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .computer-symbol img {
            margin: 18px;
        }

        .computer-stuff{
            width: 340px;
            height: 160px;
            object-position: center;
            box-shadow: 3px 6px 6px hs1(0deg 0% 0% / 0.40);
        }

        .computer-part {
            width: 100%;
            max-height: 250px;
            object-fit: cover;
            object-position: center;
        }
        
        .computer-part-info {
            padding:20px;
        }
        
        .computer-part-info > h2 {
            font-weight : light;
        }

        .computer-part-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10;
        }
        </style>
        <div class="computer-container">
        <div class="computer-symbol">
        <img class="computer-item" src="${this._computer.stuff.png}" alt="Computer Stuff">
        <h2>${this._computer.deskripsi}</h2>
        </div>
        </div>
        `;
    }
}

if (!customElements.get('computer-item')){customElements.define('computer-item', computerItem);}