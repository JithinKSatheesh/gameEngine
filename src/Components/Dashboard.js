import React from 'react'
import {ProductConsumer} from './Context'

import Draggable from 'react-draggable';

export default function Dashboard(props) {


    return (
        <>
            <div className="">
                <ProductConsumer>
                    {(values) => {
                        return (
                            <>
                                <div className="dashboard bg-dark text-white p-3 m-2 radius-3">
                                    <div className="space-10"></div>
                                    <div className="d-flex justify-content-between">
                                        <div className="h3">
                                            {values.projectName}
                                        </div>
                                        <div className="small">
                                            <div className="d-flex">
                                                <div className="btn btn-success">Save</div>
                                                &nbsp;
                                                <div className="btn btn-danger">Export</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-20"></div>

                                    <div className="d-flex">
                                        <Toolbox />
                                        {values.type === '2d' && <Canvas2D /> } 
                                        <GameObjectProperties />
                                    </div>
                                    <div className="d-flex">
                                        <GameObjectList2D />
                                        <UploadAssets />
                                    </div>
                                </div>


                            </>
                        )
                    }}
                </ProductConsumer>

            </div>

        </>
    )
}

const Toolbox = () => {

    const tools = [
        {
            name: 'rectangle',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" /></svg>,
        },
        {
            name: 'circle',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" /></svg>,
        },
        {
            name: 'triangle',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z" /></svg>
        },
        {
            name: 'box',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" /></svg>,
        },
    ]
    return (
        <div className="toolbox p-1 radius-1">
            <div className="space-20"></div>
            {
                tools.map(item => {
                    return (
                        <div className="tools radius-1">
                            <div className="space-5"></div>
                            <div className="text-center">
                                {item.symbol}
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

const Canvas2D = () => {

    return (
        <div className="canvas-2d radius-3 m-3 bg-white">
            <div className="space-50"></div>
            <div className="">
                <ProductConsumer>
                    {(values)=>{
                        return(
                            <>
                            {values.objectlist.map(item=>(
                                <Draggable>
                                    <div  style={{width:`${item.width}px`, height:`${item.height}px`,backgroundColor:`${item.backgroundColor}`}}>
                                        {item.name}  {item.id} 
                                    </div>
                                </Draggable>
                            ))}
                            </>
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}

const GameObjectList2D = () => {
    return (
        <div className="gameobjectbox m-2 radius-2">
            <div className="space-20"></div>
            <div className="text-center text-white">
                OBJECTS LIST
            </div>
            <div className="p-3 d-flex flex-nowrap">

            <ProductConsumer>
                {(values)=>{
                    return(
                        <>
                        {values.objectlist.map(item=>(
                            <div className="object radius-1 p-2 text-center m-2">
                                {item.name}  {item.id} 
                            </div>
                        ))}
                        </>
                    )
                }}
            </ProductConsumer>
            </div>

        </div>
    )
}


const GameObjectProperties = () => {
    return (
        <div className="gameobjectproperty m-2 radius-2">
            <div className="space-20"></div>
            <div className="text-center text-white">
                OBJECT PROPERTIES
            </div>
            

        </div>
    )
}

const UploadAssets = () => {
    return (
        <div className="uploadassets m-2 radius-2">
            <div className="space-10"></div>
            <div className="text-center text-white">
                Assets
            </div>
        </div>
    )
}