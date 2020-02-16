import React from 'react';
import './Audio.scss';

function Audio() {
    return (
        <div className="Audio">
            <div className="button">
                <span className='pre'></span>
                <span className='play'></span>
                <span className='next'></span>
            </div>
            <div className="progress">
                <span className="progress-nav"></span>
            </div>
        </div>

    );
}

export default Audio;
