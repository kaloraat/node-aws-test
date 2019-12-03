const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    res.json({
        data: 'This API is currently in the making..'
    });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
