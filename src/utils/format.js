export function formatPrice(number) {
  const price = new Intl.NumberFormat('fa-IR').format(number);
  return `${price} تومان`;
}
