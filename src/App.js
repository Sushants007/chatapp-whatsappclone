import React, { Fragment} from 'react';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch]=useStateValue();


  return (
    <div className='app'>
      {!user ?(
        <Login/>
      ):(
      <div className='app_body'>
        <Router>
          <Routes> 
            
              <Route path='/rooms/:roomId' element={
                    <Fragment>
                      <Sidebar/>
                      <Chat/>
                    </Fragment>
                      } />
              <Route path="/"  element={
                  <Fragment>
                    <Sidebar/>
                  </Fragment>
              }/>
        </Routes>
        </Router>
      </div>)
}
    </div>
  )
}

export default App