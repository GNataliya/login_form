import style from './header.module.css';
import { NavLink } from 'react-router-dom'; 
// import pic from './logo.png';

function Header() {
    return (

        <div className={style.container}>

            <div className={style.img}>
                <NavLink to='/home' >Logo</NavLink>
                {/* <img src={pic} alt='logopic' className={style.img} /> */}
            </div>

            <ul className={style.headernav}>
                <li className={style.li}>
                    <NavLink to='/Login' >Login</NavLink>
                </li>
                <li className={style.li}>
                    <NavLink to='/Signin' >Sign In</NavLink>
                </li>
            </ul>
            
        </div>
        
    )
}



export default Header;