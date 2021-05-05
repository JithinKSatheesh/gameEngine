import React,{useEffect,useState} from 'react'
import { ProductConsumer } from './Context';
import {Ellipsis } from 'react-load-animations';


export default function Loading(props) {

    const { initialSeconds = 1,trigger} = props;

    const [progress,setProgress] = useState(0)
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                setProgress(progress + 100)
            }
            if (seconds === 0) {
                trigger('selectProject')
                clearInterval(timer)
            }
            
        }, 1000);
        return () => clearInterval(timer);
      });


    return (
        <>
            <div className="loading">
                <div className="container">
                    <div className="space-100"></div>
                    <div className="text-center display-1 text-white">
                        GAME  ENGINE
                    </div>
                    <div className="space-100"></div>
                    <div className="space-100"></div>
                    <div className="text-center text-white h2">
                    <div className="text-center">
                        <Ellipsis />
                    </div>
                    Loading assets... {progress} %
                    </div>
                    <div className="space-100"></div>
                    <div className="loading-container">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: `${progress}%` }} ></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
