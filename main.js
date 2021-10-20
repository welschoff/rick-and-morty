import { createElement } from './lib/elements';
import './style.css';
import createCharacterCard from './components/characterCard';

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
    [
      createCharacterCard({
        name: 'Alien Morty',
        location: 'Citadel of Ricks',
        firstSeen: 'Close Rick-counters of the Rick Kind',
      }),
      createCharacterCard({
        name: 'Alien Morty',
        location: 'Citadel of Ricks',
        firstSeen: 'Close Rick-counters of the Rick Kind',
      }),
    ]
  );

  appElement.append(headerElement, mainElement);
}
renderApp();
