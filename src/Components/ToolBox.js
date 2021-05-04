import React from 'react'
import {ProductConsumer} from './Context'

export default function  Toolbox(){

    const tools = [
        {
            name: 'rectangle',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24z" /></svg>,
            inputObject :{
                id:'3',
                name:'rectangle',
                height:'300',
                width:'300',
                backgroundColor:'#53caf0',
                borderRadius:'0'
            },
        },
        {
            name: 'circle',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" /></svg>,
            inputObject :{
                id:'3',
                name:'circle',
                height:'300',
                width:'300',
                backgroundColor:'#53caf0',
                borderRadius:'50%'
            }
        },
        {
            name: 'triangle',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z" /></svg>,
            inputObject :{
                id:'3',
                name:'rectangle',
                height:'300',
                width:'300',
                backgroundColor:'#53caf0',
                borderRadius:'0'
            }
        },
        {
            name: 'box',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" /></svg>,
            inputObject :{
                id:'3',
                name:'rectangle',
                height:'300',
                width:'300',
                backgroundColor:'#53caf0',
                borderRadius:'0',
            }
        },
    ]
    return (
        <div className="toolbox p-1 radius-1">
            <div className="space-20"></div>
            <ProductConsumer>
                {values=>{
                    return(
                        <div className="">
                        {
                            tools.map(item => {
                                return (
                                    <div onClick={()=>{
                                        values.insertNewObject(item.inputObject)
                                    }}  className="tools radius-1">
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
                }}
            </ProductConsumer>
            
        </div>
    )
}