import { productsList } from "../fakeData"

// Get call to retrieve a full product list
export const getProducts = () => {
    return productsList;
}

// Post call to create a product
export const createProduct = (body) => {
    
    // TODO: make post call to create a product
}

// search product helpers

// checks the search query in the form
const checkSearch = (search, product) => {
    return ((!search || search.trim() === "") || product.productName.includes(search));
}

// compares the product type in the form vs in the product
const checkType = (type, product) => {
    return (type === "all" || type === product);
}

// compares the gender in the form vs in the product
const checkGender = (gender, product) => {
    return (gender === "all" || product === gender);
}

// Get call to search for a product
export const searchProducts = (searchForm) => {
    return productsList.filter((product) => {
        return (checkSearch(searchForm.search, product) && checkType(searchForm.filterType, product.type) && checkGender(searchForm.filterGender, product.gender));
    });
}