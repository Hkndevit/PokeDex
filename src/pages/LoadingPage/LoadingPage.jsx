import { useContext, useEffect } from "react";
import "./LoadingPage.css";
import { LoadingContent } from "../../component/Context/Context";
const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContent);

  //   # userInput in fetch details damit dynamisch

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <section className="pokeLoading">
      <div className="pokeBall"></div>
    </section>
  );
};

export default LoadingPage;
