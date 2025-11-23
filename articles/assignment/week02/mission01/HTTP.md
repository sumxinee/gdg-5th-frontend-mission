1. HTTP의 핵심: Request/Response 구조
-HTTP 통신은 기본적으로 클라이언트가 요청(Request)을 보내고 서버가 이에 응답(Response)하는 단순한 구조로 이루어짐.
-클라이언트(Client): 서버에 요청을 보내는 주체 (예: 크롬, 사파리 같은 웹 브라우저)
-서버(Server): 클라이언트의 요청을 받아 처리하고, 그 결과를 응답으로 보내는 주체 (예: 웹 사이트의 데이터를 호스팅하는 컴퓨터)

1) 요청 (Request)
클라이언트가 서버에게 보내는 메시지이며, 다음과 같은 요소로 구성됨.
-Start Line: 요청의 첫 줄
-Method: 요청의 목적 (예: GET)
-Request Target: 요청하는 리소스의 경로 (예: /index.html)
-HTTP Version: (예: HTTP/1.1)
-Headers: 요청에 대한 부가 정보 (Key-Value 형태)
-Host: 요청하는 서버의 도메인 이름
-User-Agent: 클라이언트(브라우저) 정보
-Accept: 클라이언트가 받을 수 있는 데이터 타입
-Body(본문): 서버에 전송할 실제 데이터 (주로 POST나 PUT 메서드에서 사용)

2) 응답(Response)
서버가 클라이언트에게 보내는 메시지이며, 다음과 같이 구성됨.
-Status Line: 응답의 첫 줄
-HTTP Version: (예: HTTP/1.1)
-Status Code: 요청 처리 결과 (예: 200)
-Status Text: 결과에 대한 설명 (예: OK)
-Headers: 응답에 대한 부가 정보 (Key-Value 형태)
-Content-Type: 응답 본문의 데이터 타입 (예: text/html)
-Content-Length: 응답 본문의 크기
-Body (본문): 클라이언트에게 전송할 실제 데이터 (예: HTML 파일, JSON 데이터, 이미지 파일)

2. 주요 HTTP Method
메서드는 클라이언트가 서버에 요청하는 동작의 종류를 나타냄.

**GET**: 정보 조회 (Read)
-서버에게 특정 리소스(데이터, 웹페이지 등)를 요청할 때 사용함.
-데이터를 URL의 **쿼리 스트링(Query String)**에 포함시켜 전송함. (예: .../search?q=http)
-데이터가 URL에 노출되므로 민감한 정보를 보내는 데 적합하지 않음.
-예시: 웹페이지 접속, 게시글 목록 보기

**POST**: 데이터 생성 (Create)
-서버에 데이터를 제출하여 새로운 리소스를 생성하거나 특정 작업을 수행하도록 요청할 때 사용함.
-데이터를 HTTP Request의 Body에 담아서 전송함.
-데이터가 URL에 노출되지 않아 GET보다 안전함.
-예시: 회원가입, 로그인, 게시글 작성

기타 주요 메서드
**PUT**: 리소스 전체 수정(Update) - 요청한 내용으로 리소스를 완전히 덮어씀.

**PATCH**: 리소스 부분 수정(Update) - 리소스의 일부만 변경함.

**DELETE**: 리소스 삭제(Delete)

3. 주요 HTTP Status Code
상태 코드는 서버가 클라이언트의 요청을 처리한 결과를 숫자로 나타낸 것임.

2xx: 성공 (Success)
**200 OK**: 요청 성공. 서버가 클라이언트의 요청을 성공적으로 처리했으며, 요청에 대한 응답(데이터)을 함께 보냄. 가장 흔하게 볼 수 있는 성공 코드임.

4xx: 클라이언트 오류 (Client Error)
요청을 보낸 클라이언트 측에 오류가 있음을 의미함.

**404 Not Found**: 요청한 리소스를 찾을 수 없음. 클라이언트가 요청한 URL(경로)에 해당하는 리소스가 서버에 존재하지 않음. (예: 잘못된 주소를 입력했거나 삭제된 페이지에 접근)

**400 Bad Request**: 요청 자체가 잘못됨 (예: 문법 오류).

**401 Unauthorized**: 인증(Authentication)되지 않음 (로그인 필요).

**403 Forbidden**: 인가(Authorization)되지 않음 (권한 없음).

5xx: 서버 오류 (Server Error)
요청은 유효했으나, 서버 내부에서 처리 중 문제가 발생했음을 의미함.

**500 Internal Server Error**: 서버 내부 오류. 서버 코드의 버그, 데이터베이스 연결 문제 등 서버 쪽에서 예기치 못한 오류가 발생했을 때 반환됨.

4. 네트워크 통신 기본 흐름 (HTTP 기준)
-사용자가 브라우저에 URL을 입력했을 때부터 페이지가 보이기까지의 과정임.
-사용자 입력: 사용자가 웹 브라우저 주소창에 https://www.example.com을 입력함.

DNS 조회
-브라우저는 www.example.com이라는 도메인 이름의 실제 IP 주소 (예: 192.0.2.1)를 알아야 함.
-이를 위해 DNS(Domain Name System) 서버에 도메인 주소를 물어보고 IP 주소를 응답받음.

TCP 연결 (Socket Open)
-브라우저(클라이언트)가 알아낸 서버의 IP 주소와 포트 번호(HTTP는 80, HTTPS는 443)를 사용하여 서버와 TCP 연결을 시도함. (3-Way Handshake 과정)

HTTP Request 전송
-연결이 수립되면, 클라이언트는 서버에 HTTP Request 메시지를 보냄. (예: GET / HTTP/1.1, Host: www.example.com)

서버 처리
-서버(웹 서버)는 요청을 수신하고, GET / 요청을 분석하여 메인 페이지(index.html)를 준비함.
-필요시 데이터베이스 조회 등 내부 작업을 수행함.

HTTP Response 전송
-서버는 요청 처리가 완료되면 클라이언트에 HTTP Response 메시지를 보냄. (예: HTTP/1.1 200 OK, Content-Type: text/html, ... [HTML 코드 본문])

브라우저 렌더링
-클라이언트는 응답을 받고, 상태 코드(200 OK)를 확인함.
-Body에 포함된 HTML, CSS, JavaScript를 해석(Parsing)하고 화면에 그려(Rendering) 사용자에게 웹페이지를 보여줌.

TCP 연결 종료
-데이터 전송이 완료되면 TCP 연결을 종료함. (4-Way Handshake)

이처럼 HTTP는 웹 통신을 위한 명확한 요청/응답 규칙을 제공하여, 전 세계의 수많은 클라이언트와 서버가 원활하게 데이터를 교환할 수 있도록 하는 기반 기술임.