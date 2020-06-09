//connecting to prisma db,gives us the ability to query it with JS
const { Prisma } = require('prisma-binding')

const db = new Prisma({
    // needs to know what are types, and emitations are
    typeDefs:'src/generated/prisma.graphql',
    //acces to prisma db
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.secret.PRISMA_SECRET,
    debug: false
});

module.exports = db;
