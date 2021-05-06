import React from 'react'
import { ProductConsumer } from '../Context'

export default function SelectLight() {
    return (
        <div className="GameObjectPhysicsProperties m-2 radius-1">
            <div className="space-20"></div>
            <div className="text-center text-white">
                SELECT LIGHT
            </div>
            <ProductConsumer>
                { value => (
                    <div>
                        { value.lights.map(items => (
                            <div onClick={() => value.setLightType(items.type)}
                            key={items.type}
                            className="object radius-0 p-2 text-center m-1">
                                { items.type }
                            </div>
                        )) }
                    </div>
                ) }
            </ProductConsumer>
        </div>
    )
}
