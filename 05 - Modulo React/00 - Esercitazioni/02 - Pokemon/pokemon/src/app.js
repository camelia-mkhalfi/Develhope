import Home from './home';
import Details from './details';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="details/:name" element={<Details/>}/>
    </Routes>
  );
}