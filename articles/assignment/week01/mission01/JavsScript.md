(1) 기본 개념과 동작 원리 이해의 중요성

(2) 자바스크립트란?
5. 자바스크립트의 특징
-자바스크립트는 HTML, CSS와 함께 웹을 구성하는 요소 중 하나로 웹 브라우저에서 동작하는 유일한 프로그래밍 언어임.
-자바스크립트는 명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어임.
-자바스크립트는 클래스 기반 객체지향 언어보다 효율적이면서 강력한 프로토타입 기반의 객체지향 언어임.

(3) 자바스크립트 개발 환경과 실행 방법

(4) 브라우저 동작원리

(5) 자바스크립트의 기본 문법
1. 변수
-변수(Variable)는 값(value)을 저장(할당)하고 그 저장된 값을 참조하기 위해 사용함. 한번 쓰고 버리는 값이 아닌 유지(캐싱)할 필요가 있는 값은 변수에 담아 사용함. 또한 변수 이름을 통해 값의 의미를 명확히 할 수 있어 코드의 가독성이 좋아짐.
-변수는 위치(주소)를 기억하는 저장소임. 위치란 메모리 상의 주소(address)를 의미함. 즉, 변수란 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자(identifier)임.
-변수를 선언할 때 var 키워드를 사용함. 할당 연산자 =는 변수에 값을 할당하기 위해 사용함.

2. 값
-데이터 타입(Data Type): 프로그래밍 언어에서 사용할 수 있는 값의 종류
-변수(Variable): 값이 저장된 메모리 공간의 주소를 가리키는 식별자(identifier)
-리터럴(literal): 소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위
-값 은 프로그램에 의해 조작될 수 있는 대상을 말함. 값은 다양한 방법으로 생성할 수 있음.

3. 연산자
-연산자(Operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만듦. 이때 연산의 대상을 피연산자(Operand)라 함.

4. 키워드
-키워드(keyword)는 수행할 동작을 규정한 것임. 예를 들어 var 키워드는 새로운 변수를 생성할 것을 지시함.

5. 주석
-주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용함.
-한줄 주석은 // 다음에 작성하며 여러 줄 주석은 /*과 */의 사이에 작성함. 주석은 해석기(parser)가 무시하며 실행되지 않음.

6. 문
-프로그램(스크립트)은 컴퓨터(Client-side Javascript의 경우, 엄밀히 말하면 웹 브라우저)에 의해 단계별로 수행될 명령들의 집합임.
-각각의 명령을 문(statement)이라 하며 문이 실행되면 무슨 일인가가 일어나게 됨.
-문은 리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성되며 세미콜론( ; )으로 끝나야 함.

7. 표현식
-표현식(Expression)은 하나의 값으로 평가(Evaluation)됨.

8. 문과 표현식의 비교

9. 함수

10. 객체

11. 배열
-배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용함. 자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함하고 있음.

(6) 데이터 타입과 변수

(7) 연산자
3. 연산자란?
// 산술 연산자
5 * 4 // 20

// 문자열 연결 연산자
'My name is ' + 'Lee' // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
3 > 5 // false

// 논리 연산자
(5 > 3) && (2 < 4)  // true

// 타입 연산자
typeof 'Hi' // "string"

6. 비교 연산자
// 동등 비교
5 == 5    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 같은 값을 가짐.
5 == '5'   //true
5 == 8    // false

8. 논리 연산자
// 논리합(||) 연산자
true || true   // true
true || false  // true
false || true  // true
false || false // false

// 논리곱(&&) 연산자
true && true   // true
true && false  // false
false && true  // false
false && false // false

// 논리 부정(!) 연산자
!true  // false
!false // true

(8) 제어문
2. 조건문
-조건문(conditional statement)은 주어진 조건식(conditional expression)의 평가 결과에 따라 코드 블럭(블록문)의 실행을 결정함. 조건식은 불리언 값으로 평가될 수 있는 표현식임.
2.1 if..else 문
if (조건식1) {
  // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2) {
  // 조건식2이 참이면 이 코드 블록이 실행된다.
} else {
  // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}
2.2 switch문
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = 'January';
  case 2:
    monthName = 'February';
  case 3:
    monthName = 'March';
  case 4:
    monthName = 'April';
  case 5:
    monthName = 'May';
  case 6:
    monthName = 'June';
  case 7:
    monthName = 'July';
  case 8:
    monthName = 'August';
  case 9:
    monthName = 'September';
  case 10:
    monthName = 'October';
  case 11:
    monthName = 'November';
  case 12:
    monthName = 'December';
  default:
    monthName = 'Invalid month';
}

console.log(monthName); // Invalid month

3. 반복문
3.1 for문
for (var i = 0; i < 2; i++) {
  console.log(i);
}
3.2 while문
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2
3.3 do...while문
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2

4. break문
if (true) {
  break; // Uncaught SyntaxError: Illegal break statement
}

5. continue문
var string = 'Hello World.';
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== 'l') continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); // 3

(9) 타입 변환과 단축 평가

(10) 객체

(11) 객체와 변경불가성(Immutability)

(12) 함수
1. 함수 정의
-함수를 정의하는 방식은 3가지가 있음.
  -함수 선언문
  -함수 표현식
  -Function 생성자 함수
1.1 함수 선언문
-함수명: 함수 선언문의 경우, 함수명은 생략할 수 없음. 함수명은 함수 몸체에서 자신을 재귀적(recursive) 호출하거나 자바스크립트 디버거가 해당 함수를 구분할 수 있는 식별자임.
-매개변수 목록: 0개 이상의 목록으로 괄호로 감싸고 콤마로 분리함. 다른 언어와의 차이점은 매개변수의 타입을 기술하지 않는다는 것임. 이 때문에 함수 몸체 내에서 매개변수의 타입 체크가 필요할 수 있음
-함수 몸체: 함수가 호출되었을 때 실행되는 문들의 집합임. 중괄호({ })로 문들을 감싸고 return 문으로 결과값을 반환할 수 있음. 이를 반환값(return value)라 함.
1.2 함수 표현식
-무명의 리터럴로 표현이 가능함.
-변수나 자료 구조(객체, 배열…)에 저장할 수 있음.
-함수의 파라미터로 전달할 수 있음.
-반환값(return value)으로 사용할 수 있음.
1.3 Function 생성자 함수
-함수 표현식으로 함수를 정의할 때 함수 리터럴 방식을 사용함. 함수 선언문도 내부적으로 자바스크립트 엔진이 기명 함수 표현식으로 변환하므로 결국 함수 리터럴 방식을 사용함. 따라서 함수 선언문과 함수 표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데 이것은 결국 내장 함수 Function 생성자 함수로 함수를 생성하는 것을 단순화시킨 short-hand(축약법)임.
-Function 생성자 함수는 Function.prototype.constructor 프로퍼티로 접근할 수 있음.

2. 함수 호이스팅

3. First-class object(일급 객체)

4. 매개변수(Parameter, 인자)
-함수의 작업 실행을 위해 추가적인 정보가 필요할 경우, 매개변수를 지정함. 매개변수는 함수 내에서 변수와 동일하게 동작함.
4.1 매개변수(parameter, 인자) vs 인수(argument)
-매개변수는 함수 내에서 변수와 동일하게 메모리 공간을 확보하며 함수에 전달한 인수는 매개변수에 할당됨. 만약 인수를 전달하지 않으면 매개변수는 undefined로 초기화됨.
4.2 Call-by-value
-원시 타입 인수는 Call-by-value(값에 의한 호출)로 동작한다. 이는 함수 호출 시 원시 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값을 복사하여 함수로 전달하는 방식임. 이때 함수 내에서 매개변수를 통해 값이 변경되어도 전달이 완료된 원시 타입 값은 변경되지 않음.
4.3 Call-by-reference
-객체형(참조형) 인수는 Call-by-reference(참조에 의한 호출)로 동작함. 이는 함수 호출 시 참조 타입 인수를 함수에 매개변수로 전달할 때 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달되는 방식임. 이때 함수 내에서 매개변수의 참조값이 이용하여 객체의 값을 변경했을 때 전달되어진 참조형의 인수값도 같이 변경됨.

5. 반환값
-함수는 자신을 호출한 코드에게 수행한 결과를 반환(return)할 수 있다. 이때 반환된 값을 반환값(return value)이라 함.
  -return 키워드는 함수를 호출한 코드(caller)에게 값을 반환할 때 사용함.
  -함수는 배열 등을 이용하여 한 번에 여러 개의 값을 리턴할 수 있음.
  -함수는 반환을 생략할 수 있음. 이때 함수는 암묵적으로 undefined를 반환함.
  -자바스크립트 해석기는 return 키워드를 만나면 함수의 실행을 중단한 후, 함수를 호출한 코드로 되돌아감. 만일 return 키워드 이후에 다른 구문이 존재하면 그 구문은 실행되지 않음.

(13) 타입 체크

(14) 프로토타입

(15) 스코프

(16) 보다 안정적인 자바스트립트 개발 환경을 위한 Strict mode

(17) 함수 호출 방식에 의해 결정되는 this
1. 함수 호출
-전역객체(Global Object)는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 Browser-side에서는 window, Server-side(Node.js)에서는 global 객체를 의미함.
// in browser console
this === window // true

// in Terminal
node
this === global // true

2. 메소드 호출
-함수가 객체의 프로퍼티 값이면 메소드로서 호출됨. 이때 메소드 내부의 this는 해당 메소드를 소유한 객체, 즉 해당 메소드를 호출한 객체에 바인딩됨.
var obj1 = {
  name: 'Lee',
  sayName: function() {
    console.log(this.name);
  }
}

var obj2 = {
  name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();

3. 생성자 함수 호출
-자바스크립트의 생성자 함수는 말 그대로 객체를 생성하는 역할을 함. 하지만 자바와 같은 객체지향 언어의 생성자 함수와는 다르게 그 형식이 정해져 있는 것이 아니라 기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작함.
// 생성자 함수
function Person(name) {
  this.name = name;
}

var me = new Person('Lee');
console.log(me); // Person&nbsp;{name: "Lee"}

// new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수로 동작하지 않는다.
var you = Person('Kim');
console.log(you); // undefined

(18) 클로저

(19) 자바스크립트 객체지향 프로그래밍

(20) 빌트인 객체

(21) 전역 객체

(22) Number 레퍼 객체

(23) 수학 상수와 함수를 위한 Math 객체

(24) 날짜와 시간을 위한 Date 객체

(25) 정규표현식
1. 정규표현식(Regular Expression)
const tel = '0101234567팔';

// 정규 표현식 리터럴
const myRegExp = /^[0-9]+$/;

console.log(myRegExp.test(tel)); // false

(26) String 레퍼 객체

(27) 배열
1. 배열의 생성
1.1 배열 리터럴
-0개 이상의 값을 쉼표로 구분하여 대괄호([])로 묶음. 첫번째 값은 인덱스 ‘0’으로 읽을 수 있음. 존재하지 않는 요소에 접근하면 undefined를 반환함.
const emptyArr = [];

console.log(emptyArr[1]); // undefined
console.log(emptyArr.length); // 0

const arr = [
  'zero', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine'
];

console.log(arr[1]);      // 'one'
console.log(arr.length);  // 10
console.log(typeof arr);  // object
1.2 Array() 생성자 함수
-배열은 일반적으로 배열 리터럴 방식으로 생성하지만 배열 리터럴 방식도 결국 내장 함수 Array() 생성자 함수로 배열을 생성하는 것을 단순화시킨 것임. Array() 생성자 함수는 Array.prototype.constructor 프로퍼티로 접근할 수 있음.
-Array() 생성자 함수는 매개변수의 갯수에 따라 다르게 동작함.
-매개변수가 1개이고 숫자인 경우 매개변수로 전달된 숫자를 length 값으로 가지는 빈 배열을 생성함.
const arr = new Array(2);
console.log(arr); // (2) [empty × 2]

(28) 자바스크립트 배열은 배열이 아니다

(29) 배열 고차 함수

(30) 문서 객체 모델(Document Object Model)

(31) 동기식 처리 모델 vs 비동기식 처리 모델

(32) 이벤트

(33) 디바이스의 방향 정보를 다루는 자바스크립트 이벤트

(34) 비동기식 처리 모델과 Ajax

(35) REST(Representational State Transfer) API

(36) Single Page Application & Routing