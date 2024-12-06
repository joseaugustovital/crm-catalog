import { NextApiRequest, NextApiResponse } from 'next';
import { users } from '@/utils/users';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Recebendo requisição de login:', req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      console.log('Email ou senha não fornecidos');
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    // Encontra o usuário
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    console.log('Usuário encontrado:', user ? 'Sim' : 'Não');

    if (!user) {
      return res.status(401).json({ message: 'Email ou senha inválidos' });
    }

    // Gera o token JWT
    const token = jwt.sign(
      { 
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Remove a senha antes de enviar os dados do usuário
    const { password: _, ...userWithoutPassword } = user;

    console.log('Login bem-sucedido para:', email);

    res.status(200).json({
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
} 