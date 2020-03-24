import React from 'react';
import style from './Audio.scss';
import { MusicContext } from '../../context/context'
class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioRef: React.createRef(),
            auido: {
                duration: 1,
                currentTime: 0,
                percentage: '0%'
            }
        }
        this.play = this.play.bind(this);
    }
    render() {
        return (
            <MusicContext.Consumer>
                {musicContext => {
                    return <div className={style.Audio}>
                        <div className={style.button}>
                            <span className={style.pre} onClick={e => musicContext.pre()}></span>
                            <span className={`${musicContext.currentActive ? style.stop : style.play} ${style.primary}`} onClick={e => this.play(musicContext.acitveChange)}></span>
                            <span className={style.next}onClick={e => musicContext.next()}></span>
                        </div>
                        <div className={style.progress}>
                            <span style={{ width: this.state.auido.percentage }} className={style['progress-nav']}></span>
                        </div>
                        <audio src={musicContext.currentReord.href} ref={this.state.audioRef} autoPlay  >
                        </audio>
                    </div>
                }
                }
            </MusicContext.Consumer >
        );
    }
    play(fun) {
        fun();
        setTimeout(() => {
            if (this.state.audioRef.current.paused) {
                this.state.audioRef.current.play();
            } else {
                this.state.audioRef.current.pause();
            }
        }, 0);
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                auido: {
                    duration: this.state.audioRef.current.duration,
                    currentTime: this.state.audioRef.current.currentTime,
                    percentage: (this.state.audioRef.current.currentTime / this.state.audioRef.current.duration) * 100 + '%',
                }
            })
        }, 3000);

    }

}

export default Audio;
