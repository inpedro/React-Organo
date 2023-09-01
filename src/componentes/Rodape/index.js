import './Rodape.css'
import facebook from '../img/imagens/fb.png'
import twitter from '../img/imagens/tw.png'
import instagram from '../img/imagens/ig.png'
import logo from '../img/imagens/logo.png'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src={facebook} alt="" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src={twitter} alt="" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src={instagram} alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src={logo} alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape