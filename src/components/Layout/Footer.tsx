const Footer = () => {
  return (
    <footer className="border-t border-gray-700 bg-gray-800 p-4">
      <div className="text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} CRM. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 