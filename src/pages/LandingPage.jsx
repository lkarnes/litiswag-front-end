import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
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
    const [createProduct, setCreateProduct] = useState(false);

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
                
                {/* TODO: Hide ProductForm behind validation */}
                { !createProduct && <button className="primary-button create-button" onClick={ () => setCreateProduct(!createProduct) } >Create</button> }
                { createProduct && 
                    <ProductForm
                        productList={ productList }
                        setProductList={ setProductList }
                        closeForm={ () => setCreateProduct(false) }
                    />
                }

                <SearchForm setProductList={ setProductList } />

                <div className="product-list">
                    { productList 
                        ? productList.length > 0 
                            ? productList.map((product, index) => (
                                <ItemCard 
                                    key={ index }
                                    product={ product }
                                />
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