import React,{useEffect, useState} from 'react'
import {ProductConsumer} from './Context'


export default function  GameObjectProperties (){



    return (
        <div className="gameobjectproperty m-2 radius-1">
            <div className="space-20"></div>
            <div className="text-center text-white">
                OBJECT PROPERTIES
            </div>
            <div className="p-4">
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

    // const [fileName,setFileName] = useState('')

    useEffect(()=>{

        setInputVal(initialvalues)

    },[initialvalues])
    

    const handleChange = name => event => {
        setInputVal({ ...inputVal, [name]: event.target.value })
        console.log(inputVal)
        
    }

    const handlefile= name => event =>  {
        setInputVal({
            ...inputVal,
            [name]: URL.createObjectURL(event.target.files[0]),
        })
      }


    return(
    <div className="">
        <ProductConsumer>
            {(values)=>{

                // initInput(values.selectedObject)
                return(
                    <>
                    <div className="row">
                        <div className="col-6 p-1">Object ID :</div>
                        <div className="col-6 p-1">{values.selectedObject.id}</div>
                        <div className="col-6 p-1">Name :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('name')}
                                value={inputVal.name}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        <div className="col-6 p-1">Width :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('width')}
                                value={inputVal.width}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        <div className="col-6 p-1">Height :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('height')}
                                value={inputVal.height}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        <div className="col-6 p-1">Color :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('backgroundColor')}
                                value={inputVal.backgroundColor}
                                type="text" 
                                className="input-s1"/>
                        </div>
                       
                        {/* ========================== */}
                        <div className="col-6 p-1">
                            <input 
                                // onChange={handleChange('health')}
                                // value={inputVal.events.health}
                                placeholder={'custom property'}
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
                        <div className="col-6 p-1">Character image :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handlefile('backgroundImage')}
                                type="file" 
                                className="input-s1"/>
                        </div>
                        <div className="col-12 ">
                            <img 
                                style={{height:'50px',borderRadius:'3px'}}
                                src={inputVal.backgroundImage} alt=""/>
                        </div>
                        

                        {/* ========================== */}
                        <div className="col-6 p-1">
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