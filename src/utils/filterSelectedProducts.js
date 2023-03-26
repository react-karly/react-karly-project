export const filterSelectedProducts = (productList) => {
  return productList.filter((product) => product.isChecked);
};
