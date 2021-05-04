import React,{useState} from 'react'


const ProductContext = React.createContext()

function  ProductProvider(props) {
    
    const [values,setValues] = useState({
        // screen: 'loading',
        // screen: 'selectProject',
        // screen: 'createProject',
        screen: 'dashboard',
        projectName:'untitled',
        type:'2d',
        objectlist : [
            {
                id:'1',
                name:'rectangle',
                height:'300',
                width:'300',
                backgroundColor:'#53caf0',
            },
            {
                id:'2',
                name:'rectangle',
                height:'300',
                width:'300',
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
            screen:input
        })
    }

    return (
        <ProductContext.Provider value={{
            ...values,
            changeScreen:changeScreen,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}