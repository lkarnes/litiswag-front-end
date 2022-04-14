
const ItemCard = ({product}) => {
    return (
        <div className="item-card">
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
                                { count !== 0 
                                    ? <li title={ count }>{ size }</li>
                                    : <li className="out-of-stock" title="out of stock">{ size }</li>
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