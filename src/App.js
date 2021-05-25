import './default.scss'
import React from 'react';
import {Route} from 'react-router-dom'

//components 
import Header from './components/Header/index'
import BlackMenu from './components/BlackMenu/index'

//layouts
import LandingLayout from './layouts/LandingLayout'
import CollectionsLayout from './layouts/CollectionsLayout'
import ObjetLayout from './layouts/ObjetLayout'
import ProjectLayout from './layouts/ProjectLayout'
// CollectionsLayout


//Pages 
import Homepage from './pages/Homepage';
import Registration from './pages/Registrationpage'
import Collections from './pages/Collectionspage'
import Objet from './pages/Objetpage'
import Projects from './pages/Projectpage'



function App() {
  return (
    <div className="App">
      {/* <BlackMenu /> */}
      {/* <Header /> */}
      <switch>

        <Route 
        exact path ='/' render = {() => (
          <LandingLayout>
            <Homepage />
          </LandingLayout>
        )}
        >
        </Route>

        <Route exact path ='/collections' render = {() => (
          <CollectionsLayout>
            <Collections />
          </CollectionsLayout>
        )}
        >
        </Route>


        <Route exact path ='/objet' render = {() => (
          <ObjetLayout>
            <Objet />
          </ObjetLayout>
        )}
        >
        </Route>

        <Route exact path ='/projects' render = {() => (
          <ProjectLayout>
            <Projects />
          </ProjectLayout>
        )}
        >
        </Route>

        <Route  path ='/registration' component = {Registration} ></Route>
        {/* <Route  path ='/collections' component = {Collections} ></Route> */}
      </switch>
      {/* <Homepage />
      <Registration /> */}
    </div>
  );
}

export default App;
