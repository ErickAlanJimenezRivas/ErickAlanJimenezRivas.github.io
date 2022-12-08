const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shoping-cart');
const productoCarrito = document.querySelector('.shoppingCart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-info')
const productDetailCloseBtn = document.querySelector('.product-detail-close');

menuCarritoIcon.addEventListener('click', togglecarritoCompras);
navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleBurguerMenu);
productDetailCloseBtn.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productoCarrito.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleBurguerMenu(){
    productoCarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function togglecarritoCompras(){
    mobileMenu.classList.add('inactive');
    productoCarrito.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productoCarrito.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2019/08/13/20/51/bike-4404230_960_720.jpg',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'goku',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/11/15/05/36/young-3816557_960_720.jpg',
});
productList.push({
    name: 'Bardok',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/11/14/12/12/young-3815074__340.jpg',
});
productList.push({
    name: 'Zenosama',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/09/15/11/29/cute-3679163__340.jpg',
});
productList.push({
    name: 'Trunks',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/11/15/05/40/young-3816561__340.jpg',
});
productList.push({
    name: 'Goku black',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/11/14/12/12/young-3815077__340.jpg',
});
productList.push({
    name: 'Bulma',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/11/14/12/13/young-3815082__340.jpg',
});
productList.push({
    name: 'Androide 18',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2019/05/12/05/38/android-4197231__340.jpg',
});
productList.push({
    name: 'Gohan',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/11/16/00/22/young-3818479__340.jpg',
});
productList.push({
    name: 'Krillin',
    price: 120,
    image: 'https://cdn.pixabay.com/photo/2018/09/10/00/39/boy-3665912__340.jpg',
});

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);
    
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
    
      const productInfoDiv = document.createElement('div');
    
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText = product.name;
    
      productInfoDiv.append(productPrice, productName);
      //productInfoDiv.appendChild(productName);
    
      const productInfoFigure = document.createElement('figure');
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
      productInfoFigure.appendChild(productImgCart);
    
      productInfo.append(productInfoDiv, productInfoFigure);
      //productInfo.appendChild(productInfoFigure);
    
      productCard.append(productImg, productInfo);
      //productCard.appendChild(productInfo);
    
      cardsContainer.appendChild(productCard);
    }
  }
  
  renderProducts(productList);