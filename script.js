document.addEventListener('DOMContentLoaded', () => {
  let input = document.getElementById('input');
  let button = document.getElementById('click');
  let container = document.querySelector('.katta-box').parentElement;

  let products = Array.from(document.querySelectorAll('.mars')).map(block => {
    return {
      block,
      name: block.querySelector('h3').textContent.toLowerCase()
    };
  });

  button.addEventListener('click', (a) => {
    a.preventDefault();

    let qidiruv = input.value.toLowerCase();

    let filtered = products.filter(product => product.name.includes(qidiruv));

    products.forEach(p => p.block.style.display = 'none');

    filtered.forEach(p => p.block.style.display = '');
  });
});