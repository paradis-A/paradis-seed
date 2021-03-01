# Connection

To connect to an SQLite testing database, without having to make one yourself, use:

```javascript
R.setup();
```

This code creates a test database in your project folder.


## MariaDB

MariaDB (formerly known as MySQL) is the most popular database among web developers. Use MariaDB or MySQL for light web development. To connect to a MySQL database or a MariaDB database:

```javascript
R.setup('mysql', {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'mydatabase'
});
```

It is ready to be used. You do not need to use await / callback before query.

## SQLite

SQLite is file based database, ideal for embedded applications, prototyping, small (and smart) applications, small websites (not too much traffic) and data analysis. To connect to an SQLite database:

```javascript
R.setup('sqlite', {
    filename: './dbfile.db'
});
```


## Closing

To disconnect use:

```javascript
await R.close();
```

This will close the database connection.

## Connection Pool

By default, RedBeanNode is using pool approach. You can pass your the connection pool setting object. 

Checkout the [tarn.js](https://github.com/vincit/tarn.js) library for more information.

Default value for MySQL: 
```javascript
let pool = {
    min: 2,
    max: 10,
    idleTimeoutMillis: 30000,
}
```

Default value for SQLite: 
```javascript
let pool = {
    min: 1,
    max: 1,
    idleTimeoutMillis: 30000,
}
```

> Using **ONE** connection is suggested for SQLite. Otherwise, you may face query errors like "SQLITE_BUSY: database is locked".

Setup with pool setting object

```javascript
R.setup('mysql', {
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'mydatabase'
}, pool);
```




## Advance Setup

You can also pass a knex object to R.setup() to setup the connection for RedBeanNode.  

```javascript
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});

R.setup(knex);
```

Please read https://knexjs.org/#Installation for more details.

## Other Databases?

As RedBeanNode is built on top of knex.js. knex.js is originally supporting PostgreSQL, Amazon Redshift, MySQL, MariaDB, SQLite3 and MS SQL.

However, in this stage, as I personally is only familiar with MariaDB and SQLite, so I only focus on these two databases. You may give it a try on other databases, but it could be unstable currently.
