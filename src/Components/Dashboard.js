import React from 'react'
import {ProductConsumer} from './Context'



import Toolbox from './ToolBox'
import Canvas2D from './Canvas2d'
import GameObjectProperties from './GameObjectProperties'
import GameObjectList2D from './GameObjectList2D'
import UploadAssets from './UploadAssets'


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
                                        {(values.type === '2D'||values.type === 'm2D') && <Canvas2D /> } 
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
