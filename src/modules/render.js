export function renderProducts(menu) {
  const products = menu.products;

  // const main = document.querySelector('main');

  const productsDiv = document.querySelector('div#products');

  // let product_array_elements = null;

  products.forEach((product) => {
    const div = document.createElement('div');
    div.id = product.id;

    const h2 = document.createElement('h2');
    h2.textContent = product.nameFa;
    div.appendChild(h2);

    const description_p = document.createElement('p');
    description_p.textContent = product.description;
    div.appendChild(description_p);

    const price_p = document.createElement('p');
    price_p.textContent = product.price;
    div.appendChild(price_p);

    product.tags.forEach((tag) => {
      const a = document.createElement('a');
      switch (tag) {
        case 'قهوه':
          a.href = 'coffee';
          break;
        case 'چای':
          a.href = 'tea';
          break;
        case 'دسر':
          a.href = 'dessert';
          break;
        default:
          a.href = '#';
          break;
      }
      a.textContent = tag;

      a.style.margin = '5px';
      a.style.color = 'blue';
      a.style.textDecoration = 'underline';
      // TODO: Replace above styles with tailwind style
      a.className = '';
      div.appendChild(a);
    });

    // Add availability
    const availability_p = document.createElement('p');
    availability_p.textContent = product.available ? 'موجود' : 'ناموجود';
    div.appendChild(availability_p);

    productsDiv.appendChild(div);
  });
}
