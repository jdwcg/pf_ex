import { useState } from "react";
import "./scss/style.scss";
import Modal from "./components/Modal";

function App() {
  let [title, setTite] = useState(["제목1", "제목2", "제목3"]);
  let [mark, setMark] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTilte, setModalTilte] = useState(0);

  let [inputVal, setInputVal] = useState("");

  return (
    <div className="App">
      <header className="header">React CRUD</header>
      <main className="main">
        <div className="btns_wrap">
          <div className="btns">
            <input
              className="modify_btn"
              type="button"
              value="글수정"
              onClick={() => {
                let copy = [...title];
                copy[0] = "제목바꿈";
                setTite(copy);
              }}
            />
            <input
              className="modify_btn"
              type="button"
              value="정렬버튼"
              onClick={() => {
                let copy = [...title];
                copy.sort();
                setTite(copy);
              }}
            />
          </div>

          <div className="write_input">
            <input
              className="write_input"
              type="text"
              onChange={(e) => {
                setInputVal(e.target.value);
              }}
            />
            <input
              type="button"
              className="write_submit"
              value="글쓰기"
              onClick={() => {
                let copy = [...title];
                copy.unshift(inputVal);
                setTite(copy);
              }}
            />
          </div>
        </div>
        <div className="list">
          {title.map(function (a, i) {
            return (
              <>
                <div className="tit_wrap" key={i}>
                  <h1
                    className="heading"
                    onClick={() => {
                      setModal(!modal);
                      setModalTilte(i);
                    }}
                  >
                    {title[i]}
                  </h1>
                  <div className="good">
                    <span
                      onClick={() => {
                        let copy = [...mark];
                        copy[i] = copy[i] + 1;
                        setMark(copy);
                      }}
                    >
                      ♥ {mark[i]}
                    </span>
                  </div>
                  <button
                    className="del_btn"
                    onClick={() => {
                      let copy = [...title];
                      copy.splice(i, 1);
                      setTite(copy);
                    }}
                  >
                    삭제
                  </button>
                </div>
                <p>1월 14일 발행</p>
              </>
            );
          })}
        </div>
      </main>
      {modal == true ? (
        <Modal
          title={title}
          setTite={setTite}
          modalTilte={modalTilte}
          // setTiteUpdate={setTiteUpdate}
        />
      ) : null}
    </div>
  );
}

export default App;
