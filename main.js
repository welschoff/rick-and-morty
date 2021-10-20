import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';

const characters = [
  {
    name: 'Alien Morty',
    location: 'Citadel of Ricks',
    firstSeen: 'Close Rick-counters of the Rick Kind',
  },
  {
    name: 'Jerry Smith',
    location: 'Earth (C-137)',
    firstSeen: 'Pilot',
  },
];

const characterCards = characters.map((character) =>
  createCharacterCard(character)
);

function renderApp() {
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
