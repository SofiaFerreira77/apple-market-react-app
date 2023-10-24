import './App.css'
import Header from "./components/shared/Header";
import Refinements from "./components/ProductRefinements";
import List from "./components/ProductList";
import Footer from './components/shared/Footer';

export default function App() {
  const developer = { 
    label: 'Developed by:', 
    name: 'Sofia Ferreira',
    link: 'https://github.com/SofiaFerreira77/beer-collection-case' 
  }

  return (
    <div className='App'>
      <Header />
      <Refinements />
      <List />
      <Footer developer={developer} />
    </div>
  );
}
