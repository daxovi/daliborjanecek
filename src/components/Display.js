import "./Display.css"
import React from 'react'
import Overlay from "./Overlay"

const Display = ({ workModel }) => {
    const className = `display ${workModel.size}`

    if (workModel.type === "img") {
        return (
            <div className={className}>
                <img className="media" src={workModel.src} alt={workModel.title} />
                <Overlay workModel={workModel} />
            </div>
        )
    } else if (workModel.type === "video") {
        return (
            <div className={className}>
                <video className="media" autoPlay muted loop>
                    <source src={workModel.src} type="video/mp4" />
                </video>
                <Overlay workModel={workModel} />
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }

}

export default Display