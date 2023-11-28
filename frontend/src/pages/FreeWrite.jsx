import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/pages/FreeWrite.css';
import Header from '../components/Header';
import InforBar from '../components/InforBar';
import FootBar from '../components/FootBar';

function FreeWrite() {
  const navigate = useNavigate();

  const [freeBoardContent, setFreeBoardContent] = useState({
    title: '',
    content: '',
  });
  const [idCounter, setIdCounter] = useState(1);

  const [viewContent, setViewContent] = useState([]);

  const getValue = (e) => {
    const { name, value } = e.target;
    setFreeBoardContent({
      ...freeBoardContent, // freeBoardContent의 내용을 가져옴
      [name]: value, // name에 집어넣은 후 그 값을 value로 바꿔 저장
    });

    // console.log(name, value); // name : 제목, value : 제목칸에 타이핑하는 글
    console.log(freeBoardContent);
  };

  const handleUpload = () => {
    const newContent = {
      ...freeBoardContent,
      id: idCounter, // 현재 ID 카운터 사용
    };
    setViewContent([...viewContent, newContent]); // 작성한 게시판과 번호를 set~~함수를 통해 변경
    setIdCounter(idCounter + 1); // ID 카운터 증가

    navigate('/free', {
      state: { viewContent: [...viewContent, newContent] }, // 변경된 viewContent와 newContent 전달
    });
  };

  return (
    <div className="container">
      <div className="main-wrap">
        <Header />
        <InforBar />
        <div className="form-wrap">
          <input
            className="title-input"
            type="text"
            placeholder="제목"
            onChange={getValue} // 제목칸에 작성할때마다 콘솔에 출력
            name="title"
          />
          <button
            type="button"
            className="submit-button"
            onClick={handleUpload}
          >
            올리기
          </button>
          <CKEditor
            editor={ClassicEditor}
            data="Hello from CSAI"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setFreeBoardContent({
                ...freeBoardContent,
                content: data,
              });
              console.log(freeBoardContent);
            }}
            // onBlur={(event, editor) => {
            //   console.log('Blur.', editor);
            // }}
            // onFocus={(event, editor) => {
            //   console.log('Focus.', editor);
            // }}
          />
          <div className="list-wrap">
            <Link to="/free">
              <button className="list-btn" type="button">
                목록
              </button>
            </Link>
          </div>
        </div>
        <FootBar />
      </div>
    </div>
  );
}

export default FreeWrite;
