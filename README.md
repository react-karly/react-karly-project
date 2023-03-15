# 멋쟁이 사자처럼 4기 React Final Project

## Description

멋쟁이 사자처럼 프론트엔드스쿨 4기 교육생들의 React Final Project입니다.

이 프로젝트는 [마켓컬리](https://www.kurly.com/main)을 본따 만들었으며,

React 경험을 쌓기 위해 기타 라이브러리를 제외하고 기능 구현을 목표로 진행했습니다.

# 라우팅 설계

- 제시된 시안을 기준으로 회원가입, 로그인, 메인, 상품리스트, 상품디테일로 페이지를 구성합니다.

# 데이터 모델링

## 회원가입

- 회원가입시에 입력하는 값을 기준으로 데이터를 모델링했습니다.

```json
{
    "id" : string,
    "name" : string,
    "email" : string,
    "password" : string,
    "phoneNumber" : number,
    "address" :string,
    "gender" : string | null,
    "birth" : string,
    "recommendId" : string | null,
    "eventName" : string | null,
    "term1" : boolean,
    "term2" : boolean,
    "term3" : boolean,
    "term4" : boolean,
    "term5" : boolean,
    "createdAt":number
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
    "id":string,
    "type":string,
    "title":string,
    "src":string,
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
