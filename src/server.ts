import app from './app'
import dotenv from 'dotenv';

dotenv.config();

const  port = process.env.PORT || 3000
app.listen(port, () => console.log(`server is up and running in port ${port}`));
