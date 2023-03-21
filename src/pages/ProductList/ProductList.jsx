import styles from './ProductList.module.css';
import { BaseLayout, ListSideMenu, ListCards } from '@/components';
function ProductList() {
  return (
    <BaseLayout>
      <h3>베스트</h3>
      <div className={styles['wrapper']}>
        <ListSideMenu />
        <ListCards />
      </div>
    </BaseLayout>
  );
}

export default ProductList;
