import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // FIX: 删除 base 配置，Vercel 部署使用默认根路径
  build: {
    outDir: 'dist',
  },
  // 即使这里定义了 define，也不要依赖它来注入 key，使用 import.meta.env 更标准
  define: {
    'process.env': {} 
  }
});