import { useContext, useEffect, useState } from "react";
import "./Filter.css";
import { colors } from "../../assets/data/colors";
import { Link } from "react-router-dom";
import { ButtonState, PokeFilter } from "../../component/Context/Context";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const Filter = () => {
  const { button, setButton } = useContext(ButtonState);
  const { pokeFilter, setPokeFilter } = useContext(PokeFilter);

  // State für die Daten aller gefetchten Types:
  const [typeData, setTypeData] = useState();

  // State für URL des angeklickten Types - deren Daten werden in einem weiteren State gefetcht und gespeichert:
  const [typeURL, setTypeURL] = useState("");

  // State für die Daten des einzelnen Typs, die mit typeURL gefetcht werden:
  const [type, setType] = useState("");

  // Array für gefetchte Detail-URLs
  const urlArray = [];

  // Fetch aller Types:
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((data) => setTypeData(data))
      .catch((err) => console.log("filter data fetch", err));
  }, []);
  console.log(typeData);

  // Fetch der Daten des einzelnen, angeklickten types:
  useEffect(() => {
    if (typeURL !== "") {
      fetch(typeURL)
        .then((res) => res.json())
        .then((singleData) => setType(singleData));
    }
  }, [typeURL]);

  useEffect(() => {
    type?.pokemon?.map((item) => {
      urlArray.push(item.pokemon.url);
      setPokeFilter(urlArray);
    });
  }, [type]);

  return (
    <section className="filter">
      <div className="filter-heading">
        <h2>Type</h2>
      </div>

      <div className="filter-container">
        {typeData ? (
          typeData.results.map((item, index) => (
            <div>
              {item.name !== "unknown" ? (
                <button
                  className="type-btn"
                  key={index}
                  onClick={() => {
                    setTypeURL(item.url);
                    setButton(true);
                  }}
                  style={{ backgroundColor: colors[item.name] }}
                >
                  {item.name}
                </button>
              ) : (
                ""
              )}
            </div>
          ))
        ) : (
          <LoadingPage />
        )}
      </div>
      <div className="filter-container">
        <Link to="/" className="btn">
          Search
        </Link>
      </div>
    </section>
  );
};

export default Filter;
