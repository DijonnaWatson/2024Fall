import reactLogo from './assets/react.svg'
import './App.css'

//importing a bunch of stuff from react router dom
//browser router that surrounds everything
//routes the equivalent of our router vue, and route which tells us the individual routes we have
import {BrowserRouter, Router, Route} from 'react-router-dom'

const NavBar = () => <nav>NavBar</nav>

const Home = () => (
<div>Home</div>
)
//in react, can only return one route element, since 
//we're using BrowserRouter to surround everything we're using that
function App() {
 

  return (
    <BrowserRouter>
      <img src={reactLogo} className="logo react" alt="React logo" />
      <header>
        <NavBar />
      </header>
      <div class="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
