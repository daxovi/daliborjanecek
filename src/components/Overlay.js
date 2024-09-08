import React from 'react'
import "./Overlay.css"
import link from "../img/box-arrow-up-right.svg"
import ButtonLink from './ui/ButtonLink'

const Overlay = ({ workModel }) => {
    return (
        <div className="overlay">
            <div className="overlay--top">
                <h2>{workModel.title}</h2>
                {(workModel.link != "") ? <ButtonLink to={workModel.link}><img className='svgContainer' src={link} alt="" /></ButtonLink> : ""}
            </div>
            <div>
                <div className="overlay--description">
                    {workModel.description}
                </div>
                <div className="overlay--hashtag">
                    {workModel.category.map((category, index) => (
                        <ButtonLink to={`/${category}`}>#{category}</ButtonLink>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Overlay