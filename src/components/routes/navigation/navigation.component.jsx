import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext} from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.contex";

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles.jsx";

const Navigation = ()=>{
    const { currentUser } = useContext(UserContext);
    const { isCartOpen }= useContext(CartContext);
    
    
    return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo" />
            </LogoContainer>            
            <NavLinks>

                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                    currentUser ? (
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                    )
                        : (<NavLink to='/auth'>
                    SIGN IN
                </NavLink>
                )}
                <CartIcon/>

                


            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
      <Outlet />
    </Fragment>
      
    
    )
  }
  
export default Navigation;  