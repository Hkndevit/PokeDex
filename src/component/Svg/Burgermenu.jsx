import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonState } from "../Context/Context";

const Burgermenu = () => {
  const { setButton } = useContext(ButtonState);
  return (
    <>
      <Link to="/filter" onClick={() => setButton(false)}>
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 18.3333C0 19.2538 0.746192 20 1.66667 20H22.3333C23.2538 20 24 19.2538 24 18.3333C24 17.4129 23.2538 16.6667 22.3333 16.6667H1.66667C0.746193 16.6667 0 17.4129 0 18.3333ZM0 10C0 10.9205 0.746192 11.6667 1.66667 11.6667H22.3333C23.2538 11.6667 24 10.9205 24 10C24 9.07952 23.2538 8.33333 22.3333 8.33333H1.66667C0.746193 8.33333 0 9.07952 0 10ZM1.66667 0C0.746193 0 0 0.746192 0 1.66667C0 2.58714 0.746192 3.33333 1.66667 3.33333H22.3333C23.2538 3.33333 24 2.58714 24 1.66667C24 0.746192 23.2538 0 22.3333 0H1.66667Z"
            fill="#EBEBEB"
          />
        </svg>
      </Link>
    </>
  );
};

export default Burgermenu;
