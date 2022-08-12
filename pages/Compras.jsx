import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getFavorites } from '../Components/store/slices/favorites.slice';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Compras = () => {
    const dispatch= useDispatch();
    const favorites = useSelector((state) =>state.favorites)

    useEffect(()=>{
        dispatch(getFavorites())
    },[])
    console.log(favorites)

    return (
        <div>
            <h1>Purchases</h1>
            <ul>
            {
                favorites.map(favorite=>(
                    <li>
                    {favorite.title}
                    <img src={favorite.productImgs} />
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default Compras;