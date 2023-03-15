class App {
  constructor() {
    // stockage de la référence ayant la class .movies-wrapper dans $moviesWrapper
    this.$moviesWrapper = document.querySelector('.movies-wrapper');
    // initialisation de moviesApi à une instance de MovieApi en passane le chemin d'accès au fichier JSON
    this.moviesApi = new MovieApi('data/movie-data.json');
  }

  async main() {
    // attend que la methode getMovies() de la propriété moviesApi retourne la liste des films (avec promesse)
    const movies = await this.moviesApi.getMovies();

    // boucle sur la liste, et crée une instance de MovieCard avec les paramètres correspondant
    // ce qui va crée la carte en HTML
    movies.forEach((movie) => {
      const Template = new MovieCard(movie);
      // la méthode createMovieCard est appelé sur chaque instance de MovieCard(movie), qui retourne un élémentHTML
      // qui est ajouter à l'élément this.$moviesWrapper avec appendChild
      this.$moviesWrapper.appendChild(Template.createMovieCard());
    });
  }
}

const app = new App();
app.main();
