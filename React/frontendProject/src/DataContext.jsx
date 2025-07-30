import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext()

export function DataProvider({ children }) {


    const [productData, setProductData] = useState()
    const [singleProduct,setSingleProdcut] = useState()
    const [cart,setCart] = useState([])
    //data export 


    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://dummyjson.com/products')
            console.log(response.data.products)
            setProductData(response.data.products)
        }
        getData()
    }, [])

    return (
        <DataContext.Provider value={{ productData, setProductData,singleProduct,setSingleProdcut,cart,setCart }}>
            {children}
        </DataContext.Provider>

    )
}