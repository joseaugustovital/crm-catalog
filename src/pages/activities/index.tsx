import { useState } from 'react';
import Layout from '@/components/Layout/Layout';

const ActivitiesPage = () => {
  const [activities] = useState([
    {
      id: 1,
      type: 'meeting',
      title: 'Reunião de Apresentação',
      contact: 'João Silva',
      company: 'Empresa ABC',
      date: '2024-01-15T14:00:00',
      priority: 'high',
      status: 'pending',
    },
    {
      id: 2,
      type: 'call',
      title: 'Follow-up Proposta',
      contact: 'Maria Santos',
      company: 'Empresa XYZ',
      date: '2024-01-16T10:00:00',
      priority: 'medium',
      status: 'completed',
    },
    {
      id: 3,
      type: 'email',
      title: 'Envio de Proposta',
      contact: 'Pedro Costa',
      company: 'Tech Corp',
      date: '2024-01-16T15:30:00',
      priority: 'high',
      status: 'pending',
    },
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'meeting':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'call':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'email':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        );
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-status-error bg-opacity-10 text-status-error';
      case 'medium':
        return 'bg-background-elevated text-text-primary';
      case 'low':
        return 'bg-status-success bg-opacity-10 text-status-success';
      default:
        return 'bg-background-elevated text-text-primary';
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-text-primary">Atividades</h1>
          <button className="px-4 py-2 bg-background-elevated text-text-primary rounded-lg hover:bg-background-card transition-colors duration-300">
            Nova Atividade
          </button>
        </div>

        <div className="bg-background-card shadow-card rounded-xl">
          <div className="p-6 border-b border-border">
            <div className="flex flex-wrap gap-4">
              <select className="bg-background text-text-primary text-sm rounded-lg px-4 py-2 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300">
                <option value="">Todos os tipos</option>
                <option value="meeting">Reunião</option>
                <option value="call">Ligação</option>
                <option value="email">Email</option>
              </select>

              <select className="bg-background text-text-primary text-sm rounded-lg px-4 py-2 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300">
                <option value="">Todas as prioridades</option>
                <option value="high">Alta</option>
                <option value="medium">Média</option>
                <option value="low">Baixa</option>
              </select>

              <input
                type="date"
                className="bg-background text-text-primary text-sm rounded-lg px-4 py-2 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
              />
            </div>
          </div>

          <div className="divide-y divide-border">
            {activities.map((activity) => (
              <div key={activity.id} className="p-4 hover:bg-background-elevated transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-text-secondary">
                      {getTypeIcon(activity.type)}
                    </div>
                    <div>
                      <h3 className="font-medium text-text-primary">{activity.title}</h3>
                      <p className="text-sm text-text-secondary">
                        {activity.contact} - {activity.company}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {formatDate(activity.date)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(activity.priority)}`}>
                      {activity.priority === 'high' ? 'Alta' : activity.priority === 'medium' ? 'Média' : 'Baixa'}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-1.5 text-text-secondary hover:text-text-primary transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-1.5 text-text-secondary hover:text-status-error transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ActivitiesPage; 