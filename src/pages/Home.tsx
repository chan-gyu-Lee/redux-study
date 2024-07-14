import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, add } from "../store/store"; // RootState 타입을 정의했다면 import
import Todos from "../components/Todo";

const Home = () => {
  const toDos = useSelector((state: RootState) => state.toDosReducer); // 상태를 선택
  const count = useSelector((state: RootState) => state.conuterReducer);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <div>
      <h1>todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">add</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <Todos key={todo.id} text={todo.text} id={todo.id} />
        ))}
      </ul>
      <h1>count</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default Home;
