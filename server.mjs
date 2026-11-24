import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';

createServer(({ url }, res) =>
	createReadStream(join('./', (url == '/') ? 'index.html' : url))
		.on('open', function() { this.pipe(res); })
		.on('error', () => res.writeHead(404).end())
).listen(8080);
