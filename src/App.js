import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'react-bootstrap';

import ROUTES, { RenderRoutes } from './routes';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid='sm' className="w-75">
            <RenderRoutes routes={ROUTES}/>
        </Container>
      </Router>
    </div>
  );
}

export default App;
