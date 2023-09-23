const http = require('http');
const app = require('./src/app'); // Import the Express app
let env = require('dotenv')
env.config()
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
