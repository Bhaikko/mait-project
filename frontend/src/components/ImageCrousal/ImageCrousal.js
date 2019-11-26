import React, { Component } from 'react';

// import classes from './ImageCrousal.css';

class ImageCrousal extends Component {

    render () {
        return (
            <div className="carousel-container">
                <h2>thumbnail indicators</h2>
                <ul className="carousel my-carousel carousel--thumb">
                    <input className="carousel__activator" type="radio" id="K" name="thumb" defaultChecked/>
                    <input className="carousel__activator" type="radio" id="L" name="thumb"/>
                    <input className="carousel__activator" type="radio" id="M" name="thumb"/>
                    <input className="carousel__activator" type="radio" id="N" name="thumb"/>
                    <input className="carousel__activator" type="radio" id="O" name="thumb"/>
                    <div className="carousel__controls">
                        <label className="carousel__control carousel__control--backward" htmlFor="O"></label>
                        <label className="carousel__control carousel__control--forward" htmlFor="L"></label>
                    </div>
                    <div className="carousel__controls">
                        <label className="carousel__control carousel__control--backward" htmlFor="K"></label>
                        <label className="carousel__control carousel__control--forward" htmlFor="M"></label>
                    </div>
                    <div className="carousel__controls">
                        <label className="carousel__control carousel__control--backward" htmlFor="L"></label>
                        <label className="carousel__control carousel__control--forward" htmlFor="N"></label>
                    </div>
                    <div className="carousel__controls">
                        <label className="carousel__control carousel__control--backward" htmlFor="M"></label>
                        <label className="carousel__control carousel__control--forward" htmlFor="O"></label>
                    </div>
                    <div className="carousel__controls">
                        <label className="carousel__control carousel__control--backward" htmlFor="N"></label>
                        <label className="carousel__control carousel__control--forward" htmlFor="K"></label>
                    </div>
                    <li className="carousel__slide">
                        <h1>K</h1>
                    </li>
                    <li className="carousel__slide">
                        <h1>L</h1>
                    </li>
                    <li className="carousel__slide">
                        <h1>M</h1>
                    </li>
                    <li className="carousel__slide">
                        <h1>N</h1>
                    </li>
                    <li className="carousel__slide">
                        <h1>O</h1>
                    </li>
                    <div className="carousel__indicators">
                        <label className="carousel__indicator" htmlFor="K"></label>
                        <label className="carousel__indicator" htmlFor="L"></label>
                        <label className="carousel__indicator" htmlFor="M"></label>
                        <label className="carousel__indicator" htmlFor="N"></label>
                        <label className="carousel__indicator" htmlFor="O"></label>
                    </div>
                </ul>
            </div>
        );
    }
}

export default ImageCrousal;