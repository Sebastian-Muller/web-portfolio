import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact';
import Porfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';
import Certificates from './components/Certificates';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Porfolio />} />
          <Route path='certificates' element={<Certificates />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
