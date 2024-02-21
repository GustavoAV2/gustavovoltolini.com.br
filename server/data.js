import sqlite3 from 'sqlite3';

export function createDatabase(){
    let db = new sqlite3.Database('./db.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
    });
    return db;
};

export function closeDatabase(db){
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('Close the database connection.');
      });
};


