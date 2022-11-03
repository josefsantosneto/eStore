import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.contex';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = ()=>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goTocheckoutHandler = ()=> {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem  key={cartItem.id} CartItem={cartItem} />
                    ))
                ): (
                    <span className='empty-message'>Your cart is empty</span>
                )
                    }
            </div>
            <Button onClick={goTocheckoutHandler} >GO TO CHECKOUT</Button>

        </div>
    )

}

export default CartDropdown;