let price = document.getElementById('price');
let title = document.getElementById('title');
let texas = document.getElementById('texas');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let create = document.getElementById('create');
function getTotal(){
    if (price.value != ''){
        let result = (+price.value + +texas.value + +ads.value) /100 *(100 - +discount.value);
        result = Math.round(result);
        total.innerHTML = result;
        total.style.background = '#040';
    }
    else{
        total.innerHTML = '';
        total.style.background = '#f25353';
    }
}
let datapro;
if(localStorage.product != null){
    datapro = JSON.parse(localStorage.getItem('product'))
}else{
    datapro = []
}
create.onclick = function(){
    let newpro = {
        title:title.value,
        price:price.value,
        texas:texas.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    datapro.push(newpro);
    localStorage.setItem('product', JSON.stringify(datapro));
    clearData();
    showData();
}
function clearData(){
    title.value ='';
    price.value = '';
    texas.value = '';
    ads.value = '';
    discount.value = '';
    count.value = '';
    category.value = '';
    total.innerHTML = ''
}
function showData(){
    let tbody = document.getElementById('tbody');
    let table = '';
    for(let i =0;i<datapro.length ;i++){
        table +=`
        <tr>
            <td>#${i + 1}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].texas}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
        `
    }
    tbody.innerHTML = table
}
showData()
