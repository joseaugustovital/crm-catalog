import { useState } from 'react';
import Layout from '@/components/Layout/Layout';

const PipelinePage = () => {
  const [stages] = useState([
    {
      id: 1,
      name: 'Prospecção',
      deals: [
        { id: 1, title: 'Software ERP', company: 'Empresa ABC', value: 50000, probability: 20 },
        { id: 2, title: 'Consultoria', company: 'Empresa XYZ', value: 30000, probability: 30 },
      ],
    },
    {
      id: 2,
      name: 'Qualificação',
      deals: [
        { id: 3, title: 'Integração API', company: 'Tech Corp', value: 25000, probability: 45 },
      ],
    },
    {
      id: 3,
      name: 'Proposta',
      deals: [
        { id: 4, title: 'Desenvolvimento Web', company: 'Digital Inc', value: 75000, probability: 60 },
      ],
    },
    {
      id: 4,
      name: 'Negociação',
      deals: [
        { id: 5, title: 'Suporte Técnico', company: 'Service Ltd', value: 15000, probability: 80 },
      ],
    },
    {
      id: 5,
      name: 'Fechamento',
      deals: [
        { id: 6, title: 'Manutenção', company: 'Industry SA', value: 45000, probability: 95 },
      ],
    },
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return 'bg-status-success bg-opacity-10 text-status-success';
    if (probability >= 50) return 'bg-background-elevated text-text-primary';
    return 'bg-status-error bg-opacity-10 text-status-error';
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-text-primary">Pipeline de Vendas</h1>
          <button className="px-4 py-2 bg-background-elevated text-text-primary rounded-lg hover:bg-background-card transition-colors duration-300">
            Nova Oportunidade
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4 h-[calc(100vh-12rem)] overflow-hidden">
          {stages.map((stage) => (
            <div key={stage.id} className="flex flex-col h-full">
              <div className="bg-background-card rounded-t-xl p-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-text-primary">{stage.name}</h3>
                  <span className="text-sm text-text-secondary">{stage.deals.length}</span>
                </div>
              </div>
              
              <div className="flex-1 bg-background-card rounded-b-xl overflow-y-auto">
                <div className="p-2 space-y-2">
                  {stage.deals.map((deal) => (
                    <div
                      key={deal.id}
                      className="bg-background p-4 rounded-lg border border-border hover:border-text-secondary transition-colors duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-text-primary">{deal.title}</h4>
                          <p className="text-sm text-text-secondary">{deal.company}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${getProbabilityColor(deal.probability)}`}>
                          {deal.probability}%
                        </span>
                      </div>
                      <div className="text-sm font-medium text-text-primary">
                        {formatCurrency(deal.value)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PipelinePage; 