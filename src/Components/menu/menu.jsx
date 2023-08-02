import "./style.js"
import logo from "../imagens/logo-thermas 1.png"

import { StyleMenu } from "./style.js"

function Menu (){
    return(
        <StyleMenu>
            <img className="logo_img" src= {logo} alt="Logo thermas dos laranjais parque aquatico olimpia-sp"  />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Minha conta</a></li>
                <li><a href="#">Meus pedidos</a></li>
            </ul>
            <button className="button_duvidas"> <p className="esclamacao">?</p> Dúvidas</button>
            </StyleMenu>
    )
}
export default Menu