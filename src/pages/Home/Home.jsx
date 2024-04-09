import { useContext, useEffect, useState } from "react";
import "./Home.css";
import RenderPokemon from "../../component/RenderPokemon/RenderPokemon";
import Search from "../../component/Search/Search";
import {
  ButtonState,
  PokeFilter,
  UserInput,
} from "../../component/Context/Context";
import BackToTop from "../../component/BackToTop/BackToTop";
const Home = () => {
  const [pokemonList, setPokemonList] = useState();
  const { userInput, setUserInput } = useContext(UserInput);
  const { pokeFilter } = useContext(PokeFilter);
  const { button, setButton } = useContext(ButtonState);
  const [filteredPoke, setFilteredPoke] = useState();
  const [loadItems, setLoadItems] = useState(151);

  useEffect(() => {
    setFilteredPoke(pokeFilter);
  }, []);

  // ?offset=0&limit=1025
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025")
      .then((res) => res.json())
      .then((data) => setPokemonList(data))
      .catch((err) => console.log("Pokemon List Fetch", err));
  }, []);

  return (
    <main>
      <Search pokeList={pokemonList} />
      <section className="home">
        {button
          ? filteredPoke?.map((item, index) => (
              <RenderPokemon key={index} url={item} />
            ))
          : userInput.length > 0
          ? pokeFilter?.map((item, index) => (
              <RenderPokemon key={index} url={item.url} />
            ))
          : pokemonList?.results.slice(0, loadItems).map((item, index) => (
              <div key={index}>
                <RenderPokemon url={item.url} />
              </div>
            ))}
        {}
      </section>
      <div className="button-container">
        <button className=" btn" onClick={() => setLoadItems(loadItems + 20)}>
          Load More
        </button>
      </div>
    </main>
  );
};

export default Home;
