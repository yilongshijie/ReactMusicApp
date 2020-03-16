import React from 'react';
import style from './Audio.scss';

function Audio() {
    return (
        <div className={style.Audio}>
            <div className={style.button}>
                <span className='pre'></span>
                <span className='play'></span>
                <span className='next'></span>
            </div>
            <div className={style.progress}>
                <span className={style['progress-nav']}></span>
            </div>
        </div>

    );
}

export default Audio;
