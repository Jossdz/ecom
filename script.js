const items = [
  {
    name: 'Ironhack T',
    price: 10,
  },
  {
    name: 'Ironhack Hoodie',
    price: 15,
  },
  {
    name: 'Ironhack Sticker',
    price: 2,
  },
  {
    name: 'Ironhack Mug',
    price: 8,
  },
]

let cart = []

const section = document.querySelector('section')

function inputChange(i, name, price) {
  const article = document.querySelectorAll('article')[i]
  const button = article.querySelector('button')
  const input = article.querySelector('input')
  console.log('button', input.value, button);
  button.onclick = () => {
    cart.push({
      quantity: input.value,
      name,
      price
    })
    printCartItems()
  }
}

function printCartItems() {
  const list = document.querySelector('aside ul')
  list.innerHTML = ''
  cart.forEach(item => list.innerHTML += `
    <li>${item.name} / ${item.quantity} / $${item.price}.00</li>
  `)
  updateTotal()
}

function updateTotal() {
  const totalElement = document.querySelector('#total-price')
  const total = cart.reduce((acc, current) => acc + (current.price * current.quantity), 0)
  totalElement.innerText = '$' + total + '.00'
}

items.forEach((item, i) => {
  section.innerHTML += `
    <article class="item">
      <img src="https://miro.medium.com/max/5190/1*aVsUjp1zvlRb1799gDjbLA@2x.jpeg"/>
      <p>${item.name}</p>
      <small>$${String(item.price) + '.00'}</small>
      <input type="number" placeholder="quantity" onchange='inputChange(${i}, "${item.name}", ${item.price})'/>
      <button>Add to cart</button>
    </article>
  `
})

