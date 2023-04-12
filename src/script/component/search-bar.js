class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get Value(){
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
          .search-container {
            display: flex;
            background-color: #B9E9FC;
            max-width: 700px;
            padding: 14px;
            position: sticky;
            top: 8px;
            box-shadow: 0 2px 6px 0 rgba(0,0,0.5);
            border-radius: 5px;
          }

          .search-container > input{
            border: 0;
            font-weight: light;
            font-size: 18px;
            width: 70%;
            padding: 14px;
          }

          .search-container > input:focus {
            outline: 0;
            border: 1px solid #B0DAFF;
          }

          .search-container > input:focus::placeholder {
            font-weight: light;
          }

          .search-container > input::placeholder {
            color: #B0DAFF;
            font-size: 19px;
            font-weight: light;
          }

          .search-container > button {
            cursor: pointer;
            color: white;
            width: 10%;
            padding: 14px;
            backroung-color: #BA90C6;
            border: 0;
            font-size: 15px;
            text-transform: uppercase;
            margin-left: auto;

          }

          @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }

            .search-container > input {
                width: 100#;
                margin-bottom: 12px;
            }

            .search-container > button {
                width: 100%;
            }
          }
          </style>

          <div id="search-container" class="search-container>
          <input placeholder="search computer" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</buttom>
          </div>
          `;

          this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar',SearchBar);