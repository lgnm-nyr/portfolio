import './App.css';

import Header from './components/header';
import Default from './components/default';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Default />}>
                    
                    </Route>
                    <Route path="/my_projects" element={<Projects />}>

                    </Route>
                    <Route path="/about_me" element={<About />}>

                    </Route>
                    <Route path="/contact_me" element={<Contact />}>

                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
