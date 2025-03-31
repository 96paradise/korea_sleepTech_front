import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//! 프로젝트 실행 순서 3 -> 2 -> 1

// 3. index.html의 id가 root인 div 요소와 연결
// 2. main.tsx는 index.html의 요소에 출력
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 1. App.tsx 파일의 컴포넌트가 main.tsx에서 출력 */}
    <App />
  </StrictMode>,
)