import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import Tnpsc from './components/courses/tnpsc/Tnpsc';
import Upsc from './components/courses/upsc/Upsc';
import Sscbanking from './components/courses/sscbanking/Sscbanking';
import CATnpsc from './components/currentaffairs/CATnpsc';
import CAUpsc from './components/currentaffairs/CAUpsc';

function App() {
  return (
    <section>
        <Router>
          <Layout>
            <Routes>
              <Route path='/' element={<Home/>} exact/>
              <Route path='/home' element={<Home/>} />
              <Route path='/tnpsc' element={<Tnpsc/>} ></Route>
              <Route path='/upsc' element={<Upsc/>} ></Route>
              <Route path='/sscandbanking' element={<Sscbanking/>} ></Route>
              <Route path='/currentaffairs/tnpsc' element={<CATnpsc/>}></Route>
              <Route path='/currentaffairs/upsc' element={<CAUpsc/>}></Route>
            </Routes>
          </Layout>
        </Router>
    </section>
  );
}

export default App;
