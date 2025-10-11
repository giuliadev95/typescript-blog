import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogPage } from './pages/BlogPage';
import { HomePage } from './pages/HomePage';
import SingleBlogPost from './components/dynamic/SingleBlogPost';

function App() {

  return (
    <>      
      <BrowserRouter>
        <Routes>   

          {/** Home */}
          <Route path='/' element={<HomePage/>}/>
          <Route path="/post/:id" element={<SingleBlogPost />} />

          {/** Blog */}
          <Route path='/blog' element={<BlogPage/>}/>    
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
