
import './IndexAbuelo.css';
import getFirstEpisodeName from './data/getEpisode';
import CharacterCard, { Attribute } from './components/Character/character';
import { getCharacters } from './data/dataFetch';

class AppContainer extends HTMLElement {
	characters: any[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	// DESDE AQUIII

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = ``;

			const css = this.ownerDocument.createElement("style");
            css.textContent = `
            .cards-container {
                display: grid;
				grid-template-columns: repeat(3, 1fr);
				width: 100%;
				margin-left: 5%;
            }   

			.card-div{
                margin-right: 2%;
                margin-left: 2%;
			}
            `;
			// Adjuntar el estilo al shadowRoot
            this.shadowRoot?.appendChild(css);

			//FORM
			const form = document.createElement('form');
			form.id = 'form';
			form.addEventListener('submit', async (e) => {
				e.preventDefault();
				console.log('En addEvent listener');
				const DataCharacters = await getCharacters(Number(input.value));
				console.log(DataCharacters);
				this.renderCharacters(DataCharacters);
				
			});
		
			const input = document.createElement('input');
			input.type = 'number';
			input.placeholder = 'Intriduce a number here';
			input.name = 'number'
			input.value = '';
			input.className = 'number-input';
		
			const submitButton = document.createElement('input');
			submitButton.type = 'submit';
			submitButton.value = 'Get';
			submitButton.className = 'submit-input';
		
			form.appendChild(input);
			form.appendChild(submitButton);
		
			this.shadowRoot.appendChild(form);
			
		}
	}

	renderCharacters(DataCharacters: any) {
		// Limpiar el contenedor de tarjetas antes de agregar nuevas tarjetas
		this.shadowRoot?.querySelectorAll('character-card').forEach(card => card.remove());


			Promise.all(DataCharacters.map(async (user: any) => {
				const episode = await getFirstEpisodeName(user.episode[0]);
				const mycharacterElement = this.ownerDocument.createElement('character-card') as CharacterCard;
				mycharacterElement.setAttribute(Attribute.image, user.image);
				mycharacterElement.setAttribute(Attribute.name, user.name);
				mycharacterElement.setAttribute(Attribute.status, user.status);
				mycharacterElement.setAttribute(Attribute.species, user.species);
				mycharacterElement.setAttribute(Attribute.type, user.type);
				mycharacterElement.setAttribute(Attribute.origin, user.origin.name);
				mycharacterElement.setAttribute(Attribute.firstepisodename, episode);
				mycharacterElement.setAttribute(Attribute.uid, String(user.id));
				return mycharacterElement;
			})).then(characters => {
				// Una vez que todas las promesas se han resuelto, agregar los elementos al DOM
				const cardsContainer = this.ownerDocument.createElement('div');
				cardsContainer.className = 'cards-container';
				characters.forEach(character => {
					const carDiv = this.ownerDocument.createElement('div');
					carDiv.className = 'card-div';
					carDiv.appendChild(character);
					cardsContainer.appendChild(carDiv);
					
				});
				this.shadowRoot?.appendChild(cardsContainer)
			});
		
	}

}

customElements.define('app-container', AppContainer);
