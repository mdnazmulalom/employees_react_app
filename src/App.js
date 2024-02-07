import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Employee from './components/Employee';

function App() {
  const [employees, setEmployees] = useState([])

  const loadEmployees = async () => {
    //load JSON data
    const response = await axios.get('http://localhost:3002/employees')
    console.log(response)
    setEmployees(response.data) // [{}.{},.....]
   }

  useEffect( () => {
    loadEmployees()
  }, [])// runn only one time


  return (
    <div className="App">
    {
      employees.map(employee =>{
        return  <Employee employee={employee}/>

      })
    }
    </div>
  );
}

export default App;
