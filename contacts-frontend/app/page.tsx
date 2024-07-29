import ContactList from '../components/ContactList';
import '../app/globals.css'; // Importowanie globalnych stylów

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <h1>Contact List</h1>
      <ContactList />
    </div>
  );
};

export default HomePage;
