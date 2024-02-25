import sqlite3 from 'sqlite3';

export function createDatabase() {
    let db = new sqlite3.Database('./db.sqlite', (err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Connected to the SQLite database.');
        }
    });
    return db;
};

export function closeDatabase(db) {
    db.close((err) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log('Database connection closed.');
        }
    });
};
