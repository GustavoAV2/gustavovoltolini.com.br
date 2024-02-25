import { createVisitorTable, getVisitors, postVisitor } from './visitorsService.js'

async function main() {
    try {
        const visitors = await getVisitors()
        .catch(() => {
            createVisitorTable();
            console.log('Table Visitor created.');
        });
        console.log('Visitors:', visitors);
        
        await postVisitor({ name: 'New Visitor', contact: 'email@gmail.com', message: 'Hello!' });
        console.log('Visitor added successfully.');

        const updatedVisitors = await getVisitors();
        console.log('Updated visitors:', updatedVisitors);
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
