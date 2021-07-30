import React from 'react';
import "./Home.css";
import Front from "../../Assets/Creativity (2).gif";
import Integration from "../../Assets/int.jpg";
import Amazon from "../../Assets/amazon.png";
import Google from "../../Assets/google.jpg";
import Skrill from "../../Assets/skrill.jpg";
import Northern from "../../Assets/northern.jpg";
import { RiVideoFill } from "react-icons/ri";

export default function Home() {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col ">
                    <div className="text">
                        <h1>Don't worry.</h1>
                        <h1>We are here for <br></br>
                        every soltuion
                        </h1>
                        <p>Bushwick meh Blue Bottle pork belly mustache skateboard 3 wolf <br></br>
                        moon. Actually beard single-origin coffee,twee 90's PBR Echo Park
                        </p>
                    </div>
                    <div className="buttons">
                        <a href="#" className="start">Get Started</a>
                        <a href="#" className="video"><RiVideoFill className="icon"/> Watch video</a>
                    </div>
                    <div className="brand">
                        <img className="logo" src={Integration} alt="integration" />
                        <img className="logo2" src={Amazon} alt="amazon" />
                        <img className="logo" src={Northern} alt="northern" />
                        <img className="logo" src={Google} alt="google" />
                        <img className="logo" src={Skrill} alt="skrill" />
                    </div>
                </div>
                <div className="col">
                    <div className="image">
                        <img src={Front} alt="freepik" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
