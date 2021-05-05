import React, { useState } from 'react'
import bg_1 from '../assets/bg_1.png'
import snake from '../assets/snake.jpeg'
import brick from '../assets/brick.jpeg'
import image_3d from '../assets/3d.png'
import image_2d from '../assets/2d.png'
import { ProductConsumer } from './Context'





export default function ProjectNew(props) {
    

    return (
        <>
        <div className="space-50"></div>
        <div  className="container p-3 ">
            <div style={{backgroundColor:'#e6e6e627'}}  className="project p-4">
                <div className="space-50"></div>
                <div className="bg- radius-1">
                    <div className="text-white p-2 h4">
                        Create New project
                    </div>
                </div>
                <div className="space-20"></div>
                <RenderForm/>
                
                
                <div className="space-50"></div>
                
            </div>
        </div>
        </>
    )
}

const RenderForm = ()=>{

    const [values,setValues] = useState({
        name:'',
        type:'2D',

    })

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
        
    }

    return(
        <div className="form">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <input 
                                    type="text"
                                    className="form-control" 
                                    placeholder="Enter project name" 
                                    onChange={handleChange('name')}
                                    value={values.name}
                                    />
                            </div>
                            <div className="space-20"></div>
                            <div className="text-white">
                                Select type of project
                            </div>
                            <div className="form-group">
                                <select 
                                    className='form-control'
                                    value={values.type}
                                    onChange={handleChange('type')}
                                    >
                                    <option value="2D">2D</option>
                                    <option value="3D">3D</option>
                                    {/* <option value="m2D">Multiplayer (2D)</option>
                                    <option value="m3D">Multiplayer (3D)</option> */}
                                </select>
                            </div>
                            <div className="space-50"></div>
                            <ProductConsumer>
                                {(consumer)=>{
                                    return(
                                        <>
                                        <div 
                                            onClick={()=>{
                                                consumer.createNewProject({
                                                    name : values.name,
                                                    type: `${values.type}`,
                                                })
                                            }}
                                            className="btn btn-dark">
                                            Create Single player
                                        </div>
                                        &nbsp;
                                        <div 
                                            onClick={()=>{
                                                consumer.createNewProject({
                                                    name : values.name,
                                                    type: `m${values.type}`,
                                                })
                                            }}
                                            className="btn btn-dark">
                                            Create Multyplayer
                                        </div>
                                        </>
                                    )
                                }}
                            </ProductConsumer>


                        </div>
                    </div>
                </div>
                {/* image for 3d or 2d */}
                <div className="col-6">
                    <div className="text-center">
                        <img src={values.type ==='3D'||values.type ==='m3D'? image_3d:image_2d} style={{height:'200px'}}  className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}


