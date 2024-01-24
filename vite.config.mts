import { resolve } from 'path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import {
    compilerOptions,
} from './tsconfig.json';

const alias = Object.entries(compilerOptions.paths)
    .reduce((acc,[key, [value]]) => {
        const aliasKey = key.substring(0, key.length - 2);
        const path = value.substring(0, value.length - 2);
        return {
            ...acc,
            [aliasKey]: resolve(__dirname, path),
        };
    }, {});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        legacy(),
    ],
    resolve: {
        alias,
    },
});
