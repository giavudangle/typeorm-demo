import "reflect-metadata";
import { createConnection, getConnection, getManager, getRepository } from "typeorm";
import { Coder } from "./entity/Coder";
import { Customer } from "./entity/Customer";
import { Information } from "./entity/Information";
import { Project } from "./entity/Project";
import { Student } from "./entity/Student";
import { User } from "./entity/User";

createConnection().then(async connection => {
	// get a connection and create a new query runner 
	const queryRunner = connection.createQueryRunner();
	// establish real database connection using our new query runner 
	await queryRunner.connect();
	// now we can execute any queries on a query runner,
	await queryRunner.query("SELECT * FROM customer");
	// Now, start transaction using the below statement −
	await queryRunner.startTransaction();
	// Then, commit and rollback the transaction using the below statement,
	// If there is any error, it is handled by catch(),


	try {
		await queryRunner.commitTransaction();
	} catch (err) {
		console.log(err)
		// since we have errors lets rollback changes we made await queryRunner.rollbackTransaction(); 
	}
	// Now, release the queryRunner as below −
	finally { 
		console.log('Release')
		// you need to release query runner which is manually created: await queryRunner.release(); 
 }






}).catch(error => console.log(error));
