import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

import { filterType, genderType } from "../fakeData";
import { searchProducts } from "../service/productService";

/**
 * SearchForm
 * productList- gets the productList
 * setProductList- sets the productList
 */
const SearchForm = ({  setProductList }) => {
    const [searchForm, setSearchForm] = useState({
        filterType: "all",
        filterGender: "all"
    });

    // make a call to filter the product results
    const handleSearch = (e) => {
        e.preventDefault();
        setProductList(searchProducts(searchForm));
    }

    // update inputs value
    const handleChange = (e) => {
        setSearchForm((form) => ({...form, [e.target.name]: e.target.value}))
    }

    // reset the search form
    const handleClear = () => {
        setProductList();
    }

    return (
        <div className="search-box">
            <h4 className="heading">Search and Filter</h4>
            <form className="search-form">
                <Input
                    value={ searchForm.search }
                    name="search"
                    label="Search"
                    handleChange={ handleChange }
                    inputClass="search-input"

                />
                <Select
                    value={ searchForm.filterType }
                    label="Filter Type"
                    name="filterType"
                    handleChange={ handleChange }
                    selectClass="search-input"
                    array={ filterType }
                />
                <Select
                    value={ searchForm.filterGender }
                    label="Filter Gender"
                    name="filterGender"
                    handleChange={ handleChange }
                    selectClass="search-input"
                    array={ genderType }
                />
                <div className="search-buttons">
                    <button type="submit" className="primary-button" onClick={ handleSearch }>Search</button>
                    <button type="reset" className="secondary-button" onClick={ handleClear }>clear</button>
                </div>
                
            </form>
        </div>
    )
}

export default SearchForm;