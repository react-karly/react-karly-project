import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

//atom
export const cartListState = atom({
  key: 'cartListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const lastAddProductState = atom({
  key: 'lastAddProductState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const shippingState = atom({
  key: 'shippingState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

//selector
// 상품 선택관련 셀렉터
export const filterType = selector({
  key: 'filterType',
  get: ({ get }) => {
    const cartList = get(cartListState);
    const typeSet = new Set();
    cartList.map((item) => typeSet.add(item.type));
    return Array.from(typeSet);
  },
});
export const checkAllCheck = selector({
  key: 'checkAllCheck',
  get: ({ get }) => {
    const cartList = get(cartListState);
    return cartList.every((product) => product.isChecked);
  },
  set: ({ set, get }) => {
    const cartList = get(cartListState);
    set(
      cartListState,
      cartList.map((product) => {
        return {
          ...product,
          isChecked: true,
        };
        return cartList;
      })
    );
  },
});

export const checkAllUnCheck = selector({
  key: 'checkAllUnCheck',
  get: ({ get }) => {
    const cartList = get(cartListState);
    return cartList.every((product) => !product.isChecked);
  },
  set: ({ set, get }) => {
    const cartList = get(cartListState);
    set(
      cartListState,
      cartList.map((product) => {
        return {
          ...product,
          isChecked: false,
        };
        return cartList;
      })
    );
  },
});

//상품 선택 셀렉터
export const clickCheckButton = selector({
  key: 'clickCheckButton',
  get: ({ get }) => get(cartListState),
  set: ({ set, get }, id) => {
    const cartList = get(cartListState);
    set(
      cartListState,
      cartList.map((product, index) => {
        if (id === index) {
          return {
            ...product,
            isChecked: !product.isChecked,
          };
        } else {
          return { ...product };
        }
        return cartList;
      })
    );
  },
});

//수량 관련 셀렉터
export const minusStock = selector({
  key: 'minusStock',
  get: ({ get }) => {
    return;
  },
  set: ({ set, get }, id) => {
    const cartList = get(cartListState);
    set(
      cartListState,
      cartList.map((product, index) => {
        if (id === index) {
          return {
            ...product,
            stock: product.stock - 1,
          };
        } else {
          return { ...product };
        }
        return cartList;
      })
    );
  },
});

export const plusStock = selector({
  key: 'plusStock',
  get: ({ get }) => {
    return;
  },
  set: ({ set, get }, id) => {
    const cartList = get(cartListState);
    set(
      cartListState,
      cartList.map((product, index) => {
        if (id === index) {
          return {
            ...product,
            stock: product.stock + 1,
          };
        } else {
          return { ...product };
        }
        return cartList;
      })
    );
  },
});

//이미 존재하는 상품 담기 관련 셀렉터
export const addExistProduct = selector({
  key: 'addExistProduct',
  get: ({ get }) => {
    return;
  },
  set: ({ get, set }, newValue) => {
    const cartList = get(cartListState);
    set(
      cartListState,
      cartList.map((product) => {
        if (product.title === newValue[0]) {
          console.log(typeof product.stock, typeof newValue[1]);
          return {
            ...product,
            stock: Number(product.stock + newValue[1]),
          };
        } else {
          return { ...product };
        }
        return cartList;
      })
    );
  },
});
