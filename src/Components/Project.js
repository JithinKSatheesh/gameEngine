import React from 'react'
import bg_1 from '../assets/bg_1.png'
import snake from '../assets/snake.jpeg'
import brick from '../assets/brick.jpeg'
import { ProductConsumer } from './Context'

const existing = [
    {
        name :'snake',
        image:snake,
    },
    {
        name :'Brick',
        image:brick,
    }
]



export default function Project(props) {
    

    return (
        <>
        <div className="space-50"></div>
        <div  className="container p-3">
            <div style={{backgroundColor:'#e6e6e627'}}  className="project p-2">
                <div className="space-50"></div>
                <div className="bg- radius-1">
                    <div className="text-white p-2 h4">
                        Create a project
                    </div>
                </div>
                <div className="space-20"></div>
                <div className="p-2">
                    <ProductConsumer>
                        {(value)=>{
                            return(
                                <span onClick={()=>value.changeScreen('createProject')}>
                                <BoxButton text={<Plus/>}  />
                                </span>
                            )
                        }}
                    </ProductConsumer>
                </div>
                <div className="space-20"></div>
                <div className="bg- radius-1">
                    <div className="text-white p-2 h4">
                        Open existing project
                    </div>
                </div>
                <div className="d-flex">
                    {
                    existing.map((item,index) =>{
                        return(
                            <BoxButton key={item.name} text={item.name}  image={item.image}/>
                        )
                    })
                    }
                </div>
                <div className="space-50"></div>
                
            </div>
        </div>
        </>
    )
}

const Plus =()=>{
    return (
        <>
        <svg fill='white' width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
        <br/>
        <div className="text-white text-center small">
            Create new project
        </div>
        </>
    )
}

const BoxButton = ({image,text})=>{
    return(
        <>
        <div style={{backgroundImage:`url(${image})`}} className="BoxButton radius-2 p-4 m-2">
            <div className="space-20"></div>
            <div className="text-center text-white  radius-1 p-1">
                {text}
            </div>
            
        </div>
        </>
    )
}

