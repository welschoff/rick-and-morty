import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';

async function renderApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: 'Rick and Morty',
      }),
    ]
  );

  const response = await fetch('https://rickandmortyapi.com/api/character');
  const body = await response.json();
  const characters = body.results;

  // const characters = [
  //   {
  //     imgSrc: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
  //     name: 'Alien Morty',
  //     status: 'Alive',
  //     race: 'Alien',
  //     location: 'Citadel of Ricks',
  //     firstSeen: 'Close Rick-counters of the Rick Kind',
  //   },
  //   {
  //     imgSrc: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  //     name: 'Jerry Smith',
  //     status: 'Alive',
  //     race: 'human',
  //     location: 'Earth (C-137)',
  //     firstSeen: 'Pilot',
  //   },
  // ];

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    characterCards
  );

  appElement.append(headerElement, mainElement);
}
renderApp();
