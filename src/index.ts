import "reflect-metadata";
import {createConnection} from "typeorm";
import { Customer } from "./entity/Customer";
import { Information } from "./entity/Information";
import { Student } from "./entity/Student";
import {User} from "./entity/User";

createConnection().then(async connection => {
    const information = new Information(); 
    information.gender = "male"; 
    information.country = "vietnam" 
    await connection.manager.save(information);

    const customer = new Customer(); 
    customer.name = 'Daniel Dang'; 
    customer.information = information; 
    await connection.manager.save(customer);
    console.log("Success")
    

}).catch(error => console.log(error));
