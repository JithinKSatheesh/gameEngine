import React,{useState} from 'react'


const ProductContext = React.createContext()

function  ProductProvider(props) {
    
    const [values,setValues] = useState({
        screen: 'loading',
        // screen: 'selectProject',
        // screen: 'createProject',
        // screen: 'dashboard',
        projectName:'untitled',
        type:'2D',
        objectlist : [
            {
                id:'1',
                name:'rectangle',
                height:'200',
                width:'200',
                backgroundColor:'#53caf0',
            },
            {
                id:'2',
                name:'rectangle',
                height:'100',
                width:'100',
                backgroundColor:'#833997',
            },
        
        ],
        selectedObject : {
            id:'2',
            name:'rectangle',
            height:'300',
            width:'300',
            backgroundColor:'#833997',
        },
    })

  

    const changeScreen=(input)=>{
        setValues({
            ...values,
            screen:input,
        })
    }

    const insertNewObject=(newItem)=>{
        setValues({
            ...values,
            objectlist:[...values.objectlist,newItem]
        })
    }

    const createNewProject=({name,type})=>{
        // changeScreen('dashloading')
        setValues({
            ...values,
            projectName: name,
            type:type,
            screen:'dashloading'
        })
        console.log("&&&&",values)
        console.log("changing screen",name,type)
    }

    return (
        <ProductContext.Provider value={{
            ...values,
            changeScreen:changeScreen,
            insertNewObject:insertNewObject,
            createNewProject,createNewProject,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}