import '../css/Galerey.css'
import React, { useState } from 'react';
import classnames from 'classnames'
import ski from '../images/ski.png'
import iceskates from '../images/iceskates.png'



function Galerey() {
    const [activeButton, setActiveButton] = useState("Зима");

    const handleClick = (button) => {
        setActiveButton(button);
    }
    return(
        <div className='Galerey'>
            <div className='stick'></div>
            <h1 className='Galerey-h1'>Моменти гуртків, турів та мандрівок</h1>
            <div className='Galerey-btns'>
                <article
                    className={classnames('Galerey-ski-btn Galerey-btn Galerey-active-btn', { 'Galerey-btn-active': activeButton === 'Зима' })}
                    onClick={() => handleClick('Зима')}
                >
                    Літо
                </article>
                <article
                    className={classnames('Galerey-btn Galerey-active-btn', { 'Galerey-btn-active': activeButton === 'Літо' })}
                    onClick={() => handleClick('Літо')}
                >
                    Зима
                </article>
            </div>
            {activeButton === 'Зима' &&
                <div>
                    <img draggable="false" className='galery-ski-img' src={iceskates} alt="Зима" />
                </div>
            }
            {activeButton === 'Літо' &&
                <div>
                    <img draggable="false" className='galery-ski-img' src={ski} alt="Літо" />
                </div>
            }
        </div>
    )
}

export default Galerey
