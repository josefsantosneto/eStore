import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen} from '../../assets/store/cart/cart.selector';
import { setIsCartOpen } from '../../assets/store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';



const CartIcon = ()=>{
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    // experiment from here---------------------------------------------------


    //----------------------------------------------------------------------
    //to here
    const toggleIsCartOpen = () => {
        console.log('Attention=>', isCartOpen);
        return dispatch(setIsCartOpen(!isCartOpen));
    };
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
