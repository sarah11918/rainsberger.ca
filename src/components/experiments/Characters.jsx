import React from 'react';

const Characters = ({ characters }) => {
  return (
    <>
      <h3>List of Characters from an API call</h3>
      <p>(<a href="https://spacejelly.dev/posts/how-to-use-astro-to-build-react-apps-without-javascript/">Tutorial by Colby Fayock</a>)</p>
      <ul>
        {characters.map(character => {
          return (
            <li key={character.id}>
              <h3>{ character.name }</h3>
              <img width={150} src={character.img_url} alt={`Image of ${character.name}`} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Characters;