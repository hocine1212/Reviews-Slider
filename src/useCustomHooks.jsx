import { useEffect, useState } from "react";
import { longList } from "./data";

const useCustomHooks = () => {
  const [people, setPeople] = useState(longList);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return { people, index, setIndex };
};
export default useCustomHooks;
