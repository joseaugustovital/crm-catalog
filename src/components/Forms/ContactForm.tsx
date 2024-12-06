import { useState } from 'react';

interface ContactFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const ContactForm = ({ onClose, onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    status: 'lead'
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
          <h2 className="text-xl font-semibold text-text-primary">Novo Contato</h2>
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
                placeholder="Digite o nome do contato"
              />
            </div>

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

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                placeholder="Nome da empresa"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-text-secondary mb-2">
                Cargo
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full bg-background text-text-primary rounded-lg px-4 py-2.5 border border-border focus:outline-none focus:border-text-primary transition-colors duration-300"
                placeholder="Cargo na empresa"
              />
            </div>

            <div className="col-span-2">
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
                <option value="lead">Lead</option>
                <option value="active">Ativo</option>
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

export default ContactForm; 