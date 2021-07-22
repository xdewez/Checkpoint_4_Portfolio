import React from 'react';
import './SinglePage.css';
import Card from './Card';


export default function SinglePage() {
    return (
        <div className="container">
            <div className="blocHorizontal">
                <section id="section1">
                    <div className="slide one">
                        <div className="menu">
                            <nav>
                                <a href="#section2"><li>Works</li></a>
                                <a href="#section3"><li>Contact</li></a>
                            </nav>
                        </div>
                        <div class="wrapper">
                            <div class="static-txt">Hello, I'm a Xavier</div>
                            <ul class="dynamic-txts">
                                <li><span>Developpeur </span></li>
                                <li><span>Designer</span></li>
                                <li><span>Developer</span></li>
                                <li><span>Freelancer</span></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="section2">
                    <div id="slide_two" className="slide two"><Card /></div>
                </section>
                <section id="section3">
                    <div className="slide three">Slide Three</div>
                </section>
                <section id="section3">
                    <div className="slide four">Slide Four</div>
                </section>
            </div>
        </div>
    )
}