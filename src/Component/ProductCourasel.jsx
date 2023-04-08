import React from 'react';
import ProductsCard from './ProductsCard';

function ProductCarousel() {
    const productContainerRef = React.useRef(null);

    const btnPressPrev = () => {
        const productContainer = productContainerRef.current;
        const width = productContainer.offsetWidth;
        productContainer.scrollLeft -= width;
    };

    const btnPressNext = () => {
        const productContainer = productContainerRef.current;
        const width = productContainer.offsetWidth;
        productContainer.scrollLeft += width;
    };

    return (
        <div className='productCarousel'>
            <button className='prev-button' onClick={btnPressPrev}>
                <p>&lt;</p>
            </button>
            <button className='next-button' onClick={btnPressNext}>
                <p>&gt;</p>
            </button>

            <div className='product_container' ref={productContainerRef}>
                <ProductsCard cardno='1' />
                <ProductsCard cardno='2' />
                <ProductsCard cardno='3' />
                <ProductsCard cardno='4' />
                <ProductsCard cardno='5' />
                <ProductsCard cardno='6' />
                <ProductsCard cardno='7' />
                <ProductsCard cardno='8' />
                <ProductsCard cardno='9' />
                <ProductsCard cardno='10' />
            </div>
        </div>
    );
}

export default ProductCarousel;
