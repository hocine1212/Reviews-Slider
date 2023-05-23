import { FaQuoteRight } from "react-icons/fa";
import SlideButtons from "./SlideButtons";
const Carousel = ({ people, index, setIndex }) => {
  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { image, id, name, title, quote } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={`slide ${position}`} key={id}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="person-title">{title}</p>
            <p className="quote">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <SlideButtons index={index} setIndex={setIndex} />
    </div>
  );
};
export default Carousel;
