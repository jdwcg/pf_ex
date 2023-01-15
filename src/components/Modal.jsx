import { useState } from "react";

function Modal(props) {
  let [titleUpdate, setTiteUpdate] = useState([
    "코트추천",
    "신발추천",
    "파이썬독학",
  ]);
  return (
    <div className="modal">
      <h2 className="heading2">{props.title[props.modalTilte]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          // props.setTite(["코트추천", "신발추천", "파이썬독학"]);
          let copy = [...props.title];
          copy[1] = titleUpdate[1];
          props.setTite(copy);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default Modal;
