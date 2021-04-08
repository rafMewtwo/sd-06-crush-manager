const isAge = (req, res, next) => {
  try {
    const ageBody = req.body.age;
    if (!ageBody) {
      throw new Error('O campo age é obrigatorio');
      // return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (ageBody < 18) {
      return res.status(400).json({ message: 'O crush deve ser maior de idade' });
    }
    next();
  } catch(error) {
    next(error);
  }
};

module.exports = {
  isAge,
};
