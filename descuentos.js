//const precioOriginal = 120;

//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
    
}

function onClickButtonPriceDiscount(){

    const inputPrice = document.getElementById("InputPrice").value;

    const inputDiscount = document.getElementById("InputDiscount").value;

    const precioConDescuento = calcularPrecioConDescuento(inputPrice, inputDiscount);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;

}

function calcDiscountCouponButton() {
    
    const inputPrice = document.getElementById("InputPrice").value;
    const inputCoupon = document.getElementById("InputCoupon").value;
    const resultP = document.getElementById("ResultP");
    let discount;

    const coupons = [
        "Coupon1",
        "Coupon2",
        "Coupon3"
    ]

    switch(inputCoupon){
        case coupons[0]:
            discount = 15;
            break;
        case coupons[1]:
            discount = 20;
            break;
        case coupons[2]:
            discount = 25;
            break;            
    }

    if(!discount > 0){
        resultP.innerText = `El cupon ingresado no es valido, el precio es ${inputPrice}`
    } else {
        const newPrice = calcularPrecioConDescuento(inputPrice, discount);
        resultP.innerText = `El cupon es valido, el precio final es: ${newPrice}`
    }

}