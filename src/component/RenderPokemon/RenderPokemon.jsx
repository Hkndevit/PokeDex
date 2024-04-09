import { useState, useEffect } from "react";
import "./RenderPokemon.css";
import { Link } from "react-router-dom";
import LoadingPage from "../../pages/LoadingPage/LoadingPage";

const RenderPokemon = ({ url }) => {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((err) => console.log("Fetch mit Dynamischer URL ", err));
  }, [url]);

  return (
    <section className="render-pokemon">
      <Link to={`/details/${pokemonData?.id}`}>
        {pokemonData ? (
          <div className="poke-card">
            <img
              src={pokemonData?.sprites.other["official-artwork"].front_default}
              alt=""
            />
            <div>
              <p>
                #
                {pokemonData?.id < 10
                  ? "00" + pokemonData.id
                  : pokemonData.id < 100 && pokemonData.id > 9
                  ? "0" + pokemonData.id
                  : pokemonData.id}
              </p>
              <p>{pokemonData?.name}</p>
            </div>
          </div>
        ) : (
          <LoadingPage />
        )}
      </Link>
    </section>
  );
};

export default RenderPokemon;
