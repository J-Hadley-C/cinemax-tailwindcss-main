/**
 * Cette fonction est appelée lorsqu'un utilisateur
 * soumet le formulaire de recherche de films.
 *
 * Elle effectue une requête à l'API OMDB pour obtenir
 * la liste des films correspondant à la requête.
 *
 * async/await est utilisé pour gérer les appels asynchrones
 * à l'API. Cela permet d'attendre la réponse de l'API avant
 * de continuer l'exécution du code.
 *
 * 'e' est l'événement de soumission du formulaire,
 * on peut l'utiliser pour empêcher le comportement par défaut.
 * Le nom 'e' est une convention, c'est un raccourci pour 'event'.
 *
 * try/catch est utilisé pour gérer les erreurs potentielles
 * lors de l'appel à l'API. Si une erreur se produit, elle est
 * capturée et affichée dans la console.
 *
 * fetch() est utilisé pour effectuer une requête HTTP à l'API.
 * await est utilisé pour attendre la réponse de l'API.
 *
 * setMovies() est utilisé pour mettre à jour l'état 'movies'
 * avec les données de l'API. Cela déclenchera un rendu de la
 * liste des films dans l'interface utilisateur.
 *
 */

import React, { useState } from 'react';

export default function Search({ setMovies, setError }) {
    const [query, setQuery] = useState('');

    const searchMovies = async (e) => {
        e.preventDefault();

        /**
         * Si l'utilisateur soumet le formulaire sans
         * entrer de terme de recherche, afficher un message
         * d'erreur et ne pas effectuer la recherche.
         */
        if (query.trim() === '') {
            setError('Please enter a search term.');
            return;
        }

        const url = `https://omdbapi.com/?apikey=3a097856&s=${query}`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.Response === 'True') { // Vérifier si la réponse est 'True'
                setMovies(data.Search); // Mettre à jour l'état 'movies' avec les données
                setError(''); // Réinitialiser le message d'erreur
            } else {
                setError(data.Error); // Afficher le message d'erreur de l'API
                setMovies([]); // Réinitialiser la liste des films
            }
        } catch (error) {
            console.error(error); // Afficher l'erreur dans la console
            setError('An error occurred while fetching data.'); // Afficher un message d'erreur générique
            setMovies([]); // Réinitialiser la liste des films
        }
    };

    return (
        <>
            <h1 className="my-4 text-3xl text-center">
                Type the name of any movie or series
            </h1>
            <form onSubmit={searchMovies} className="flex justify-center mb-4">
                <input
                    type="text"
                    value={query}
                    placeholder="exp. Forest Gump"
                    className="px-4 py-2 text-black rounded-l-full focus:outline-none"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-4 py-2 text-white bg-orange-500 rounded-r-full hover:bg-orange-700"
                >
                    Search
                </button>
            </form>
        </>
    );
}
