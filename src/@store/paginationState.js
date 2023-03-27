import { atom, selector } from 'recoil';
import { productList } from './productListState';

// 현재 페이지
export const currentPage = atom({
  key: 'currentPage',
  default: 1,
});

// 페이지당 아이템 수
export const itemsPerPage = atom({
  key: 'itemsPerPage',
  default: 6,
});

export const filteredDataSelector = selector({
  key: 'filteredDataSelector ',
  get: async ({ get }) => {
    const listData = get(productList);
    const currentPageIndex = get(currentPage);
    const itemsPerPageIndex = get(itemsPerPage);
    const startIndex = (currentPageIndex - 1) * itemsPerPageIndex;
    const endIndex = startIndex + itemsPerPageIndex;

    return listData.slice(startIndex, endIndex);
  },
});
