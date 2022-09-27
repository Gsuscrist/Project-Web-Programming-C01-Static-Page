import logo from '../assets/img/logo.png'

import '../assets/style/Header.css'
function Header(){
    return(
        <header>
            <img src={logo}/>
            <h1>Jago Code Dev's</h1>

        </header>
    );
}
export default Header;