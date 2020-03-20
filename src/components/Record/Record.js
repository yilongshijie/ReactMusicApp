import React from 'react'
import style from './Record.scss'
import { MusicContext } from '../../context/context'
function Record() {
    return (
        <div className={style.record}>
            <div className={style.needle}>
                <img src="./image.svg"></img>
            </div>
            <MusicContext.Consumer>
                {context => {
                   return <div className={style.borderOut}>
                        <img src={context.currentReord.img} />
                    </div>
                }}
            </MusicContext.Consumer>

        </div>
    )
}

export default Record;