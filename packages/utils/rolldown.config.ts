import { defineConfig } from "rolldown"

//生成d.ts文件
export default defineConfig({
    input: './src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'umd',
            name: 'lwhUtils',
        },
        {
            dir: 'dist/cjs',
            format: 'cjs',
        },
        {
            dir: 'dist/esm',
            format: 'esm',
        }
    ]
})