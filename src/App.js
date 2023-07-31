import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { Route, Routes } from 'react-router-dom';
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/UserInfo" element={<UserInfo/>}/>
         <Route path='*' element={<ErrorPage/>} /> 
      </Routes>
      
     
    </div>
  );
}

export default App;



