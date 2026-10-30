import { formatPrice } from '../utils/format.js';

export function renderProducts(menu) {
  const products = menu.products;

  const productsDiv = document.querySelector('div#products');

  products.forEach((product) => {
    // Product div
    const div = document.createElement('div');
    div.id = product.id;
    div.className =
      'flex flex-col items-center leading-10 bg-gray-200 rounded-xl p-2.5';

    const h2 = document.createElement('h2');
    h2.textContent = product.nameFa;
    h2.className = 'font-bold text-lg';
    div.appendChild(h2);

    const image = document.createElement('img');
    image.src = product.image;
    image.className = 'w-64 h-64 object-cover my-3 rounded';
    div.appendChild(image);

    const description_p = document.createElement('p');
    description_p.textContent = product.description;
    div.appendChild(description_p);

    const price_p = document.createElement('p');
    price_p.textContent = formatPrice(product.price);
    div.appendChild(price_p);

    product.tags.forEach((tag) => {
      const a = document.createElement('a');
      const category = menu.categories.find((c) => tag === c.nameFa);
      a.href = category ? `#${category.id}` : '#';
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
    availability_p.className = `${product.available ? 'text-green-700' : 'text-red-600'}`;
    div.appendChild(availability_p);
    // Append each product div to products div
    productsDiv.appendChild(div);
  });
}
