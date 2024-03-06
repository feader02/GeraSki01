import logo from "../images/logo-2.png"
import instagram from "../images/instagram-icon.png"
import telegram from "../images/telegran-icon.png"
import viber from "../images/viber-icon.png"
import facebook from "../images/facebook.png"
import "../css/footer.css"

function Footer() {
    return(
        <div className="footer" id="footer">
            <img  draggable="false"src={logo} alt='logo' className='footer-logo' />
            <div className="footer-contacts">
                <p className="footer-phone-number">+380 12 345 6789</p>
                <article className="networks">
                    <a href=""><img src={telegram} alt="telegram" className="footer-network" /></a>
                    <a href=""><img src={instagram} alt="instagram" className="footer-network" /></a>
                    <a href=""><img src={viber} alt="viber" className="footer-network" /></a>
                    <a href=""><img src={facebook} alt="facebook" className="footer-network" /></a>
                </article>
            </div>
        </div>
    )
}

export default Footer