/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  return (

    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
     
      <div className='list'>
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        <p>10월 9일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>10월 9일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={()=>{ setModal(true) }}>{글제목[2]}</h4>
        <p>10월 9일 발행</p>
      </div>

      {
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  );
}

export default App;
