import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes desde 'prop-types'

// Define un componente funcional llamado Layout que recibe children como prop.

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>

        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

// Especifica la validación de las props utilizando PropTypes

Layout.propTypes = {
  children: PropTypes.node.isRequired // Asegura que children sea un nodo y sea requerido.
};

export default Layout;
