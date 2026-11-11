// Use this function inside render.js. And is used for developing
// functionality of the categories section for when
// they have been clicked

export function selectCategory(clickedCatId, products) {
  const selected_cat_products = products.filter(
    (product) => clickedCatId === product.categoryId,
  );
  return selected_cat_products;
}
