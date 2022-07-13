
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';

function App() {

    
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer greeting= "Bienvenido a Nexus" > </ItemListContainer>
       
         
    </div>
  );
}

export default App;
