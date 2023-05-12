import ProductCard from '../../components/product-card/product-card.component';
import { Link } from 'react-router-dom';
import { CategoryPreviewContainer } from './category-preview.styles';

const CategoryPreview = ({title, products}) => {
  return (
        <CategoryPreviewContainer>
          <Link to={title} className='title'>{title.toUpperCase()}</Link>
           {products.map(product => <ProductCard key={product.id} product={product}/>)}
        </CategoryPreviewContainer>
  )
}

export default CategoryPreview;
