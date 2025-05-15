import { PoolConnection, QueryError } from "mysql2";
import { Product } from "../../model/product";
import { connection } from "./db";

const selectAll = ():Promise<Product[]> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err: QueryError, conn: PoolConnection) => {
            conn.query(
                "SELECT * FROM product", 
                (err, resultSet: Product[]) => {
                    conn.release();
                    if(err){
                        return reject(err);
                    }
                    return resolve(resultSet);
                }
            );
        });
    });
}