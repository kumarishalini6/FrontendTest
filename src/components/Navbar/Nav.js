import React from 'react';
import "./Nav.css";
import Logo from "../../Assets/logo.png";

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="/"><img src={Logo} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Integration<span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Get early access</a>
                        </li>
                    </div>
                </div>
            </nav>
        </>

    )
}
