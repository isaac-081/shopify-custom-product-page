/*
 * Shopify Custom Product Page
 * Lightweight product page interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const productForm = document.querySelector('.custom-product-form');

  if (!productForm) return;

  const quantityInput = productForm.querySelector(
    'input[name="quantity"]'
  );

  if (!quantityInput) return;

  quantityInput.addEventListener('change', () => {
    const value = parseInt(quantityInput.value, 10);

    if (Number.isNaN(value) || value < 1) {
      quantityInput.value = 1;
    }
  });
});
