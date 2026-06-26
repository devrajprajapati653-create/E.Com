import { useParams } from "react-router";


function CartRow() {
    let product;

    const { sku } = useParams();

    for (let i = 0; i < data.length; i++) {
      const p = data[i];
      if (p.sku == sku) {
        product = p;
        break;
      }
    }
    const {image, title, price, Quantity, ...xyz} = product;
    const {inputValue} = Quantity;
    console.log("Quantity in CartRow is", inputValue);

    function hendelChange(){

    }
  return (
    <div className="flex gap-4 px-8 border-b">
      <div className="w-1/2 flex justify-evenly items-center gap-2">
        <h2>icon</h2>
        <img src={image} alt={title} className="w-18" />
        <h2 className="text-black">{title}</h2>
      </div>
      <div className="w-1/2 flex justify-around items-center">
        <h2>${price}</h2>
        <input
          type="number"
          min="1"
          value={inputValue}
          onChange={hendelChange}
          className="border border-gray-500 rounded-md w-12 text-center"
        />
        <h2>${price * inputValue}</h2>
      </div>
    </div>
  );
}

export default CartRow;
