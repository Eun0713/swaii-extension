# 🌀 Swaii

<div align="center">
  <img width="380" height="380" alt="Swaii Logo" src="https://github.com/user-attachments/assets/5a3b75f7-8c7c-43b2-bae6-121ce14e7e02"/>

  <p>
    <strong>사이트마다 다른 단축키, 외우기 불편하지 않나요?</strong><br>
    <strong>Swaii</strong>는 웹 브라우저에서 마우스 제스처를 통해 빠르고 직관적인 동작 실행을 가능하게 해주는 Chrome 확장 프로그램입니다.<br>
    스크롤 맨 위로, 새 페이지 생성 등 반복되는 작업의 단축키를 사이트마다 다르게 외우지 않아도, <br> 
    손에 익은 제스처 한 번으로 빠르게 실행할 수 있습니다.<br>
    사용자가 직접 자신만의 제스처를 만들고, 각 사이트에 원하는 동작을 연결할 수 있어<br>
    나만의 웹 사용 흐름을 설계하듯 구성할 수 있습니다.
  </p>

  <p align="center">
    <strong>마우스가 곧 당신의 단축키가 됩니다.</strong>
  </p>
</div>

<br>

# 🧾 목차

1. [💭 기획 배경](#-기획-배경)
2. [⛓ 주요 기능 흐름](#-주요-기능-흐름)
   - [① 커스텀 제스처 생성](#-커스텀-제스처-생성)
   - [② 동작 매핑 및 기본 제스처 제공](#-동작-매핑-및-기본-제스처-제공)
   - [③ 매핑된 제스처 실행](#-매핑된-제스처-실행)
3. [⚙️ 기술 스택](#️-기술-스택)

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
**반복되는 작업 흐름을 "내 손에 맞게" 설계하는 경험**을 제공하는 것이 Swaii의 핵심입니다.

<br>

# ⛓ 주요 기능 흐름

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
  <strong>① 제스처 입력</strong><br />
  <img src="https://github.com/user-attachments/assets/8b7705de-9d4e-4429-892d-452325334b63" width="500" />
</p>

<p align="center">
  &nbsp;<br />
  <img width="28" height="46" alt="Arrow" src="https://github.com/user-attachments/assets/a8034ed9-db59-4daa-a048-99fb54e66ae8" />
  <br />&nbsp;
</p>

<p align="center">
  <strong>② 동작 실행</strong><br />
  <img src="https://github.com/user-attachments/assets/f2dc2719-5e1c-4c2e-b2ba-a21ef133b8fc" width="500" />
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

<br>

# 💥 트러블 슈팅
## 1. 제스처 궤적이 이어져 그려지는 문제
> 이전에 그렸던 제스처와 새 제스처가 하나의 선으로 이어져 그려지는 문제

### 문제 상황
- 마우스로 제스처를 그리고 마우스를 뗀 뒤, 새로운 위치에서 다시 제스처를 시작했더니, <br>
  ⮕ **이전 제스처의 마지막 점과 연결된 선이 이어서 그려지는 현상**이 나타났습니다.
<details>
<summary>📽️ <strong>문제 발생 장면 보기</strong></summary>
<p align="center">
  <img src="https://github.com/user-attachments/assets/72681c23-8a05-4b23-84b3-acb6386cda29" alt="제스처 궤적 이어짐 문제 영상" width="600" />
</p>
</details>

<br>

### 잘못된 해결 시도
초기에는 아래과 같이 `points.length === 1` 조건을 사용하여 첫 점에서만 `beginPath()`를 호출하고, <br>
이후에는 `lineTo()`로 선을 이어 그리는 방식으로 구현했습니다.
```js
if (points.length === 1) {
  ctx.beginPath();
  ctx.moveTo(x, y);
} else {
  ctx.lineTo(x, y);
  ctx.stroke();
}
```

- 제스처는 점의 배열(`points`)로 구성되어 있으므로,
- 첫 번째 점이 입력되었을 때만 선의 시작점(`beginPath`)을 선언하고,
- 이후에는 `lineTo()`를 통해 선을 계속 이어 그리는 방식으로 설계했습니다. <br>
  ⮕ 이 방식을 활용하면 매 제스처마다 하나의 독립된 선이 그려질 것으로 기대했습니다.

하지만 다음과 같은 문제가 있었습니다:
| 항목                          | 설명                                   |
| --------------------------- | ------------------------------------ |
| `ctx`가 이전 `moveTo()` 상태를 기억 | `beginPath()`가 호출되지 않으면 선이 물리적으로 이어짐 |
| `canvas`가 제거되지 않음           | 시각적으로는 사라진 것처럼 보여도, 브라우저는 여전히 이전 상태를 렌더링 대상으로 인식       |
| `ctx`가 메모리에서 유지됨             | context 객체가 재할당되지 않아 내부적으로 이전 경로 정보를 그대로 유지                  |

결과적으로 새로운 제스처를 시작할 때, 여전히 이전 제스처의 마지막 점과 물리적으로 연결된 선이 그려지는 문제가 발생했습니다.

<br>

> **📌 실제 흐름 예시**
> 1. 제스처 A → 잘 그려짐  
> 2. fadeOutCanvas() → 시각적으로 사라짐  
> 3. canvas와 ctx는 여전히 존재  
> 4. 제스처 B → A와 B가 이어진 선으로 그려짐

<br>

### 해결 방안 및 구현 과정

#### 1. `drawOnCanvas()` 내부에서 항상 새로운 path를 시작

```js
ctx.beginPath(); // 항상 새로운 경로로 초기화
const [prevX, prevY] = points[points.length - 2] || [x, y];
ctx.moveTo(prevX, prevY);
ctx.lineTo(x, y);
ctx.stroke();
```

> `ctx.beginPath()`는 기존에 그려지던 선 경로를 끊고, 새롭게 그리기를 시작하게 만드는 명령입니다.
- 만약 `ctx.beginPath()`를 생략하면 브라우저는 이전에 지정한 선의 시작점 (`moveTo`)을 기억하고, 새로 그리는 선과 자동으로 이어서 그려버립니다. <br>
  ⮕ 이로 인해, 제스처를 새로 시작했을 때 이전 궤적과 붙어서 그려지는 문제가 발생합니다.

<br>

> [!NOTE]
> #### 왜 `[prevX, prevY]`를 쓰나요?
> ```js
> const [prevX, prevY] = points[points.length - 2] || [x, y];
> ```
>
> 마우스를 움직일 때마다 선을 그리려면, "이전 좌표 → 현재 좌표" 두 점이 필요합니다. <br>
> 단, **처음 찍는 점이라 이전 점이 없을 경우엔**, 현재 점에서 시작해야 하므로 `|| [x, y]` 로 처리합니다.
>
> 따라서 선은 항상 이전 점과 현재 점 사이의 한 구간만 그려지며, 이전 제스처와 시각적으로 연결되지 않는 완전히 독립된 궤적이 됩니다.

<br>

#### 2. `fadeOutCanvas()`에서 canvas와 ctx를 완전히 제거
```js
export const fadeOutCanvas = () => {
  const canvas = document.getElementById("gesture-canvas");
  if (!canvas) return;

  let opacity = 1;

  const fade = setInterval(() => {
    opacity -= 0.05;
    canvas.style.opacity = opacity;

    if (opacity <= 0) {
      clearInterval(fade);
      canvas.remove();   // DOM에서 캔버스 제거
      ctx = null;        // context 객체 메모리 초기화
    }
  }, 25);
};
```
> 위 코드에서는 사용자가 마우스를 떼고 제스처를 끝낸 후, 캔버스를 서서히 사라지게 한 다음 완전히 제거합니다.

<br>

**이 조치가 중요한 이유**
| 항목                | 설명                                                                                       |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `canvas.remove()` | DOM에서 `<canvas>` 요소를 완전히 제거하면, 브라우저가 더 이상 해당 요소의 시각적 상태를 유지하지 않게 됩니다.                    |
| `ctx = null`      | JavaScript의 context 객체는 여전히 메모리에 남아 내부적으로 이전 선의 상태를 기억합니다. <br> 이 때문에 명시적으로 `null` 로 처리해야 완전히 초기화 시킬 수 있습니다. |

<br>

#### 3. 새로운 제스처 시작 시 `insertCanvas()`로 새 캔버스 삽입
```js
insertCanvas(); // 새로운 canvas 생성
```
> 제스처를 새로 시작할 때마다 `insertCanvas()`를 호출하여, 완전히 새로운 `<canvas>`와 context 객체를 할당하도록 합니다.

**📌 작동 방식**
```js
const canvas = document.createElement("canvas");
canvas.id = "gesture-canvas";
...
ctx = canvas.getContext("2d");
```

- 새로운 `<canvas>` 요소를 DOM에 동적으로 삽입
- `getContext("2d")`를 호출해 새로운 ctx를 생성하여 이전 context와 분리

<br>

> [!important]
>
> _**왜 세 가지 조치를 모두 수행해야 하나요?**_
>
> | 조치 항목             | 이유                                             |
> | ----------------- | ---------------------------------------------- |
> | `ctx.beginPath()` | 이전 path의 연결을 끊고 독립된 선을 시작하기 위함                 |
> | `canvas.remove()` | DOM에서 제거하여 브라우저의 시각적 잔상을 없애기 위함                |
> | `ctx = null`      | 메모리 상의 context 상태를 초기화하여 다음 그리기에 영향이 없도록 하기 위함 |
>
> 이 세 가지 중 단 하나라도 빠지면 다음과 같은 문제가 발생할 수 있습니다:
>
> `beginPath()`가 없으면 선이 물리적으로 이어지고,
> `canvas.remove()`를 하지 않으면 이전 궤적이 브라우저에 남으며,
> `ctx = null`을 하지 않으면 context가 내부적으로 기억된 상태에서 동작하게 되어 예측할 수 없는 연결 선이 생깁니다.

<br>

**UX 신뢰도를 떨어뜨린 핵심 이슈**

제스처 입력은 궤적 자체가 곧 명령이기 때문에, 선이 의도치 않게 이어지는 문제는 UX 혼란을 유발합니다.
- 사용자는 “선이 사라졌다”고 인식했지만, 다음 제스처가 이전 궤적과 붙어서 그려지기 시작합니다.
- 결과적으로, 제스처의 모양이 왜곡되며 의도한 동작과 전혀 다른 인식 결과로 이어질 수 있습니다.

이 문제는 시각적으로는 해결된 것처럼 보여도, 내부 메모리 상태가 여전히 유지되고 있다는 점에서 발생한 이슈였습니다.
> 이 문제를 해결하며, 시각적으로 사라진 것과 메모리 상의 초기화는 다르다는 것을 배웠습니다. <br>
> 앞으로는 눈에 보이는 것과 실제 동작 사이의 간극이 발생하지 않도록, UI/UX 일관성을 유지할 수 있도록 설계할 계획입니다.
