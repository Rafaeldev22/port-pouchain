import './Card.css'

const Card=({ imageSrc, titulo, paragrafo, descricao, link})=> {
    return(
        <div className='card'>

            <img src={imageSrc} alt="img-papel" className='image-logo-card' />
            <div className='box'>
                <h3 className='titulo'>{titulo}</h3>
                <p className='p-1'>{descricao}</p>
                <p className='p-2'>{paragrafo}</p>
            </div>
            <a href={link}>Veja qual marca usa.</a>

        </div>
    )
}

export default Card;
