import React, { useContext } from 'react';
import './CSS/ShopCategroy.css'
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Item/Item';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const ShopCatergory = (props) => { // Correct the component name to start with an uppercase letter

  const {all_product} = useContext(ShopContext);
  return (
    <>
    <Navbar/>
    <div className='shop-category'>
      <img  className='ShopCategort-banner'src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcatergory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcatergory-products">
        {all_product.map((item, i) => {
          if (props.category===item.category) {
            return <Item key={i} id={item.id}
              
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}/>
          
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Expolore More
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShopCatergory; // Correct the export statement to use uppercase component name
