import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './components/checkout/checkout.component';
import Category from './routes/category/category.component';
import Shop from './routes/shop/shop.component';

function App() {
  return (
    <Routes>
       <Route path='/' element={<Navigation/>}>
           <Route index element={<Home/>}/>
           <Route path="shop">
               <Route index element={<Shop/>} />
               <Route path=':category' element={<Category/>} />
            </Route>
           <Route path="auth" element={<Authentication/>} />
           <Route path="checkout" element={<Checkout/>} />
       </Route>
    </Routes>);
}

export default App;
