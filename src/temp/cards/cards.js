import Card from '../card-item/card-item'
import './cards.scss'

// images
import phoenix from './../../../img/Phoenix.png'
import jett from './../../../img/Jett.png'
import sage from './../../../img/Sage.png'
import sova from './../../../img/Sova.png'
import omen from './../../../img/Omen.png'

// images

function Cards() {
    return(
        <div className="cards__wrapper">
            <h1 className="agent-title">AGENTS</h1>
             <div className="cards__inner"> 
                 <Card background={"Black"} img={phoenix} titleCard={"Phoenix"} subTitleCard={"United Kingdom"}/>
                 <Card background={"Black"} img={jett} titleCard={"Jett"} subTitleCard={"South Korea"}/>
                 <Card background={"Black"} img={sova} titleCard={"Sova"} subTitleCard={"Russia"}/>
                 <Card background={"White"} img={sage} titleCard={"Sage"} subTitleCard={"China"}/>
                 <Card background={"Black"} img={omen} titleCard={"Omen"} subTitleCard={"Australiya"}/>
             </div>
        </div>
       
    )
}

export default Cards