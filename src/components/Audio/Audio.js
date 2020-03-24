import React from 'react';
import style from './Audio.scss';
import { MusicContext } from '../../context/context'
class Audio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioRef: React.createRef(),
            auido: {
                duration: 0,
                currentTime: 0,
                percentage: '0%'
            }
        }
        this.changeProgress = this.changeProgress.bind(this);
    }
    render() {
        return (
            <MusicContext.Consumer>
                {musicContext => {
                    return <div className={style.Audio}>
                        <div className={style.button}>
                            <span className={style.pre} onClick={e => this.change(musicContext.pre)}></span>
                            <span className={`${musicContext.currentActive ? style.stop : style.play} ${style.primary}`} onClick={e => this.play(musicContext.acitveChange)}></span>
                            <span className={style.next} onClick={e => this.change(musicContext.next)}></span>
                        </div>
                        <var>{this.secondToDate(this.state.auido.currentTime)}</var>

                        <div className={style.progress} onClick={e => this.changeProgress(musicContext.acitveChange, e)}>
                            <span style={{ width: this.state.auido.percentage }} className={style['progress-nav']} ></span>
                        </div>
                        <var>{this.secondToDate(this.state.auido.duration)}</var>
                        <audio src={musicContext.currentReord.href} ref={this.state.audioRef} autoPlay  >
                        </audio>
                    </div>
                }
                }
            </MusicContext.Consumer >
        );
    }
    change(fun) {
        fun();
        this.setState({
            auido: {
                duration: 0,
                currentTime: 0,
                percentage: 0 + '%',
            }
        })
    }
    secondToDate(result) {
        if (!result) return '';
        var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
        var m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
        var s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
        if (h && h !== '00') {
            h = h + ":";
        } else {
            h = "";
        }
        return result = h + m + ":" + s;
    }
    changeProgress(fun, e) {
        if (this.state.audioRef.current.paused) {
            return
        }
        let nativeEvent = e.nativeEvent;
        let offsetWidth = nativeEvent.target.offsetWidth;
        if (nativeEvent.target.tagName === "SPAN") {
            offsetWidth = nativeEvent.target.parentNode.offsetWidth
        }
        let ratio = (nativeEvent.offsetX || nativeEvent.offsetX)
            / offsetWidth;
        this.state.audioRef.current.currentTime = parseInt(ratio * this.state.audioRef.current.duration);
        this.setState({
            auido: {
                duration: this.state.audioRef.current.duration,
                currentTime: this.state.audioRef.current.currentTime,
                percentage: (this.state.audioRef.current.currentTime / this.state.audioRef.current.duration) * 100 + '%',
            }
        })
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
    changeState() {
        this.setState({
            auido: {
                duration: this.state.audioRef.current.duration,
                currentTime: this.state.audioRef.current.currentTime,
                percentage: (this.state.audioRef.current.currentTime / this.state.audioRef.current.duration) * 100 + '%',
            }
        })
    }
    componentDidMount() {
        setInterval(() => {
            this.changeState();
        }, 1000);

    }

}

export default Audio;
