import './Card.css'

const Card=({ imageSrc, titulo, paragrafo, descricao, link})=> {
    return(
        <div className='card'>

            <img src={imageSrc} alt="img-papel" />
            <div className='box'>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <p>{paragrafo}</p>
            </div>
            <a href={link}>Veja qual marca usa.</a>

        </div>
    )
}

export default Card;
