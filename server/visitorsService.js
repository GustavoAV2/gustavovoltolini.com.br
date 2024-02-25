import { createDatabase, closeDatabase } from './data.js';
import { encryptData, decryptData } from './cryptoFunctions.js';


export function createVisitorTable() {
    return new Promise((resolve, reject) => {
        let db = createDatabase();
        db.run(`CREATE TABLE IF NOT EXISTS visitor (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT,
            contact TEXT
        );`, (err) => {
            closeDatabase(db);
            if (err) {
                console.error(err.message);
                reject(err);
            } else {
                console.log('Visitor table created successfully.');
                resolve();
            }
        });
    });
}

export function getVisitors() {
    return new Promise((resolve, reject) => {
        let db = createDatabase();

        db.all(`SELECT * FROM visitor;`, (err, rows) => {
            closeDatabase(db);
            if (err) {
                console.error(err.message);
                reject(err);
            } else {
                console.log('Visitors obtained successfully.');
                resolve(rows);
            }
        });
    });
}

export function postVisitor(visitor) {
    return new Promise((resolve, reject) => {
        let db = createDatabase();

        db.run(`INSERT INTO visitor(name, description, contact) VALUES(?, ?, ?);`, 
            [visitor.name, visitor.description, visitor.contact], 
            (err) => {
                closeDatabase(db);
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    console.log('Visitor added successfully.');
                    resolve();
                }
        });
    });
}
