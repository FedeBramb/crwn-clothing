// Fragment per non utilizzare/aggiungere ulteriori containers al DOM
// useContext hook per recuperarare la value e il setter per l'User State, ogni volta che utilizziamo
//  questo hook, React ri-esegue la funzione e anche il render se abbiamo cambiato qualcosa nel DOM
import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/CartIcon/CartIcon.component.jsx';
import CartDropdown from '../../components/CartDropdown/CartDropdown.component.jsx';

// Outlet renderizza i componenti figlio, solito utilizzato come in questo caso in un componente
//  genitore che gestisce le routes.
import CrwnLogo from '../../assets/crown-icon.svg?react';

import { UserContext } from '../../contexts/user.context.jsx';
import { CartContext } from '../../contexts/cart.context.jsx';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import {
    NavigationContainer, 
    NavLinksContainer, 
    NavLink, 
    LogoContainer
} from './Navigation.styles';

const Navigation = () => {
    const  { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    
  return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo />
            </LogoContainer>
            <NavLinksContainer>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                { currentUser ? (
                    <NavLink onClick={signOutUser}>SIGN OUT</NavLink>
                ) : (
                    <NavLink to='/auth'>
                    SIGN IN
                     </NavLink>
                )}
                <CartIcon />
            </NavLinksContainer>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;