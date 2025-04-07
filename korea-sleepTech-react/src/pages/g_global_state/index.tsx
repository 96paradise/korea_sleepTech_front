import React from 'react'
import Context from './Context';
import Z_zustand01 from './Z_zustand01';

const h2Style = {
  backgroundColor: "black",
  color: "orange",
};

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "pink" }}>
        === 리액트 전역 상태 관리 ===
      </h1>

      <h2 style={h2Style}>1. useContext 훅</h2>
      <Context />

      <hr />
      <h2 style={h2Style}>2. zustand 라이브러리</h2>
      <Z_zustand01 />
      
    </div>
  )
}

export default Index