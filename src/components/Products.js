import React from "react";
import "./Products.css";
import {ReactComponent as Star} from '../UI/icons/star.svg';
import MyContext from "../Context";

const styles = {
    width: '366px',
    height: '307px',
    left: '69px',
    top: '820px',
    borderRadius: '10px 10px 0px 0px'
}

function Products() {
  const {count, setCount} = React.useContext(MyContext);
  const userProducts = [];
  const[allResponses, setAllResponses] = React.useState([]);
  const [stopInfiniteLoop, setStopInfiniteLoop] = React.useState(false);

  if(!stopInfiniteLoop){
      fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json")
        .then((response) => response.json())
        .then((data) => {
            //   console.log(dataItem);
            for(const dataItem in data){
                userProducts.push({
                    id: data[dataItem].id,
                    newprice: data[dataItem].newPrice,
                    oldprice: data[dataItem].oldPrice,
                    productimage: data[dataItem].productImage,
                    productname: data[dataItem].productName
                });
                setAllResponses(userProducts);
            }
        });
        setStopInfiniteLoop(true);
    }

  return (
    <div className="products-container">
      <h3>Products</h3>
      <div className="products-row">
        {
            allResponses && (
                allResponses.map((item) => {
                    return (
                        <div key={item.id} className="item-card">
                            <img style={styles} src={item.productimage} alt={item.productname} />
                            <p className="name">{item.productname}</p>
                            <div className="pricing">
                                <div className="stars">
                                    <Star style={{height: '18px', width: '18px', marginTop: '10px'}}/>
                                    <Star style={{height: '18px', width: '18px', marginTop: '10px'}}/>
                                    <Star style={{height: '18px', width: '18px', marginTop: '10px'}}/>
                                    <Star style={{height: '18px', width: '18px', marginTop: '10px'}}/>
                                    <Star style={{height: '18px', width: '18px', marginTop: '10px'}}/>
                                </div>
                                <div className="prices">
                                    <p className="old-Price">{item.oldprice}/-</p>
                                    <p className="new-Price">{item.newprice}/-</p>
                                </div>
                            </div>
                            <button className="btn" onClick={() => setCount(count+1)}>ADD TO CART</button>
                        </div>
                    )
                })
            )
        }
      </div>
    </div>
  );
}

export default Products;
