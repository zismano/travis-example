import dotenv from 'dotenv';

import app from './app';

dotenv.config();

const PORT = process.env.PORT;
//const PORT = 3000;

app.listen(PORT);
console.log(`Listening on ${PORT}`);
