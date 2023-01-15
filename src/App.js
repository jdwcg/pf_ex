import { useState } from "react";
import "./scss/main.scss";
import Modal from "./components/Modal";

function App() {
  let [title, setTite] = useState(["제목1", "제목2", "제목3"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTilte, setModalTilte] = useState(0);

  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <header className="header">포트폴리오</header>
      <main className="main">
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
                        let copy = [...따봉];
                        copy[i] = copy[i] + 1;
                        따봉변경(copy);
                      }}
                    >
                      ♥ {따봉[i]}
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
        <div className="write_input">
          <input
            className="write_input"
            type="text"
            onChange={(e) => {
              입력값변경(e.target.value);
            }}
          />
          <input
            type="button"
            className="write_submit"
            value="글쓰기"
            onClick={() => {
              let copy = [...title];
              copy.unshift(입력값);
              setTite(copy);
            }}
          />
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
