import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './components/checkout/checkout.component';
import CategoriesPreview from './routes/categories-preview/categories-preview.component';
import Category from './routes/category/category.component';

function App() {
  return (
    <Routes>
       <Route path='/' element={<Navigation/>}>
           <Route index element={<Home/>}/>
           <Route path="shop">
               <Route index element={<CategoriesPreview/>} />
               <Route path=':category' element={<Category/>} />
            </Route>
           <Route path="auth" element={<Authentication/>} />
           <Route path="checkout" element={<Checkout/>} />
       </Route>
    </Routes>);
}

export default App;
