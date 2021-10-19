import { createElement } from './lib/elements';
import './style.css';
import { createCardComponent } from './lib/createCardComponent.js';

function renderApp() {
  const appElement = document.querySelector('#app');

  const cardComponent = createCardComponent();

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
      createElement('p', {
        textContent: 'coming soon...',
      }),
    ]
  );

  appElement.append(headerElement, mainElement, cardComponent);
}
renderApp();
