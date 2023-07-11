import React from "react";
import './profile.css';
import Logo from '../Assets/Logo.png'

function ProductBanner() {
    return (
        <div className="product-container">
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
            <img src={Logo} alt="" />
        </div>
    )

}
export default ProductBanner;