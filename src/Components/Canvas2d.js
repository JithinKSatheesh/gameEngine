import React from 'react'
import {ProductConsumer} from './Context'

import Draggable from 'react-draggable';


export default function Canvas2D(){

    return (
        <div className="canvas-2d radius-0 m-3 bg-white">
            <div className="space-50"></div>
            <div className="">
                <ProductConsumer>
                    {(values)=>{
                        return(
                            <>
                            {values.objectlist.map(item=>(
                                <Draggable>
                                    <div  
                                        onClick={()=>{ values.setSelectedObject(item.id)}}
                                        
                                        style={{width:`${item.width}px`, height:`${item.height}px`,backgroundColor:`${item.backgroundColor}`, borderRadius:`${item.borderRadius}`}}>
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
