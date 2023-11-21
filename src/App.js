import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import Addtask from './task/Addtask';
import Listtask from './task/Listtask';

function App() {
  return (
    <div className="App">
     <Addtask/>
     <Listtask/>
    </div>
  );
}

export default App;
