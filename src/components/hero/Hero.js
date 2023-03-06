import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Hero.scss'
const Hero = () => {
    const navigate = useNavigate();
    return (

        <div className="Hero">
            <div className="hero-content center">
                <h2 className="heading"><span style={{display:"block"}}>CLASSICS NEVER GO</span>  OUT OF STYLE</h2>
                <p className="subheading">
                    GRAB A KZ ZEX FOR ₹1,790/-
                </p>
                <button onClick={() => navigate('/category')} className="cta btn-primary">Explore more</button>
            </div>
        </div>
    )
}

export default Hero
