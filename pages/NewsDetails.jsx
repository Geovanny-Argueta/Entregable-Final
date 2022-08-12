import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useNavigate, useParams } from 'react-router-dom';
import {getProductsThunk}  from "../Components/store/slices/products.slice";

const NewsDetails = () => {

    const selector = useSelector(state => state.products);
    const [productsDetails, setProductsDetails] = useState({})
    const {id} =useParams();
    const dispatch = useDispatch();
    const [suggestedProducts, setSuggestedProducts] = useState([])
    const navegate = useNavigate()

    useEffect(()=>{
        const products = selector.find(category=>category.id===Number(id))
        setProductsDetails(products)

        const filterProducts = selector.filter(category => category.id === products.category.id)
        setSuggestedProducts(filterProducts)
    },[selector,id])

    useEffect(()=>{
        dispatch(getProductsThunk())
    },[])
    console.log(suggestedProducts)

    return (
          <div>
             <div>
             {productsDetails?.title}
             
            </div>
            <img src={productsDetails?.productImgs} />
           <ul>
           {
                suggestedProducts.map(suggestedProduct=>(
                    <li onClick={()=>navegate(`/news/${suggestedProduct.id}`)}>
                        {suggestedProduct.title}
                        {suggestedProduct.description}

                    </li>
                ))
            }
           </ul>
          </div>
    );
};
export default NewsDetails;