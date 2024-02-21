async function main() {
    try {
        const visitors = await getVisitors();
        console.log('Visitors:', visitors);
        
        await postVisitor({ name: 'New Visitor', ip: '192.168.0.4', message: 'Hello!' });
        console.log('Visitor added successfully.');

        const updatedVisitors = await getVisitors();
        console.log('Updated visitors:', updatedVisitors);
    } catch (err) {
        console.error('Error:', err);
    }
}

main();
