import React,{useEffect, useState} from 'react'
import {ProductConsumer} from './Context'


export default function  GameObjectPhysicsProperties (){



    return (
        <div className="GameObjectPhysicsProperties m-2 radius-1">
            <div className="space-20"></div>
            <div className="text-center text-white">
                PHYSICS PROPERTIES
            </div>
            <div  className="p-4">
                <ProductConsumer>
                    {values=>{
                        return(
                            <>
                            <RenderForm initialvalues={values.selectedObject} />
                            </>
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}


const RenderForm=({initialvalues})=>{


    const [inputVal,setInputVal] = useState({
        name:initialvalues.name,
        height:initialvalues.height,
        width:initialvalues.width,
        backgroundImage:initialvalues.backgroundImage,
        backgroundColor:initialvalues.backgroundColor,
        physics:initialvalues.physics,
    })


    useEffect(()=>{

        setInputVal(initialvalues)
        console.log(inputVal)

    },[initialvalues])
    

    const handleChange = name => event => {
        setInputVal({ ...inputVal, physics : {...inputVal.physics,[name]: event.target.value }})
        console.log(inputVal)
        
    }


    return(
    <div className="">
        <ProductConsumer>
            {(values)=>{

                // initInput(values.selectedObject)
                return(
                    <>
                    <div className="row GameObjectPhysicsPropertiesBox">
                        <div className="col-6 p-1">Object ID :</div>
                        <div className="col-6 p-1">{values.selectedObject.id}</div>

                        <div className="col-6 p-1">Left bound :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('leftbound')}
                                value={inputVal.physics.leftbound}
                                type="text" 
                                className="input-s1"/>
                        </div>
                        <div className="col-6 p-1">Right bound :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('rightbound')}
                                value={inputVal.physics.rightbound}
                                type="text" 
                                className="input-s1"/>
                        </div>
                        <div className="col-6 p-1">Top bound :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('topbound')}
                                value={inputVal.physics.topbound}
                                type="text" 
                                className="input-s1"/>
                        </div>
                        <div className="col-6 p-1">Bottom bound :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('bottombound')}
                                value={inputVal.physics.bottombound}
                                type="text" 
                                className="input-s1"/>
                        </div>
                        <div className="col-6 p-1">Friction :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('friction')}
                                value={inputVal.physics.friction}
                                type="text" 
                                className="input-s1"/>
                        </div>
                        <div className="col-6 p-1">Weight :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('weight')}
                                value={inputVal.physics.weight}
                                type="text" 
                                className="input-s1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-1">
                            <div className="space-20"></div>
                            <div 
                                onClick={()=>{
                                    values.updateSelectedObject(inputVal)
                                }}
                                className="btn btn-secondary">
                                set properties
                            </div>
                        </div>
                    
                    </div>
                    </>
                )
            }}
        </ProductConsumer>
    </div>

    )
}