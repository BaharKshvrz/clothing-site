import React, { useEffect } from 'react'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';

const Shop = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectCategoriesIsLoading);
    // Get data from firebase
    useEffect(() => {
          dispatch(fetchCategoriesAsync());
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
