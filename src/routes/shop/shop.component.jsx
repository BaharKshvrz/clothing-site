import React, { useEffect } from 'react'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();
    
    // Get data from firebase
    useEffect(() => {
      const getCategoriesMap = async() => {
          const categoriesArray = await getCategoriesAndDocuments();
          dispatch(setCategories(categoriesArray));
      };

      getCategoriesMap();
     }, []);

  return <CategoriesPreview/>
}

export default Shop
