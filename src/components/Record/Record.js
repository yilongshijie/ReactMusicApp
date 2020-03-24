import React from 'react'
import style from './Record.scss'
import { MusicContext } from '../../context/context'
function Record() {
    return (
        <MusicContext.Consumer>
            {context => {
                return (
                    <div className={style.record}>
                        <div className={`${style.needle} ${context.currentActive ? style.needleActive : ''}`}>
                            <img src="./image.svg"></img>
                        </div>

                        <div className={`${style.borderOut}  ${context.currentActive ? style.active : ''}`}>
                            <img src={context.currentReord.img} />
                        </div>
                    </div>
                )
            }}
        </MusicContext.Consumer>


    )
}

export default Record;