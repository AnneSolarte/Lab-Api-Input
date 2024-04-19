import { getFilms } from "./data/dataFetch";
import Film, {AttributeFilm} from "./components/Film/Film";
import stylesIndex from './IndexAbuelo.css'
import { getPeople } from "./data/getEpisode";


class AppContainer extends HTMLElement {
	// FavoriteFilms: Film[]: []

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

	}

	async connectedCallback() {
		const dataFilms = await getFilms();
		this.render(dataFilms);
	}

	render(dataFilms: any) {
		if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <style>
                ${stylesIndex}
                </style>`}

			dataFilms.forEach((dataFilm: any) => {
				const cardFilm = this.ownerDocument.createElement('film-card') as Film;
				cardFilm.setAttribute(AttributeFilm.tittle, dataFilm.title);
				cardFilm.setAttribute(AttributeFilm.img, dataFilm.image);
				cardFilm.setAttribute(AttributeFilm.originaltitle, dataFilm.original_title)
				cardFilm.setAttribute(AttributeFilm.releasedate, dataFilm.release_date)
				cardFilm.setAttribute(AttributeFilm.description, dataFilm.description)
				cardFilm.setAttribute(AttributeFilm.director, dataFilm.director)
				cardFilm.setAttribute(AttributeFilm.people, dataFilm.people[0])
				console.log(dataFilm.people)

				this.shadowRoot?.appendChild(cardFilm)
			});

			
		
	}

}

customElements.define('app-container', AppContainer);