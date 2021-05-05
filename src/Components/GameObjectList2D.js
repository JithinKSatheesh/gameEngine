import React from 'react'
import {ProductConsumer} from './Context'

export default function GameobjectlistD(props) {
    

    return (
        <div className="gameobjectbox m-2 radius-1">
            <div className="space-20"></div>
            <div className="text-center text-white">
                OBJECTS LIST
            </div>
            <div className="p-3 gameobjectboxFlow">

            <ProductConsumer>
                {(values)=>{
                    return(
                        <>
                        {values.objectlist.map(item=>(
                            <div 
                                onClick={()=>{
                                    values.setSelectedObject(item.id)
                                }}
                            
                                className="object radius-0 p-2 text-center m-1">
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
