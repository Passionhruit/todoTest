const ToDos = ({ value, deleteList, moveList }) => {
  return (
    <li>
      <h3>{value.title}</h3>
      <p>{value.note}</p>
      <button className="btn" onClick={() => deleteList(value.id)}>
        삭제
      </button>
      <button
        className="btn"
        onClick={() =>
          moveList(value.id, value.title, value.note, value.isDone)
        }
      >
        {value.isDone ? "취소" : "완료"}
      </button>
    </li>
  );
};

export default ToDos;
