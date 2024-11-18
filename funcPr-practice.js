const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 },
];
    let totalPrice = 0;
    for (let i=0; i<cart.length; i++){
        totalPrice += cart[i].price * cart[i].quantity;
    }

    console.log(`Total Price: ${totalPrice}`);

    totalPrice = 0;
    cart.forEach(
        item => {
            totalPrice += item.price * item.quantity;
        }
    );
    console.log(`Total Price: ${totalPrice}`);

    totalPrice = cart.reduce( 
        (total, item) => total + item.price * item.quantity, 0
    );
    console.log(`Total Price: ${totalPrice}`);

    const itemTotals = cart.map(
        item => ({ item: item.item, total: item.price * item.quantity })
    );
    console.log(itemTotals);