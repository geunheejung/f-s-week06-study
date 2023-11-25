import { useEffect } from "react";
import useStore from "../hooks/useStore";
import useSelector from "../hooks/useSelector";

const NameCard = () => {
  const name = useSelector(state => state.name);

  useEffect(() => {
    console.log(name);
  });

  return <div>Name: {name}</div>;
};

export default NameCard;
