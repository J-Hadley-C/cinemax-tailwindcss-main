/**
 * Ce fichier contient le composant App
 * Ici, on décide d'en faire un composant
 * principal qui va contenir les autres.
 * 
 * On importe les composants Navbar, Search,
 * Card et Footer pour les afficher dans App.
 */
import React, { useState } from 'react'; // Importation de la librairie React

// Importation des composants
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';
import Footer from './components/Footer';

// Liste par défaut des films
let localMovies = [
    {
        Title: 'Yellow Submarine',
        Year: '1968',
        imdbID: 'tt0063823',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGExODFmMjQtZTgxOC00ZDE0LWJmM2MtOTQzM2YzNDZlMzNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Sea',
        Year: '2010',
        imdbID: 'tt1230385',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZTU3OTdmOWUtYWE5My00NmFhLTgyMTktNTU0ZTNhMDU1NzEzXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg',
    },
    {
        Title: 'She Wore a Yellow Ribbon',
        Year: '1949',
        imdbID: 'tt0041866',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYTkyMTM3ZTMtMDc1Mi00ZjRmLTk3NWYtMzFlOGY3Mjg4Mzk2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Handkerchief',
        Year: '2008',
        imdbID: 'tt0954990',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzg3NzU4NDUzOV5BMl5BanBnXkFtZTcwNDk1Njg5Mg@@._V1_SX300.jpg',
    },
    {
        Title: 'Yellow Sky',
        Year: '1948',
        imdbID: 'tt0040978',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYjI1ZGQxMjYtYzQwOC00NmI0LTkwNGItOWY0NjllZDI1YTI5XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Birds',
        Year: '2017',
        imdbID: 'tt3739110',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BY2ExMmI4MTUtNTFmZS00ZjBkLWFjOWEtNjE3MGVkZDQ1ZDZhXkEyXkFqcGdeQXVyNjUzODM0ODI@._V1_SX300.jpg',
    },
    {
        Title: 'I Am Curious (Yellow)',
        Year: '1967',
        imdbID: 'tt0061834',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYjY2ZjUwYWItOWRjMS00NjJkLWFjODctMTRjMDM5ZjhkN2U3XkEyXkFqcGdeQXVyNTcwNjUwNzk@._V1_SX300.jpg',
    },
    {
        Title: 'That Girl in Yellow Boots',
        Year: '2010',
        imdbID: 'tt1580704',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzE1YzcyOWMtNjU5OC00ZDQ2LWFkNWItYzI2MjQ5OTllZDVlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Rolls-Royce',
        Year: '1964',
        imdbID: 'tt0059927',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZDc2ZWFmMDEtZWE1Mi00MGQ4LTgzNjktM2Q0ZjJmYWNhODdhXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg',
    },
    {
        Title: 'The Cave of the Yellow Dog',
        Year: '2005',
        imdbID: 'tt0432325',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZjdlZmZiYmMtOGY5ZC00ZDkwLWFkNGYtMWY3OTQyOTYzNmY0XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg',
    },
]; // Fin de liste par défaut des films

function App() {
    const [movies, setMovies] = useState([...localMovies]); // Initialisation de l'état 'movies' avec la liste par défaut
    const [error, setError] = useState(''); // Initialisation de l'état 'error' avec une chaîne vide

    return (
        <>
            <Navbar />
            <hr className="my-5 opacity-10" />
            <section className="flex flex-col items-center justify-center gap-10 mt-10 mb-10">
                <Search setMovies={setMovies} setError={setError} /> {/* On passe les fonctions setMovies et setError en props */}
                {error && <p className="text-orange-500">{error}</p>} {/* On affiche le message d'erreur s'il existe */}
                {movies.length > 0 && <Card movies={movies} />} {/* On affiche les films s'il y en a */}
            </section>
            <Footer className="mt-10" />
        </>
    );
}

export default App;