import logo from './d20.png'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DisplayFormDataInTable from "./display-form-data-in-table/DisplayFormDataInTable";

function App() {

  return (

    <div class="App-header">
      <h1 className='display-3'><strong>Welcome to TCA-Initiative!</strong></h1>

      <p>An Inititiave Tracker for d20 Role-Playing</p>

      <img src={logo} className="App-logo" alt="logo" />
        
      <DisplayFormDataInTable />
    </div>
  );
}  
export default App;

