import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../components/common/Card";
import CharacterModal from "../components/CharacterModal";
import { useEffect, useState } from "react";
import {
  getData,
  getFilmData,
  getHomeworldData,
  getSpeciesData,
} from "../api/api";
import Loader from "../components/Loader/Loader";
import FilterButton from "../components/common/FilterButton";
import Button from "../components/common/Button";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState("Name");
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getData(pageNo);
      setCharacters(result.results);
      const charactersWithFilms = await Promise.all(
        result.results.map(async (character) => {
          const filmsData = await Promise.all(
            character.films.map((film) => getFilmData(film))
          );
          const homeworldData = await getHomeworldData(character.homeworld);
          let speciesData = null;
          if (character.species.length > 0) {
            speciesData = await getSpeciesData(character.species[0]);
          }
          return {
            ...character,
            filmsData: filmsData.map((film) => ({
              title: film.title,
              createdAt: film.created,
            })),
            homeworld: homeworldData,
            speciesData: speciesData,
          };
        })
      );
      setCharacters(charactersWithFilms);
      setLoading(false);
    };
    fetchData();
  }, [pageNo]);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };
  const handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  const handleClearFilter = () => {
    setSelectedItem("Select an option");
    setSearch("");
  };

  if (loading) return <Loader />;

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Star Wars Characters</h1>
      <div className="flex justify-between items-center mb-4 gap-4 flex-wrap">
        <input
          type="text"
          placeholder={`Search by ${selectedItem}`}
          className="max-w-[450px] form-control"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex justify-between items-center gap-4">
          <span>Filter By :</span>
          <FilterButton
            handleSelect={handleSelect}
            selectedItem={selectedItem}
          />
          <Button onClick={handleClearFilter}>Clear Filter</Button>
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {characters
          ?.filter((character) => {
            const searchTerm = search.toLowerCase();
            return selectedItem === "Films"
              ? character.filmsData.some((film) =>
                  film.title.toLowerCase().includes(searchTerm)
                )
              : selectedItem === "HomeWorld"
              ? character.homeworld.name.toLowerCase().includes(searchTerm)
              : selectedItem === "Species"
              ? character.speciesData?.classification
                  .toLowerCase()
                  .includes(searchTerm)
              : character.name.toLowerCase().includes(searchTerm);
          })
          .map((character) => {
            return (
              <Col key={character.id}>
                <CardComponent
                  character={character}
                  onClick={handleCardClick}
                />
              </Col>
            );
          })}
      </Row>
      <div className="d-flex justify-content-between align-items-center w-full mt-9">
        {pageNo > 1 && <Button onClick={handlePrevious}>Previous</Button>}
        {characters?.length === 10 && (
          <Button onClick={handleNext}>Next</Button>
        )}
      </div>
      <CharacterModal
        character={selectedCharacter}
        show={!!selectedCharacter}
        onHide={handleCloseModal}
      />
    </Container>
  );
};

export default Home;
