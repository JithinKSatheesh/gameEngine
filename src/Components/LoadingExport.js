import React,{useEffect,useState} from 'react'
import { ProductConsumer } from './Context';
import {Ellipsis } from 'react-load-animations';


export default function LoadingExport(props) {

    const { initialSeconds = 5,trigger} = props;

    const [progress,setProgress] = useState(0)
    const [seconds, setSeconds ] =  useState(initialSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
                setProgress(progress + 20)
            }
            if (seconds === 0) {
                // trigger('selectProject')
                clearInterval(timer)
            }
            
        }, 1000);
        return () => clearInterval(timer);
      });


    return (
        <>
            <div className="loading container">
                <div className="">
                    <div className="space-100"></div>

                        <div className="text-center">
                            <Ellipsis />
                        </div>
                        <div className="text-center h5 text-white">
                        Creating game... {progress} %
                        </div>
                        </div>
                        <div className="space-100"></div>
                        <div className="loading-container">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: `${progress}%` }} ></div>
                            </div>
                        </div>
                        <div className="space-20"></div>
                    <div className="loading-container-1 m-1 radius-1 p-3">
                        <div className="space-50"></div>
                        <div className="text-center text-white h5">
                        {
                            seconds <=0 &&
                            <div className="download">
                                <div className="alert alert-success">
                                    Your game is ready to download
                                </div>
                                <div className="space-50"></div>
                                <div className="text-center">
                                    <div className="btn btn-success">
                                        Download
                                    </div>
                                    &nbsp;
                                    <div 
                                        onClick={()=>{
                                            trigger('dashboard')
                                        }}
                                        className="btn btn-warning">
                                        Edit again
                                    </div>
                                    &nbsp;
                                    <div 
                                        onClick={()=>{
                                            trigger('selectProject')
                                        }}
                                        className="btn btn-secondary">
                                        Create new game
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                </div>
            </div>
        </>
    )
}
