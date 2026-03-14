const app = require('./app');
const db = require('./config/db');

const PORT = process.env.PORT || 4000;

// Test Database Connection
db.raw('SELECT 1')
  .then(() => {
    console.log('PostgreSQL database connected successfully via Knex.');
    
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err.message);
    process.exit(1);
  });
