import { BrowserRouter } from 'react-router-dom'
import Content from "./components/Content";
import Header from "./components/shared/Header";
import Footer from './components/shared/Footer';

export default function App() {
  const developer = {
    label: 'Developed by:',
    name: 'Sofia Ferreira',
    link: 'https://github.com/SofiaFerreira77/beer-collection-case'
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Content />
        <Footer developer={developer} />
      </div>
    </BrowserRouter>
  );
}
