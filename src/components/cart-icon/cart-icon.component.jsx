import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.contex';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';



const CartIcon = ()=>{
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    
    
    // experiment from here---------------------------------------------------


    //----------------------------------------------------------------------
    //to here
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
