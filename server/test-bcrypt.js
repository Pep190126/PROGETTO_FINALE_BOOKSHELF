const bcrypt = require('bcryptjs');

const password = 'password123';
const hash = '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lHHi';

bcrypt.compare(password, hash).then(risultato => {
  console.log('Risultato:', risultato);
});