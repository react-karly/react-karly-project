# **멋쟁이 사자처럼 4기 React Final Project**

React, Module.css, Vite를 이용한 마켓컬리 사이트 클론코딩

## 💻 프로젝트 소개

멋쟁이 사자처럼 프론트엔드스쿨 4기 교육생들의 React Final Project입니다.

멋쟁이 사자처럼 프론트엔드 스쿨에서 제공한 시안을 토대로 구현한 Market Karly 사이트입니다.

React 경험을 쌓기 위해 기타 라이브러리를 제외하고 기능 구현을 목표로 진행했습니다.

## ⌛개발 기간

- 2023.02 - 2023.04

## **TYING 프로젝트의 구성원**

- 황혜인, 오소민, 김강철, 전원근, 이현석, 박유림

<br>

## 개발환경

- VScode
- Vite

# 라우팅 설계

- 제시된 시안을 기준으로 회원가입, 로그인, 메인, 상품리스트, 상품디테일로 페이지를 구성

## 📌 주요 기능

### 1. 메인 페이지

#### - 이벤트 팝업창은 useState로 제어하며, 닫기 및 오늘 하루 안 보기 기능은 로컬 스토리지와 useEffect를 사용해 마지막 모달 표시 시간과 현재 시간을 비교해 24시간 이내에 숨기도록 구현
#### - autoplay 옵션으로 메인 배너 슬라이드를 자동으로 이동하게 하고, useRef 훅을 사용해 prev/next 아이콘을 커스텀
#### - 파이어베이스에 데이터를 저장해두고 상품명, 가격, 할인률, 이미지, 후기 등을 콘텐츠 영역에 각자 동적으로 렌더링
#### - ReactDOM.createPortal을 사용해 모달창을 부모 컴포넌트의 DOM 계층 밖에 렌더링하여 배경 클릭을 차단하고 모달 외부를 어둡게 처리
  
![image](https://github.com/user-attachments/assets/dc9dbabe-c089-4412-9d40-641ee69994bc)

### <br>

![image](https://github.com/user-attachments/assets/6636ab04-7fc6-4ed0-b4d9-72a3709734b3)

### <br>


https://github.com/user-attachments/assets/45fc396c-7f4b-4583-a4de-b5656aad96af



https://github.com/user-attachments/assets/8d2dcb44-cbb1-4c35-aa63-35e1a63b016e






### <br>


![image](https://github.com/user-attachments/assets/62e0b45e-5a2e-418f-a600-811fe0543665)





### 2. 상품 리스트 페이지 

#### - 사이드 메뉴에서 체크박스 커스텀, 카테고리별 선택 개수 확인, 드롭다운 기능은 구현
#### - Recoil을 이용한 product list 전역 상태 관리 및 페이지네이션구현
#### - 상품 리스트 카드를 눌렀을 때 해당 리스트 상세 페이지로 이동







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
