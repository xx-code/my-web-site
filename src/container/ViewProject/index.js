import React from 'react';
import style from './style';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const ViewProject = props => {
    return(
        <div>
            <nav className="nav" style={style.navbar}>
                <Link to="/" style = {style.link}>
                    <div style={style.backBtn}>
                        <i id = "icon" className="fas fa-arrow-left" style={style.iconBack}></i>
                        <div style = {style.backTextContent}>
                            <h3 id = "title"  style={style.backText}>Retour</h3>
                            <div style={style.bar} />
                        </div>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default Radium(ViewProject)