import React, { useEffect } from 'react';
import './styles.scss';

function Range({initialValue = 1}) {

    useEffect(() => { 
        upMonth(initialValue);
    }, [initialValue]);

    function upMonth(value) {
        const allMonths = document.getElementsByClassName('slider__list__item');
        
        for (let i = 0; i < allMonths.length; i++) {
            allMonths[i].classList.remove('active');
        }

        document.getElementById(value).classList.add('active');
    }

    return (
        <div className="slider">
            <ul className="slider__list">
                <li className="slider__list__item" id="1">JAN</li>
                <li className="slider__list__item" id="2">FEV</li>
                <li className="slider__list__item" id="3">MAR</li>
                <li className="slider__list__item" id="4">ABR</li>
                <li className="slider__list__item" id="5">MAI</li>
                <li className="slider__list__item" id="6">JUN</li>
                <li className="slider__list__item" id="7">JUL</li>
                <li className="slider__list__item" id="8">AGO</li>
                <li className="slider__list__item" id="9">SET</li>
                <li className="slider__list__item" id="10">OUT</li>
                <li className="slider__list__item" id="11">NOV</li>
                <li className="slider__list__item" id="12">DEZ</li>
            </ul>
            <input className="slider__range" type="range" min="1" max="12" defaultValue={initialValue} onChange={e => upMonth(e.target.value)} />
        </div>
    );
}

export default Range;