### Guide Book

### 프로젝트 제목(Title) : WORKSHOP WEBSITE

### 프로젝트 소개(Intro):

공방의 교육프로그램(ex) 원데이클래스) 및 제품을 소개하는 웹앱 형태(반응형-responsive 제공)의 사이트. 직접 코드를 작성하였으며 디자인(design)부터 초안(draft), 개발(development)까지 참여함.

### 사용된 스킬(Skill):

- html
- css(scss)
- js

### 사용된 주요색상(Color) 및 폰트(Font):

- #e2e2d3
- #2f4858

- Roboto
- Times New Roman

### 사용된 라이브러리(Library):

- fontawesome
- swiper (home)
- isotope (collection)
- kakao api (contact)
- form
- google font

### media query:

- $tablet: 1179px;
- $mobile: 539px;

### 프로젝트 구성:

- Home 화면 (main page)
- About (sub page)
- program (sub page)
- collection (sub page)
- community (sub page)
- contact (sub page)
- join (sub page)

### 각 페이지 구성:

- home

  - index.html
  - style.scss
  - main.js
  - home.js
  - cookie_popup.js
  - img/main

- about

  - about.html
  - \_sub_layout.scss
  - \_about.scss
  - main.js
  - about.js
  - img/about

- program

  - prgoram.html
  - \_sub_layout.scss
  - \_program.scss
  - program.js
  - img/program

- collection

  - collection.html
  - \_sub_layout.scss
  - \_collection.scss
  - main.js
  - collection.js
  - img/collection

- community

  - community.html
  - \_sub_layout.scss
  - \_community.scss
  - main.js
  - community.js

- contact

  - conatact.html
  - \_sub_layout.scss
  - \_contact.scss
  - main.js
  - contact.js
  - form.js
  - img/contact

- join

  - join.html
  - \_sub_layout.scss
  - \_join.scss
  - main.js
  - join.js

### 주요 기능(main function & prototype method):

- main.js

  - navbar toggle : navbar 토글 기능

- home.js

  - scrollMotion() : 스크롤 애니메이션 method
  - swiper : 슬라이드 기능
  - arrow-up : 상단 위로 이동하는 기능

- cookie_popup.js

  - setCookie() : 쿠키 저장 method - 하루 동안 창 보지 않기

- about.js

  - scrollMotion() : 스크롤 애니메이션 method

- program.js

  - tab 기능
  - fetch를 통해 youtube 불러오기
  - 유튜브 팝업 창 띄우기 / close 버튼
  - scrollMotion() : 스크롤 애니메이션 method

- collections.js

  - callData() : fetch를 통해 flickr 불러오기
  - createList() : 리스트 만들기
  - delayLoading() : 로딩 기다리기
  - isLayout() : 아이소톱(벽돌 정렬)

- contact.js
  - youtube api 활용 지도 불러오기
  - 리사이즈 할 때 중심이동
  - 교통정보 on/off
  
