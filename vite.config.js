import { defineConfig } from 'vite';
import fs from 'fs';

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('/path/to/server.key'),
      cert: fs.readFileSync('/path/to/server.crt'),
    },
  },
});
