import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getSpeciesData } from "../../../api/api";

const CardComponent = ({ character, onClick }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [species, setSpecies] = useState();

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    setImageUrl(`https://picsum.photos/seed/${randomId}/200/300`);
  }, []);
  const speciesColors = {
    artificial: "primary",
    sentient: "warning",
    reptilian: "success",
    mammal: "secondary",
  };
  return (
    <Card
      className={`[&&]:h-full shadow-sm bg-${
        speciesColors[character?.speciesData?.classification] || "info"
      }`}
      onClick={() => onClick(character)}
      style={{ cursor: "pointer", transition: "transform 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={character.name}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{character?.name}</Card.Title>
        {character?.speciesData?.classification && (
          <p className="m-0">
            <strong>Species:</strong> {character?.speciesData?.classification}
          </p>
        )}
        {character?.homeworld?.name && (
          <p className="m-0">
            <strong>Homeworld:</strong> {character?.homeworld?.name}
          </p>
        )}
        {character?.filmsData?.length > 0 && (
          <div>
            <strong>Films:</strong>
            <ul className="ps-0">
              {character?.filmsData?.map((film) => (
                <li>{film.title}</li>
              ))}
            </ul>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
