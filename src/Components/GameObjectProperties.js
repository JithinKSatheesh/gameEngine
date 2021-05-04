import React from 'react'
import {ProductConsumer} from './Context'


export default function  GameObjectProperties (){
    return (
        <div className="gameobjectproperty m-2 radius-2">
            <div className="space-20"></div>
            <div className="text-center text-white">
                OBJECT PROPERTIES
            </div>
            <div className="p-4">

            <ProductConsumer>
                    {(values)=>{
                        return(
                            <>
                            <div className="row">
                                <div className="col-6 p-1">Object ID :</div>
                                <div className="col-6 p-1">{values.selectedObject.id}</div>
                                <div className="col-6 p-1">Width :</div>
                                <div className="col-6 p-1">
                                    <input type="text" className=" input-s1"/>
                                </div>
                                <div className="col-6 p-1">Height :</div>
                                <div className="col-6 p-1">
                                    <input type="text" className=" input-s1"/>
                                </div>
                                <div className="col-6 p-1">Color :</div>
                                <div className="col-6 p-1">
                                    <input type="text" className="input-s1"/>
                                </div>
                                <div className="col-6 p-1">
                                    <div className="space-20"></div>
                                    <div className="btn btn-secondary">
                                        set properties
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    }}
             </ProductConsumer>
            </div>
            

        </div>
    )
}