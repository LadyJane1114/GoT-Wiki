import { useState } from "react";

const CharacterDetails = ({character}) => {
  
  const imageFormats = ['jpg', 'jpeg', 'png'];
  const [currentFormat, setCurrentFormat] = useState(0);

  const getImagePath = (format) => {
    return `/apiImages/${character.id}.${format}`;
  };

  const handleImageError = () => {
    const nextIndex = currentFormat + 1;
    if (nextIndex < imageFormats.length) {
      setCurrentFormat(nextIndex);
    } else {
      setFallback(true);
    }
  };

  const [fallback, setFallback] = useState(false);
  const imagePath = fallback ? "/apiImages/placeholder.png" : getImagePath(imageFormats[currentFormat]);
  
  return (
    <>
    <article id={character.id}>
      <img src={imagePath} alt={character.fullName} onError={handleImageError} className="img-fluid" style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
      <h2>{character.fullName}</h2>
      <h3>{character.title}</h3>
      <h3>{character.family}</h3>
      <br/>
    </article>
    </>
  )
}

export default CharacterDetails