import { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import CustomerForm from '@/components/Forms/CustomerForm';

interface Customer {
  id: number;
  name: string;
  document: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  status: string;
  type: string;
  segment: string;
  lastPurchase: string;
  totalPurchases: number;
}

const CustomersPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: 'João Silva',
      document: '123.456.789-00',
      email: 'joao@email.com',
      phone: '(11) 99999-9999',
      address: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      status: 'active',
      type: 'pf',
      segment: 'varejo',
      lastPurchase: '2024-01-15',
      totalPurchases: 5420.50,
    },
    {
      id: 2,
      name: 'Empresa XYZ Ltda',
      document: '12.345.678/0001-90',
      email: 'contato@xyz.com',
      phone: '(11) 3333-3333',
      address: 'Av. Paulista, 1000',
      city: 'São Paulo',
      state: 'SP',
      status: 'inactive',
      type: 'pj',
      segment: 'corporativo',
      lastPurchase: '2023-12-20',
      totalPurchases: 15750.00,
    },
  ]);

  const handleSubmit = (data: Omit<Customer, 'id'>) => {
    const newCustomer = {
      ...data,
      id: customers.length + 1,
    };
    setCustomers([...customers, newCustomer]);
    setShowForm(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-status-success bg-opacity-10 text-status-success';
      case 'inactive':
        return 'bg-status-error bg-opacity-10 text-status-error';
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
      default:
        return status;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getTypeText = (type: string) => {
    return type === 'pf' ? 'Pessoa Física' : 'Pessoa Jurídica';
  };

  const getSegmentText = (segment: string) => {
    const segments = {
      varejo: 'Varejo',
      corporativo: 'Corporativo',
      industrial: 'Industrial',
    };
    return segments[segment as keyof typeof segments] || segment;
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-text-primary">Clientes</h1>
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-background-elevated text-text-primary rounded-lg hover:bg-background-card transition-colors duration-300"
          >
            Novo Cliente
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
                  placeholder="Buscar clientes..."
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
                    Cliente
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Tipo
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Segmento
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Última Compra
                  </th>
                  <th className="text-left text-xs font-medium text-text-secondary uppercase tracking-wider px-6 py-4">
                    Total em Compras
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
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-background-elevated transition-colors duration-300">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-background-elevated flex items-center justify-center text-text-primary">
                          {customer.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="text-text-primary">{customer.name}</div>
                          <div className="text-xs text-text-secondary">{customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {getTypeText(customer.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {getSegmentText(customer.segment)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {formatDate(customer.lastPurchase)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-text-secondary">
                      {formatCurrency(customer.totalPurchases)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                        {getStatusText(customer.status)}
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
        <CustomerForm
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </Layout>
  );
};

export default CustomersPage; 