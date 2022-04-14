import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ItemCard from "../components/ItemCard";
import SearchForm from "../components/SearchForm";
import { productsList } from "../fakeData";

/**
 * Landing Page- Root directory of the site where the product list displays
 */
const LandingPage = (props) => {
    const [productList, setProductList] = useState(productsList);

    console.log(productList);
    
    return (
        <>
            <Header { ...props }/>
            <div className="content-box landing-page">
                <SearchForm productList={ productList } setProductList={ setProductList } />
                <div className="product-list">
                    { productList 
                        ? productList.length > 0 
                            ? productList.map((product) => (
                                <ItemCard
                                    key={ product.productId }
                                    product={product}
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