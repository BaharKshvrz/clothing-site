import React, { useEffect } from 'react'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();
    
    // Get data from firebase
    useEffect(() => {
      const getCategoriesMap = async() => {
          const categoryMap = await getCategoriesAndDocuments();
          dispatch(setCategoriesMap(categoryMap));
      };

      getCategoriesMap();
     }, []);

  return <CategoriesPreview/>
}

export default Shop
