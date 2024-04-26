import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from '../pages/Create';
import Delete from '../pages/UpdateDelete.jsx';
import Home from "../pages/Home.jsx"
import Layout from '../Components/Layout/Layout.jsx';
import Read from '../pages/Read.jsx';
const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/delete/:id" element={<Delete />} />
        { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;