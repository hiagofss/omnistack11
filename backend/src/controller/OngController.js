const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

class OngController {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    res.status(200).json({ ongs });
  }

  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    res.status(200).json({ id });
  }
}

module.exports = new OngController();
