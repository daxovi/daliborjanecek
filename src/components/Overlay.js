import React from 'react'
import "./Overlay.css"
import link from "../img/box-arrow-up-right.svg"

const Overlay = ({ workModel }) => {
    return (
        <div className="overlay">
            <div className="overlay--top">
                <h2>{workModel.title}</h2>
                {(workModel.link != "") ? <a href={workModel.link} target='_blank'><img className='svgContainer' src={link} alt="" /></a> : ""}
            </div>
            <div>
                <div className="overlay--description">
                    {workModel.description}
                </div>
                <div className="overlay--hashtag">
                    {workModel.category.map((category, index) => (
                        <a href={`/${category}`} key={index}>{category}</a>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Overlay