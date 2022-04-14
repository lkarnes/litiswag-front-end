import { productsList } from "../fakeData"

export const getProducts = () => {
    return productsList;
}

// search for product
export const searchProducts = (searchForm) => {
    console.log(searchForm)
    let response = productsList;
    if (searchForm.search && searchForm.search.trim()) {
        response = productsList.filter(product => {
            console.log(product.productName, searchForm.search, product.type, searchForm.filterType, product.gender, searchForm.filterGender )
            if (product.productName.includes(searchForm.search) 
                && (!searchForm.filterType === "all" || product.type === searchForm.filterType) 
                && (!searchForm.filterGender === "all" || product.gender === searchForm.filterGender)
            ) {
                return true;
            }
            return false;
        })
    }

    console.log(response);
    return response;
}