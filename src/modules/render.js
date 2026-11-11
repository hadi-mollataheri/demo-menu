import { selectCategory } from '../utils/cat-selection.js';
import menu from '../data/menu.json';
import { createProductCards } from '../utils/create-product-cards.js';

// Create a state for category.
let selected_cat_products_state = null;

function renderCatTabs() {
  // Create a div container for categories.
  const cats_container_div = document.getElementById('cats-container');
  cats_container_div.innerHTML = '';
  const ul = document.createElement('ul');
  cats_container_div.appendChild(ul);
  ul.className = 'flex px-1.5 justify-between';

  const makeCatTab = (id, nameFa) => {
    const li = document.createElement('li');
    li.className = 'underline text-blue-800 cursor-pointer';
    li.textContent = nameFa;
    // Use custom data attribute(data-*) by using .dataset for setting the category on LIs instead of using id,
    // because later if we have couple of tha cat id code breaks caus we can't have several same id
    li.dataset.category = id;
    const handle_catSelection_click = () => {
      // Update category state with all or new products array that it's list item has been clicked.
      selected_cat_products_state =
        id === 'all' ? menu.products : selectCategory(id, menu.products);
      // Run render function with selected category products state.
      renderApp();
    };
    li.addEventListener('click', handle_catSelection_click);
    return li;
  };
  menu.categories.forEach((cat) =>
    ul.appendChild(makeCatTab(cat.id, cat.nameFa)),
  );
  ul.appendChild(makeCatTab('all', 'همه'));
}

const renderProducts = (products) => {
  const main = document.querySelector('main');
  // Create a div container for all the products
  let productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  // Create and render a div container and other elements for all the products
  // when page first loaded without changing the category.
  products.forEach((product) => {
    const productDiv = createProductCards(product);
    // Append each product div to products div.
    productsDiv.appendChild(productDiv);
  });
};

export function renderApp() {
  renderCatTabs();
  renderProducts(selected_cat_products_state || menu.products);
}
