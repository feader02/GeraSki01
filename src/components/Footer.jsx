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
                <p className="footer-phone-number">+380 95 467 27 10</p>
                <article className="networks">
                    <a target="_blank" href=""><img src={telegram} alt="telegram" className="footer-network" /></a>
                    <a target="_blank" href="https://www.instagram.com/geralera6/"><img src={instagram} alt="instagram" className="footer-network" /></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100010638945146&locale=uk_UA"><img src={facebook} alt="facebook" className="footer-network" /></a>
                </article>
            </div>
        </div>
    )
}

export default Footer