import { Modal, Button } from "react-bootstrap";
import { formatDate } from "../utills/common";

const CharacterModal = ({ character, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      {character && (
        <>
          <Modal.Header closeButton>
            <Modal.Title>{character.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="flex justify-between items-center gap-2">
              <strong>Height:</strong> {`${character.height} m`}
            </p>
            <p className="flex justify-between items-center gap-2">
              <strong>Mass:</strong> {`${character.mass} kg`}
            </p>
            {character?.speciesData && (
              <p className="flex justify-between items-center gap-2">
                <strong>Species:</strong>
                <span>{character?.speciesData?.name}</span>
              </p>
            )}
            <p className="flex justify-between items-center gap-2">
              <strong>Birth Year:</strong> {formatDate(character.created)}
            </p>
            <div>
              <span className="flex justify-between items-center gap-2">
                <strong className="text-center w-full text-primary">
                  Watched Films : {character?.filmsData?.length}
                </strong>
              </span>
              <ul className="ps-1">
                {character?.filmsData?.map((film) => (
                  <li
                    key={film.title}
                    className="flex justify-between items-center gap-1"
                  >
                    <span>{film.title}</span>
                    <span>{formatDate(film.createdAt)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <strong className="text-center w-full text-primary">
                Homeworld
              </strong>
              <p className="flex justify-between items-center gap-2 w-full m-0">
                <strong>Name:</strong>
                <span className="text-left">{character.homeworld?.name}</span>
              </p>
              <p className="flex justify-between items-center gap-2 w-full m-0">
                <strong>Terrain:</strong>
                <span className="text-left">
                  {character.homeworld?.terrain}
                </span>
              </p>
              <p className="flex justify-between items-center gap-2 w-full m-0">
                <strong>Climate:</strong>
                <span className="text-left">
                  {character.homeworld?.climate}
                </span>
              </p>
              <p className="flex justify-between items-center gap-2 w-full m-0">
                <strong>Number of Residance:</strong>
                <span className="text-left">
                  {character.homeworld?.residents?.length}
                </span>
              </p>
            </div>
            <p className="mt-3">{character.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};
export default CharacterModal;
