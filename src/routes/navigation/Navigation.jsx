// Fragment per non utilizzare/aggiungere ulteriori containers al DOM
// useContext hook per recuperarare la value e il setter per l'User State, ogni volta che utilizziamo
//  questo hook, React ri-esegue la funzione e anche il render se abbiamo cambiato qualcosa nel DOM
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

// Outlet renderizza i componenti figlio, solito utilizzato come in questo caso in un componente
//  genitore che gestisce le routes.
import CrwnLogo from '../../assets/crown.svg?react';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './Navigation.scss';

const Navigation = () => {
    const  { currentUser } = useContext(UserContext);

  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                { currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                ) : (
                    <Link className='nav-link' to='/auth'>
                    SIGN IN
                     </Link>
                )}
                
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;