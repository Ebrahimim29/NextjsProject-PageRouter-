import { useRouter } from 'next/router';
import React from 'react';

const ProductId = () => {
    const router = useRouter()    
    // console.log(router.query);    
    const {productId} = router.query

    const handlePushToDetails = () => {
        //some action ...
        router.push(`${productId}/details`)
        // router.back
    }

    return (
        <div>
            product:{productId}

            <div>
                <button onClick={handlePushToDetails}>
                    product : {productId} details
                </button>
            </div>
        </div>
    );
}

export default ProductId;
