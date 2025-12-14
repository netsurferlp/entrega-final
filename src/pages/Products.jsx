import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import { useProducts } from "../context/ProductsContext";
import { useEffect, useState } from "react";

const Products = () => {
  const { products, loading, error } = useProducts();
  const { appendToCart } = useCartContext();
  const { isAdmin } = useAuthContext();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [pageActual, setPageActual] = useState(1);

    useEffect(() => {
    document.title = "MarketPlace | Productos";
   
    // Función para actualizar meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Meta tags básicos
    updateMetaTag('description', 'venta de productos de software y hardware');
    updateMetaTag('keywords', 'software, hardware, sistemas, desarrollador, marketplace, programacion');
    updateMetaTag('author', '@webmaster');
    updateMetaTag('robots', 'index, follow');

    // Open Graph
    updateMetaTag('og:title', 'marketplace', 'property');
    updateMetaTag('og:description', 'marketplace de productos de software y hardware.', 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:image', 'https://www.netsurferlp.ar/curso_frontend/media/apple-touch-icon.png', 'property');
    updateMetaTag('og:url', window.location.href, 'property');
  }, []);

  const productsForPage = 6;


  const handleDelete = (product) => {
    // Navegar a la página de confirmación de eliminación
    navigate('/curso_react/productdelete', { state: { product } });
  };

  const handleEdit = (product) => {
    // Navegar al formulario de edición
    navigate('/curso_react/productform', { state: { product } });
  };

    const productsFiltered = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      (product.category &&
        product.category.toLowerCase().includes(search.toLowerCase()))
  );

  const indexLastProduct = pageActual * productsForPage;
  const indexFirstProduct = indexLastProduct - productsForPage;
  const productsActual = productsFiltered.slice(indexFirstProduct, indexLastProduct);
 
  // Cambiar de página
  const totalPage = Math.ceil(productsFiltered.length / productsForPage);
  const changePagina = (numberPage) => setPageActual(numberPage);


  // Resetear a página 1 con búsquedas
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPageActual(1);
  };



  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="container mt-4">
        {/* Barra de búsqueda */}
        <div className="row mb-4">
          <div className="col-12 col-md-12">
            <label className="form-label fw-bold">Buscar productos</label>
            <input
              type="text"
              placeholder="Buscar por nombre o categoría..."
              className="form-control"
              value={search}
              onChange={handleSearch}
            />
            {search && (
              <small className="text-muted">
                Mostrando {productsFiltered.length} de {products.length} productos
              </small>
            )}
          </div>
        </div>


        {/* Grid de productos */}
        <div className="row">
          {productsActual.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src={product.avatar}
                  alt={product.name}
                  className="card-img-top"
                
                />
               
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                   <div className="mb-2">
                                <strong>Categoría:</strong>
                                <span className="badge bg-secondary ms-1">{product.category}</span>
                            </div>


                  <p className="card-text flex-grow-1">
                    {product.description}
                  </p>
                  <p className="card-text fw-bold text-primary">
                    ${product.price}
                  </p>
                 
                  <div className="mt-auto">
                    <div className="d-grid gap-2">
                      <Link
                        to={`/curso_react/products/${product.id}`}
                        state={{product}}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Ver detalles
                      </Link>
                      <button
                        onClick={() => appendToCart(product)}
                        className="btn btn-sm bg-primary text-white"
                        
                      >
                        Agregar al carrito
                      </button>
                    </div>


                    {/* Botones de admin */}
                    {isAdmin && (
                      <div className="mt-3 pt-3 border-top">
                        <div className="d-flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="btn btn-warning btn-sm flex-fill"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => handleDelete(product)}
                            className="btn btn-danger btn-sm flex-fill"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Paginador - Estilo simplificado */}
        {productsFiltered.length > productsForPage && (
          <div className="d-flex justify-content-center my-4">
            {Array.from({ length: totalPage }, (_, index) => (
              <button
                key={index + 1}
                className={`btn mx-1 ${pageActual === index + 1 ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => changePagina(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}


        {/* Información de la página actual */}
        {productsFiltered.length > 0 && (
          <div className="text-center text-muted mt-2">
            <small>
              Mostrando {productsActual.length} productos
              (página {pageActual} de {totalPage})
            </small>
          </div>
        )}
      </div>
    </>
  );
}
export default  Products;