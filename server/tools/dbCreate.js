import { createVisitorTable, getVisitors, postVisitor } from '../visitorsService.js'

async function dbTest() {
    try {
        // Verifica se a tabela já existe
        let visitors = await getVisitors();
        
        // Adiciona um novo visitante
        await postVisitor({ name: 'New Visitor', contact: 'email@gmail.com', message: 'Hello!' });
        
        // Obtém os visitantes atualizados
        const updatedVisitors = await getVisitors();
    } catch (err) {
        console.error('Error:', err);
        // Se o erro for relacionado à tabela não existir, cria a tabela e tenta novamente
        if (err.message.includes('no such table: visitor')) {
            console.log('Table Visitor not found. Creating now...');
            await createVisitorTable();
            // Agora que a tabela foi criada, tenta buscar os visitantes novamente
            let visitors = await getVisitors();
        }
    }
}

dbTest();
