# Premier pas avec React

React est une bibliothèque JavaScript pour la création d'interfaces utilisateur. Afin de mettre place un projet basé sur la bibliothèque React, il est nécessaire de suivre quelques étapes.


## Créer un projet React

Afin de créer un projet nous avons besoin d'un outil qui fera gagner du temps sur ce qu'on le "Scaffolding". `ViteJS`est parfait pour cela.

Il suffit de lancer la commande dans un terminal pour créer un projet :

```bash

npx create-vite@latest

```

Cette commande va lancer un assistant qui va vous poser quelques questions pour la configuration du projet.

Questions posées :

- **Project name**: Le nom du projet
- **Select a framework**: Le framework à utiliser (React, Vue, Vanilla, etc.)
- **Language**: Le langage à utiliser (JavaScript, TypeScript)

Une fois les questions répondues, le projet sera créé dans un dossier portant le nom du projet.

N'oubliez pas de lire attentive les informations affichées à la fin de la création du projet. Elles contiennent des commandes utiles pour lancer le projet.

```bash

cd nom-du-projet # Se déplacer dans le dossier du projet
npm install # Installer les dépendances
npm run dev # Lancer le serveur de développement

```

Le serveur de développement est accessible à l'adresse `http://localhost:5173`. Mais cette adresse peut varier en fonction de la configuration du projet.

## Structure du projet

Lancez la commande `code .` pour ouvrir le projet dans Visual Studio Code afin de voir la structure du projet.

La structure du projet est la suivante :

```bash

nom-du-projet
├── node_modules
├── public
│   ├── vite.svg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├──  eslintrc.cjs
├──  index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js

```

- **node_modules**: Contient les dépendances du projet
- **public**: Contient les fichiers statiques du projet
- **src**: Contient les fichiers sources du projet
- **.gitignore**: Fichier pour ignorer les fichiers et dossiers dans le dépôt Git
- **eslintrc.cjs**: Fichier de configuration pour ESLint
- **index.html**: Fichier HTML principal du projet (point d'entrée) à partir duquel l'application est chargée
- **package.json**: Fichier de configuration du projet
- **package-lock.json**: Fichier de verrouillage des dépendances
- **README.md**: Fichier de documentation du projet
- **vite.config.js**: Fichier de configuration de Vite

## Composants React

Pour créer un composant React, il suffit de créer un fichier avec l'extension `.jsx` dans le dossier `src`.

`jsx` est une syntaxe qui permet d'écrire du HTML dans du JavaScript. Cela permet de créer des composants React de manière plus simple.

Voici un exemple de composant React :

```jsx

import React from 'react';

export default function Nav() {
  return (
    <div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

```

Pour utiliser ce composant dans un autre composant, il suffit de l'importer et de l'utiliser comme une balise HTML.

```jsx

import React from 'react';
import Nav from './Nav';

function App() {
  return (
    <div>
        <Nav />
        <h1>Mon application React</h1>
    </div>
  );
}

```

## Design avec Tailwind CSS

Tailwind CSS est une bibliothèque CSS qui permet de créer des designs modernes et personnalisés. Pour l'ajouter à un projet, il suffit d'installer la bibliothèque via npm.

```bash

npm install -D tailwindcss

```

Suite à cela il suffit de suivre les instructions sur le site de Tailwind CSS pour configurer le projet : 

[https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)

TailwindCSS est basé sur des classes CSS. Il suffit d'ajouter les classes dans les balises HTML pour styliser les éléments.

```jsx

import React from 'react';

export default function Nav() {
  return (
    <div>
        <nav className="bg-gray-800 text-white">
            <ul className="flex justify-between gap-3">
                <li><a href="#" className="p-4">Home</a></li>
                <li><a href="#" className="p-4">About</a></li>
                <li><a href="#" className="p-4">Contact</a></li>
            </ul>
        </nav>
    </div>
  );
}

```

On peut remarquer que les classes Tailwind CSS sont ajoutées directement dans les balises HTML. Cependant la classe dans jsx doivent être écrites en camelCase et avec le terme "Name" à la fin.

Ce qui donne : `className="bg-gray-800"` au lieu de `class="bg-gray-800"`.

Cela compte également pour d'autre attributs HTML comme `htmlFor` au lieu de `for` ou encore `tabIndex` au lieu de `tabindex`.

## Appel d'une API dans React


## Déploiement d'une application React