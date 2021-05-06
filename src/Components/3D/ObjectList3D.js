import React from 'react'
import { ProductConsumer } from '../Context'

export default function ObjectList3D() {
    return (
        <div className="gameobjectbox m-2 radius-1">
            <div className="space-20"></div>
            <div className="text-center text-white">
                OBJECTS LIST
            </div>
            <div className="p-3 gameobjectboxFlow">
                <ProductConsumer>
                    { value => (
                        value.entities.map(entity => (
                            <div onClick={() => value.setSelectedEntity(() => entity)}
                            className="object radius-0 p-2 text-center m-1">
                                { entity.name }
                            </div>
                        ) )
                    ) }
                </ProductConsumer>
            </div>
        </div>
    )
}
