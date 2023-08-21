import { Route, Routes } from 'react-router-dom';


import Landing from '../src/pages/Landing'
import About from '../src/pages/About'
import Posts from '../src/pages/Posts'
import Resources from '../src/pages/Resources'


function App() {
  return (
    <div className="App">

      <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
  
        </Routes> 

    </div>
  );
}

export default App;
