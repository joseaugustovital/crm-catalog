export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

// Simulando um banco de dados de usuários
export const users: User[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Usuário',
    email: 'user@user.com',
    password: 'user123',
    role: 'user',
  },
]; 