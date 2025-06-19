// import { FiShoppingCart } from "react-icons/fi";
// import productData                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from "../data/product-data";

// function ProductItem ({ image, title, stock, cost, discount }) {
//     return (
//         <div className="product-item">
//             <div className="product-img">
//                 <img src={image} />
//             </div>
//             <div className="product-details">
//                 <h3 className="product-title">{title}</h3>
//                 <div className="product-price-and-actions">
//                     <h4 className="listing-pricing">
//                         {discount > 0 && <span className="product-discount">${Math.ceil((100-discount)/100*cost)}</span>}
//                         {/* <span className="product-cost">${cost}</span> */}
//                         <span className={discount > 0 ? "product-cost" : "product-discount"}>${cost}</span>
//                     </h4>                                 
//                 </div>
//                 {
//                 stock > 0 && <button className="product-btn"> 
//                     <IoIosCart />
//                 </button>
//                 }
//             </div>
//         </div>
//     )
// }

// function Products () {
//     return (
//         <section>
//             {
//                 productData.map(Products) => {
//                     return <ProductItem image={Products.image} title={Products.title}
//                     cost={Products.price} stock={Products.stock} discount={Products.discount}
//                     />
//                 }
//             }
//         </section>
//     )}

// export default Products;
import products_data from "../data/product-data"
function Dishes ({ title, description, image, discountPercentage, rate, price }) {
    return (
        <div className="menu-card">
            <div className="dish-img">
                <img src={image} alt="" />
                <span className="badge-percent">{discountPercentage}%</span>
                <span className="rating">{rate}⭐</span>
            </div>
            <div className="menu-content">
                <div className="text-area">
                    <p className="dish-title">{title}</p>
                    <p className="food-description">{description}</p>
                </div>
                <div className="price-tag">
                    <strong>${price}</strong>
                </div>
            </div>
        </div>
    )
}


function Menu () {
    return (
        <section className="menu-section">
            {products_data.map(({ title, description, image, discountPercentage, rate, price }, idx) => (
                <Dishes 
                key={idx}
                title={title}
                description={description}
                discountPercentage={discountPercentage}
                rate={rate}
                image={image}
                price={price}
                />
            ))}
        </section>
    )
}

export default Menu;