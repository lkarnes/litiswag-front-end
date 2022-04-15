
/**
 * ItemCard- displays the product data in a card view
 * props:
 *  product- object containing all the product information
 */
const ItemCard = ({product}) => {
    return (
        <div className="item-card" key={ product.id }>
            <div className="image-box">
                <img className="item-image" src={product.image ? product.image : "../../../icons/no-image-icon.png"} alt="product"/>
            </div>
            <div className="item-summary">
                <div className="summary-heading">
                    <h5>{ product.productName }</h5>
                    <p>{ product.type }</p>
                    <p>{ product.gender }</p>
                </div>
                
                <p>{ product.productDescription }</p>
                <ul className="stock">
                    { product.stock
                        &&  Object.entries(product.stock).map(([size, count]) => (
                            <>

                                {/* eslint-disable-next-line eqeqeq */}
                                { count != 0 
                                    ? <li title={ count } key={ size }>{ size.toUpperCase() }</li>
                                    : <li className="out-of-stock" title="out of stock" key={ size }>{ size.toUpperCase() }</li>
                                }
                            </>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ItemCard