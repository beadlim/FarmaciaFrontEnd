import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/ListaProdutos';
import FormularioProduto from './components/produtos/formularioProduto/FormularioProduto';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <div className='min-h-[80vh]'>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/temas" element={<ListaCategorias />} />
                        <Route path="/cadastroTema" element={<FormularioCategoria />} />
                        <Route path="/editarTCategoria/:id" element={<FormularioCategoria />} />
                        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
                        <Route path="/produtos" element={<ListaProdutos />} />
                        <Route path="/cadastroProduto" element={<FormularioProduto />} />
                        <Route path="/editarProduto/:id" element={<FormularioProduto />} />
                        <Route path="/deletarProduto/:id" element={<DeletarProduto />} />

                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </ AuthProvider>
    );
}

export default App;

