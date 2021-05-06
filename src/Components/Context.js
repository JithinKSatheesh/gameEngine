import React,{useState} from 'react'
import * as THREE from 'three'
import * as CANNON from 'cannon'

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


    // 3D functions

    const [entities, setEntities] = useState([])
    const [selectedEntity, setSelectedEntity] = useState({})
    const [lightType, setLightType] = useState('ambient')
    const [lightProperties, setLightProperties] = useState({ 
                                                    type : 'ambient', 
                                                    color : 0xffffff, 
                                                    intensity : 1 })

    const createEntity = params => {
        const entity = new Entity(params)
        console.log("Creating new entity =======>", entity)
        let gameObjs = [...entities, entity]
        console.log("Entity Lisy ===========>", gameObjs)
        setEntities(() => gameObjs)
    }

    const updateSelectedEntity = params => {
        console.log("Entity to be updated with", params)
    }

    // Light
    // Ambient Light
    const lights = [
        { type : 'ambient', obj : THREE.AmbientLight },
        { type : 'hemis', obj : THREE.HemisphereLight },
        { type : 'point', obj : THREE.PointLight },
        { type : 'directional', obj : THREE.DirectionalLight },
    ]
    
    
    const setLight = (type) => {
        const lightObj = lights.find(light => light.type === type).obj
        let light
        switch (type) {
            case 'ambient':
                light = new lightObj(0xffffff, 1)
                break;
            case 'hemis':
                light = new lightObj(0xffffff, 0xB97A20, 1)
                break
            case 'point':
                light = new lightObj(0xffffff, 1)
                light.position.set(0, 20, 0)
                break
            case 'directional':
                light = new lightObj(0xffffff, 1)
                light.position.set(0, 20, 0)
                light.target.position.set(-5, 0, 0)
                break
            default:
                light = new THREE.AmbientLight(0xffffff, 1)
                break;
        }
        return light
    }


    return (
        <ProductContext.Provider value={{
            ...values,
            // 3D
            entities : entities,
            setEntities : setEntities,
            selectedEntity : selectedEntity,
            setSelectedEntity : setSelectedEntity,
            createEntity : createEntity,
            updateSelectedEntity : updateSelectedEntity,
            lightProperties : lightProperties,
            setLightProperties : setLightProperties,
            setLight : setLight,
            lights : lights,
            lightType : lightType,
            setLightType : setLightType,

            // 2D
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


// Entity definition

let Entity = function Entity(params) {
    this.id = Entity.prototype._count;
    Entity.prototype._count++;

    this.components = {};
    params = params || {};

    params.type = ('type' in params) ? params.type : 'box';
    let mass = ('mass' in params) ? params.mass : 1;
    let color = ('color' in params) ? params.color : 0xff88aa;
    let name = ('name' in params) ? params.name : 'Entity_' + params.type + '_' + this.id;
    let position = params.position || {x: 0, y: 10, z: 0};
    let material = new THREE.MeshPhongMaterial({color: color});

    let {geometry, shape} = getGeometryShape(params);

    console.log("Geometry of the object =====>", geometry)

    const body = new CANNON.Body({
        mass: mass,
        shape: shape,
        position: new CANNON.Vec3(position.x, position.y, position.z),
        material: new CANNON.Material({friction: 0.1})
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.x = position.x;
    this.mesh.position.y = position.y;
    this.mesh.position.z = position.z;
    this.mesh.cannon_rigid_body = body;

    // Object properties
    this.name = name;
    this.type = params.type
    this.color = color
    this.parameters = geometry.parameters

    // world.add(body);
    // scene.add(this.mesh);
    // this.addEntityToDict();

    return this;
}

Entity.prototype._count = 0;

function getGeometryShape(params) {
    let geometry, shape;
    let width = ('width' in params) ? params.width : 5;
    let height = ('height' in params) ? params.height : 5;
    let depth = ('depth' in params) ? params.depth : 5;
    let radius = ('radius' in params) ? params.radius : 2.5;
    switch (params.type) {
        case 'box':
            geometry = new THREE.BoxGeometry(width, height, depth);
            shape = new CANNON.Box(new CANNON.Vec3(width / 2, height / 2, depth / 2));
            break;
        case 'sphere':
            geometry = new THREE.SphereGeometry(radius, 20, 20);
            shape = new CANNON.Sphere(radius);
            break;
        case 'cylinder':
            geometry = new THREE.CylinderGeometry(radius, radius, height, 20);
            shape = new CANNON.Cylinder(radius, radius, height, 20);
            break;
        default:
            throw "Visual type not recognized: " + params.type;
    }
    return {geometry, shape}
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}