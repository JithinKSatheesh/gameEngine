import React, { useState, useEffect } from 'react'
import { ProductConsumer } from '../Context'

export default function ObjectProperties3D() {
    return (
        <div className="gameobjectproperty m-2 radius-1">
            <div className="space-20"></div>
            <div className="text-center text-white">
                OBJECT PROPERTIES
            </div>
            <div className="p-4">
                <ProductConsumer>
                    { 
                        value => <RenderForm selectedEntity={value.selectedEntity} /> 
                    }
                </ProductConsumer>
            </div>
        </div>
    )
}


const RenderForm = ({ selectedEntity }) => {
    const [entity, setEntity] = useState({
        name : '',

    })

    useEffect(() => setEntity(() => selectedEntity), [selectedEntity])

    const handleChange = name => event => {
        
        
    }

    return (
        <div>
            <ProductConsumer>
                { value => (
                    <div className="row">

                        <div className="col-6 p-1">Object ID :</div>
                        <div className="col-6 p-1">{value.selectedEntity.id}</div>

                        <div className="col-6 p-1">Object Type :</div>
                        <div className="col-6 p-1">{value.selectedEntity.type}</div>

                        <div className="col-6 p-1">Name :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('name')}
                                value={value.selectedEntity.name}
                                type="text" 
                                className=" input-s1"/>
                        </div>

                        <div className="col-6 p-1">Color :</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('color')}
                                value={value.selectedEntity.color}
                                type="text" 
                                className=" input-s1"/>
                        </div>

                        { value.selectedEntity.type === 'box' &&
                        <>
                         <div className="col-6 p-1">Width</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('width')}
                                value={value.selectedEntity.parameters.width}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        <div className="col-6 p-1">Height</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('width')}
                                value={value.selectedEntity.parameters.height}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        <div className="col-6 p-1">Depth</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('width')}
                                value={value.selectedEntity.parameters.depth}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        </> }

                        { value.selectedEntity.type === 'sphere' &&
                        <>
                         <div className="col-6 p-1">Radius</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('radius')}
                                value={value.selectedEntity.parameters.radius}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        </> }

                        { value.selectedEntity.type === 'cylinder' &&
                        <>
                         <div className="col-6 p-1">Radius Top</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('color')}
                                value={value.selectedEntity.parameters.radiusTop}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        <div className="col-6 p-1">Radius Bottom</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('color')}
                                value={value.selectedEntity.parameters.radiusBottom}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        <div className="col-6 p-1">Height</div>
                        <div className="col-6 p-1">
                            <input 
                                onChange={handleChange('color')}
                                value={value.selectedEntity.parameters.height}
                                type="text" 
                                className=" input-s1"/>
                        </div>
                        </> }
                       
                    </div>
                ) }
            </ProductConsumer>
        </div>
    )
}