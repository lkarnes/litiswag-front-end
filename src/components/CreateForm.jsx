import { useState } from "react";
import { filterType, genderType } from "../fakeData";
import { createProduct } from "../service/productService";
import Input from "./Input";
import Select from "./Select";

const CreateForm = ({ productList, setProductList, closeForm }) => {
    const [productForm, setProductForm] = useState({ stock: { sm: null, md: null, l: null, xl: null } });

    // update inputs value
    const handleChange = (e) => {
        setProductForm((form) => ({...form, [e.target.name]: e.target.value}))
    }

    // updates the count for the size selected
    const handleStockChange = (e) => {
        setProductForm((form) => ({...form, stock: { ...form.stock, [e.target.name]: e.target.value}}));
    }

    // call API to create a product
    const handleSubmit = () => {

        // TODO: setup response checks
        createProduct(productForm);

        // TODO: place in .then and replace fake productId with the one handed by the response
        setProductList((products) => ([{ ...productForm, productId: products.length + 1 }, ...products]));

    }

    // cancels create product and closes form
    const handleCancel = () => {
        closeForm();
    }

    return (
        <div className="create-product">
            <h4 className="heading">Create Product</h4>
            <form className="product-form">
                <Input
                    value={ productForm.productName }
                    name="productName"
                    label="Product Name"
                    handleChange={ handleChange }
                    inputClass="product-input"
                />
                <Input
                    value={ productForm.productDescription }
                    name="productDescription"
                    label="Product Description"
                    handleChange={ handleChange }
                    inputClass="product-input"
                />
                <Select
                    value={ productForm.filterType }
                    label="Type"
                    name="filterType"
                    handleChange={ handleChange }
                    selectClass="product-input"
                    array={ filterType }
                />
                <Select
                    value={ productForm.filterGender }
                    label="Gender"
                    name="filterGender"
                    handleChange={ handleChange }
                    selectClass="product-input"
                    array={ genderType }
                />
                <div className="stock-section">
                    <h5 className="heading">Stock</h5>
                    <Input
                        type="number"
                        value={ productForm.stock.sm }
                        name="sm"
                        label="Small"
                        handleChange={ handleStockChange }
                        inputClass="stock-input"
                    />
                    <Input
                        type="number"
                        value={ productForm.stock.md }
                        name="md"
                        label="Small"
                        handleChange={ handleStockChange }
                        inputClass="stock-input"
                    />
                    <Input
                        type="number"
                        value={ productForm.stock.l }
                        name="l"
                        label="Small"
                        handleChange={ handleStockChange }
                        inputClass="stock-input"
                    />
                    <Input
                        type="number"
                        value={ productForm.stock.xl }
                        name="xl"
                        label="Small"
                        handleChange={ handleStockChange }
                        inputClass="stock-input"
                    />
                </div>
            </form>
            <div className="product-buttons">
                <button type="submit" className="primary-button" onClick={ handleSubmit }>Create</button>
                <button type="reset" className="secondary-button" onClick={ handleCancel }>cancel</button>
            </div>
        </div>
    )
}

export default CreateForm;