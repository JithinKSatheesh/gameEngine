import React,{useEffect, useState} from 'react'
import {ProductConsumer} from './Context'


export default function GameEventProperties(props) {
    
    return (
        <div className="GameEventProperties m-2 radius-1">
            <div className="space-10"></div>
            <div className="text-center text-white p-1">
               EVENT PROPERTIES
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
        events:initialvalues.physics,
    })


    useEffect(()=>{

        setInputVal(initialvalues)
        console.log(inputVal)

    },[initialvalues])
    

    const handleChange = name => event => {
        setInputVal({ ...inputVal, events : {...inputVal.events,[name]: event.target.value }})
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
                          {/* ========================== */}
                        <div className="col-6 p-1">collisionWith:</div>
                        <div className="col-6 p-1">
                            <select 
                                onChange={handleChange('collisionWith')}
                                value={inputVal.events.collisionWith}
                                type="text" 
                                className="input-s1">
                                    <option value='0'>Any object</option>
                                    {
                                        values.objectlist.map(item=>{
                                            return(
                                                <option value={item.id}>{item.name} {item.id}</option>
                                            )
                                        })
                                    }
                            </select>
                        </div>
                    {/* ========================== */}
                    {/* ========================== */}
                        <div className="col-6 p-1">onCollision:</div>
                        <div className="col-6 p-1">
                            <select 
                                onChange={handleChange('onCollision')}
                                value={inputVal.events.onCollision}
                                type="text" 
                                className="input-s1">
                                    <option value='destroy'>Destroy</option>
                                    <option value='decrease health'>Decrease Health</option>
                                    <option value='no action'>no action</option>
                                    <option value='destroy'>Game over</option>
                            </select>
                        </div>
                    {/* ========================== */}
                    {/* ========================== */}
                        <div className="col-6 p-1">Movement:</div>
                        <div className="col-6 p-1">
                            <select 
                                onChange={handleChange('movement')}
                                value={inputVal.events.movement}
                                type="text" 
                                className="input-s1">
                                    <option value='keyboard'>Keyboard arrow</option>
                                    <option value='mouse'>Mouse pointer</option>
                                    <option value='no action'>no action</option>
                            </select>
                        </div>
                    {/* ========================== */}
                    {/* ========================== */}
                        <div className="col-6 p-1">Health:</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('health')}
                                value={inputVal.events.health}
                                type="text" 
                                className="input-s1"/>
                        </div>
                    {/* ========================== */}
                    {/* ========================== */}
                        <div className="col-6 p-1">
                            <input 
                                // onChange={handleChange('health')}
                                // value={inputVal.events.health}
                                placeholder={'custom script'}
                                type="text" 
                                className="input-s1"/>
                        </div>
                        <div className="col-6 p-1">
                            <input 
                                // onChange={handleChange('health')}
                                // value={inputVal.events.health}
                                placeholder={'write javascript logic'}
                                type="text" 
                                className="input-s1"/>
                        </div>
                    {/* ========================== */}
                  

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