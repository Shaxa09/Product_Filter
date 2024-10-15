const addProductButton = document.getElementById('add-product-button');
const productAside = document.getElementById('aside-panel');
const closeAsideButton = document.getElementById('close-aside');

addProductButton.onclick = () => {
    productAside.classList.add('active')
}

closeAsideButton.onclick = () => {
    productAside.classList.remove('active')
}