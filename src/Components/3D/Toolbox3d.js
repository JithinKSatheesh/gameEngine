import React from 'react'
import { ProductConsumer } from '../Context'

export default function Toolbox3d() {

    const tools = [
        {
            name: 'box',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" /></svg>,
            params : {
                type : 'box'
            }
        },
        {
            name: 'sphere',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" /></svg>,
            params : {
                type : 'sphere'
            }
        },
        {
            name: 'cylinder',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" /></svg>,
            params : {
                type : 'cylinder'
            }
        },
        {
            name: 'light',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" /></svg>,
            params : {
                type : 'light'
            }
        },
        {
            name: 'camera',
            symbol: <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-6.91 14.554v-8.6l8-4.269v8.6l-8 4.269z" /></svg>,
        }
    ]

    return (
        <div className="toolbox p-1 radius-0 m-1">
            <div className="space-20"></div>
            <ProductConsumer>
                { value => (
                    <div>
                        { tools.map(item => {
                            return (
                                <div onClick={()=>{
                                    if (item.name !== 'light' && item.name !== 'camera') {
                                        console.log(item.params)
                                        value.createEntity(item.params)
                                    } 
                                    else {
                                        console.log('Meta selected')
                                    }
                                }}  className="tools radius-1">
                                    <div className="space-5"></div>
                                    <div className="text-center">
                                        {item.symbol}
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                ) }
            </ProductConsumer>
        </div>
    )
}
