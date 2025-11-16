이 훅들을 "왜" 사용하는지 이해하는 것이 중요함.
-useState: 컴포넌트가 기억해야 할 값이 있을 때
-useEffect: 컴포넌트가 렌더링 된 후 외부(서버, DOM 등)와 상호작용해야 할 때
-useNavigate: 사용자를 다른 페이지로 이동시켜야 할 때

1. useState: 상태를 위한 기억 장치
-useState는 함수형 컴포넌트가 자체적으로 값을 기억하고, 그 값이 변할 때 화면을 다시 그리게(Re-render) 하는 기능을 제공함.

핵심 역할
-컴포넌트의 '상태(State)'를 만들고 관리함. 여기서 상태란 "이 컴포넌트가 기억해야 할 동적인 값" (예: 카운터 숫자, input의 입력 값, 켜고 꺼진 토글 상태)을 의미함.

사용법
1. 가져오기(Import)
import { useState } from 'react';

2. 선언 및 사용 useState는 초기값을 인자로 받고, [ 현재 상태 값, 이 값을 변경할 함수 ] 형태의 배열을 반환함.
import { useState } from 'react';

function Counter() {
  // 1. 선언: 0을 초기값으로 하는 'count' 상태를 만듦.
  //    count: 현재 상태 값 (읽기 전용)
  //    setCount: 상태를 변경할 함수 (Setter 함수)
  const [count, setCount] = useState(0);

  // 2. 사용 (읽기)
  return (
    <div>
      <p>현재 카운트: {count}</p>
      
      {/* 3. 사용 (업데이트) */}
      <button onClick={() => setCount(count + 1)}>
        1 증가
      </button>
      
      {/* (중요) 함수형 업데이트: 
          이전 상태(prevCount)를 기반으로 새 상태를 계산할 때 
          이 방식이 더 안전하고 정확함. */}
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        (안전하게) 1 증가
      </button>
    </div>
  );
}

작동 원리
-최초 렌더링: 컴포넌트가 처음 실행될 때 useState(0)가 호출됨. React는 이 컴포넌트를 위한 '메모리 공간'에 count라는 상태를 만들고 초기값 0을 저장함.
-Setter 함수 호출: 사용자가 버튼을 클릭해 setCount(1) (혹은 setCount(prev => prev + 1))가 호출됨.
-상태 업데이트 예약: React는 setCount 호출을 받으면, count의 값을 1로 변경하라고 예약함. (바로 변경하지 않고 모아서 처리할 수도 있음. - 배치(Batching))
-재렌더링(Re-render) 트리거: React는 상태가 변경될 것이므로, 이 컴포넌트와 그 자식들을 다시 렌더링해야 한다고 판단함.
-다음 렌더링: Counter 함수가 다시 실행됨. 이때 const [count, setCount] = useState(0); 줄을 다시 만나지만, React는 "아, 이 컴포넌트는 이미 count 상태를 갖고 있지. 지금 값은 1이야"라고 판단하고 count에 1을 반환함.
-화면 반영: 새로운 count 값 1이 포함된 JSX가 화면에 그려짐.

2. useEffect: 동기화를 위한 실행 장치
-useEffect는 컴포넌트가 렌더링 된 이후에 수행해야 하는 **'부수 효과(Side Effect)'**를 처리함. 부수 효과란 렌더링과 직접적인 관련이 없는 작업들, 예를 들면 서버에서 데이터 가져오기(Fetching), DOM 직접 조작, 타이머 설정(setTimeout) 등을 말함.

핵심 역할
-컴포넌트의 렌더링 시점, 또는 특정 상태(state)나 속성(props)이 변경되는 시점에 맞춰 특정 코드를 실행함.

사용법
1. 가져오기(Import)
import { useEffect } from 'react';

2. 선언 및 사용 useEffect는 (실행할 함수, [의존성 배열]) 두 개의 인자를 받음. **의존성 배열(Dependency Array)**이 useEffect의 핵심임.
import { useState, useEffect } from 'react';

function UserData({ userId }) { // props로 userId를 받음
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect 사용
  useEffect(() => {
    // 1. Effect 함수 (Side Effect를 수행하는 곳)
    console.log("Effect 실행!");
    setLoading(true); // 로딩 시작

    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .finally(() => setLoading(false)); // 로딩 끝

    // 2. (선택) 정리 함수 (Cleanup Function)
    //    이 Effect가 다시 실행되기 직전, 또는 컴포넌트가 사라질 때 실행됨
    return () => {
      console.log("Cleanup 실행! (이전 Effect 정리)");
      // (예: 이전 fetch 요청을 중단(abort)하는 로직)
    };
    
  }, [userId]); // 3. 의존성 배열: "userId"가 바뀔 때만 이 Effect를 실행해라!

  if (loading) return <p>로딩 중...</p>;
  if (!user) return <p>데이터 없음</p>;

  return <p>{user.name} 님의 페이지</p>;
}

의존성 배열(Dependency Array) 3가지 용례
-[] (빈 배열): 최초 1회 실행 (Mount)
  -useEffect(() => { ... }, []);
  -컴포넌트가 처음 렌더링 될 때 딱 한 번 실행됨. (초기 데이터 로딩에 가장 많이 사용)
-[state, props.id, ...] (값이 있음): 특정 값 변경 시 실행(Update)
  -useEffect(() => { ... }, [userId]);
  -처음 렌더링 될 때 한 번 실행되고, 이후 userId 값이 변경될 때마다 다시 실행됨. (위 예시)
-(생략): 매 렌더링마다 실행
  -useEffect(() => { ... });
  -컴포넌트가 렌더링(재렌더링 포함) 될 때마다 매번 실행됨. (거의 사용하지 않으며, 무한 루프의 원인이 될 수 있어 주의해야 함)

작동 원리
-렌더링 완료: React가 컴포넌트를 렌더링하여 화면에 그림.
-useEffect 실행: 렌더링이 끝난 후, React는 useEffect에 등록된 함수를 실행함.
-의존성 비교 (재렌더링 시): 컴포넌트가 재렌더링 되면, React는 의존성 배열 [userId]의 이전 값과 현재 값을 비교함.
  -값이 동일하면: (예: userId가 '1'에서 '1'로 동일) Effect 함수를 실행하지 않고 건너뜀.
  -값이 다르면: (예: userId가 '1'에서 '2'로 변경)
   -(만약 있다면) 이전 Effect의 정리(Cleanup) 함수를 실행함.
   -새로운 Effect 함수를 실행함.

3. useNavigate: 길을 찾는 내비게이터
-useNavigate는 React 앱 내에서 프로그래매틱하게(코드를 통해) 페이지를 이동시킬 때 사용하는 훅임.

  -중요: useNavigate는 React 자체 기능이 아니라, react-router-dom 라이브러리에 포함된 기능임. 따라서 이 훅을 사용하려면 react-router-dom이 설치되어 있어야 함.

핵심 역할
-<a> 태그나 <Link> 컴포넌트를 클릭하지 않고, 특정 로직(예: 로그인 성공, 폼 제출 완료)이 끝난 후 사용자를 다른 경로로 보냄.

사용법
1. 가져오기(Import)
import { useNavigate } from 'react-router-dom';

2. 선언 및 사용 useNavigate 훅을 컴포넌트 내에서 호출하면 Maps 함수를 반환함.
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  
  // 1. 선언: navigate 함수를 받아옴.
  const navigate = useNavigate();

  const handleLogin = () => {
    // (가정) 로그인 API 호출 성공
    if (username === 'admin') {
      console.log("로그인 성공!");
      
      // 2. 사용: 원하는 경로로 이동
      navigate('/dashboard'); // 로그인 성공 시 '/dashboard' 페이지로 이동
      
    } else {
      alert("로그인 실패");
    }
  };

  // 기타 사용법
  const goToHome = () => {
    // { replace: true } 옵션: 현재 페이지를 히스토리에 남기지 않음 (뒤로 가기 불가)
    navigate('/', { replace: true });
  };

  const goBack = () => {
    navigate(-1); // 뒤로 가기
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
}

작동 원리
-Context 기반: react-router-dom은 <BrowserRouter> 같은 라우터 컴포넌트를 통해 앱 전체에 '라우팅 컨텍스트(Context)'를 제공함. 이 컨텍스트는 현재 경로, 페이지 이동 기록(History) 등을 알고 있음.
-함수 접근: useNavigate() 훅이 호출되면, React는 이 컨텍스트에서 '페이지를 이동시키는 함수'를 찾아서 반환함. 이것이 Maps 함수임.
-History 조작: Maps('/dashboard')가 호출되면, 이 함수는 브라우저의 History API를 내부적으로 조작함.
-경로 변경 및 리렌더링
  -브라우저의 URL이 /dashboard로 변경됨. (하지만 페이지가 새로고침 되지는 않음.)
  -react-router-dom은 URL 변경을 감지하고, "현재 경로가 /dashboard 이니, 여기에 맞는 컴포넌트(예: <DashboardPage>)를 렌더링해야겠다"라고 판단하여 화면을 다시 그림.