const buyPhoneButton = document.querySelector('#buy');
const sellPhoneButton = document.querySelector('#sell');
const mainBox = document.querySelector('.main');
const homePage = document.querySelector('.row');
const homeButton = document.querySelector('#home-button');
const cartQuantity = document.querySelector('#cart-item-numbers');
const cartButton = document.querySelector('#cart');
const contactButton = document.querySelector('#contact');
const orderButton = document.querySelector('#orders');
products = [
    {
        imageUrl : './image/seven.jpg',
        title : 'OnePlus 7',
        price : 34998,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐'
    },
    {
        imageUrl : './image/sevent.jpg',
        title : 'OnePlus 7t',
        price : 36000,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐⭐'
    },
    {
        imageUrl : './image/seventpro.jpg',
        title : 'OnePlus 7t Pro',
        price : 46999,
        seller : 'Phoenix electronics',
        rating : '⭐⭐'
    },
    {
        imageUrl : './image/eight.jpg',
        title : 'OnePlus 8',
        price : 28000,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐'
    },
    {
        imageUrl : './image/eightt.jpg',
        title : 'OnePlus 8t',
        price : 43999,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐⭐'
    },
    {
        imageUrl : './image/eightpro.jpg',
        title : 'OnePlus 8t Pro',
        price : 38000,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐⭐'
    },
    {
        imageUrl : './image/nine.jpg',
        title : 'OnePlus 9',
        price : 38000,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐⭐'
    },
    {
        imageUrl : './image/ninepro.jpg',
        title : 'OnePlus 9 Pro',
        price : 49000,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐⭐⭐'
    },
    {
        imageUrl : './image/tenpro.jpg',
        title : 'OnePlus 10 Pro',
        price : 50000,
        seller : 'Phoenix electronics',
        rating : '⭐⭐⭐⭐⭐'
    }
];

cartItems = [];

boughtItems = [];

function render(products, itemDiv){
    products.forEach((item, index) => {
        const itemInfo = document.createElement('div');
        itemInfo.classList.add('col-lg-3', 'card');

        itemInfo.innerHTML = item.innerHTML = `
            <img src = "${item.imageUrl}" alt = "${item.title}">
            <h2>${item.title}</h2>
            <h3>&#8377 ${item.price}</h3>
            <p><b>${item.seller}</b><br>${item.rating}</p>
        `;
        const cart = document.createElement('button');
        cart.innerText = 'Add to cart';
        cart.classList.add('add');
        cart.addEventListener('click', ()=>{
            if(cartItems.findIndex(ele => ele.title == item.title) == -1){
                cartItems.push(item);
                cart.innerText = "Added✔️";
                cart.style['background-color'] = 'rgb(23, 143, 23)';
                console.log(cartItems);
                cartButton.classList.remove('disabled');
                cartQuantity.style.display = 'inline';
            }else{
                cartItems.splice(cartItems.findIndex(ele => ele.title == item.title), 1);
                cart.innerText = "Add to Cart";
                cart.style['background-color'] = 'rgb(244, 191, 92)';
            }
            
            if(cartItems.length > 0){
                cartQuantity.innerText = cartItems.length;
            }else{
                cartButton.classList.add('disabled');
                cartQuantity.style.display = 'none';
            }
        });
        itemInfo.append(cart);
        itemDiv.append(itemInfo);
    })
    return itemDiv;
}

function placeOrder(){
    const cartPage = document.createElement('div');
    cartItems.forEach((item) => {
        const itemSelected = document.createElement('div');
        itemSelected.classList.add('row-lg-12');
        itemSelected.classList.add('item-cart');
        const left = document.createElement('div');
        left.classList.add('left');
        const right = document.createElement('div');
        right.classList.add('right');
        itemSelected.classList.add('item-selected');
        left.innerHTML = `
            <img src = "${item.imageUrl}" alt="${item.title}">
            <h4>${item.title}</h4>
        `;
        right.innerHTML = `
            <h3>&#8377 ${item.price}</>
        `;
        itemSelected.append(left);
        itemSelected.append(right);
        cartPage.append(itemSelected);
    });
    cartPage.insertAdjacentElement = `<hr>`;
    const total = document.createElement('h3');
    total.id = 'total';
    total.innerHTML = `
        <hr>
        Total : ${cartItems.reduce((accu, ele) => accu + ele.price, 0)}
    `;
    cartPage.append(total);
    return cartPage;
}

function cartButtonHandler() {
    mainBox.removeChild(mainBox.firstElementChild);
    const cartPage = document.createElement('div');
    cartPage.classList.add('column');
    const list = placeOrder();
    const placeOrderButton = document.createElement('button');
    placeOrderButton.classList.add('order-btn');
    placeOrderButton.innerText = 'Buy';
    placeOrderButton.addEventListener('click', () => {
        mainBox.removeChild(mainBox.firstElementChild);
        mainBox.innerHTML = `
            <div class = 'message-display'>
                <h1>Order Placed Successfully 🎉</h1>
                <p>Click on Home button</p>
            </div>
        `;
        boughtItems.push(cartItems);
        cartItems = [];
        cartQuantity.style.display = 'none';
        cartButton.classList.add('disabled');
    });
    cartPage.append(list);
    cartPage.append(placeOrderButton);
    mainBox.append(cartPage);

}

function applyButtonHandler() {
    mainBox.removeChild(mainBox.firstElementChild);
    mainBox.innerHTML = `
            <div class = 'message-display'>
                <h1>Application status successfull 🎉</h1>
                <p>Click on Home button</p>
            </div>
        `;
}

function buyPhoneHandler() {
    mainBox.removeChild(mainBox.firstElementChild);
    const buyPage = document.createElement('div');
    buyPage.classList.add('row');
    const listItem = render(products, buyPage);
    mainBox.append(listItem);
}

function sellPagerender() {
    const formDiv = document.createElement('div');
    formDiv.classList.add('form-display');
    const form = document.createElement('form');
    form.classList.add('form-render');
    form.innerHTML = `
        <label for = 'name'>Full name</label>
        <input type = 'text' placeholder = 'Enter your full name' name = 'fullname'>
        <br>
        <label for = 'email'>Email</label>
        <input type = 'email' placeholder = 'Enter valid email' name = 'email'>
        <br>
        <label for = 'phone'>Contact no. </label>
        <input type = 'tel' placeholder = '+91 *****' name = 'phone'> 
        <br>
        <label for = 'brand'>Brand name</label>
        <select>
            <option>OnePlus</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Oppo</option>
        </select>
        <br>
        <label for = 'modelname'>Model Name</label>
        <input type = 'text' placeholder = 'Enter your model name' name = 'modelname'>
        <br>
        <button>Apply</button>
    `;
    const applyButton = form.querySelector('button');
    applyButton.className = 'apply-btn';
    applyButton.addEventListener('click', applyButtonHandler);
    formDiv.append(form);
    return formDiv;
}

function sellPhoneHandler(){
    mainBox.removeChild(mainBox.firstElementChild);
    const sellPage = document.createElement('div');
    sellPage.append(sellPagerender());
    mainBox.append(sellPage);
}

function contactPageHandler() {
    mainBox.removeChild(mainBox.firstElementChild);
    const contactPage = document.createElement('div');
    contactPage.classList.add('cont', 'container', 'row');
    const left = document.createElement('div');
    left.classList.add('l', 'col-lg-3');
    const right = document.createElement('div');
    right.classList.add('r', 'container', 'column', 'col-lg-9')
    left.innerHTML = `
        <h2>Contact<br>Information</h2>
    `;
    const hTwo = document.createElement('h2');
    hTwo.innerText = 'Please fill the details';
    hTwo.classList.add('row-lg-3');
    const rightLeft = document.createElement('div');
    rightLeft.classList.add('rightLeft', 'col-lg-6');
    const rightRight = document.createElement('div');
    rightRight.classList.add('rightRight', 'col-lg-6');
    const details = document.createElement('div');
    details.classList.add('details', 'row-lg-6', 'container', 'row');
    const detailsButtonDiv = document.createElement('div');
    detailsButtonDiv.classList.add('details-btn', 'col-lg-12');
    rightLeft.innerHTML = `
        <label>First Name</label>
        <input type = 'text' placeHolder = 'First Name'>
        <label>Email</label>
        <input type = 'email' placeHolder = 'email'>
    `;
    rightRight.innerHTML = `
        <label>Last Name</label>
        <input type = 'text' placeHolder = 'Last Name'>
        <label>Contact</label>
        <input type = 'tel' placeHolder = 'Telephone'>
    `;
    const detailsButton = document.createElement('button');
    detailsButton.innerText = 'Submit';
    detailsButton.classList.add('submit', 'row-lg-3');
    detailsButton.addEventListener('click', ()=>{
        mainBox.removeChild(mainBox.firstElementChild);
        mainBox.innerHTML = `
        <div class = 'message-display'>
            <h1>Complain saved successfull 🎉</h1>
            <p>Click on Home button</p>
        </div>
        `;
    })
    details.append(rightLeft);
    details.append(rightRight);
    detailsButtonDiv.append(detailsButton);
    right.appendChild(hTwo);
    right.append(details);
    right.append(detailsButtonDiv);
    contactPage.append(left);
    contactPage.append(right);
    mainBox.append(contactPage);  
}



homeButton.addEventListener('click', (event)=>{
    console.log(mainBox.childNodes);
    mainBox.removeChild(mainBox.firstElementChild);
    if(mainBox.childNodes[1] !== 'div.row'){
        mainBox.append(homePage);
    }
})
buyPhoneButton.addEventListener('click', buyPhoneHandler);
sellPhoneButton.addEventListener('click', sellPhoneHandler);
cartButton.addEventListener('click', () => {
    if(cartItems.length > 0){
        cartButtonHandler();
    }
});

function renderorderedProducts() {
    const div = document.createElement('div');
    div.classList.add('container');
    boughtItems.forEach((item) => {
        const subDiv = document.createElement('div');
        subDiv.classList.add('row');
        subDiv.classList.add('nth-order');
        item.forEach((subItem) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('card');
            itemDiv.classList.add('col-lg-3');
            itemDiv.innerHTML = `
                <img src = '${subItem.imageUrl}' alt = '${subItem.title}'>
                <h3>${subItem.title}</h3>
                <h4>&#8377 ${subItem.price}</h4>
                <h5>${subItem.seller} <br> ${subItem.rating}</h5>
                <h6>Sold✔️</h6>
            `;
            subDiv.append(itemDiv);
        });
        div.append(subDiv);
    });
    return div;
}

function orderPageHandler(){
    mainBox.removeChild(mainBox.firstElementChild);
    const orderPage = document.createElement('div');
    const orderedProducts = renderorderedProducts();
    console.log(orderedProducts);
    orderPage.append(orderedProducts);
    mainBox.append(orderPage);
}

contactButton.addEventListener('click', contactPageHandler);
orderButton.addEventListener('click', orderPageHandler);