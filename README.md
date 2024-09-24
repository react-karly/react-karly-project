# **멋쟁이 사자처럼 4기 React Final Project**

React, Module.css, Vite를 이용한 마켓컬리 사이트 클론코딩

<br>

## 💻 프로젝트 소개

멋쟁이 사자처럼 프론트엔드스쿨 4기 교육생들의 React Final Project입니다.

멋쟁이 사자처럼 프론트엔드 스쿨에서 제공한 시안을 토대로 구현한 Market Karly 사이트입니다.

React 경험을 쌓기 위해 기타 라이브러리를 제외하고 기능 구현을 목표로 진행했습니다.

<br>

## ⌛개발 기간

- 2023.02 - 2023.04

<br>

## **TYING 프로젝트의 구성원**

- 황혜인, 오소민, 김강철, 전원근, 이현석, 박유림

<br>

## 개발환경

- VScode
- Vite

<br>

## 📌 주요 기능

## 1. 메인 페이지

#### - 팝업창 : 이벤트 팝업창은 useState로 제어하며, 닫기 및 오늘 하루 안 보기 기능은 로컬 스토리지와 useEffect를 사용해 마지막 모달 표시 시간과 현재 시간을 비교해 24시간 이내에 숨기도록 구현
#### - 배너 슬라이드 : autoplay 옵션으로 메인 배너 슬라이드를 자동으로 이동하게 하고, useRef 훅을 사용해 prev/next 아이콘을 커스텀
#### - 데이터 렌더링 : 파이어베이스에 데이터를 저장해두고 상품명, 가격, 할인률, 이미지, 후기 등을 콘텐츠 영역에 각자 동적으로 렌더링
#### - 모달 Portal : ReactDOM.createPortal을 사용해 모달창을 부모 컴포넌트의 DOM 계층 밖에 렌더링하여 배경 클릭을 차단하고 모달 외부를 어둡게 처리
<br>

![image](https://github.com/user-attachments/assets/dc9dbabe-c089-4412-9d40-641ee69994bc)


<br>

![image](https://github.com/user-attachments/assets/6636ab04-7fc6-4ed0-b4d9-72a3709734b3)

<br>

https://github.com/user-attachments/assets/45fc396c-7f4b-4583-a4de-b5656aad96af

<br>

https://github.com/user-attachments/assets/838cf8b0-1494-446c-adc5-39474b4d9768

<br>


![image](https://github.com/user-attachments/assets/62e0b45e-5a2e-418f-a600-811fe0543665)

<br>

## 2. 상품 리스트 페이지 

#### - 사이드 메뉴 드롭 다운 기능 : 사이드 메뉴에서 체크박스 커스텀, 카테고리별 선택 개수 확인, 드롭다운 기능은 구현
#### - Recoil을 이용한 product list 전역 상태 관리 및 페이지네이션구현
#### - 라우터 : 상품 리스트 카드를 눌렀을 때 해당 리스트 상세 페이지로 이동
<br>

https://github.com/user-attachments/assets/e059c3b8-be89-4afa-b267-f86557b22dcb

<br>


https://github.com/user-attachments/assets/2b70a620-e1a6-4924-be65-498a1498e765

<br>


https://github.com/user-attachments/assets/3c930a9e-fd4a-4d8d-9eb1-d1bcaefa9da2

<br>

## 3. 상세 페이지 

#### - 상품 카운트 : 상품 개수를 증가 시키거나 감소시킬 수 있는 기능과, 수량에 따라 누적 가격이 합산되어 사용자가 지불해야할 가격을 인지할 수 있도록 기능을 구현
#### - 스크롤 탭 : 원하는 상품 정보가 있는 위치로 쉽게 이동할 수 있도록 useRef를 사용해 관련 useMoveScroll 훅을 만들어 해당 탭을 클릭 시 원하는 위치로 스크롤 이동하는 기능을 구현
#### - 장바구니 담기 팝업 : 장바구니 담기 버튼을 클릭해 사용자가 담은 상품을 쉽게 인지할 수 있도록 헤더영역에 notice popup이 뜨는 기능을 구현
#### - 데이터 바인딩 : 파이어베이스에 저장된 상품 데이터 베이스가 상품에 따라 데이터가 정확하게 들어갈 수 있도록 useState 및 표현식을 활용해 데이터 바인딩
<br>

https://github.com/user-attachments/assets/711b6f7e-7c04-4c1a-955d-95f5c75cf09e

<br>

https://github.com/user-attachments/assets/c3c43f8b-1e11-45e8-a762-908c082bfde2

<br>

https://github.com/user-attachments/assets/79b874a9-e0ea-4318-8688-315f32373dc8

<br>


## 4. 장바구니, 헤더, 푸터

#### - 장바구니 : 상품을 장바구니에 담고, 전체 및 개별 선택, 삭제, 수량 조절 기능을 통해 금액 계산과 할인 적용이 가능하도록 구현, 배송지 설정 후에만 주문이 가능하며, 로그인 상태에 따라 주문 절차가 진행됨
#### - 헤더 : 헤더에 각 페이지로 이동할 수 있는 링크와 카테고리 드롭다운 메뉴를 설정하고, 스크롤 시 헤더 형태가 변경되며, 장바구니 알림창과 상품 개수 표시 기능을 추가
#### - 푸터 : sns 링크 연결
<br>

https://github.com/user-attachments/assets/0219041d-69e9-495d-ace1-99b0a3dfad21

<br>
<img width="848" alt="스크린샷 2024-09-22 오후 2 59 33" src="https://github.com/user-attachments/assets/cfee6345-8838-4e80-a62f-e4db2a0d905c">

## <br>

<img width="776" alt="스크린샷 2024-09-22 오후 2 57 18" src="https://github.com/user-attachments/assets/4abba310-1324-4525-836f-a958fd2de41e">

<br>

## 5. 회원가입, 로그인
#### - 회원가입 : 유효성 검사, 주소 api 사용, 회원정보를 Firebase에 저장
#### - 로그인 : 유효성 검사, 구글 로그인 구현
<br>


https://github.com/user-attachments/assets/219a86ee-6eea-4cb0-bb25-a63d5fa61a8a

<br>

<img width="871" alt="스크린샷 2024-09-22 오후 3 17 58" src="https://github.com/user-attachments/assets/9ff027b8-a2b9-4858-93d7-cbf4c8bd2691">


<br>

<img width="1029" alt="스크린샷 2024-09-22 오후 3 18 08" src="https://github.com/user-attachments/assets/0caf035b-a7de-4f00-b696-d68faffc51e4">

<br>

# 데이터 모델링

## 회원가입

- 회원가입시에 입력하는 값을 기준으로 데이터를 모델링했습니다.

```json
{
    "email" : string,
    "password" : string,
    "passwordConfirm" : string,
    "name" : string,
    "phoneNumber" : number,
    "address" :string,
    "gender" : string,
    "birthYear" : number,
    "birthMonth" : number,
    "birthDay" : number,
    "extraEvent" : string || null,
    "recommendId" : string || null,
    "eventName" : string || null,
    "termsOfUse" : boolean,
    "termsOfPersonalInfo" : boolean,
    "termsOfEvent" : boolean,
    "termsOfAge" : boolean,
}
```

## 상품데이터

- 상품데이터는 바닐라JS 프로젝트 당시에 사용했던 샘플 data.json을 참고하였습니다.

```json
{
  "products": [
    {
      "id": string,
      "name": string,
      "description": string,
      "price": number,
      "saleRatio": number,
      "salePrice": number,
      "capacity": string,
      "explanation": string,
      "review": number,
      "image": {
        "thumbnail": string,
        "view": string,
        "banner": string,
        "info": string,
        "alt": string
      },
      "badge": {
        "karly": string,
        "limit": string
      },
      "stock": number,
      "category":string,
      "brand":string
    }
  ]
}
```

## 장바구니 데이터

- 사용자가 장바구니에 담는 데이터는 클라이언트 측에 저장할 데이터로, 장바구니 UI구성에 필요한 데이터를 기준으로 작성하였습니다.

```json
{
    "type":string,
    "title":string,
    "src":string,
    "alt":string,
    "price":number,
    "salePrice":number,
    "stock":number,
    "isChecked":string,

}

```

## 리뷰 데이터

- 리뷰데이터는 시안에서 제시하는 모달창을 기준으로 작성하였습니다.

```json
{
    "id": number,
    "createdAt": number,
    "description": string,
    "title": string,
    "userId": string
}
```

## 문의사항 데이터

- 문의사항데이터는 시안에서 제시하는 모달창을 기준으로 작성하였습니다.

```json
{
    "id": number,
    "createdAt": number,
    "description": string,
    "isPrivate": boolean,
    "title": string,
    "userId": string
}
```
