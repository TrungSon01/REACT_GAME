import React from "react";
import DetailShoe from "./DetailShoe";
import ListShoe from "./ListShoe";
import CartShoe from "./CartShoe";
export default function ExShoe() {
  // tạo state để lưu item shoe được user click
  // click => set state => render lại layout
  let [detailShoe, setDetailShoe] = useState({});
  // tạo state lưu trữ giỏ hàng
  let [cart, setCart] = useState([]);
  console.log("detailShoe:", detailShoe);
  let handleAddToCart = (shoe) => {
    // tạo ra 1 giỏ hàng mới
    let newCart = [...cart];
    // kiểm tra xem sản phẩm đã có trong giỏ hàng chưa dựa vào function findIndex
    let index = cart.findIndex((item) => {
      return item.id == shoe.id;
    });
    console.log("index:", index);

    if (index == -1) {
      // th1: sản phẩm chưa có trong giỏ hàng => thêm mới (push) vào giỏ hàng với số lượng là 1
      let newShoe = { ...shoe, total: 1 }; // tạo ra 1 object mới từ object cũ và thêm 1 key mới là total
      newCart.push(newShoe);
    } else {
      // th2: sản phẩm đã có trong giỏ hàng => không thêm => tăng số lượng lên 1
      newCart[index].total++;
    }
    // cập nhật giỏ hàng mới vào state => render lại layout
    setCart(newCart);
  };

  let handleDelete = (idShoe) => {
    console.log("idShoe:", idShoe);
    let newCart = cart.filter((shoe) => shoe.id !== idShoe);
    setCart(newCart);
  };
  // giỏi hàng 10 sp => xoá 1 sp => giỏ hàng còn 9 sp
  return (
    <div>
      <DetailShoe />
      <div className="flex">
        <div className="w-1/2">
          <ListShoe />
        </div>
        <CartShoe />
      </div>
    </div>
  );
}
