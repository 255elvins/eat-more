
// MR WISEMAN ENTERPRISE
// Shopping Cart Functionality

let cart = [];

// ADD PRODUCT TO CART
function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cart-count").innerText =
        cart.length;

    alert(name + " added to your cart!");
}

// DISPLAY SHOPPING CART
function showCart() {

    if (cart.length === 0) {
        alert("Your shopping cart is empty!");
        return;
    }

    let message = "MR WISEMAN ENTERPRISE\n";
    message += "YOUR SHOPPING CART\n\n";

    let total = 0;

    cart.forEach(function(item, index) {

        message += (index + 1) + ". ";
        message += item.name;
        message += " - KSh " + item.price + "\n";

        total += item.price;

    });

    message += "\n----------------------";
    message += "\nTOTAL: KSh " + total;

    message += "\n\nThank you for shopping with us!";

    alert(message);
}
