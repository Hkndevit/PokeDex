import "./Details.css";
import { useEffect, useState } from "react";

import { colors } from "../../assets/data/colors";

import { useParams } from "react-router-dom";
import BackToTop from "../../component/BackToTop/BackToTop";

const Details = () => {
  const [pokemon, setPokemon] = useState();
  const [attacks, setAttacks] = useState(4);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data))
      .catch((err) => console.log("Detail Pokemon Fetch", err));
  }, []);

  return (
    <section className="details-page">
      <section className="details">
        <div className="details-container">
          <img
            className="details-img"
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt={`img of ${pokemon?.name}`}
          />
        </div>
        <div>
          <h2 className="details-titel">
            #
            {pokemon?.id < 10
              ? "00" + pokemon?.id
              : pokemon?.id < 100 && pokemon?.id > 9
              ? "0" + pokemon?.id
              : pokemon?.id}{" "}
            {pokemon?.name}
          </h2>
        </div>
        <div className="details-type">
          {pokemon?.types.map((item, index) => (
            <p
              key={index}
              className="types"
              style={{ backgroundColor: colors[item.type.name] }}
            >
              {item.type.name}
            </p>
          ))}
        </div>

        <h2>ATTACKS</h2>
        <div className="details-attacks">
          {pokemon?.moves?.slice(0, attacks).map((item, index) => (
            <p className="btn" key={index}>
              {item.move.name}
            </p>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Details;
