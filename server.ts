import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());
  app.use(express.static(path.resolve(__dirname, 'public')));

  // Store contact inquiries in-memory
  const contactInquiries: Array<{
    id: string;
    name: string;
    phone: string;
    email: string;
    service: string;
    message: string;
    createdAt: string;
  }> = [];

  // API endpoint for contact enquiries
  app.post('/api/contact', (req: Request, res: Response) => {
    const { name, phone, email, service, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const newInquiry = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: String(email).trim(),
      service: String(service || 'General Enquiry'),
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
    };

    contactInquiries.push(newInquiry);
    console.log(`[Hairgoddess Contact] New enquiry received from ${newInquiry.name} (${newInquiry.email}) for ${newInquiry.service}`);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out to Hairgoddess Beauty Home. We have received your message and will contact you promptly!',
      inquiryId: newInquiry.id,
    });
  });

  // Health check
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'Hairgoddess Beauty Home API' });
  });

  if (process.env.NODE_ENV === 'production') {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    // In dev, use Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Hairgoddess server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
