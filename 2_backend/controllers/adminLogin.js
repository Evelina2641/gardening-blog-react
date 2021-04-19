const adminLogin = (req, res) => {
  let username = 'evelina';
  let password = 'labas';

  if (username === req.body.username && password === req.body.password) {
    res.send({ authenticated: true });
  } else {
    res.send({ authenticated: false });
  }
};

module.exports = adminLogin;
