import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors()); // Permite requisições de qualquer origem

app.get('/api/cnpj/:cnpj', async (req, res) => {
  try {
    const { cnpj } = req.params;
    const { data } = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    res.json(data);
  } catch (e) {
    res.status(e.response?.status || 500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Proxy rodando na porta ${PORT}`));
