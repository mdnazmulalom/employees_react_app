import { MdEmail, MdPhone } from "react-icons/md";
import '../App.css';


export default function Employee({employee}){
    return(
        <div className="Employee">
            <img src={employee.image} alt = {employee.firstName}/>
            <div>
                <p>{employee.lastName}</p>
                <p>{employee.title}</p>
                <p>{employee.department}</p>

                <p><MdEmail/>{employee.email}</p>
                <p><MdPhone/>{employee.phone}</p>


            </div>
        </div>
    )
}