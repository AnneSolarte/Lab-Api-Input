import  './character.css';
export enum Attribute {
    'image' = 'image',
    'name' = 'name',
    'status' = 'status',
    'species' = 'species',
    'type' = 'type',
    'origin' = 'origin',
    'firstepisodename' = 'firstepisodename',
}

class CharacterCard extends HTMLElement {
    image?: string;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    origin?: string;
    firstepisodename?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            image: null,
            name: null,
            status: null,
            species: null,
            type: null,
            origin: null,
            firstepisodename: null,
        };
        return Object.keys(attrs);
    }
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    render() {
        if (this.shadowRoot) {

            this.shadowRoot.innerHTML = `
                <div class="card">
                    <h1>${this.name}</h1>
                    <img src='${this.image}'></img>
                    <p> Status: ${this.status}</p>
                    <p> Species: ${this.species}</p>
                    <p> Type: ${this.type || 'No type'}</p>
                    <p> Origin: ${this.origin}</p>
                    <p> First Episode: ${this.firstepisodename}</p>
                </div>`;
        }
		
        
    }
}

export default CharacterCard;
customElements.define('character-card', CharacterCard);
