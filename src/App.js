  // import logo from './logo.svg';
  import Nav from 'react-bootstrap/Nav';
  import NavBar from 'react-bootstrap/Navbar';
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import './App.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
  import Create from './components/create.component';
  import Edit from './components/edit.component';
  import List from './components/list.component';

  function App() {
    return (
      <Router>
        <div className="App">
      
          <NavBar bg='dark' variant='dark'>
            <Container>
              <NavBar.Brand>
                <Link to={"/create"} className='nav-link'>
                  CRUD
                </Link>
              </NavBar.Brand>
              <Nav className='justifly-content-end'>
                <Nav >
                  <Link to={"/create"} className='nav-link'>
                    Create
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/list"} className='nav-link'>
                    List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </NavBar>
          <Container>
            <Row>
              <Col md="12">
                <div className='wrapper'>
                  <Switch>
                  <Route exact path='/' component={Create}/>
                  <Route path='/create' component={Create}/>
                  <Route path='/edit/:id' component={Edit}/>
                  <Route path='/list' component={List}/>
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    
      </Router>
    );
  }

    

  export default App;
