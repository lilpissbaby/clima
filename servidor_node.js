import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware per fer anar fitxers estàtics, com és el cas
app.use(express.static(path.join(__dirname)));

// Habilitar CORS 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/xml', async (req, res) => {
        const response = await fetch('https://static-m.meteo.cat/content/opendata/ctermini_comarcal.xml');
        const xml = await response.text();
        res.set('Content-Type', 'application/xml');
        res.send(xml);
});

app.listen(PORT, () => {
    console.log(`Servidor escoltant en http://localhost:${PORT}`);
    console.log(`Accedir al client en http://localhost:${PORT}/index.html`);
});