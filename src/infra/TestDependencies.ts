import { Book } from "../reducers";
import { Dependencies } from "./Dependencies";

export class TestDependencies implements Dependencies {
  private _books: Book[] = [
    {
      isbn: "100-200-300",
      title: "Lumière Éternelle",
      author: "Claire Lune",
      genre: "Fantaisie",
    },
    {
      isbn: "101-201-301",
      title: "Le Voyageur du Temps",
      author: "Marc Orion",
      genre: "Science-fiction",
    },
    {
      isbn: "102-202-302",
      title: "Jardins Secrets",
      author: "Emma Fleurs",
      genre: "Romance",
    },
    {
      isbn: "103-203-303",
      title: "L'Écho du Passé",
      author: "Victor Histoire",
      genre: "Histoire",
    },
    {
      isbn: "104-204-304",
      title: "Chasseurs de Rêves",
      author: "Sophie Nuit",
      genre: "Aventure",
    },
    {
      isbn: "105-205-305",
      title: "Les Ombres de la Ville",
      author: "Lucas Urbain",
      genre: "Policier",
    },
    {
      isbn: "106-206-306",
      title: "Mystères des Profondeurs",
      author: "Marine Océan",
      genre: "Mystère",
    },
    {
      isbn: "107-207-307",
      title: "Sous les Étoiles",
      author: "Émilie Cosmos",
      genre: "Romance",
    },
    {
      isbn: "108-208-308",
      title: "La Clé du Savoir",
      author: "Thomas Sage",
      genre: "Éducation",
    },
    {
      isbn: "109-209-309",
      title: "Périples Lointains",
      author: "David Aventure",
      genre: "Voyage",
    },
    {
      isbn: "110-210-310",
      title: "Reflets d'un Autre Monde",
      author: "Annie Miroir",
      genre: "Fantastique",
    },
    {
      isbn: "111-211-311",
      title: "Les Gardiens du Temps",
      author: "Julien Horloge",
      genre: "Science-fiction",
    },
    {
      isbn: "112-212-312",
      title: "Au Cœur de la Forêt",
      author: "Laura Nature",
      genre: "Aventure",
    },
    {
      isbn: "113-213-313",
      title: "Sables Mouvents",
      author: "Yves Désert",
      genre: "Survie",
    },
    {
      isbn: "114-214-314",
      title: "Le Souffle du Nord",
      author: "Éric Boréal",
      genre: "Fantaisie",
    },
    {
      isbn: "115-215-315",
      title: "Cryptes Oubliées",
      author: "Nina Ancien",
      genre: "Horreur",
    },
    {
      isbn: "116-216-316",
      title: "Les Voix du Silence",
      author: "Léa Tranquille",
      genre: "Psychologie",
    },
    {
      isbn: "117-217-317",
      title: "Les Couleurs de l'Esprit",
      author: "Hugo Artistique",
      genre: "Art",
    },
    {
      isbn: "118-218-318",
      title: "Frontières Invisibles",
      author: "Sarah Voyage",
      genre: "Science-fiction",
    },
    {
      isbn: "119-219-319",
      title: "La Mémoire de la Pierre",
      author: "Pierre Ancien",
      genre: "Histoire",
    },
  ];

  async fetchBooks(query: string) {
    console.log("fetching with query ", query)
    await wait(2);
    return this._books.filter((book) => book.title.includes(query));
  }
}

function wait(nbOfSeconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, nbOfSeconds * 1000);
  });
}
