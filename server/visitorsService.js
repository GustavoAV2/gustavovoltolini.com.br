import { createDatabase, closeDatabase } from './data.js';

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

        db.run(`INSERT INTO visitor(name, ip, message) VALUES(?, ?, ?);`, [visitor.name, visitor.ip, visitor.message], (err) => {
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
