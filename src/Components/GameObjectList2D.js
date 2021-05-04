import React from 'react'
import {ProductConsumer} from './Context'

export default function GameobjectlistD(props) {
    

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
