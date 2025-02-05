import { clothesArray } from './data.js';
import { v4 as uuid } from 'https://jspm.dev/uuid';

const orderList = [];

const totalPrice = document.getElementById('total-price');
const addBtns = document.getElementsByClassName('add-btn');
const removeBtns = document.getElementsByClassName('remove-btn');
const orderTitle = document.getElementById('order-title');
const orderBtnContainer = document.getElementById('order-btn-container');
const modal = document.getElementById('modal');
const orderText = document.getElementById('order-completed-text');

const getOrderItemsHtml = () => {
    orderTitle.textContent = orderList.length === 0 ? '' : 'Your order:';

    let orderItemsHtml = '';
    for (let obj of orderList){
        orderItemsHtml += `
        <div class="order-item" id="${obj.item.id}">
            <div class="order-container">
                <h2>${obj.item.name}</h2>
                <button class="remove-btn" data-remove="${obj.uuid}">remove</button>
            </div>
            <h3>${obj.item.price} $</h3>
        </div>
        `;
    }
    return orderItemsHtml;
}

const getSumHtml = () => {
    const sum = orderList.reduce((total, obj) => total + obj.item.price , 0);

    return sum === 0 ? '' : `
    <h2>Total price:</h2>
    <h3>${sum} $</h3>
    `;
}

const createOrderBtn = () => {
    if (orderList.length === 0){
        orderBtnContainer.innerHTML = ``;
    } else {
        orderBtnContainer.innerHTML = `<button class="btn" id="complete-order-btn">Complete order</button>`;
        const orderBtn = document.getElementById('complete-order-btn');
        orderBtn?.addEventListener('click', function(){
            modal.classList.toggle('hidden');
        });
    }
}

const renderOrderItems = () => {

    document.getElementById('order-items').innerHTML = getOrderItemsHtml();

    for (let btn of removeBtns){
        btn.addEventListener('click', removeItem);
    }

    totalPrice.innerHTML = getSumHtml();

    createOrderBtn();
}

const addOrderToOrderList = (e) => {
    const id = Number(e.target.dataset.btn);

    const object = clothesArray.filter((obj) => id === obj.id)[0];
    orderList.push({item: object, uuid: uuid()});

    orderText.classList.remove('order-completed');
    orderText.textContent = '';

    renderOrderItems();
}

const getItemsHtml = () => {
    let itemsHtml = '';
    clothesArray.forEach((obj) => {
        itemsHtml += `
        <div class="item">
            <div class="item-details">
                <div class="emoji-container">
                    <p class="item-emoji">${obj.emoji}</p>
                </div>
                <div class="item-description">
                    <h2>${obj.name}</h2>
                    <p class="item-material">${obj.material}</p>
                    <h3>${obj.price} $</h3>
                </div>
            </div>
            <button class="add-btn" data-btn="${obj.id}">+</button>
        </div>
        `;
    });
    return itemsHtml;
}

const render = () => {
    document.getElementById('items-section').innerHTML = getItemsHtml();
}

render();

for (let i = 0; i < addBtns.length; i++){
    addBtns[i].addEventListener('click', addOrderToOrderList);
}

document.getElementById('submit-form').addEventListener('submit', function(e){
    e.preventDefault();
    modal.classList.toggle('hidden');

    const userName = document.getElementById('user-name');
    orderText.textContent = `Thanks ${userName.value}! Your order is on its way!`;
    orderText.classList.toggle('order-completed');

    userName.value = '';
    document.getElementById('card-number').value = '';
    document.getElementById('cvv').value = '';

    orderList.splice(0);
    renderOrderItems();
});

const removeItem = (e) => {
    const removeId = e.target.dataset.remove;

    const removeObject = orderList.filter((obj) => removeId === obj.uuid)[0];
    orderList.splice(orderList.indexOf(removeObject), 1);

    renderOrderItems();
}