import { existsSync } from 'fs';
import { resolve } from 'path';

//fn below retruns the absolute path to the env file based on 
// the NODE_ENV. if NODE_ENV is ont set, try get the absolute path of the dev.env file.

export function getEnvPath(dest: string): string {
    const env: string | undefined = process.env.NODE_ENV;
    const fallback: string = resolve(`${dest}/.env`);
    const filename: string = env ? `${env}.env` : 'development.env';
    let filePath: string = resolve(`${dest}/${filename}`);

    if(!existsSync(filePath)) {
        filePath = fallback;
    }

    return filePath;
}