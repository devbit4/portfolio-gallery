### 🗺️ Guide Book 🗺️
---
![website1](https://user-images.githubusercontent.com/88700967/152277402-fb2d94bd-0855-48bf-b3c9-07b20332431d.png)

### 1. 🪵프로젝트 제목(Title) : WORKSHOP WEBSITE
---
### 2. 🗣️프로젝트 소개(Intro): 
---
\* I participated in making this website from designing to developing.

공방의 교육프로그램(ex) 원데이클래스) 및 제품을 소개하는 웹앱 형태(반응형-responsive 제공)의 사이트. 직접 코드를 작성하였으며 디자인(design)부터 초안(draft), 개발(development)까지 참여함. 구글링/강의/스터디 등을 통해 배운 코드를 바탕으로 이해/수정/적용하여 커스터마이징함.

### 3. 👷‍사용된 스킬(Skill): 
---
- html 
- css(scss)
- js 

### 4. 🌈 🔤사용된 주요색상(Color) 및 폰트(Font): 
---
- #e2e2d3 
- #2f4858

- Roboto 
- Times New Roman

### 5. 📖사용된 라이브러리(Library/API/PLUGIN): 
---
- [fontawesome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&q=building)
- [swiper](https://swiperjs.com/) (home)
- [masonry](https://masonry.desandro.com/)(collection)
- [kakao api](https://masonry.desandro.com/) (contact)
- [emailjs](https://www.emailjs.com/) (contact)
- [google font](https://fonts.google.com/)

### 6. 🔢미디어 쿼리(media query for responsive website): 
---
- $tablet: 1179px;
- $mobile: 539px;

### 7. 🧑‍🏫프로젝트 구성:
---

- Home 화면 (main page)
- About (sub page)
- program (sub page)
- collection (sub page)
- community (sub page)
- contact (sub page)
- join (sub page)

### 8. 각 페이지 구성:
---
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

### 9. 😄주요 기능(main function & prototype method): 
---
- main.js

  - navbar toggle : navbar 토글 기능

- home.js

  - scrollMotion() : 스크롤 애니메이션 호출 함수 정의
  - swiper : 슬라이드 기능
  - arrow-up : 상단 위로 이동하는 기능

- cookie_popup.js

  - setCookie() : 쿠키 저장 method - 하루 동안 창 보지 않기

- about.js

  - scrollMotion() : 스크롤 애니메이션 호출 함수 정의

- program.js

  - tab 기능
  - fetch를 통해 youtube 불러오기
  - 유튜브 팝업 창 띄우기 / close 버튼
  - scrollMotion() : 스크롤 애니메이션 호출 함수 정의

- collections.js

  - callData() : fetch를 통해 flickr 불러오기
  - createList() : 앨범 리스트 만들기
  - delayLoading() : 로딩 기다리기
  - isLayout() : 아이소톱(벽돌 정렬)

- contact.js
  - youtube api 활용 지도 불러오기
  - 리사이즈 할 때 중심이동
  - 교통정보 on/off
  
  
  ### 10. 어려웠던 점
  
  ---
  - setCookie 쿠키 저장하는 부분 toGMTString() 시간대로 바꾼 후 적용해야 제대로 작동함.
  - sub page 중 program section 상태에 있을 때만 toggle 기능이 제대로 작동하지 않음. 추가로 해당 section에만 script를 재작성하니
   해결되었지만 깔끔한 해결은 아님 -> 아직 미해결
  - about 페이지 평행사변형 ui 부분 -> skewX 
  - kakao map api를 사용하여 지도에 여러 개 마커를 표시할 때 -> 마커 배열옵션을 만들어서 표현
   
  ### 11. 수정할 점
  ---
  
  - 협업 시 커밋 메시지 descriptive하게 쓸 것 참고 [commit message](https://chiamakaikeanyi.dev/how-to-write-good-git-commit-messages/)
