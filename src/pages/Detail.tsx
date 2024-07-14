import { useDispatch, useSelector } from "react-redux";

import { RootState, minus, plus } from "../store/store";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const count = useSelector((state: RootState) => state.conuterReducer);
  const toDos = useSelector((state: RootState) => state.toDosReducer); // 상태를 선택
  const { id } = useParams();

  const todo = toDos.find((todo) => todo.id === id);

  const dispatch = useDispatch();
  const handlePlus2 = () => {
    dispatch(plus(2));
  };
  const handleMinus3 = () => {
    dispatch(minus(3));
  };

  return (
    <div>
      <button onClick={handlePlus2}>add</button>
      {count}
      <button onClick={handleMinus3}>minus</button>
      <Link to={"/"}>홈버튼</Link>
      <h1>{todo?.text}</h1>
    </div>
  );
}
