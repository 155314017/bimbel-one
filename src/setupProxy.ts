import { Application } from 'express'; // Import tipe dari Express
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app: Application): void {
  app.use(
    '/api', // Path proxy yang digunakan di frontend
    createProxyMiddleware({
      target: 'https://api.dnabisa.com', // API endpoint target
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Menghilangkan /api dari path yang diteruskan
      },
    })
  );
}
