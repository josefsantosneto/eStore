import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";


import { selectCurrenUser } from "../../../assets/store/user/user.selector";
import { selectIsCartOpen } from "../../../assets/store/cart/cart.selector";

import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles.jsx";

const Navigation = ()=>{
    const currentUser = useSelector(selectCurrenUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    return (
        <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <CrwnLogo className='logo' />
          </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>SHOP</NavLink>
  
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
            )}
            <CartIcon />
          </NavLinks>
          {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
      
    
    )
  }
  
export default Navigation;  