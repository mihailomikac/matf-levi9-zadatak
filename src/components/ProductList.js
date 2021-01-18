import React, { useState, useEffect } from 'react';

function ProductList(){
    const [data, setData] = useState([]);
    const [refetch, setRefetch] = useState('');
    const getList = () => {
        return fetch('http://localhost:3001/products')
          .then(data => data.json())
    }
    const deleteProduct = (id) => {
        fetch('http://localhost:3001/products/' + id, {
        method: 'DELETE',
        }).then(response => response.json())
        .catch(error => console.error('error', error))
        .then(response => {
            setRefetch(Date.now());
        });
        
    }

    useEffect(() => {
        let mounted = true;
        getList()
          .then(products => {
            if(mounted) {
              setData(products)
            }
          })
        return () => mounted = false;
    }, [refetch])
    
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Delete</th>
            </tr>
            {data.map((product, i) => (
                <tr key={i}>
                    <th>{product.name}</th>
                    <th>{product.description}</th>
                    <th><button onClick={() => deleteProduct(product.id)} >Delete</button></th>
                </tr>))}
        </table> 
    )
    

}
export default ProductList;