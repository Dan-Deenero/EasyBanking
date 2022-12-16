import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer';
import Contact from './Contact';
import Blog  from './Blog';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from './About';
import Careers from './Careers';

function App() {
  return (
   <Router>  
      <div className="App font-body">
         <Navbar/>
         <div className='main'>
            {/* <Landing/> */}
            <Switch>
               <Route exact path="/">
                  <Landing/>
               </Route>
               <Route path="/Contact">
                  <Contact/>
               </Route>
               <Route path="/blog">
                  <Blog/>
               </Route>
               <Route path="/About">
                  <About/>
               </Route>
               <Route path="/Careers">
                  <Careers/>
               </Route>
            </Switch>
         </div>
         <Footer/>
      </div>
   </Router>
  );
}

export default App;
