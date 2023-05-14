import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import {selectCategoriesMap} from '../../store/categories/category.selector';
import './category.styles.scss';

const Category = () => {
  const {category} = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);
   
  useEffect(() => {
      setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
         <div className='category-group-container'>
           <h2 className='title'>{category.toUpperCase()}</h2>
           {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
        </div>
    </Fragment>
  )
}

export default Category
