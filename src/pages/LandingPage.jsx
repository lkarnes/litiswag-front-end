import { useEffect, useState } from "react";
import CreateForm from "../components/CreateForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import SearchForm from "../components/SearchForm";
import { getProducts } from "../service/productService";

/**
 * Landing Page- Root directory of the site where the product list displays
 */
const LandingPage = (props) => {
    const [productList, setProductList] = useState();
    const [create, setCreate] = useState(false);

    // retrieves a product list when needed
    useEffect(() => {

        if (!productList) {
            // TODO: convert to api call
            setProductList(getProducts());
        }
        
    }, [productList])
    
    
    return (
        <>
            <Header { ...props }/>
            <div className="content-box landing-page">
                { !create && <button className="primary-button create-button" onClick={ () => setCreate(!create) } >Create Product</button> }
                { create && 
                    <CreateForm
                        productList={ productList }
                        setProductList={ setProductList }
                        closeForm={ () => setCreate(false) }
                    />
                }
                <SearchForm setProductList={ setProductList } />
                <div className="product-list">
                    { productList 
                        ? productList.length > 0 
                            ? productList.map((product, index) => (
                                <div className="item-card-box" key={ product.productId + "-" + index  }>
                                    <ItemCard
                                        product={product}
                                    />
                                </div>
                            ))
                            : <div>no products found</div>
                        : <div>Loading...</div>
                    }
                </div>
            </div>
            <Footer {...props}/>
        </>
    )
}

export default LandingPage;