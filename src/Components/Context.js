import React,{useState} from 'react'


const ProductContext = React.createContext()

function  ProductProvider(props) {
    
    const [values,setValues] = useState({
        // screen: 'loading',
        // screen: 'selectProject',
        // screen: 'createProject',
        screen: 'dashboard',
        projectName:'untitled',
        type:'2D',
        objectlist : [
            // {
            //     id:'1',
            //     name:'rectangle',
            //     height:'200',
            //     width:'200',
            //     backgroundColor:'#53caf0',
            //     phyiscs:{}
            // },
        
        ],
        selectedObject : {
            // id:'2',
            // name:'rectangle',
            // height:'300',
            // width:'300',
            // backgroundColor:'#833997',
            physics:{
                leftbound: 100,
                rightbound: 100,
            },
            events:{
                onCollision:'',
                collisionWith:'',
                health:'',
                movement:'',

            }
        },
    })

  

    const changeScreen=(input)=>{
        setValues({
            ...values,
            screen:input,
        })
    }

    const insertNewObject=(newItem)=>{
        newItem.id = values.objectlist.length + 1
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

    const setSelectedObject = (id)=>{
        const selected = values.objectlist.find((ele=> (ele.id === id)))
        // console.log(selected)
        setValues({
            ...values,
            selectedObject:selected,
        })
    }

    const updateSelectedObject = (item)=>{
        const index = values.objectlist.findIndex(obj=>obj.id === item.id)
        const newArray = values.objectlist
        newArray[index] = item
        setValues({
            ...values,
            objectlist:newArray
        })
    }

    return (
        <ProductContext.Provider value={{
            ...values,
            changeScreen:changeScreen,
            insertNewObject:insertNewObject,
            createNewProject,createNewProject,
            setSelectedObject:setSelectedObject,
            updateSelectedObject:updateSelectedObject,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}