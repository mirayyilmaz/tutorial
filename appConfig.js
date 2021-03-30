var developmentDatabase = { 
    postgres: {
    host: 'localhost',
    port: 5432,
    database: 'denos56fuitupn',
    user: 'tvujxpcrjhnqcu',
    password: '1878d650be5525b6c77525615086deb0c2aa46024d8560cd0e625da4f5c155c2'
    }
    }
    
    var connectionString = "postgres://tvujxpcrjhnqcu:1878d650be5525b6c77525615086deb0c2aa46024d8560cd0e625da4f5c155c2@ec2-54-155-35-88.eu-west-1.compute.amazonaws.com:5432/denos56fuitupn";
    if (process.env.NODE_ENV == 'production') {
        //Production mode
        if (process.env.DATABASE_URL) {
        developmentDatabase =
        parseConnectionString(process.env.DATABASE_URL);
        } else {
        console.log("process.env.DATABASE_URL empty, connectionStringvariable used");
        developmentDatabase = parseConnectionString(connectionString);
        }
        }else{
        //Development mode
        developmentDatabase = parseConnectionString(connectionString);
        }
        function parseConnectionString(connectionString) {
        if (connectionString) {
        var myRegexp = /(\w+):(\w+)@(.+):(\w+)\/(\w+)/g;
        var match = myRegexp.exec(connectionString);
        if (match.length == 6) {
        developmentDatabase.postgres.user = match[1];
        developmentDatabase.postgres.password = match[2];
        developmentDatabase.postgres.host = match[3];
        developmentDatabase.postgres.port = Number(match[4]);
        developmentDatabase.postgres.database = match[5];
        developmentDatabase.postgres.ssl = true;
        return developmentDatabase;
        }
        }
        console.log("connectionString cannot be parsed");
        return null;
        }
        module.exports = {
        hostname: "http://localhost",
        port: 5656,
        database: {
        postgres: developmentDatabase.postgres
        }
        }