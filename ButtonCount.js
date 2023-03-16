class ButtonCount extends HTMLElement {
    constructor () {
        let count = 0;
        super(); 
        const shadowRoot = this.attachShadow({mode: 'open'});
        const button = document.createElement('button');
        button.innerText = 'Times Clicked: ' + count;
        let newNode = button.cloneNode(true);
        newNode.addEventListener('click', () => {
            count = count + 1;
            newNode.innerText = 'Times Clicked: ' + count;
        });
        shadowRoot.appendChild(newNode);
    }
}

customElements.define('button-count', ButtonCount);