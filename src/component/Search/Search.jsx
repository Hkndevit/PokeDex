import Burgermenu from "../Svg/Burgermenu";
import Darkmode from "../Svg/Darkmode";
import "./Search.css";
import { useContext, useEffect } from "react";
import { PokeFilter, UserInput } from "../../component/Context/Context";
const Search = ({ pokeList }) => {
  const { userInput, setUserInput } = useContext(UserInput);
  const { pokeFilter, setPokeFilter } = useContext(PokeFilter);

  useEffect(() => {
    const filtered = pokeList?.results?.filter((item) =>
      item.name.includes(userInput)
    );
    setPokeFilter(filtered);
  }, [userInput]);

  return (
    <section className="search">
      <Burgermenu />
      <input
        type="text"
        name="userInput"
        id="userInput"
        placeholder="Search Pokemon"
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
      />
      <Darkmode />
    </section>
  );
};

export default Search;
