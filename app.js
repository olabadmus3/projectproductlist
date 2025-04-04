const Wrapper = document.querySelector(".extensionWrapper")

const extension = [
    {
       "logo": {
            "thumbnail": "images//image-waffle-thumbnail.jpg",
            "mobile": "images//image-waffle-mobile.jpg",
            "tablet": "images//image-waffle-tablet.jpg",
            "desktop": "images//image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "logo": {
            "thumbnail": "images//image-creme-brulee-thumbnail.jpg",
            "mobile": "images//image-creme-brulee-mobile.jpg",
            "tablet": "images//image-creme-brulee-tablet.jpg",
            "desktop": "images//image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "logo": {
            "thumbnail": "images//image-macaron-thumbnail.jpg",
            "mobile": "images//image-macaron-mobile.jpg",
            "tablet": "images//image-macaron-tablet.jpg",
            "desktop": "images//image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "logo": {
            "thumbnail": "images//image-tiramisu-thumbnail.jpg",
            "mobile": "images//image-tiramisu-mobile.jpg",
            "tablet": "images//image-tiramisu-tablet.jpg",
            "desktop": "images//image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "logo": {
            "thumbnail": "images//image-baklava-thumbnail.jpg",
            "mobile": "images//image-baklava-mobile.jpg",
            "tablet": "images//image-baklava-tablet.jpg",
            "desktop": "images//image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "logo": {
            "thumbnail": "images//image-meringue-thumbnail.jpg",
            "mobile": "images//image-meringue-mobile.jpg",
            "tablet": "images//image-meringue-tablet.jpg",
            "desktop": "images//image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "logo": {
            "thumbnail": "images//image-cake-thumbnail.jpg",
            "mobile": "images//image-cake-mobile.jpg",
            "tablet": "images//image-cake-tablet.jpg",
            "desktop": "images//image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "logo": {
            "thumbnail": "images//image-brownie-thumbnail.jpg",
            "mobile": "images//image-brownie-mobile.jpg",
            "tablet": "images//image-brownie-tablet.jpg",
            "desktop": "images//image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "logo": {
            "thumbnail": "images//image-panna-cotta-thumbnail.jpg",
            "mobile": "images//image-panna-cotta-mobile.jpg",
            "tablet": "images//image-panna-cotta-tablet.jpg",
            "desktop": "images//image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]

function createCard(item){
    card = document.createElement("div");

    card.classList.add("extensionCard");

    cardContent = `
                <div class="extensionCardTop">
                    <img src=${item.logo.desktop} alt="dev lens">
                        <a href="#cartAll"><img src="https://shopdesserts.netlify.app/assets/images/icon-add-to-cart.svg" alt="cart"> 
                            <h4>Add to Cart</h4></a>
                </div>


                        <div class="conTent">
                        <h4>${item.name}</h4>
                        <h2> ${item.category} </h2>
                        <h1>$ ${item.price}</h1>
                    </div>
                       `;

                       card.innerHTML = cardContent;

                       Wrapper.appendChild(card)
}
extension.filter((item) => {
    return createCard(item);
})