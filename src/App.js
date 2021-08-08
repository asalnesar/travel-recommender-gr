import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Map from './components/Map';
import RecommenderContainer from './components/RecommenderContainer';
import { Col, Row } from 'react-bootstrap';
import CustomizationContainer from './components/CustomizationContainer';
import {Countries} from './Data/Countries.js';


function App() {
  let data = Countries;
  return (
    <div className="App">
      <Row>
        <Col>
          <RecommenderContainer className="col-3"  countries={data}/>
        </Col>
        <Col xs={7}>
          <Map  countries={data}/>
        </Col>
        <Col>
          <CustomizationContainer/>
        </Col>
      </Row>
    </div>
  );
}

export default App;
