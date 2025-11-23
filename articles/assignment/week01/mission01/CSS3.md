(1) CSS 기본 문법
1. 셀렉터(Selector, 선택자)
-CSS는 HTML 요소의 style(design, layout etc)을 정의하는데 사용됨. 이를 위해서 선행되어야하는 것은 스타일을 적용하고자 하는 HTML 요소를 선택할 수 있어야 함.
-셀렉터는 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단임.

2. 프로퍼티(Property/속성)
-셀렉터로 HTML 요소를 선택하고 {} 내에 프로퍼티(속성)와 값을 지정하는 것으로 다양한 style을 정의할 수 있음.
-프로퍼티는 표준 스펙으로 이미 지정되어 있는 것을 사용하여야하며 사용자가 임의로 정의할 수 없음.
-여러 개의 프로퍼티를 연속해서 지정할 수 있으며 세미콜론(;)으로 구분함.

3. 값(Value/속성값)
-셀렉터로 지정한 HTML 요소에 style을 적용하기 위해 프로퍼티를 사용함. 프로퍼티의 값은 해당 프로퍼티에 사용할 수 있는 값을 “키워드”나 “크기 단위” 또는 “색상 표현 단위” 등의 특정 단위로 지정하여야 함.

4. HTML과 CSS의 연동
-HTML은 CSS를 포함할 수 있음.
4.1 Link style
-HTML에서 외부에 있는 CSS 파일을 로드하는 방식임. 가장 일반적으로 사용됨.
4.2 Embedding style
4.3 Inline sytle

(2) 셀렉터
1. 전체 셀렉터(Universal Selector)
-*: HTML 문서 내의 모든 요소를 선택함. html 요소를 포함한 모든 요소가 선택됨. (head 요소도 포함)

2. 태그 셀렉터(Type Selector)
-태그명: 지정된 태그명을 가지는 요소를 선택함.

3. ID 셀렉터(ID Selector)
-#id 어트리튜브 값: id 어트리뷰트 값을 지정하여 일치하는 요소를 선택함. id 어트리뷰트 값은 중복될 수 없는 유일한 값임.

4. 클래스 셀렉터(Class Selector)
-.class 어트리뷰트 값: class 어트리뷰트 값을 지정하여 일치하는 요소를 선택함. class 어트리뷰트 값은 중복될 수 있음.

5. 어트리뷰트 셀렉터(Attribute Selector)
-셀렉터[어트리뷰트]: 지정된 어트리뷰트를 갖는 모든 요소를 선택함.
-셀렉터[어트리뷰트="값"]: 지정된 어트리뷰트를 가지며 지정된 값과 어트리뷰트의 값이 일치하는 모든 요소를 선택함.
-셀렉터[어트리뷰트~=”값”]: 지정된 어트리뷰트의 값이 지정된 값을 (공백으로 분리된) 단어로 포함하는 요소를 선택함.
-셀렉터[어트리뷰트|=”값”]: 지정된 어트리뷰트의 값과 일치하거나 지정 어트리뷰트 값 뒤 연이은 하이픈(“값-“)으로 시작하는 요소를 선택함.
-셀렉터[어트리뷰트^=”값”]: 지정된 어트리뷰트 값으로 시작하는 요소를 선택함.
-셀렉터[어트리뷰트$=”값”]: 지정된 어트리뷰트 값으로 끝나는 요소를 선택함.
-셀렉터[어트리뷰트*=”값”]: 지정된 어트리뷰트 값을 포함하는 요소를 선택함.

6. 복합 셀렉터(Combinator)
6.1 후손 셀렉터(Descendant Combinator)
-자신의 1 level 상위에 속하는 요소를 부모 요소, 1 level 하위에 속하는 요소를 자손 요소(자식 요소)라함.
-자신보다 n level 하위에 속하는 요소는 후손 요소(하위 요소)라 함.
-후손 셀렉터는 셀렉터A의 모든 후손(하위) 요소 중 셀렉터B와 일치하는 요소를 선택함.
6.2 자식 셀렉터(Child Combinator)
-자손 셀렉터는 셀렉터A의 모든 자식 요소 중 셀렉터B와 일치하는 요소를 선택함.
6.3 형제(동위) 셀렉터(Sibling Combinator)
-형제(동위) 셀렉터는 형제 관계(동위 관계)에서 뒤에 위치하는 요소를 선택할 때 사용함.
6.3.1 인접 형제 셀렉터(Adjacent Sibling Combinator)
-셀렉터A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터B 요소를 선택함. A와 B 사이에 다른 요소가 존재하면 선택되지 않음.
6.3.2 일반 형제 셀렉터(General Sibling Combinator)
셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소를 모두 선택함.
 
7. 가상 클래스 셀렉터(Pseudo-Class Selector)
-가상 클래스는 요소의 특정 상태에 따라 스타일을 정의할 때 사용됨. 특정 상태란 예를 들어 다음과 같음.
  -마우스가 올라와 있을때
  -링크를 방문했을 때와 아직 방문하지 않았을 때
  -포커스가 들어와 있을 때
-이러한 특정 상태에는 원래 클래스가 존재하지 않지만 가상 클래스를 임의로 지정하여 선택하는 방법임.
-가상 클래스는 마침표(.) 대신 콜론(:)을 사용함. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없음.

8. 가상 요소 셀렉터(Pseudo-Element Selector)
가상 요소는 요소의 특정 부분에 스타일을 적용하기 위하여 사용된다. 특정 부분이란 예를 들어 다음과 같음.
  -요소 콘텐츠의 첫글자 또는 첫줄
  -요소 콘텐츠의 앞 또는 뒤
-가상 요소에는 두개의 콜론(::)을 사용함. CSS 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용할 수 없음.

(3) CSS 프로퍼티 값의 단위
1. 키워드

2. 크기 단위
-cm, mm, inch 등의 단위도 존재하나 CSS에서 사용하는 대표적인 크기 단위는 px, em, %임.
-px은 절대값이고 em, %는 상대값임.
-대부분 브라우저의 폰트 사이즈 기본값은 16px, 1em, 100%임. 프로퍼티 값이 0인 경우, 단위를 생략할 수 있음.

3. 색상 표현 단위
-색상을 지정하기 위해 키워드(red, blue…)를 사용할 수 있다. 사용이 간편하다는 장점이 있으나 표현할 수 있는 색상의 수는 제한됨.

(4) 박스 모델
1. width/height 프로퍼티
-width와 height 프로퍼티는 요소의 너비와 높이를 지정하기 위해 사용됨.
-overflow: hidden;을 지정하면 넘친 콘텐츠를 감출 수 있음.

2. margin/padding 프로퍼티
-margin / padding 프로퍼티는 content의 4개 방향(top, right, left, bottom)에 대하여 지정이 가능함.

3. border 프로퍼티
3.1 border-style
-테두리 선의 스타일을 지정함.
3.2 border-width
-테두리의 두께를 지정함. 프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능함.
3.3 border-color
-테두리의 색상을 지정함. 프로퍼티 값의 갯수에 따라 4개 방향(top, right, left, bottom)에 대하여 지정이 가능함.
3.4 border-radius
-테두리 모서리를 둥글게 표현하도록 지정한다. 프로퍼티 값은 길이를 나타내는 단위(px, em 등)와 %를 사용함. 각각의 모서리에 border-radius 프로퍼티를 개별적으로 지정할 수도 있고 4개의 모서리를 short-hand로 한번에 지정할 수도 있음.
3.5 border
-border-width, border-style, border-color를 한번에 설정하기 위한 shorthand 프로퍼티임.

(5) display, visibility, opacity 프로퍼티
1. display 프로퍼티
-block: block 특성을 가지는 요소(block 레벨 요소)로 지정
-inline: inline 특성을 가지는 요소(inline 레벨 요소)로 지정
-inline-block: inline-block 특성을 가지는 요소(inline-block 레벨 요소)로 지정
-none: 해당 요소를 화면에 표시하지 않음 (공간조차 사라짐)
1.1 block 레벨 요소
-block 특성을 가지는 요소(block 레벨 요소 또는 block 요소)는 아래와 같은 특징을 가짐.
-항상 새로운 라인에서 시작함.
-화면 크기 전체의 가로폭을 차지함. (width: 100%)
-width, height, margin, padding 프로퍼티 지정이 가능함.
-block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있음.
-block 레벨 요소 예
  -div
  -h1 ~ h6
  -p
  -ol
  -ul
  -li
  -hr
  -table
  -form
1.2 inline 레벨 요소
-inline 특성을 가지는 요소(inline 레벨 요소 또는 inline 요소)는 아래와 같은 특징을 가짐.
-새로운 라인에서 시작하지 않으며 문장의 중간에 들어갈 수 있음. 즉, 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치함.
-content의 너비만큼 가로폭을 차지함.
-width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없음. 상, 하 여백은 line-height로 지정함.
-inline 레벨 요소 뒤에 공백(엔터, 스페이스 등)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정됨.
-inline 레벨 요소 내에 block 레벨 요소를 포함할 수 없다. inline 레벨 요소는 일반적으로 block 레벨 요소에 포함되어 사용됨.
-inline 레벨 요소 예
  -span
  -a
  -strong
  -img
  -br
  -input
  -select
  -textarea
  -button
1.3 inline-block 레벨 요소
-block과 inline 레벨 요소의 특징을 모두 가짐. inline 레벨 요소와 같이 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정할 수 있음.
  -기본적으로 inline 레벨 요소와 흡사하게 줄을 바꾸지 않고 다른 요소와 함께 한 행에 위치시킬 수 있음.
  -block 레벨 요소처럼 width, height, margin, padding 프로퍼티를 모두 정의할 수 있음. 상, 하 여백을 margin과 line-height 두가지 프로퍼티 모두를 통해 제어할 수 있음.
  -content의 너비만큼 가로폭을 차지함.-inline-block 레벨 요소 뒤에 공백(엔터, 스페이스 등)이 있는 경우, 정의하지 않은 space(4px)가 자동 지정됨.

2. visibility 프로퍼티
-visibility 프로퍼티는 요소를 보이게 할 것인지 보이지 않게 할 것인지를 정의함. 즉, 요소의 렌더링 여부를 결정함.
  -visible: 해당 요소를 보이게 한다 (기본값)
  -hidden: 해당 요소를 보이지 않게 함. display: none;은 해당 요소의 공간까지 사라지게 하지만 visibility: hidden;은 해당 요소의 공간은 사라지지 않고 남아있게 됨.
  -collapse: table 요소에 사용하며 행이나 열을 보이지 않게 함.
  -none: table 요소의 row나 column을 보이지 않게 함. IE, 파이어폭스에서만 동작하며 크롬에서는 hidden과 동일하게 동작함.

3. opacity 프로퍼티
-요소의 투명도를 정의함. 0.0 ~ 1.0의 값을 입력하며 0.0은 투명, 1.0은 불투명을 의미함.

(6) 백그라운드
1. background-image 프로퍼티
요소에 배경 이미지를 지정함.

2. background-repeat 프로퍼티
-배경 이미지의 반복을 지정함. 수직, 수평 또는 수직과 수평 모두의 반복을 지정할 수 있음.
-설정된 이미지의 크기가 화면보다 작으면 자동으로 이미지가 반복 출력되어 화면을 채우게 됨. 이것은 background-repeat 프로퍼티의 기본값이 repeat이기 때문임.
-x축으로만 배경 이미지를 반복할 경우, background-repeat 프로퍼티값에 repeat-x, y축으로만 배경 이미지를 반복할 경우, repeat-y를 설정함.
-반복 출력을 멈추고 싶은 경우, background-repeat 프로퍼티값에 no-repeat를 설정함.
-background-image에 복수개의 이미지를 설정할 경우, 먼저 설정된 이미지가 전면에 출력됨.

3. background-size 프로퍼티
-배경 이미지의 사이즈를 지정함. 배경 이미지의 고유 비율을 유지하기 때문에 설정에 따라 이미지의 일부가 보이지 않을 수 있음.
-프로퍼티값은 px, %, cover, contain 등을 사용함.
-배경이미지의 width, height를 모두 설정할 수 있음. 이때 첫번째 값은 width, 두번째 값은 height를 의미함. 하나의 값만을 지정한 경우, 지정한 값은 width를 의미하게 되며 height는 auto로 지정됨.
-px값 지정
  -배경이미지 크기가 지정된 px값 그대로 설정됨. 첫번째 값은 width, 두번째 값은 height를 의미함.
-%값 지정
  -배경이미지 크기가 지정된 %값에 비례하여 설정됨. 첫번째 값은 width, 두번째 값은 height를 의미함.
  -화면을 줄이거나 늘리면 배경이미지의 크기도 따라서 변경되어 찌그러지는 현상이 나타남.
-cover 지정
  -배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 width, height 중 큰값에 배경이미지를 맞춤. 따라서 이미지의 일부가 보이지 않을 수 있음.
-contain 지정
  -배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 영역에 배경이미지가 보이지 않는 부분없이 전체가 들어갈 수 있도록 이미지 스케일을 조정함.
  -width, height의 프로퍼티값은 공백으로 구분하여야 함. 프로퍼티값을 쉼표로 구분하면 다른 배경이미지의 너비를 지정하는 것으로 인식되기 때문에 주의가 필요함.

4. background-attachment 프로퍼티
-일반적으로 화면을 스크롤하면 배경 이미지도 함께 스크롤됨. 화면이 스크롤되더라도 배경이미지는 스크롤되지 않고 고정되어 있게 하려면 background-attachment 프로퍼티에 fixed 키워드를 지정함.

5. background-position 프로퍼티
-일반적으로 background-image는 좌상단부터 이미지를 출력함. 이때 background-position 프로퍼티를 사용하면 이미지의 좌표(xpos, ypos)를 지정 할 수 있음.
-기본값은 background-position: 0% 0%;로 배경이미지는 우측 상단에 위치하게 됨.

6. background-color 프로퍼티
-요소의 배경 색상을 지정함. 색상값 또는 transparent 키워드를 지정할 수 있음.

7. background Shorthand
-background-color, background-image, background-repeat, background-position를 한번에 정의하기 위한 Shorthand Syntax임.

(7) 폰트와 텍스트
1. font-size 프로퍼티
-텍스트의 크기를 정의함.

2. font-family 프로퍼티
-폰트를 지정함. 컴퓨터에 해당 폰트가 설치되어 있지 않으면 적용되지 않음.

3. font-style/font-weight 프로퍼티
-font-style 프로퍼티는 이탤릭체의 지정, font-weight 프로퍼티는 폰트 굵기 지정에 사용됨.
  -font-style
  -font-weight

4. font Shorthand
-Shorthand Syntax

5. line-height 프로퍼티
-텍스트의 높이를 지정함. 텍스트 수직 정렬에도 응용되어 사용됨.
  -line-height

6. letter-spacing 프로퍼티
-글자 사이의 간격을 지정함.

7. text-align 프로퍼티
-텍스트의 수평 정렬을 정의함.

8. text-decoration 프로퍼티
-text-decoration 프로퍼티를 사용하여 링크 underline을 제거할 수 있음. 또는 텍스트에 underline, overline, line-through를 추가할 수도 있음.

9. white-space 프로퍼티
-white space는 공백(space), 들여쓰기(tab), 줄바꿈(line break)을 의미함. html은 기본적으로 연속된 공백(space), 들여쓰기(tab)는 1번만 실행되며 줄바꿈(line break)은 무시됨. 또한 텍스트는 부모의 가로 영역을 벗어나지 않고 자동 줄바꿈(wrap)됨. white-space 프로퍼티는 이러한 기본 동작을 제어하기 위한 프로퍼티임.

10. text-overflow 프로퍼티
-부모 영역을 벗어난 wrapping(자동줄바꿈)이 되지 않은 텍스트의 처리 방법을 정의함. 이 프로퍼티를 사용하기 위해서는 아래의 조건이 필요함.
  -width 프로퍼티가 지정되어 있어야 한다. 이를 위해 필요할 경우 block 레벨 요소로 변경하여야 함.
  -자동 줄바꿈을 방지하려면 white-space 프로퍼티를 nowrap으로 설정함.
  -overflow 프로퍼티에 반드시 “visible” 이외의 값이 지정되어 있어야 함.

11. word-wrap 프로퍼티
-한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 정의함. link 등을 표기할 때(ex. https://poiemaweb.com/css3-font-text) 그 길이가 매우 길어지는데 이 프로퍼티를 사용하지 않으면 부모 영역을 넘어가게 됨.

12. word-break 프로퍼티
-한 단어의 길이가 길어서 부모 영역을 벗어난 텍스트의 처리 방법을 정의함.
-word-wrap 프로퍼티는 단어를 어느 정도는 고려하여 개행하지만(.,- 등을 고려함) word-break: break-all;는 단어를 고려하지 않고 부모 영역에 맞추어 강제 개행함.

(8) 요소의 위치 정의
1. position 프로퍼티
-position 프로퍼티는 요소의 위치를 정의함. top, bottom, left, right 프로퍼티와 함께 사용하여 위치를 지정함.
1.1 static (기본위치)
-static은 position 프로퍼티의 기본값으로 position 프로퍼티를 지정하지 않았을 때와 같음.
-기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치되며 부모 요소 내에 자식 요소로서 존재할 때는 부모 요소의 위치를 기준으로 배치됨.
-기본적으로 이 값을 지정할 일은 없지만 이미 설정된 position을 무력화하기 위해 사용될 수 있음.
-좌표 프로퍼티(top, bottom, left, right)를 같이 사용할 수 없으며 사용할 경우에는 무시됨.
1.2 relative (상대위치)
-기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킴. static을 선언한 요소와 relative를 선언한 요소의 차이점은 좌표 프로퍼티의 동작 여부뿐이며 그외는 동일하게 동작함.
1.3 absolute (절대위치)
-부모 요소 또는 가장 가까이 있는 조상 요소(static 제외)를 기준으로 좌표 프로퍼티(top, bottom, left, right)만큼 이동함. 즉, relative, absolute, fixed 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정됨.
-만일 부모 또는 조상 요소가 static인 경우, document body를 기준으로 하여 좌표 프로퍼티대로 위치하게 됨. 따라서 부모 요소를 배치의 기준으로 삼기 위해서는 부모 요소에 relative를 정의하여야 함.
-이때 다른 요소가 먼저 위치를 점유하고 있어도 뒤로 밀리지 않고 덮어쓰게 됨. (이런 특성을 부유 또는 부유 객체라 함)
-absolute 선언 시, block 레벨 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 함.
1.4 fixed (고정위치)
-부모 요소와 관계없이 브라우저의 viewport를 기준으로 좌표프로퍼티(top, bottom, left, right)을 사용하여 위치를 이동시킴.
-스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치함.
-fixed 프로퍼티 선언 시, block 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 함.

2. z-index 프로퍼티
-z-index 프로퍼티에 큰 숫자값을 지정할수록 화면 전면에 출력됨. position 프로퍼티가 static 이외인 요소에만 적용됨.

3. overflow 프로퍼티
-overflow 프로퍼티는 자식 요소가 부모 요소의 영역를 벗어났을 때 처리 방법을 정의함.
-visible: 영역을 벗어난 부분을 표시함. (기본값)
-hidden: 영역을 벗어난 부분을 잘라내어 보이지 않게 함.
-scroll: 영역을 벗어난 부분이 없어도 스크롤 표시함.(현재 대부분 브라우저는 auto과 동일하게 작동함)
-auto: 영역을 벗어난 부분이 있을때만 스크롤 표시함.

(9) 요소 정렬
1. 정렬

2. width

3. float 프로퍼티 관련 문제 해결 방법

(10) 스타일이 상속과 적용 우선 순위
1. 상속(Inheritance)
-상속이란 상위(부모, 조상) 요소에 적용된 프로퍼티를 하위(자식, 자손) 요소가 물려 받는 것을 의미함. 상속 기능이 없다면 각 요소의 Rule set에 프로퍼티를 매번 각각 지정해야 함.

2. 캐스캐이딩(Cascading)
-요소는 하나 이상의 CSS 선언에 영향을 받을 수 있음. 이때 충돌을 피하기 위해 CSS 적용 우선순위가 필요한데 이를 캐스캐이딩(Cascading Order)이라고 함.
-캐스캐이딩에는 다음과 같이 세가지 규칙이 있음.
  -중요도: CSS가 어디에 선언 되었는지에 따라서 우선순위가 달라짐.
  -명시도: 대상을 명확하게 특정할수록 명시도가 높아지고 우선순위가 높아짐.
  -선언순서: 선언된 순서에 따라 우선 순위가 적용됨. 즉, 나중에 선언된 스타일이 우선 적용됨.

(11) 벤더 프리픽스

(12) 그림자
1. text-shadow
-텍스트에 그림자 효과를 부여하는 프로퍼티
  ex) 선택자 { text-shadow: Horizontal-offset Vertical-offset Blur-Radius Shadow-Color; }

2. box-shadow
-요소에 그림자 효과를 부여하는 프로퍼티
  ex) 선택자 { box-shadow: Inset Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color; }

(13) 그레이디언트

(14) 트랜지션
1. transition-property
-transition-property 프로퍼티는 트랜지션의 대상이 되는 CSS 프로퍼티명을 지정함. 지정하지 않는 경우 모든 프로퍼티가 트랜지션의 대상이 됨. 복수의 프로퍼티를 지정하는 경우 쉼표(,)로 구분함.

2. transition-duration
-transition-duration 프로퍼티는 트랜지션에 일어나는 지속시간(duration)을 초 단위(s) 또는 밀리 초 단위(ms)로 지정함. 프로퍼티값을 지정하지 않을 경우 기본값 0s이 적용되어 어떠한 트랜지션 효과도 볼 수 없음.

3. transition-timing-function
-트랜지션 효과의 변화 흐름, 시간에 따른 변화 속도와 같은 일종의 변화의 리듬을 지정함.
-대부분의 타이밍 함수는 큐빅 베이지어(cubic bezier)를 정의하는 네 점에 의해 정의되므로 상응하는 함수의 그래프로 제공해서 명시할 수 있음. -transition-timing-function 프로퍼티값으로 미리 정해둔 5개의 키워드가 제공됨. 기본값은 ease임.

4. transition-delay
-프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정함. 즉, transition-delay로 대기 사간을 지정하여 프로퍼티의 값이 변화하여도 즉시 트랜지션이 실행되지 않고, 일정 시간 대기한 후 트랜지션이 실행되도록 함.

5. transition
모든 트랜지션 프로퍼티를 한번에 지정할 수 있는 shorthand임. 값을 지정하지 않은 프로퍼티에는 기본값이 지정됨.

(15) 애니메이션
1. @keyframes
-CSS 애니메이션과 트랜지션 방식의 주된 차이는 @keyframes rule에 있음. 이 rule을 사용하면 애니메이션의 흐름(sequence) 중의 여러 시점(breakpoint)에서 CSS 프로퍼티값을 지정할 수 있음.

2. animation-name

3. animation-duration
-한 싸이클의 애니메이션에 소요되는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정함.

4. animation-timing-function
-애니메이션 효과를 위한 수치 함수를 지정함.

5. animation-delay
-요소가 로드된 시점과 애니메이션이 실제로 시작하는 사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 지정함.

6. animation-iteration-count
-애니메이션 주기의 재생 횟수를 지정함. 기본값은 1이며 infinite로 무한반복 할 수 있음.

7. animation-direction
-애니메이션이 종료된 이후 반복될 때 진행하는 방향을 지정함.

8. animation-fill-mode
-애니메이션 미실행 시(대기 또는 종료) 요소의 스타일을 지정함.

9. animation-play-state
애니메이션 재생 상태(재생 또는 중지)를 지정함. 기본값은 running임.

10. animation
-모든 애니메이션 프로퍼티를 한번에 지정함. 값을 지정하지 않은 프로퍼티에는 기본값이 지정됨.

(16) 트랜스폼

(17) 웹디자인 타이포그래피(Typography)

(18) 레이아웃

(19) 반응형 레이아웃

(20) 플렉스 박스 레이아웃

(21) 수평/수직 중앙 정렬
1. 수평 정렬(Horizontal Align)
1.1 inline/inline-block 요소
-정렬 대상 요소(텍스트 또는 링크 등의 inline 레벨 요소 또는 inline-block 레벨 요소)의 부모 요소에 text-align: center;를 지정함.
  ex) .container {
        text-align: center;
      }
1.2 block 요소
-정렬 대상 요소에 너비를 명시적으로 지정하고 margin-right와 margin-left 프로퍼티에 auto를 지정함.
-정렬 대상 요소에 너비를 명시적으로 지정하지 않으면 너비는 full width가 되므로 중앙 정렬이 필요없음.
  ex) .item {
        width: 200px;
        margin: 20px auto;
    }
1.3 복수의 block 요소
-복수의 block 요소는 기본적으로 수직 정렬됨. 이것을 수평정렬하기 위해서는 정렬 대상 block 요소를 inline-block 요소로 변경한 후 부모 요소에 text-align: center;를 지정함.
-정렬 대상 요소에 width를 지정하지 않으면 콘텐츠에 너비에 맞추어 너비가 결정되므로 명시적으로 너비를 지정함.
  ex) .container {
        text-align: center;
      }
      .item {
        width: 150px;
        display: inline-block;
      }
1.4 Flexbox
-flexbox를 사용할 수도 있음. 정렬 대상의 부모 요소에 아래의 룰셋을 선언함.

  ex) .flex-center {
        display: flex;
        justify-content: center;
      }

2. 수직 정렬(Vertical Align)
2.1 inline/inline-block 요소

3. 수평/수직 정렬(Horizontal & Vertical Align)
-요소의 너비와 높이가 고정되어 있는 경우, 요소의 너비와 높이가 불확정 상태의 경우 모두 사용 가능한 방법임.

(22) image 요소 아래에 패딩된 여분의 공간 제거하기