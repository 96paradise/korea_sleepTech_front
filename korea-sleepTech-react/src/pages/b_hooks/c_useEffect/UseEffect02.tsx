import React, { useState } from 'react'

// jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// async, await, fetch()

// - 게시물 가져오기
//  >> 로딩, 성공, 실패
//  >> 해당 컴포넌트가 '마운팅될 떄만' 실행

//? 각 게시물 데이터 타입 정의
type Post = {
  id: number;
  title: string;
  body: string;
}

function UseEffect02() {
  //? 게시물 상태 관리
  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null> (null);

  //? 데이터를 불러오는 비동기 함수
  async function fetchPosts() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if(!response.ok){
        throw new Error('HTTP error! status: ${response.status');
      }

      const data = await response.json();

      // 데이터 처리가 완료(성공)
      setPosts(data);
      setLoading(false);
    } catch(e) {
      setLoading(false);

      // 에러 객체(e)의 타입을 단언(Error)
      setError((e as Error).message);
    }
  }

  return (
    <div>UseEffect02</div>
  )
}

export default UseEffect02