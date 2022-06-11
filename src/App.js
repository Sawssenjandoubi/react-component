import './App.css';
import Profil from './components/profil/profil';
import FullName from './components/fullName/fullName';
import Adresse from './components/addresse/adresse';


function App() {
  return (
    <div className="App">
     
      <Profil/>
      <FullName/>
      <Adresse/>
    </div>
  );
}

export default App;
