(2) HTML5 기본 문법
1. HTML5
-웹페이지의 내용(content)과 구조(structure)을 담당하는 언어로써 HTML 태그를 통해 정보를 구조화하는 것.

2. Hello HTML 5
-HTML5 문서는 반드시 <!DOCTYPE html>으로 시작하여 문서형식을 HTML5로 지정함.
-실제적인 HTML document은 2행부터 시작, <html>과 </html> 사이에 기술함.
-웹브라우저에 출력되는 모든 요소는 <body>와 </body> 사이에 위치함.

3. HTML5의 기본 문법
3.1 요소(Element)
-HTML 요소는 시작 태그(start tag)와 종료 태그(end tag) 그리고 태그 사이에 위치한 content로 구성됨.
 ex) <p>(시작 태그)Hello(콘텐츠)</p>(종료 태그)
3.2 어트리뷰트(Attribute)
-요소의 성질, 특성을 정의하는 명세
-요소는 어트리뷰트를 가질 수 있으며 어트리뷰트는 요소에 추가적 정보(예를 들어 이미지 파일의 경로, 크기 등)을 제공함.
-어트리뷰트는 시작 태그에 위치해야 하며 이름과 값의 쌍을 이룸. (e.g. name="value")
 ex) <img src(어트리뷰트명)="html.jpg" width="104" height="142"(어트리뷰트값)>
     -> src는 이미지 파일의 경로와 파일명, width는 이미지의 너비, height는 이미지의 높이 정보를 브라우저에 알려줌. 이 정보들을 사용하여 브라우저는 img 요소를 화면에 출력함.

(3) 시맨틱 요소와 검색 엔진
1. 시맨틱 태그(Semantic tag)
header: 헤더
nav: 내비게이션
aside: 사이드에 위치하는 공간
section: 본문의 여러 내용(article)을 포함하는 공간
article: 본문의 주내용이 들어가는 공간
footer: 푸터

(4) 웹페이지의 구성하는 기본 태그
1. 문서 형식 정의 tag
HTML5: <!DOCTYPE html>
HTML 4.01: <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://ww.w3.org/TR/html4/loose.dtd">
XHTML 1.0: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

2. html tag
-html 태그는 모든 HTML 요소의 부모 요소이며 웹페이지에 하나만 존재함. 즉, 모든 요소는 html 요소의 자식 요소이며 html 요소 내부에 기술해야 함.

3. head tag
-head 요소는 메타데이터를 포함하기 위한 요소이며 웹페이지에 단 하나만 존재함.
-head 요소에는 메타데이터 이외의 화면에 표시되는 일체의 요소를 포함시킬 수 없음.
3.1 title tag
-title 요소는 문서의 제목을 정의함. 정의된 제목은 브라우저의 탭에 표시됨
3.2 style tag
-style 요소에는 HTML 문서를 위한 style 정보를 정의함.
ex) <style>
      body {
        background-color: yellow;
        color: blue;
      }
    </style>
3.3 link tag
-link 요소에는 외부 리소스와의 연계 정보를 정의함. 주로 HTML과 외부 CSS 파일을 연계에 사용됨.
ex) <link rel="stylesheet" href="style.css">
3.4 script tag
-script 요소에는 client-side JavaScript를 정의함.
3.5 meta tag
-meta 요소는 description, keywords, author, 기타 메타데이터 정의에 사용됨. 메타데이터는 브라우저, 검색엔진(keywords) 등에 의해 사용됨.
-charset 어트리뷰트는 브라우저가 사용하 문자셋을 정의함.
ex) <meta charset="utf-8">
    <meta name="keywords", content="HTML, CSS, XML, XHTML, JavaScript">
    -> SEO(검색엔진 최적화)를 위해 검색엔진이 사용할 keywords을 정의함.
    <meta name="description" content="Web tutorials on HTML and CSS">
    -> 웹페이지의 설명을 정의함.
    <meta name="author" content="John Doe">
    -> 웹페이지의 저자를 명기함.
    <meta http-equiv="refresh" content="30">
    -> 웹페이지를 30초마다 Refresh함.
4. body tag
-body tag는 HTML 문서의 내용을 나타내며 웹페이지에 단 하나만 존재함. 메타데이터를 제외한 웹페이지를 구성하는 대부분의 요소가 body 요소 내에 기술됨.

(5) 텍스트 관련 태그
1. 제목(Headings) 태그
-Heading 태그는 제목을 나타낼 때 사용하며 h1에서 h6까지의 태그가 있음. h1이 가장 중요한 제목을 의미하며 글자의 크기도 가장 큼.
ex) <!DOCTYPE html>
    <html>
      <body>
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <h4>heading 4</h4>
        <h5>heading 5</h5>
        <h6>heading 6</h6>
    </body>
</html>

2. 글자 형태(Text Formatting) 태그
2.1 b
-bold체를 지정함.
2.2 strong
-b tag와 동일하게 bold체를 지정함.
2.3 i
-Italic체를 지정함.
2.4 em
-emphasized(강조, 중요한) text를 지정함.
-i tag와 동일하게 Italic체로 표현됨.
2.5 small
-small text를 지정함.
2.6 mark
-highlighted text를 지정함.
2.7 del
-deleted(removed) text를 지정함.
2.8 ins
-inserted(added) text를 지정함.
2.9 sub/sup
-sub 태그는 subscripted(아래에 쓰인) text를 sup 태그는 superscripted(위에 쓰인) text를 지정함.

3. 본문 태그
3.1 p
-단락(Paragraphs)을 지정함.
3.2 br
-br tag는 (강제)개행(line break)을 지정함.
-br tag는 빈 요소(empty element)로 종료 태그가 없음.
-HTML에서는 1개 이상의 연속된 공백(space)을 삽입하여도 1개의 공백으로 표시됨. 1개 이상의 연속된 줄바꿈(enter)도 1개의 공백으로 표시됨.
-연속된 공백을 삽입하는 방법
 ex) <!DOCTYPE html>
     <html>
       <body>
         <p>This is&nbsp; a para&nbsp; &nbsp; graph</p>
        </body>
    </html>
3.3 pre
-형식화된(preformatted) text를 지정함.
-pre 태그 내의 content는 작성된 그대로 브라우저에 표시됨.
3.4 hr
-수평줄을 삽입함.
3.5 q
-짧은 인용문(quotation)을 지정함.
-브라우저는 인용부호(큰따옴표/quotation marks)로 q 요소를 감쌈.
3.6 blockquote
-긴 인용문 블록을 지정함.
-브라우저는 blockquote 요소를 들여쓰기함.
-css를 이용하여 다양한 style을 적용할 수 있음.

(6) HTML의 핵심 개념인 Hyperlink
1. href 어트리뷰트
-href 어트리뷰트는 이동하고자 하는 파일의 위치(경로)값으로 받음. 경로(path)란 파일 시스템 상에서 특정 파일의 위치를 의미함.
1.1 디렉터리(Directory)
-디렉터리는 파일과 다른 디렉터리를 갖는 파일 시스템 내의 존재물로서 폴더라고도 불림.
1.2 파일 경로(File path)
-파일 경로는 파일 시스템에서 파일의 위치를 나타내는 방법임. 경로에는 절대 경로와 상대 경로가 있음.

2. target 어트리뷰트
-target 어트리뷰트는 링크를 클릭했을 떄 윈도우를 어떻게 오픈할 지를 지정함.
-_self: 링크를 클릭했을 때 연결문서를 현재 윈도우에서 오픈함. (기본값)
-_blank: 링크를 클릭했을 때 연결문서를 새로운 윈도우나 탭에서 오픈함.
ex) <!DOCTYPE html>
    <html>
      <body>
        <a href="http://www.goole.com" target="_blank" rel="noopener noreferrer">Visit goole.com!</a>
      </body>
    </html>

(7) 목록(List)와 표(Table) 형식 표현을 위한 태그
1. 목록(List)
1.1 순서없는 목록(Unordered List)
<!DOCTYPE html>
<html>
  <body>
    <h2>순서없는 목록(Unordered List)</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
1.2 순서있는 목록(Ordered List)
<!DOCTYPE html>
<html>
  <body>
    <h2>순서있는 목록(Ordered List)</h2>
    <ol>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
  </body>
</html>
-type 어트리뷰트를 사용하여 순서를 나타내는 문자를 지정할 수 있음.
  -"1": 숫자 (기본값)
  -"A": 대문자 알파벳
  -"a": 소문자 알파벳
  -"I": 대문자 로마숫자
  -"i": 소문자 로마숫자
-start 어트리뷰트로 리스트의 시작값을 지정할 수 있음.
<ol start="3">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
-reversed 어트리뷰트를 지정하면 리스트의 순서값을 역으로 표현함.
<ol reversed>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
1.3 중첩 목록
<!DOCTYPE html>
<html>
  <body>
    <h2>중첩 목록</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea
        <ol>
          <li>Black tea</li>
          <li>Green tea</li>
        </ol>
      </li>
      <li>Milk</li>
    </ul>
  </body>
</html>

2. 테이블
-표(table)를 만들 때 사용하는 태그
-모던 웹에서는 주로 공간 분할 태그인 div 태그를 사용하여 레이아웃을 구성함.
  -table: 표를 감싸는 태그
  -tr: 표 내부의 행(table row)
  -th: 행 내부의 제목 셀(table heading)
  -td: 행 내부의 일반 셀(table data)
-테이블 태그의 어트리뷰트
  -border: 표 테두리 두께 지정.
  -rowspan: 해당 셀이 점유하는 행의 수 지정
  -colspan: 해당 셀이 점유하는 열의 수 지정

(8) 이미지의 표현과 동영상, 음악 등 멀티미디어를 지원하는 태그
1. 이미지
-웹페이지에 이미지를 삽입하는 경우, img tag를 사용함.
  -src: 이미지 파일 경로
  -alt: 이미지 파일이 없을 경우 표시되는 문장
  -width: 이미지의 너비
  -height: 이미지의 높이

2. 미디어
2.1 audio
-audio 태그는 HTML5에서 새롭게 추가된 태그임.
  -src: 음악 파일 경로
  -preload: 재생 전에 음악 파일을 모두 불러올 것인지 지정
  -autoplay: 음악 파일을 자동의 재생 개시할 것인지 지정
  -loop: 음악을 반복할 것인지 지정
  -controls: 음악 재생 도구를 표시할 것인지 지정
2.2 비디오
-video 태그는 HTML5에서 새롭게 추가된 태그
  -src: 동영상 파일 경로
  -poster: 동영상 준비 중에 표시될 이미지 파일 경로
  -preload:	재생 전에 동영상 파일을 모두 불러올 것인지 지정
  -autoplay: 동영상 파일을 자동의 재생 개시할 것인지 지정
  -loop: 동영상을 반복할 것인지 지정
  -controls: 동영상 재생 도구를 표시할 것인지 지정
  -width: 동영상의 너비를 지정
  -height: 동영상의 높이를 지정

(9) 사용자와의 커뮤니케이션을 위한 폼 태그
1. form
-form 태그는 사용자가 입력한 데이터를 수집하기 위해 사용되며 input, textarea, button, select, checkbox, radio button, submit button 등의 입력 양식 태그를 포함할 수 있음.

2. input
-input 태그는 form 태그 중에서 가장 중요한 태그로 사용자로부터 데이터를 입력받기 위해 사용됨.
-input 태그는 다양한 종류가 있는데 type 어트리뷰트에 의해 구분됨.

3. select
-select: select form 생성
-option: option 생성
-optgroup: option을 그룹화

4. textarea
-textarea 태그는 여러 줄의 글자를 입력할 때 사용함.

5. button
-button 태그는 클릭할 수 있는 버튼을 생성

6. fieldset/legend
-fieldset 태그는 관련된 입력 양식들을 그룹화할 때 사용

(10) 웹페이지의 레이아웃을 구성하기 위해 공간을 분할하는 태그
-공간을 분할할 수 있는 태그는 div, span, table 등이 있는데, 과거에는 table 태그를 사용하여 레이아웃을 구성하기도 하였으나 모던 웹에서는 주로 div를 사용하여 레이아웃을 구성함.
-그런데 div 태그는 의미론적으로 어떠한 의미도 가지고 있지 않기 때문에 아래와 같이 HTML5에서 새롭게 추가된 시맨틱 태그를 사용하는 것이 더 나은 방법이나 IE에서 작동하지 않기 때문에 주의가 필요함.
-header: 헤더
-nav: 내비게이션
-aside: 사이드에 위치하는 공간
-section: 본문의 여러 내용(article)을 포함하는 공간
-article: 본문의 주내용이 들어가는 공간
-footer: 푸터