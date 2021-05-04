import React,{useState} from 'react'


const ProductContext = React.createContext()

function  ProductProvider(props) {
    
    const [values,setValues] = useState({
        // screen: 'loading',
        screen: 'selectProject',
        // screen: 'createProject',
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