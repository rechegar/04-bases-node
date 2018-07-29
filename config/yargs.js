const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('list', 'Print multiply table in console', options)
    .command('create', 'Create file with a multiply table', options)
    .help()
    .argv;

module.exports = { argv }

// use: node app list --base 5 --limit 4