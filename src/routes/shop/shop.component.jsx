import React, { useEffect } from 'react'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import { useDispatch } from 'react-redux';
import { fetchCategoriesAsync } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();
    // Get data from firebase
    useEffect(() => {
          dispatch(fetchCategoriesAsync());
    }, []);

  return <CategoriesPreview/>
}

export default Shop
