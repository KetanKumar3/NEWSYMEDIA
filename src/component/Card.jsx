import React from 'react'
import news from '../../public/news.jpg'

const Card = ({title,description,image,url}) => {
    return (
        <div>
            <div className="card bg-dark text-light" style={{maxWidth: "345px"}}>
                <img src={image?image:news} style={{height:"200px",width:"344px"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0,30)}</h5>
                        <p className="card-text">{description?description.slice(0,90).concat(" ...."):"you can read news on click below button. you can read everyday free and trending news ....."}</p>
                        <a href={url} className="btn btn-primary">Read More</a>
                    </div>
            </div>
        </div>
    )
}

export default Card