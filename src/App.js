import { useState, useEffect} from 'react'

import { Route, Routes } from 'react-router-dom';

import { Lines } from 'react-preloaders';


import Landing from '../src/pages/Landing'
import About from '../src/pages/About'
import Posts from '../src/pages/Posts'
import Resources from '../src/pages/Resources'
import WritePost from './pages/WritePost';





function App() {

  // const [loading, setLoading] = useState(true);
 
  // useEffect(() => {
  //   setLoading(false)
  // }, [5000]);


  return (
    <div className="App">

      <Routes>
        
          <Route path='/' element={<Landing />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/writePost' element={<WritePost />} />
  
        </Routes> 

        {/* <Lines customLoading={loading} /> */}
        
    </div>
  );
}

export default App;
