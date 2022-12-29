import {useGetGoodsQuery, useAddProductMutation, useDeleteProductMutation} from './redux'
import React, {useState} from "react";

function App() {
    const [count, setCount] = useState('')
    const [newProduct, setNewProduct] = useState('')
    const {data =[], isLoading} = useGetGoodsQuery(count);
    const [addProduct, {isError}] = useAddProductMutation();
    const [deleteProduct] = useDeleteProductMutation();

    const handleAddProduct = async () => {
        if (newProduct) {
            await addProduct({ name: newProduct}).unwrap();
            setNewProduct('');
        }
    };

    const handleDeleteProduct = async (id:string) => {
        await deleteProduct(id).unwrap();
    }

    if (isLoading) return <h2>Loading...</h2>

    return (
        <div>
            <div>
                <input
                type="text"
                value={newProduct}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewProduct(e.target.value)}
                />
                <button onClick={handleAddProduct}>Add</button>
            </div>
            <div>
                <select value={count} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setCount((e.target.value))}>
                    <option value="">all</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <ul>
                {data.map((item: any) => (
                    <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
