// b_basic.js

// # 자바스크립틑 기본 용어 //

// ! (표현)식 & 문(장)

// 1) (표현)식
// : 연산자, 실제 값(데이터), 함수 실행

// 3 + 5
// "안녕하세요"
// 7
// console.log();

// 2) 문(장)
// : 세미콜론(;) 또는 줄바꿈으로 문장의 종결을 구분
// - 하나 이상의 표현식이 모이면 문장

// EX) if문, switch문: statement(문)의 의미
let x = 3 + 5;

// ! 2. 키워드 & 식별자

// 1) 키워드: 예약어
// - let, var, const: 변수 선언
// - function: 함수 선언
// - if, else, while, for: 제어문
// - return, break 등

// 2) 식별자: 개발자가 JS의 변수, 함수, 속성 등을 구분하기 위해 붙인 특정 단어

//? 식별자 명명규칙
// +) 키워드 사용 x, 숫자로 시작 x
// - 특수 문자: _(언더스코어), $(달러)만 허용
//  >> 시작으로 언더스코어 사용하지 않는 것을 권장
// - 공백 문자 사용 x

// cf) 의미 있는 변수명 사용 권장!!(Clean Code)

//? 식별자 종류별 명명규칙
// 클래스명: 대문자 시작
// 변수, 객체, 함수, 메서드명: 소문자 시작
// +) 여러 단어로 이루어진 식별자의 각 단어의 첫 글자를 대문자로 시작
//    >> lowerCamelCase
//    EX) updatedName, calculateArea, myVariable

//? 식별자 뒤 소괄호 o: 함수(단독 사용), 메서드(다른 식별자와 사용: 객체.메서드명())
//? 식별자 뒤 소괄호 x: 변수(단독 사용), 속성(다른 식별자와 사용: 객체.속성명)

// ! 3. 출력
// : JS의 실행 결과를 웹 브라우저에 표시

// cf) js의 node 환경엥서는 브라우저 결과값 표시 x >> 오류 발생

//* 1) 알림 창 출력 (alret: 알리다, 경고하다)

// alert()함수 사용
// : 소괄호 안에 출력할 메시지 입력(인자 >> 매개변수)
// - 메시지는 따옴표 안에 작성

// alert('Hello JavaScript');
// alert('알림 창 출력하기');

//* 2) 확인 창 출력 (confirm: 확인하다)
// : [확인] | [취소] 버튼 중 사용자가 직접 클릭
// >> 해당 결과(동작)에 맞게 로직 설계 가능

// confirm('로그인 하시겠습니까?');

//* 3) 프롬프트 창 입출력 (prompt)
// 첫 번째 인자: 전달 메시지 작성
// 두 번째 인자: prompt 창 기본값

// prompt('이름을 입력하세요.');
// prompt('이름을 입력하세요.', 'Ex)홍길동');

// +) 사용자가 작성한 입력 내용을 활용 가능

// let userName = prompt('나이를 입력하세요.');
// alert(userName);

//* 4) 웹 브라우저 화면에 출력
// : 브라우저 화면에 결과값 확인 용도

// document(웹 문서)에서 괄호 안의 내용을 write(표시)하는 명령문
// : 괄호 안은 HTML 태그, 데이터 자체, 결과값이 저장된 변수 삽입 가능
document.write('안녕하세요');
document.write('<h2>문단입니다.</h2>');

let user = prompt('이름을 입력해주세요.');
document.write(user + '님 반갑습니다.');

//* 5) 콘솔 창 출력
// : 개발자 도구 | IDE의 터미널에서 내용 출력

console.log('object');

// ! 프로그래밍 언어
// 한글) 나는 너를 사랑해(주어 목적어 동사)
// 영어) I love you (주어 동사 목적어)

// 자바스크립트 - 프로그래밍 언어)
// document.write('안녕');
// - document: 객체(실행될 주체, 주어)
// - write: 메서드(동작, 동사)
// - ('안녕'): 매개변수(목적어)