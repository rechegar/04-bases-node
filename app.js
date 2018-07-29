const { argv } = require('./config/yargs');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'list':

        const { listTable } = require('./multiply/multiply');
        listTable(argv.base, argv.limit)
            .then(() => console.log(`List end.`.green))
            .catch(err => console.log(err));

        break;
    case 'create':

        const { createTable } = require('./multiply/multiply');
        createTable(argv.base, argv.limit)
            .then(filename => console.log(`File created: ${ filename }`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Unknown command.');
        return;
}