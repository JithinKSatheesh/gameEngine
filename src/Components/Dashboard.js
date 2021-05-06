import React from 'react'
import {ProductConsumer} from './Context'

import Toolbox from './ToolBox'
import Canvas2D from './Canvas2d'
import GameObjectProperties from './GameObjectProperties'
import GameObjectPhysicsProperties from './GameObjectPhysicsProperties'
import GameObjectList2D from './GameObjectList2D'
import GameEventProperties from './GameEventProperties'

import Canvas3D from './3D/Canvas3d'
import Toolbox3D from './3D/Toolbox3d'
import ObjectList3D from './3D/ObjectList3D'
import EventProperties3D from './3D/EventProperties3D'
import ObjectProperties3D from './3D/ObjectProperties3D'
import SelectLight from './3D/SelectLight'

export default function Dashboard(props) {


    return (
        <>
            <div className="">
                <ProductConsumer>
                    {(values) => {
                        return (
                            <>
                                <div className="dashboard text-white p-3 m-2 radius-1">
                                    <div className="space-10"></div>
                                    <div className="d-flex justify-content-between">
                                        <div className="h3">
                                            {values.projectName}
                                        </div>
                                        <div className="small">
                                            <div className="d-flex">
                                                <div className="btn btn-success">Save</div>
                                                &nbsp;
                                                <div 
                                                    onClick={()=>{
                                                        values.changeScreen('exportload')
                                                    }}
                                                    className="btn btn-danger">Export</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-20"></div>

                                    <div className="d-flex">
                                        {/*(values.type === '2D'||values.type === 'm2D') && <Toolbox /> */}
                                        {/*(values.type === '3D'||values.type === 'm3D') && <Toolbox3D /> */} 
                                        <Toolbox3D />
                                        <Canvas3D entities={values.entities} 
                                        setLight={values.setLight}
                                        lightType={values.lightType}
                                        lightProperties={values.lightProperties}/>
                                        {/*(values.type === '2D'||values.type === 'm2D') && <Canvas2D /> */} 
                                        {/*(values.type === '3D'||values.type === 'm3D') && <Canvas3D entities={[]}/> */} 
                                        {/*<GameObjectProperties />*/}
                                        <ObjectProperties3D />
                                    </div>
                                    <div className="d-flex">
                                        {/*<GameObjectList2D />*/}
                                        <ObjectList3D />
                                        {/*<GameEventProperties />*/}
                                        <EventProperties3D />
                                        {/*<GameObjectPhysicsProperties/>*/}
                                        <SelectLight />
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
