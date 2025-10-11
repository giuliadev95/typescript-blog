import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from './pages/BlogPage';
import { HomePage } from './pages/HomePage';

function App() {

  return (
    <>      
      <BrowserRouter>
        <Routes>    
          {/** Home */}
          <Route path='/' element={<HomePage/>}/>

          {/** Blog */}
          <Route path='/blog' element={<BlogPage/>}/>    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
