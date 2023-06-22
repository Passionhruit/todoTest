import logo from "./logo.svg";
import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import ToDos from "./components/ToDos";

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [list, setList] = useState([
    { id: uuid(), title: "제목1", note: "내용1", isDone: false },
    { id: uuid(), title: "제목2", note: "내용2", isDone: false },
    { id: uuid(), title: "제목3", note: "내용3", isDone: true },
    { id: uuid(), title: "제목4", note: "내용4", isDone: true },
  ]);

  const addList = (e) => {
    if (title.length !== 0 && note.length !== 0) {
      const newList = {
        id: uuid(),
        title,
        note,
        isDone: false,
      };
      setList([...list, newList]);
    } else {
      alert("제목과 내용을 입력해주세요.");
    }
    e.preventDefault();
    setTitle("");
    setNote("");
  };

  const deleteList = (id) => {
    const updatedList = list.filter((value) => value.id !== id);
    setList(updatedList);
    return updatedList;
  };

  const moveList = (id, title, note, isDone) => {
    const updatedList = deleteList(id);
    const newList = {
      id: uuid(),
      title,
      note,
      isDone: isDone ? false : true,
    };
    setList([...updatedList, newList]);
  };

  return (
    <>
      <h1>TO DO LIST</h1>
      <form>
        제목:{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        내용:{" "}
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="addBtn" onClick={addList}>
          추가
        </button>
      </form>
      <div>
        <ul>
          <h2>working</h2>
          {list.map((value) => {
            if (!value.isDone) {
              return (
                <ToDos
                  value={value}
                  moveList={moveList}
                  deleteList={deleteList}
                />
              );
            }
          })}
        </ul>
      </div>
      <ul>
        <h2>Done</h2>
        {list.map((value) => {
          if (value.isDone) {
            return (
              <ToDos
                value={value}
                moveList={moveList}
                deleteList={deleteList}
              />
            );
          }
        })}
      </ul>
    </>
  );
}

export default App;
