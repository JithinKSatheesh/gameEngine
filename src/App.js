import logo from './logo.svg';
import './bootstrap/css/bootstrap.min.css'
import './App.css';
import { ProductConsumer } from './Components/Context';


import Loading from './Components/Loading'
import Project from './Components/Project'
import ProjectNew from './Components/ProjectNew'
import LoadingDash from './Components/DashLoading'
import LoadingExport from './Components/LoadingExport'
import Dashboard from './Components/Dashboard'


function App() {
  return (
    <div className="App">
      <ProductConsumer>
        {(values)=>{
          return(
            <>
            hello
            {console.log(values)}
            {values.screen === 'loading' && <Loading trigger={values.changeScreen} />}
            {values.screen === 'selectProject' && <Project/> }
            {values.screen === 'createProject' && <ProjectNew/> }
            {values.screen === 'dashloading' &&  <LoadingDash trigger={values.changeScreen} />}
            {values.screen === 'dashboard' &&  <Dashboard/>}
            {values.screen === 'exportload' &&  <LoadingExport trigger={values.changeScreen}/>}
            </>
          )
        }}
      </ProductConsumer>
    </div>
  );
}

export default App;
