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

</br>

## 개발환경

- VScode
- Vite

# 라우팅 설계

- 제시된 시안을 기준으로 회원가입, 로그인, 메인, 상품리스트, 상품디테일로 페이지를 구성

## 📌 주요 기능

### 1. 메인 페이지
<div align=center>
![image](https://github.com/user-attachments/assets/4dfb5423-4b4e-4b02-9ced-38ee7bff161f)

</div>
  






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
