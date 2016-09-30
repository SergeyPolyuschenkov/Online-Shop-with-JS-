
//Создаем телефоны-объекты
var iPhone4S = {
	name: "Apple iPhone 4S",
	price: 3800,
	image: "img/4S.jpg",
	description: "The iPhone 4S (retroactively stylized with a lowercase 's' as iPhone 4s as of September 2013) is a smartphone that was designed and marketed by Apple Inc. It is the fifth generation of the iPhone, succeeding the iPhone 4 and preceding the iPhone 5. Announced on October 4, 2011 at Apple's Cupertino campus, its media coverage was accompanied by news of the death of former Apple CEO and co-founder Steve Jobs on the following day."
};
var iPhone5 = {
	name: "Apple iPhone 5",
	price: 6900,
	image: "img/5.jpg",
	description: "The iPhone 5 is a smartphone that was designed and marketed by Apple Inc. It is the sixth generation of the iPhone, succeeding the iPhone 4S and preceding the iPhone 5S and iPhone 5C. Formally unveiled as part of a press event on September 12, 2012, it was released on September 21, 2012. It was the first iPhone to be completely developed under the guidance of Tim Cook."
};
var iPhone6 = {
	name: "Apple iPhone 6",
	price: 10000,
	image: "img/6.jpg",
	description: "The iPhone 6 and iPhone 6 Plus are smartphones designed and marketed by Apple Inc. The devices are part of the iPhone series and were announced on September 9, 2014, and released on September 19, 2014. The iPhone 6 and iPhone 6 Plus jointly serve as successors to the iPhone 5S and were themselves replaced as flagship devices of the iPhone series by the iPhone 6S and iPhone 6S Plus on September 9, 2015."
};
var S6 = {
	name: "Samsung Galaxy S6",
	price: 9200,
	image: "img/S6.jpg",
	description: "Samsung Galaxy S6, Samsung Galaxy S6 Edge, and Samsung Galaxy S6 Edge+ are Android smartphones manufactured and marketed by Samsung Electronics. The S6 line serves as a successor to the Galaxy S5. The S6 and S6 Edge smartphones were officially unveiled in the first Samsung Unpacked 2015 event at Mobile World Congress on 1 March 2015, while the bigger S6 Edge+ was officially unveiled together with the Samsung Galaxy Note 5 in the second Samsung Unpacked 2015 event at New York on 13 August 2015."
};
var S5 = {
	name: "Samsung Galaxy S5",
	price: 6200,
	image: "img/S5.jpg",
	description: "Samsung Galaxy S5 is an Android smartphone produced by Samsung Electronics. Unveiled on 24 February 2014 at Mobile World Congress in Barcelona, Spain, it was released on 11 April 2014 in 150 countries as the immediate successor to the Galaxy S4. As with the S4, the S5 is an evolution of the prior year's model, placing a particular emphasis on an improved build with a textured rear cover and IP67 certification for dust and water resistance, a more refined user experience, new security features such as a fingerprint reader and private mode, expanded health features (such as a built-in heart rate monitor), and an updated camera."
};
//Создаем массим из ассоциативных массивов.
var phones = {
	name: "Телефоны",
	list: [iPhone4S, iPhone5, iPhone6, S6, S5]
};

//Создаем ноутбуки-объекты
var HP1 = {
	name: "HP Notebook 15",
	price: 8000,
	image: "img/note1.jpg",
	description: "Экран 15.6” (1366x768) HD LED, глянцевый / Intel Pentium N3700 (1.6 - 2.4 ГГц) / RAM 4 ГБ / HDD 1 TБ / AMD Radeon R5 M330, 1 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 2.19 кг / черный"
};
var HP2 = {
	name: "HP 250 G5 Black",
	price: 13300,
	image: "img/note2.jpg",
	description: "Экран 15.6” (1920x1080) Full HD, глянцевый с антибликовым покрытием / Intel Core i3-5005U (2.0 ГГц) / RAM 8 ГБ / SSD 256 ГБ / AMD Radeon R5 M430, 2 ГБ / DVD Super Multi / LAN / Wi-Fi / Bluetooth / веб-камера / DOS / 1.96 кг / черный"
};
var Dell1 = {
	name: "Dell Inspiron 3542",
	price: 11300,
	image: "img/note3.jpg",
	description: "Экран 15.6 (1366x768) WXGA HD WLED TrueLife, глянцевый / Intel Core i3-4005U (1.7 ГГц) / RAM 4 ГБ / HDD 500 ГБ / nVidia GeForce 820M, 2 ГБ / DVD±RW / LAN / Wi-Fi / Bluetooth 4.0 / веб-камера / Windows 10 Home 64bit Single Language Russian / черный"
};
//Создаем массим из ассоциативных массивов.
var notebooks = {
	name: "Ноутбуки",
	list: [HP1, HP2, Dell1]
};


//Создаем парфюмы-объекты
var kenzo = {
	name: "Kenzo L'eau Par",
	price: 1000,
	image: "img/kenzo.jpg",
	description: "Аромат L'Eau par Kenzo pour Homme – это торжество чистоты и мужественности. Безупречно сдержанный аромат не погружает в раздражающее буйство запахов и оттенков. Элегантный, утонченный и невинный запах маленького японского дерева юзу искрится в верхних нотах свежими и прозрачными нотками лимона, переливаясь и играя в лучах гармонии розового дерева и лотоса."
};
var trussardi = {
	name: "Trussardi My Land",
	price: 780,
	image: "img/trussardi.jpg",
	description: "Главной темой аромата Trussardi My Land стали путешествия и возвращение домой, что отражено и в названии, и в звучании аромата. Это возвращение в родной город после изнурительного путешествия, наполненного новым опытом, новыми открытиями, эмоциями и завораживающими историями."
};
//Создаем массим из ассоциативных массивов.
var parfumes = {
	name: "Парфюмерия",
	list: [kenzo, trussardi]
};

var menu_arr = [phones, notebooks, parfumes];

for (var i = 0; i<menu_arr.length; i++) {
	document.getElementById('menu').innerHTML += "<li class='element' id='menu_arr" + i + "' onclick='category_show(" + i + ")'>" + menu_arr[i].name + "</li>";
}
var current_item;
function category_show(index) {
	document.getElementById('main').innerHTML = "";
	for (var i = 0; i<menu_arr[index].list.length; i++) {
		document.getElementById('main').innerHTML += "<div class='item' onclick='item_show(menu_arr["+index+"].list["+i+"])'><img src='" + menu_arr[index].list[i].image + "'><span>" + menu_arr[index].list[i].name + "</span></div>"
	}
}
function item_show(item) {
	current_item = item;
	document.getElementById('main').innerHTML = "<div class='item'><img src='" + item.image + "'><span>" + item.name + "</span><span>" + item.price + " UAH</span><p>" + item.description + "<input type='submit' class='buy_but' value='Купить сейчас!' onclick='basket()'></div>"
}
function basket() {
	document.getElementById('main').innerHTML = "<form action=''><input type='text' name='item' value='" + current_item.name + "' disabled><input type='number' name='quantity' placeholder='Количество' min='1' max='10'><input type='text' name='name' placeholder='Ваше имя'><input name='phone' type='text' placeholder='Ваш номер телефона'><input type='submit' class='buy_but' value='Оформить заказ' onclick='confirm_order()'></form>";
}


function confirm_order () {
	var item = current_item;
	var quantity = document.forms[0].elements.quantity;
	var name = document.forms[0].elements.name;
	var phone = document.forms[0].elements.phone;


	document.getElementById('main').innerHTML = "<table><tr><th>Товар: </th><td>" +item.name+ "</td></tr><tr><th>Количество: </th><td>"+quantity.value+"</td></tr><tr><tr><th>Сумма к оплате: </th><td>"+quantity.value*item.price+"</td></tr><tr><th>Имя: </th><td>"+name.value+"</td></tr><tr><th>Номер телефона: </th><td>"+phone.value+ "</td></tr></table><input type='submit' class='buy_but' value='Подтвердить заказ' onclick='succes_operation()'>";
}

function succes_operation () {
	document.getElementById('main').innerHTML = "<h1>Спасибо за заказ, наши менеджеры свяжутся с Вами в ближайшее время.</h1>"
}