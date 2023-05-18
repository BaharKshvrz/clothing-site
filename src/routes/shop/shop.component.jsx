import React, { useEffect } from 'react'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.reducer';

const Shop = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectCategoriesIsLoading);
    // Get data from firebase
    useEffect(() => {
      const getCategoriesMap = async () => {
        const categories = await getCategoriesAndDocuments();
        dispatch(setCategories(categories));
      };
  
      getCategoriesMap();
    }, []);

  return (
    <>
    {
      isLoading ? <Spinner/> : <CategoriesPreview/>
    }
    </>
  );
}

export default Shop
