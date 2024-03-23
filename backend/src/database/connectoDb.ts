import { Client } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'portfolio',
  user: 'postgres',
  password: '12345'
});

export const connectToDb = ()=> client.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('connected to db successfully');
});
