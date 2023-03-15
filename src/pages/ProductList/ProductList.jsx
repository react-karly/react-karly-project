import styles from './ProductList.module.css';
import { BaseLayout, ListSideMenu, ListCard } from '@/components';
function ProductList() {
  return (
    <BaseLayout>
      <h3>베스트</h3>
      <div className={styles['wrapper']}>
        <ListSideMenu />
        <ListCard />
      </div>
    </BaseLayout>
  );
}

export default ProductList;
