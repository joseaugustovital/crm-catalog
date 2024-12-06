import { useState } from 'react';

interface CompanyFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const CompanyForm = ({ onClose, onSubmit }: CompanyFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    size: '',
    website: '',
    status: 'lead',
    revenue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background-card rounded-xl shadow-lg w-full max-w-lg mx-4">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-semibold text-text-primary">Nova Empresa</h2>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                Nome da Empresa
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                placeholder="Digite o nome da empresa"
              />
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-text-secondary mb-2">
                Setor
              </label>
              <select
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
              >
                <option value="">Selecione um setor</option>
                <option value="Tecnologia">Tecnologia</option>
                <option value="Manufatura">Manufatura</option>
                <option value="Varejo">Varejo</option>
                <option value="Serviços">Serviços</option>
                <option value="Saúde">Saúde</option>
                <option value="Educação">Educação</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="size" className="block text-sm font-medium text-text-secondary mb-2">
                Tamanho
              </label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
              >
                <option value="">Selecione o tamanho</option>
                <option value="1-10">1-10 funcionários</option>
                <option value="11-50">11-50 funcionários</option>
                <option value="50-100">50-100 funcionários</option>
                <option value="100-500">100-500 funcionários</option>
                <option value="500+">500+ funcionários</option>
              </select>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-text-secondary mb-2">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                required
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                placeholder="www.exemplo.com.br"
              />
            </div>

            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-text-secondary mb-2">
                Faturamento Anual
              </label>
              <select
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleChange}
                required
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
              >
                <option value="">Selecione o faturamento</option>
                <option value="Até 1M">Até R$ 1M</option>
                <option value="1M - 5M">R$ 1M - R$ 5M</option>
                <option value="5M - 10M">R$ 5M - R$ 10M</option>
                <option value="10M - 50M">R$ 10M - R$ 50M</option>
                <option value="50M+">R$ 50M+</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-text-secondary mb-2">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
              >
                <option value="lead">Prospect</option>
                <option value="active">Cliente</option>
                <option value="inactive">Inativo</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-text-primary hover:bg-background-elevated rounded-lg transition-colors duration-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-background-elevated text-text-primary rounded-lg hover:bg-background-card transition-colors duration-300"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyForm; 