# 🌀 Swaii

<div align="center">
  <img width="380" height="380" alt="Swaii Logo" src="https://github.com/user-attachments/assets/5a3b75f7-8c7c-43b2-bae6-121ce14e7e02"/>

  <p>
    <strong>사이트마다 다른 단축키, 외우기 불편하지 않나요?</strong><br>
    <strong>Swaii</strong>는 웹 브라우저에서 마우스 제스처를 통해 빠르고 직관적인 동작 실행을 가능하게 해주는 Chrome 확장 프로그램입니다.<br>
    탭 이동, 새 페이지 열기, 스크롤 등 반복되는 작업을 사이트마다 다르게 외우지 않아도,<br>
    손에 익은 제스처 한 번으로 빠르게 실행할 수 있습니다.<br>
    사용자가 직접 자신만의 제스처를 만들고, 각 사이트에 원하는 동작을 연결할 수 있어<br>
    나만의 웹 사용 흐름을 설계하듯 구성할 수 있습니다.
  </p>

  <p align="center">
    <strong>마우스가 곧 당신의 단축키가 됩니다.</strong>
  </p>
</div>

<br>

# 💭 기획 배경
> **단축키는 빠르지만, 왜 매번 외우긴 어려울까요?**

사이트마다 단축키가 달라 익숙해지기도 전에 다시 찾아봐야 하는 경우가 많습니다.

탭 이동이나 새 페이지 열기처럼 자주 사용하는 기능조차 사이트마다 단축키가 달라 일관되게 사용하기 어려웠고, <br/>
결국 직접 메뉴를 클릭하거나 아이콘을 찾아 실행해야 하는 경우가 많았습니다. <br/>
이런 사소한 비효율들이 모여, 사용 흐름에 잦은 끊김을 만들어냈습니다.

**Swaii는 이러한 흐름을 사용자 스스로 정의할 수 있게 하기 위해 시작됐습니다.**  
직접 만든 제스처 하나로, 자주 쓰는 동작을 사이트마다 내 방식대로 실행할 수 있다면 <br/>
브라우저 사용은 훨씬 더 직관적이고 유연해질 수 있을 것이라고 생각했습니다.

<img width="640" height="433" alt="Swaii intro page" src="https://github.com/user-attachments/assets/34956ec1-71bd-494c-bebd-831656add196" />

> 위처럼 사용자는 원형 제스처를 YouTube에서는 "볼륨 조절", Notion에서는 "페이지 추가" 등에 연결할 수 있습니다.

단순히 기능을 설정하는 도구가 아니라,  
**반복되는 작업 흐름을 '내 손에 맞게' 설계하는 경험**을 제공하는 것이 Swaii의 핵심입니다.

<br>

# 👀 기능 미리보기

### ① 커스텀 제스처 생성
<details><summary>📸 미리보기</summary>

<p align="center">
  <img src="https://github.com/user-attachments/assets/c33b70e7-07b2-4177-93cf-5c303f03be56" alt="커스텀 제스처 생성" width="600" />
</p>
  
</details>

- 마우스로 제스처를 직접 그려서 자신만의 커스텀 제스처를 생성할 수 있습니다. <br>
- 제한된 선택지가 아닌, 직접 그린 궤적을 통해 원하는 동작을 자유롭게 정의할 수 있습니다.

### ② 동작 매핑 및 기본 제스처 제공
<details><summary>📸 미리보기</summary>

<p align="center">
  <img src="https://github.com/user-attachments/assets/3cb8174b-77e0-4d1d-b3d5-2fbc440e23b1" alt="동작 매핑" width="600" />
</p>
  
</details>

- 생성한 제스처에 원하는 동작을 매핑할 수 있습니다.  
  > 새 탭 열기, Gmail 열기, 스크롤 맨 위로 등  
- 동일한 제스처라도 **사이트별로 다른 동작**을 설정할 수 있습니다.

- 또한 Swaii는 아래와 같은 **기본 제스처 5종**을 기본으로 제공합니다.  
  사용자는 별도의 제스처 생성 없이 곧바로 활용할 수 있습니다.

> | 제스처 이름 | 형태 예시 |
> |-------------|------------|
> | 원형 패턴      | O       |
> | 삼각형 패턴     | △         |
> | S자 패턴        | S          |
> | 무한대 패턴    | ∞          |
> | N자 패턴     | N          |

### ③ 매핑된 제스처 실행
사용자가 매핑한 사이트에서 매핑된 제스처를 그리면, 아래와 같은 흐름으로 동작이 실행됩니다.

<details><summary>📸 미리보기</summary>

<p align="center">
  <img src="https://github.com/user-attachments/assets/8b7705de-9d4e-4429-892d-452325334b63" width="400" valign="middle" />
  <img width="40" height="28" alt="Vector (3)" src="https://github.com/user-attachments/assets/bbb3fcc4-7a79-4a1e-93c0-91d8bf93fa5c" />
  <img src="https://github.com/user-attachments/assets/f2dc2719-5e1c-4c2e-b2ba-a21ef133b8fc" width="400" valign="middle" />
</p>
</details>

- 사이트마다 지정한 액션이 실행되며, 궤적은 자연스럽게 사라집니다.  
- 제스처 인식은 사용자의 마우스 움직임을 기준으로 실시간 처리되며, 연결된 동작이 브라우저 상에서 즉시 반영됩니다.

<br>

# ⚙️ 기술 스택

### 클라이언트

| 기술 | 도입 이유 |
|------|-----------|
| ![JavaScript](https://img.shields.io/badge/JavaScript-FFD93E.svg?style=for-the-badge&logo=JavaScript&logoColor=white) | 확장 기능과 UI, 서버 로직까지 전반을 구성하는 핵심 언어 |
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=002157) | 다양한 설정 페이지와 제스처 관련 UI를 컴포넌트 단위로 유연하게 관리 |
| ![React Router](https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white) | SPA에서 라우팅을 처리하며, 페이지 전환 흐름을 관리 |
| ![tailwindcss](https://img.shields.io/badge/tailwindcss-1FA3EC?style=for-the-badge&logo=tailwindcss&logoColor=white) | 클래스 기반의 유틸리티 CSS 프레임워크로 빠른 UI 구현 |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white) | 빠른 번들링 및 개발 환경 |
| ![Chrome Extension](https://img.shields.io/badge/Chrome_Extension-4285F4?style=for-the-badge&logo=Google-Chrome&logoColor=white) |  Manifest V3 기반으로 브라우저 상에서 동작하는 확장 프로그램 구성 |

### 서버

| 기술 | 도입 이유 |
|------|-----------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white) | 크롬 확장과 동일한 자바스크립트 환경에서 빠르게 서버를 구축 |
| ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) | REST API 서버 구성에 최적화되어 있어, 사용자 제스처·매핑 정보를 빠르게 처리 |
| ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) | 로그인한 사용자의 제스처 및 매핑 데이터를 저장하고, 기기 간 동기화를 지원 |

