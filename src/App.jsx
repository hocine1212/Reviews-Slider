import Carousel from "./Carousel";
import useCustomHooks from "./useCustomHooks";
import Title from "./Title";

const App = () => {
  const { people, index, setIndex } = useCustomHooks();
  return (
    <section className="section">
      <Title />
      <Carousel people={people} index={index} setIndex={setIndex} />
    </section>
  );
};
export default App;
