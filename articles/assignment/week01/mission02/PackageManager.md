1. npm의 작동 방식과 node_modules 구조
-npm (v3 이상)은 '호이스팅(Hoisting)' 기법을 사용하여 의존성을 관리함.
-작동 방식: 프로젝트를 설치하면, package.json의 의존성(dependencies)과 그 하위 의존성(sub-dependencies)들을 node_modules 폴더 최상단에 평평하게(flat) 설치함. 이를 호이스팅이라고 함. 이는 디스크 공간을 절약하고 의존성 트리의 깊이가 너무 깊어지는 것을 막기 위함임.
-node_modules 구조: package.json에 직접 명시한 패키지(예: a)와, a가 의존하는 패키지(예: c) 모두 node_modules의 루트 레벨에 설치됨.
-문제점:
  -유령 의존성 (Phantom Dependencies): package.json에 직접 추가하지 않은 패키지(하위 의존성인 c)가 node_modules 최상단에 존재하게 됨. 이로 인해 개발자가 실수로 코드에서 c를 import하여 사용할 수 있음. 나중에 a 패키지를 제거하거나 업데이트하여 c가 node_modules에서 사라지면, 프로젝트는 예기치 않게 실패함.
  -버전 중복 설치: 만약 다른 패키지 d가 c@1.0.2 버전을 필요로 한다면, 이미 최상단에 c@1.0.0이 호이스팅되어 있으므로 충돌이 발생함. 이 경우, d의 node_modules 폴더 안에 c@1.0.2가 별도로 중복 설치되어 디스크 공간을 낭비하게 됨.

2. pnpm의 작동 방식과 node_modules 구조
-pnpm (Performant npm)은 이러한 npm의 문제점들을 전역 저장소(Global Store)와 심볼릭 링크(Symbolic Link) 및 하드 링크(Hard Link)를 조합하여 해결함.
-작동 방식 (핵심):
  -전역 저장소 (Content-addressable store): pnpm은 모든 패키지 파일을 사용자의 홈 디렉터리에 있는 중앙화된 전역 저장소(pnpm store path 명령어로 확인 가능)에 단 한 번만 저장함.
  -하드 링크 (Hard Link): 프로젝트에 패키지를 설치할 때, pnpm은 전역 저장소에 있는 실제 파일들을 프로젝트 내의 node_modules/.pnpm 폴더로 하드 링크함. 하드 링크는 원본 파일과 동일한 파일을 가리키는 또 다른 파일명일 뿐이므로, 디스크 공간을 거의 차지하지 않음. (여러 프로젝트가 동일한 패키지를 사용해도 디스크에는 파일이 1개만 존재)
 -심볼릭 링크 (Symbolic Link / Soft Link): node_modules의 실제 구조를 만듦.
-node_modules 구조
  -node_modules/ (루트 폴더):
   -이 폴더에는 package.json에 직접 명시한 의존성들만 포함됨. (예: a, b, d, e)
   -이 파일들은 실제 파일이 아니라, node_modules/.pnpm 폴더 내의 실제 패키지 위치를 가리키는 심볼릭 링크(바로가기)임.
   -이 구조 덕분에 '유령 의존성' 문제가 해결됨. 코드에서 c를 import하려고 해도 루트에 c가 없으므로 Node.js가 찾지 못함.
-node_modules/.pnpm (가상 스토어):
  -프로젝트가 의존하는 모든 패키지(직접, 간접 의존성 모두)와 그 버전들이 실제 저장되는 공간임. (예: a@1.0.0, c@1.0.0, c@1.0.2 등)
  -이곳의 파일들은 전역 저장소에서 하드 링크된 파일들임.
  -패키지 간의 의존성은 이 .pnpm 폴더 내에서 심볼릭 링크로 다시 연결됨. (예: .pnpm/a@1.0.0/node_modules/ 폴더 안에는 c라는 이름의 심볼릭 링크가 있고, 이 링크는 ../../c@1.0.0/node_modules/c를 가리킴.)