import { useState } from 'react';

interface CustomerFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const CustomerForm = ({ onClose, onSubmit }: CustomerFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    document: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    status: 'active',
    type: 'pf',
    segment: 'varejo',
    lastPurchase: new Date().toISOString().split('T')[0],
    totalPurchases: 0,
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

  const states = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-background-card rounded-xl shadow-lg w-full max-w-3xl mx-4">
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-semibold text-text-primary">Novo Cliente</h2>
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
            {/* Informações Básicas */}
            <div className="col-span-2">
              <h3 className="text-sm font-medium text-text-secondary mb-4">Informações Básicas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                    placeholder="Nome do cliente ou empresa"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-text-secondary mb-2">
                    Tipo
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                  >
                    <option value="pf">Pessoa Física</option>
                    <option value="pj">Pessoa Jurídica</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="document" className="block text-sm font-medium text-text-secondary mb-2">
                    {formData.type === 'pf' ? 'CPF' : 'CNPJ'}
                  </label>
                  <input
                    type="text"
                    id="document"
                    name="document"
                    value={formData.document}
                    onChange={handleChange}
                    required
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                    placeholder={formData.type === 'pf' ? '000.000.000-00' : '00.000.000/0000-00'}
                  />
                </div>
              </div>
            </div>

            {/* Contato */}
            <div className="col-span-2">
              <h3 className="text-sm font-medium text-text-secondary mb-4">Contato</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                    placeholder="email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="col-span-2">
              <h3 className="text-sm font-medium text-text-secondary mb-4">Endereço</h3>
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6">
                  <label htmlFor="address" className="block text-sm font-medium text-text-secondary mb-2">
                    Endereço
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                    placeholder="Rua, número, complemento"
                  />
                </div>

                <div className="col-span-4">
                  <label htmlFor="city" className="block text-sm font-medium text-text-secondary mb-2">
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                    placeholder="Nome da cidade"
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium text-text-secondary mb-2">
                    Estado
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                  >
                    <option value="">Selecione</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="col-span-2">
              <h3 className="text-sm font-medium text-text-secondary mb-4">Informações Adicionais</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="segment" className="block text-sm font-medium text-text-secondary mb-2">
                    Segmento
                  </label>
                  <select
                    id="segment"
                    name="segment"
                    value={formData.segment}
                    onChange={handleChange}
                    className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                  >
                    <option value="varejo">Varejo</option>
                    <option value="corporativo">Corporativo</option>
                    <option value="industrial">Industrial</option>
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
                    <option value="active">Ativo</option>
                    <option value="inactive">Inativo</option>
                  </select>
                </div>
              </div>
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

export default CustomerForm; 