import { Link, useParams, useLocation } from "react-router-dom";

//detalles de cada producto
const ProductDetail = () => {
 
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;
 

 
    return (
        <div className="container-md py-3">
            <h2 className="mb-3">Detalles del Producto</h2>
           
            {/* Fila Superior: para separar en 2 columnas */}
            <div className="row align-items-center g-4 mb-4">
               
                {/* Columna para la imagen - IZQUIERDA (md-6) */}
                <div className="col-md-6">
                    <div className="card border-0">
                        <div className="card-body text-center p-2">
                            <img
                                src={product.avatar}
                                alt={product.name}
                                className="img-fluid rounded w-75"
                            />
                        </div>
                    </div>
                </div>


                {/* Columna para la información - DERECHA (md-6) */}
                <div className="col-md-6 p-1">
                    <div className="card border-0">
                        <div className="card-body pt-3 pb-3">


                            <h4 className="text-primary mb-2">{product.name}</h4>
                           
                            <div className="mb-2">
                                <strong>Descripción:</strong>
                                <p className="card-text mb-1">{product.description}</p>
                            </div>
                           
                            <div className="mb-2">
                                <strong>Categoría:</strong>
                                <span className="badge bg-secondary ms-1">{product.category}</span>
                            </div>
                   
                            <div className="mb-3">
                                <strong>Precio:</strong>
                                <h5 className="text-success d-inline ms-1">${product.price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Fila Inferior: Botón de Volver (col-12) */}
            <div className="row">
                <div className="col-12 text-center mt-3">
                    <Link to={`/curso_react/products`} className="btn btn-secondary w-50">
                        Volver a Productos
                    </Link>
                </div>
            </div>
        </div>
    );
}; 


export default ProductDetail;
