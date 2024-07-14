import { useDispatch } from "react-redux";
import { remove } from "../store/store";
import { Link } from "react-router-dom";

interface ITodosProps {
  text: string;
  id: string;
}

export default function Todos({ text, id }: ITodosProps) {
  const dispatch = useDispatch();

  const deleteToDo = () => {
    dispatch(remove(id));
  };

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>삭제</button>
    </li>
  );
}
