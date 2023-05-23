import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SlideButtons = ({ index, setIndex }) => {
  return (
    <div>
      <button
        type="button"
        className="prev"
        onClick={() => setIndex(index - 1)}
      >
        <FiChevronLeft />
      </button>
      <button
        type="button"
        className="next"
        onClick={() => setIndex(index + 1)}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};
export default SlideButtons;
