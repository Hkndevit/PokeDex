import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ButtonState, UserInput } from "../Context/Context";
import "./Headline.css";
const Headline = () => {
  const { setButton } = useContext(ButtonState);
  const { userInput, setUserInput } = useContext(UserInput);

  return (
    <div className="headline">
      <section className="logo-img">
        <Link to="/">
          <img
            onClick={() => {
              setButton(false);
              setUserInput("");
            }}
            src="/Images/PokemonLogo.png"
            alt=""
          />{" "}
        </Link>
      </section>
    </div>
  );
};

export default Headline;
