import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../pages/Create';
import Delete from '../pages/Delete';
import Read from '../pages/Read';
import Layout from '../Components/Layout/Layout.jsx';
const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Read />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Delete" element={<Delete />} />
        { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;