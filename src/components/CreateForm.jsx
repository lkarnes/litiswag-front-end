import { useRef, useState } from "react";
import { filterType, genderType } from "../fakeData";
import { createProduct } from "../service/productService";
import Input from "./Input";
import Select from "./Select";

const CreateForm = ({ productList, setProductList, closeForm }) => {
    const [productForm, setProductForm] = useState({ stock: { sm: null, md: null, l: null, xl: null } });
    const [image, setImage] = useState();
    const photoInput = useRef();

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
        setProductList((products) => ([{ ...productForm, productId: products.length + 1, image: image}, ...products]));

    }

    // cancels create product and closes form
    const handleCancel = () => {
        closeForm();
    }

    // removes the image from state and clears its value
    const removePhoto = () => {
        photoInput.current.value = null;
        setImage();
    }

    return (
        <div className="create-product">
            <h4 className="heading">Create Product</h4>
            <form className="product-form">
                <div className="image-upload">
                    <div className="image-box">
                        { !image 
                            ? <button type="button" className="primary-button" onClick={ () => photoInput.current.click() }>Choose Photo</button>
                            : <img src={ image } alt="created product"/>
                        }
                    </div>
                    { image && <button type="button" className="secondary-button remove-button" onClick={ removePhoto }>Remove</button>}

                    {/* hiddden input for selecting a image */}
                    <input
                        ref={ photoInput }
                        style={{display: "none"}}
                        type="file"
                        name="image"
                        onChange={ (e) => setImage(URL.createObjectURL(e.target.files[0])) }
                        accept=".png,.jpg"
                    />
                </div>
            
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
                        label="Medium"
                        handleChange={ handleStockChange }
                        inputClass="stock-input"
                    />
                    <Input
                        type="number"
                        value={ productForm.stock.l }
                        name="l"
                        label="Large"
                        handleChange={ handleStockChange }
                        inputClass="stock-input"
                    />
                    <Input
                        type="number"
                        value={ productForm.stock.xl }
                        name="xl"
                        label="Xtra Large"
                        handleChange={ handleStockChange }
                        inputClass="stock-input"
                    />
                </div>
            </form>
            <div className="product-buttons">
                <button type="reset" className="secondary-button" onClick={ handleCancel }>Cancel</button>
                <button type="submit" className="primary-button" onClick={ handleSubmit }>Create</button>
            </div>
        </div>
    )
}

export default CreateForm;