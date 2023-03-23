import normalImg from '@/assets/cart/Type=Normal.png';
import frozenImg from '@/assets/cart/Type=Frozen.png';
import refrigeratedImg from '@/assets/cart/Type=Refrigerated.png';

export const foodType = {
  refrigerated: {
    id: 'refrigerated',
    title: '냉장 식품',
    src: refrigeratedImg,
  },
  frozen: {
    id: 'frozen',
    title: '냉동 식품',
    src: frozenImg,
  },
  normal: {
    id: 'normal',
    title: '상온 식품',
    src: normalImg,
  },
};
