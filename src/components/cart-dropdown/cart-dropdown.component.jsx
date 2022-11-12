import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.contex';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

const CartDropdown = ()=>{
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goTocheckoutHandler = ()=> {
        navigate('/checkout');
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem  key={cartItem.id} CartItem={cartItem} />
                    ))
                ): (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )
                    }
            </CartItems>
            <Button onClick={goTocheckoutHandler} >GO TO CHECKOUT</Button>

        </CartDropDownContainer>
    )

}

export default CartDropdown;