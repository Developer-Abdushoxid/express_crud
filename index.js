import express from 'express';
import bodyParser from 'body-parser'
import userRoutes from './component/users.js'

const app = express();


app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) =>{ res.send('HELLO FROM HOMEPAGE')})



const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));