import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Cursos from './pages/Cursos';
import Galeria from './pages/Galeria';
import Agenda from './pages/Agenda';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/cursos" component={Cursos} />
            <Route path="/galeria" component={Galeria} />
            <Route path="/agenda" component={Agenda} />
            <Route path="/contacto" component={Contacto} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

