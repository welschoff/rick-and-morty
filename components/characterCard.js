import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  image,
  name,
  status,
  species,
  location,
  episode,
}) {
  const characterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      createElement('img', {
        src: image,
      }),

      createElement('div', { className: styles.description }, [
        createElement(
          'div',
          {
            className: styles.header,
          },
          [
            createElement('h2', {
              textContent: name,
            }),
            createElement('p', {
              textContent: `${status} - ${species}`,
            }),
          ]
        ),
        createElement(
          'div',
          {
            className: styles.location,
          },
          [
            createElement('h3', {
              textContent: 'Last known location:',
              className: styles.descriptionTitle,
            }),
            createElement('p', {
              textContent: location.name,
            }),
          ]
        ),
        createElement(
          'div',
          {
            className: styles.seen,
          },
          [
            createElement('h3', {
              textContent: 'First seen in:',
              className: styles.descriptionTitle,
            }),
            createElement('p', {
              textContent: episode[0],
            }),
          ]
        ),
      ]),
    ]
  );

  return characterCard;
}
