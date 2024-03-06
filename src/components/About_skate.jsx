import "../css/about_skate.css"
import React from "react";
import skate_img from "../images/skates.png"
import years from "../images/years_20.png"

function About_skate() {
    return(
        <>
            <div className='stick'></div>
            <h1 className='about-skate-h1'>
                Гуртові ковзани
            </h1>
            <div className='about-skate-div'>
                <article className='about-skate-info'>
                    <img draggable="false" src={years} alt='img' className='about-skate-info-img' />
                    <aside>
                        <p className='about-skate-info-p'>GeraSki став символом якості та надійності у світі ковзаня. Ми допомагаємо людям відкривати для себе радість від ковзаня, надаючи їм високоякісне спорядження. Завдяки нашому досвіду, кожен, хто обирає "Гуртові Ковзани", відчуває справжнє задоволення від ковзаня.</p>
                        <a href="/price" className='about-skate-info-btn-a'>
                            <p className='about-skate-info-btn'>Прайси</p>
                        </a>
                    </aside>

                </article>
                <img draggable="false" src={skate_img} alt='img' className='about-skate-img' />
            </div>
        </>
    )
}

export default About_skate