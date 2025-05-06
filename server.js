const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>${process.env.APP_NAME || 'Sample App'}</h1>
    <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
    <p>Version: ${process.env.APP_VERSION || '1.0.0'}</p>
    <p>Container ID: ${process.env.HOSTNAME || 'unknown'}</p>
    <p>Deployed via AWS CodePipeline</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
