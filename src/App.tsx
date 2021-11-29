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
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Jumbotron />
      <Pricing />
      <Form />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
