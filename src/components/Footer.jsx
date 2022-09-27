import logoFacebook from '../assets/img/logoFacebook.svg'
import logoLinkedin from '../assets/img/logoLinkedin.svg'
import logoTiktok from '../assets/img/logoTiktok.svg'
import '../assets/style/Footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer_img'>
                <img src={logoFacebook} alt="Logo Facebook" />
                <img src={logoLinkedin} alt="Logo Linkedin" />
                <img src={logoTiktok} alt="Logo Tiktok" />
            </div>
        </footer>
      );
}

export default Footer;