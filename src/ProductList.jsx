import { useEffect, useState } from "react";

function Products(){

    const [products,setProducts] = useState([]);
 
    const [url,setUrl] = useState("http://localhost:3001/products");
    
    
    useEffect(() => {
        const fetchData = async ()=> {
           
            try {
                const response = await fetch(url);
            
                    if (!response.ok){
                        throw new Error(response.statusText);
                    }

                const data = await response.json();
                setProducts(data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[url]);
    

    
    
    
    function handdleinStock(){
        setUrl("http://localhost:3001/products?in_stock=true");
    }
    function handleAll(){
        setUrl("http://localhost:3001/products");
    }
    function outofStock(){
        setUrl("http://localhost:3001/products?in_stock=false");
    }

    return (
       <div>
            <div>
                <button onClick={handdleinStock} className="btn btn-primary btn-lg">In_Stock</button>
                <button onClick={handleAll} className="btn btn-primary btn-lg">All Products</button>
                <button onClick={outofStock} className ="btn btn-primary btn-lg">out of_Stock</button>
            </div>
            
            {products.map(product => (
               <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>

                    <p className="info">
                        <span className="price">${product.price}</span>
                        <span className= {product.in_stock ? "in_stock" : "unavailable"}>
                            {product.in_stock ? "in_stock":"unavailable"}
                        </span>
                    </p>
               </div> 
            ))}
       </div>
    )
}
export default Products