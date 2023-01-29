import { hashPassword } from './auth';
import { connectToDatabase } from './db';

async function handler(
  req: {
    method: string;
    body: any;
  },
  res: any
) {
  if (req.method === 'POST') {
    const data = req.body;
    const { email, password } = data;

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          'Invalid input - password should also be at least 7 characters long.',
      });
      return;
    }
    const client = await connectToDatabase();

    const db = client.db();

    const hashedPassword = await hashPassword(password);

    const result = await db
      .collection('login')
      .insertOne({ email: email, password: hashedPassword });

    res.status(201).json({ message: 'Created user!' });
  }
}

export default handler;
