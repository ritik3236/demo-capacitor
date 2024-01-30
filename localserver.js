const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    let requestData = {
        method: req.method,
        headers: req.headers,
        query: req.url.split('?')[1], // Extracting query parameters for GET requests
    };

    if (req.method === 'POST') {
        // Handling POST requests
        let data = '';

        req.on('data', (chunk) => {
            data += chunk;
        });

        req.on('end', () => {
            try {
                requestData.body = JSON.parse(data);

                console.log('Received API call:', requestData);

                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(requestData));
            } catch (error) {
                console.error('Error parsing JSON:', error.message);
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({error: 'Invalid JSON input'}));
            }
        });
    } else {
        // Handling other HTTP methods (including GET)
        console.log('Received API call:', requestData);

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(requestData));
    }
});

server.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
