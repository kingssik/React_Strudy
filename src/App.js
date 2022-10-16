/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (

    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
     
      {/* <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{글제목[0]} <span onClick={ () => { 따봉변경(따봉[0]+1) }}>👍</span> {따봉[0]} </h4>
        <p>10월 9일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{글제목[1]} <span onClick={ () => { 따봉변경(따봉[1]+1) }}>👍</span> {따봉[1]} </h4>
        <p>10월 9일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{글제목[2]} <span onClick={ () => { 따봉변경(따봉[2]+1) }}>👍</span> {따봉[2]} </h4>
        <p>10월 9일 발행</p>
      </div> */}
      
      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={()=>{ setModal(!modal); setTitle(i) }}>{ 글제목[i] } 
                <span onClick={ () => {
                  let copy =[...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy) 
                  }}>👍</span> {따봉[i]}</h4>
              <p>10월 9일 발행</p>
            </div>
          )
        })
      }

      {/* <button onClick={()=>{ setTitle(0) }}>글제목0</button>
      <button onClick={()=>{ setTitle(1) }}>글제목1</button>
      <button onClick={()=>{ setTitle(2) }}>글제목2</button>   */}

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} /> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
  );
}

export default App;
