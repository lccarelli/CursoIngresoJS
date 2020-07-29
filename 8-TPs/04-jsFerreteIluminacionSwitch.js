/*4.	Para el departamento de iluminación:
    Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
    y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    si es  “FelipeLamparas” se hace un descuento del 10 % y 
    si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del 
    impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio() {
    const ARGENTINA_LUZ = "ArgentinaLuz";
    const FELIPELAMPARAS = "FelipeLamparas";
    const DESC_50 = 0.5;
    const DESC_40 = 0.4;
    const DESC_30 = 0.3;
    const DESC_25 = 0.25;
    const DESC_20 = 0.2;
    const DESC_15 = 0.15;
    const DESC_10 = 0.1;
    const DESC_5 = 0.05;
    const NO_DESC = 0;

    let vIngresoBruto;
    let vCalculo;

    let marca = document.getElementById("Marca").value;
    let cantidad = parseInt(document.getElementById("txtIdCantidad").value);

    switch (cantidad) {
        case 6:
            //A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
            vCalculo = calculoInterno(cantidad, DESC_50);
            console.log('A: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
            break;

        case 5:
            switch (marca) {
                case ARGENTINA_LUZ:
                    //B.1 Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
                    vCalculo = calculoInterno(cantidad, DESC_40);
                    console.log('B.1.: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
                    break;

                default:
                    //B.2. si es de otra marca el descuento es del 30%.
                    vCalculo = calculoInterno(cantidad, DESC_30);
                    console.log('B.2.: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
                    break;
            }
            break;
        case 4:
            switch (marca) {
                case ARGENTINA_LUZ:
                case FELIPELAMPARAS:
                    //C.1. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %
                    vCalculo = calculoInterno(cantidad, DESC_25);
                    console.log('C.1.: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
                    break;

                default:
                    //C.2. si es de otra marca el descuento es del 20%.
                    vCalculo = calculoInterno(cantidad, DESC_20);
                    console.log('C.2.: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
                    break;
            }
            break;

        case 3:
            switch (marca) {
                case ARGENTINA_LUZ:
                    //D.1. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%
                    vCalculo = calculoInterno(cantidad, DESC_15);
                    console.log('D.1.: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
                    break;

                case FELIPELAMPARAS:
                    //D.2. si es  “FelipeLamparas” se hace un descuento del 10 %
                    vCalculo = calculoInterno(cantidad, DESC_10);
                    console.log('D.2.: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
                    break;

                default:
                    //D.3 si es de otra marca un 5%.
                    vCalculo = calculoInterno(cantidad, DESC_5);
                    console.log('D.3.: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
                    break;
            }
            break;

        default:
            //Sin descuento
            vCalculo = calculoInterno(cantidad, NO_DESC);
            console.log('SIN DESC: cantidad ->', cantidad, 'Calculo -> ', vCalculo);
            break;
    }

    if (vCalculo > 120) {
        vIngresoBruto = vCalculo * 0.1;
        vCalculo = parseInt(vCalculo + vIngresoBruto).toFixed(2);
        alert("Usted pago " + vCalculo + " de IIBB.”, siendo" + vIngresoBruto + " el impuesto que se pagó.");
        console.log('vCalculo IIBB -> ', vCalculo);
    }

    document.getElementById("txtIdprecioDescuento").value = vCalculo;
}

function calculoInterno(cant, desc) {
    const PRECIO = 35;
    let vSuma = (cant * PRECIO);
    let vDescuento = (vSuma * desc);

    console.log('vSuma->', vSuma, 'vDescuento->', vDescuento, 'desc->', desc);

    return (vSuma - vDescuento).toFixed(2);
}
