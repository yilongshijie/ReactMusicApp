import React from 'react'
import style from './Record.scss'
function Record() {
    return (
        <div className={style.record}>
            <div className={style.needle}>
                <img src="./image.svg"></img>
            </div>
            <div className={style.borderOut}>
                <img src="./zjl/s.jpg" />
            </div>
        </div>
    )
}

export default Record;