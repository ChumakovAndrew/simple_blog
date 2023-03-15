import './card-item.scss'


function Card({img, alt, titleCard, subTitleCard, background = "Black"}) {

    let clasesCard = 'card'
    if(background === "Black"){
        clasesCard += ' black';
    }
    else{
        clasesCard += ' white'
    }

return(
    <div className={clasesCard}>
        <img src={img} alt={alt} />
        <div className="card__title">
            <h1>{titleCard}</h1>
            <h2>{subTitleCard}</h2>
        </div>

    </div>
)
}

export default Card