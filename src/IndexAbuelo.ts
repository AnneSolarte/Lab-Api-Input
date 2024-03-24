
import './IndexAbuelo.css';
import getFirstEpisodeName from './data/getEpisode';
import CharacterCard, { Attribute } from './components/Character/character';
import { getCharacters } from './data/dataFetch';

class AppContainer extends HTMLElement {
	characters: any[] = [];
	charactersContainer: HTMLDivElement | null = null;

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
		
		// Mapear las promesas y esperar su resolución
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
			return mycharacterElement;
		})).then(characters => {
			// Una vez que todas las promesas se han resuelto, agregar los elementos al DOM
			characters.forEach(character => {
				this.shadowRoot?.appendChild(character);
			});
		});
	}

}

customElements.define('app-container', AppContainer);
