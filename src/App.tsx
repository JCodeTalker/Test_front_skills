import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap';
import './App.css';
import { Jumbotron } from './components/Jumbotron';
import { Header } from './components/Header';
import Card from './components/Card';
import Pricing from './components/Pricing';
import { Form } from './components/Form';
import { ContactUs } from './components/ContactUs';

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <div className="container" style={{ width: "70vw" }}>
        <div className="row">
          <div className="col-md-4">
            <Card title="Peace of Mind" paragraph="the quick fox jumps over the 
lazy dog" />
          </div>
          <div className="col-md-4">
            <Card title="Set For Life" paragraph="the quick fox jumps over the 
lazy dog"/>
          </div>
          <div className="col-md-4">
            <Card title="100% Satisfaction" paragraph="the quick fox jumps over the 
lazy dog"/>
          </div>
        </div>
      </div>
      <Pricing />
      <Form />
      <ContactUs />
    </>
  );
}

export default App;
