import React from 'react';
import Slider from 'react-slick'
import '../css/AboutUs.css';
import About1 from '../images/about-1.png';
import About2 from '../images/about-2.png';
import About3 from '../images/about-3.png';
import About4 from '../images/about-4.png';

const settings = {
    swipe: true,
    dots: false,
    arrows: true,
    infinite: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
};


function AboutUs() {
    return(
        <div className='about-us-content' id='about-us'>
            <div className='about-us-text'>
                <h1>
                    Про нас
                </h1>
                <p className='about-us-text-p1  '>
                    Навчання гірськолижній техніці <b>(вік учнів 3-65 років)</b> -  <br /> <br />
                    Ми є спільнотою, яка "конектить" дітей, батьків та "адептів руху" - тр  енерів, інструкторів та фанатів активного стилю життя (лижі&сноуборд, hike - інг,каякінг, sup та сплав байдарками).<br /><br />
                    В "людських мурашниках" ми живемо на велосипедах та роликах - цьому вчимо всіх охочих, але за найменшої нагоди, як і взимку, втікаємо на ВОЛЮ - до гір і ручаїв, до безкраїх прохолодних лісів, якими ще повен наш край.<br /><br />
                    Знання та емоції, які здобула наша спільнота , ми не таїмо - щедро поділимося з Вами та вашими близькими.
                </p>
            </div>
            <div className='about-us-slider'>
                <Slider {...settings}>
                    <div>
                        <img src={About1} alt='asdas' className='slider-photo'/>
                    </div>
                    <div>
                        <img src={About2} alt='asdas' className='slider-photo'/>
                    </div>
                    <div>
                        <img src={About3} alt='asdas' className='slider-photo'/>
                    </div>
                    <div>
                        <img src={About4} alt='asdas' className='slider-photo'/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default AboutUs