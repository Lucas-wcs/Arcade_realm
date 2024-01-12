/* eslint-disable camelcase */
const argon2 = require("argon2");

const tables = require("../tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.utilisateur.getByPseudo(req.body.pseudo);
    if (!user[0]) {
      res.sendStatus(400).send("Incorrect pseudo or password");
      return;
    }

    const verified = await argon2.verify(
      user[0].hashed_password,
      req.body.password
    );

    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      delete user[0].hashed_password;

      res.status(200).json(user[0]);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const signin = async (req, res, next) => {
  try {
    const {
      pseudo,
      email,
      hashed_password,
      image,
      admin,
      points,
      tickets,
      podium,
    } = req.body;

    const result = await tables.utilisateur.create({
      pseudo,
      email,
      hashed_password,
      image,
      admin,
      points,
      podium,
      tickets,
    });
    if (result.insertId) {
      const newUser = {
        id: result.insertId,
        pseudo,
        email,
        hashed_password,
        image,
        admin,
        points,
        podium,
        tickets,
      };
      res.status(201).json(newUser);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
  signin,
};
