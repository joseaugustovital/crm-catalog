import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import ContactForm from '@/components/Forms/ContactForm';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  status: string;
}

const ContactsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: 'João Silva',
      email: 'joao@exemplo.com',
      phone: '(11) 99999-9999',
      company: 'Empresa ABC',
      position: 'Gerente',
      status: 'active',
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria@exemplo.com',
      phone: '(11) 98888-8888',
      company: 'Empresa XYZ',
      position: 'Diretora',
      status: 'lead',
    },
  ]);

  const handleSubmit = (data: Omit<Contact, 'id'>) => {
    const newContact = {
      ...data,
      id: contacts.length + 1,
    };
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-status-success bg-opacity-10 text-status-success';
      case 'inactive':
        return 'bg-status-error bg-opacity-10 text-status-error';
      case 'lead':
        return 'bg-background-elevated text-text-primary';
      default:
        return 'bg-background-elevated text-text-primary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'inactive':
        return 'Inativo';
      case 'lead':
        return 'Lead';
      default:
        return status;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-text-primary">Contatos</h1>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-background-elevated text-text-primary rounded-lg hover:bg-background-card transition-colors duration-300"
          >
            Novo Contato
          </button>
        </div>
        
        <div className="bg-background-card shadow-card rounded-xl">
          <div className="p-6 border-b border-border">
            <div className="flex justify-between items-center">
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Buscar contatos..."
                  className="w-full bg-background text-text-primary placeholder-text-muted text-sm rounded-lg pl-10 pr-4 py-2 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                />
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-background-elevated rounded-lg transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </button>
                <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-background-elevated rounded-lg transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Nome
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Email
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Telefone
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Empresa
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Status
                  </th>
                  <th className="text-right text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {contacts.map((contact) => (
                  <tr key={contact.id} className="hover:bg-background-elevated transition-colors duration-300">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-background-elevated flex items-center justify-center text-text-primary">
                          {contact.name.charAt(0)}
                        </div>
                        <span className="ml-3 text-text-primary">{contact.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {contact.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {contact.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {contact.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(contact.status)}`}>
                        {getStatusText(contact.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm space-x-2">
                      <button className="text-text-secondary hover:text-text-primary transition-colors duration-300">
                        Editar
                      </button>
                      <button className="text-text-secondary hover:text-status-error transition-colors duration-300">
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showForm && (
        <ContactForm
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </Layout>
  );
};

export default ContactsPage; 