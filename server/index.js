import express from 'express'
import cors from 'cors'
import path from 'path'
import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT || 3000;

// Midleware global
app.use(express.json());
app.use(cors());

// Ruta global
app.get('/server', (req,res) => res.send('Server is online...'));

// Servir archivos estaticos
const __dirname = path.resolve();
/* console.log(__dirname); */
const distRoute = path.join( __dirname, '../client/dist');
/* console.log(distRoute); */
app.use(express.static(path.join( __dirname, '../client/dist')));

app.get('/', (req,res) => {
    res.sendFile(path.join( __dirname, '../client/dist/index.html'));
});

//Listen
app.listen(PORT, () => console.log('Server is listening in port:',PORT));