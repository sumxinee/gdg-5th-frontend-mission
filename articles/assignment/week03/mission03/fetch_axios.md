1. Fetch API란?
-개념: 클라이언트(브라우저)가 서버와 비동기 통신을 하기 위해 사용하는 최신 자바스크립트 내장 API임.
-등장 배경: 과거 XMLHttpRequest는 사용법이 복잡하여 jQuery($.ajax)나 Axios 같은 외부 라이브러리를 주로 사용했음. 하지만 fetch가 표준이 되면서 별도 라이브러리 없이도 간편하게 통신을 구현할 수 있게 되었음.
-특징: Promise 기반으로 설계되어 있어 비동기 처리가 깔끔함.

2. HTTP 요청 메서드별 사용법
1) GET 요청 (데이터 조회)
-fetch 함수의 기본 동작은 GET임. 별도의 옵션 없이 URL만 넘기면 됨.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // 1. 응답 객체에서 JSON 데이터 파싱
  .then((data) => console.log(data));  // 2. 파싱된 실제 데이터 사용
-주의점: fetch는 응답(Response) 객체 자체를 반환하므로, 본문(Body) 내용을 사용하려면 .json() 메서드를 호출하여 다시 Promise를 반환받아야 함.

2) POST 요청 (데이터 생성)
-데이터를 생성할 때는 method, headers, body 옵션을 설정해야 함.
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // 메서드 지정
  headers: {
    "Content-Type": "application/json", // 보내는 데이터가 JSON임을 명시
  },
  body: JSON.stringify({ // 자바스크립트 객체를 JSON 문자열로 변환
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
})
.then((response) => response.json())
.then((data) => console.log(data));
  -JSON.stringify: 서버로 데이터를 보낼 때는 반드시 객체를 문자열(String) 형태로 변환해야 함.

3) PUT/DELETE 요청 (데이터 수정/삭제)
-PUT (수정): POST와 거의 동일하며, method를 "PUT"으로 설정하고 수정할 데이터를 body에 담음.
-DELETE (삭제): method를 "DELETE"로 설정함. 보낼 데이터가 없다면 body는 생략함.

3. 심화: Async / Await 문법 활용
-Promise 체이닝(.then())은 코드가 길어지면 가독성이 떨어짐. async/await를 사용하면 동기 코드처럼 직관적으로 작성할 수 있음.
// async/await 방식
async function postData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "Test", body: "Testing", userId: 1 }),
    });
    
    const data = await response.json(); // 응답 본문 파싱 대기
    console.log(data);
}

4. 실무 활용 팁 (모듈화)
-fetch를 사용할 때마다 헤더 설정이나 에러 처리 등을 반복해서 작성하는 것은 비효율적임. 이를 방지하기 위해 별도의 유틸리티 함수로 만들어 사용하는 것을 권장함.
async function post(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
// 사용 시 post("https://api.example.com/users", { name: "Dale" }).then(data => ...);

**요약**
-Fetch API는 XMLHttpRequest를 대체하는 최신 브라우저 내장 비동기 통신 기술임.
-Promise를 반환하며, 응답을 받으면 .json()을 통해 데이터를 추출해야 함.
-POST/PUT 요청 시에는 headers에 내용 타입을 명시하고 body를 JSON.stringify()로 변환해야 함.
-Async/Await를 사용하면 가독성이 훨씬 좋아짐.
-반복되는 코드는 함수로 모듈화하여 사용하는 것이 좋음.

5. 자바스크립트 엔진의 구조 (V8 엔진 등)
-자바스크립트 엔진은 크게 두 가지 요소로 구성됨.
-메모리 힙 (Memory Heap): 메모리 할당이 일어나는 곳임. 우리가 선언한 변수, 객체 등이 저장됨.
-호출 스택 (Call Stack): 코드가 실행될 때 스택 프레임이 쌓이는 곳임. 자바스크립트는 싱글 스레드(Single Thread) 언어이기 때문에 단 하나의 호출 스택을 가짐. 즉, 한 번에 하나의 작업만 처리할 수 있음.

6. 자바스크립트 런타임 (브라우저 환경)
-자바스크립트 엔진 혼자서는 비동기 처리를 할 수 없음. 브라우저가 제공하는 Web API, 이벤트 루프, 콜백 큐가 함께 동작해야 함.

1) Web APIs
-브라우저에서 제공하는 API들임. (DOM, AJAX, setTimeout 등)
-자바스크립트 엔진(Call Stack)에서 비동기 작업을 요청하면, 이 작업은 Web API로 넘겨져서 별도로 처리됨.
-예를 들어 setTimeout을 호출하면, 타이머 카운팅은 자바스크립트 엔진이 아니라 Web API 영역에서 수행됨.

2) 콜백 큐 (Callback Queue / Task Queue)
-Web API에서 처리가 완료된 비동기 작업의 콜백 함수들이 대기하는 줄(Queue)임.
-타이머가 끝나거나 서버에서 응답이 오면, 그 결과물(실행할 함수)이 이곳에 줄을 섦.

3) 이벤트 루프 (Event Loop)
-이 시스템의 관리자 역할을 함.
-역할: **호출 스택(Call Stack)**과 **콜백 큐(Callback Queue)**를 계속 감시함.
-동작 조건: 호출 스택이 완전히 비어있을 때만, 콜백 큐에 대기 중인 첫 번째 콜백을 호출 스택으로 옮겨 실행시킴.

7. 동작 과정 예시 (비동기 처리 흐름)
-코드가 console.log('A') -> setTimeout(..., 0) -> console.log('B') 순서로 있을 때의 흐름임.
-동기 코드 실행: console.log('A')가 Call Stack에 들어가 실행되고 바로 빠짐. (출력: A)
-비동기 요청: setTimeout이 Call Stack에 들어옴. 하지만 이는 비동기 함수이므로 브라우저의 Web API로 타이머 작업을 넘기고 즉시 스택에서 사라짐.
-동기 코드 실행: 그다음 console.log('B')가 Call Stack에 들어가 실행되고 빠짐. (출력: B)
-대기 및 이동
  : Web API에서 타이머가 종료되면, 콜백 함수를 Callback Queue로 보냄.
  : Event Loop는 Call Stack이 비어있는지 확인함.
  : Stack이 비었으므로 Queue에 있던 콜백을 Stack으로 옮김.
-비동기 콜백 실행: 콜백 함수가 실행됨.

**요약**
-자바스크립트는 싱글 스레드라 한 번에 하나만 함.
-오래 걸리는 작업(비동기)은 Web API에게 맡기고 다음 코드를 실행함.
-Web API는 작업이 끝나면 콜백을 Callback Queue에 넣음.
-Event Loop는 Call Stack이 텅 빌 때까지 기다렸다가, Queue에 있는 작업을 가져와 실행함.

**결론**
-이 메커니즘 덕분에 자바스크립트는 싱글 스레드임에도 불구하고, 브라우저가 멈추지 않고(Non-blocking) 여러 작업을 동시에 처리하는 것처럼 보이는 **동시성(Concurrency)**을 가질 수 있음.