import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"




export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = '$'
    const deliveryFee = '10'
    const backendUrl=import.meta.env.VITE_BACKEND_URL
     console.log(backendUrl)
    const [search, setSearch] = useState()
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({})
    const navigate=useNavigate()
    const [products,setProducts]=useState([])
    const [token,setToken]=useState()

    useEffect(()=>{
        getProducts()
    },[])

    useEffect(()=>{
        if(!token &&localStorage.getItem('token')){
            setToken(localStorage.getItem('token'))

        }

    },[])

    const addToCart = async (id, size) => {

        if (!size) {
            toast.error("Size is required")
        }



        let cartData = structuredClone(cartItem)

        if (cartData[id]) {
            if (cartData[id][size]) {
                cartData[id][size] += 1
            }
            else {
                (cartData[id])
                cartData[id][size] = 1
            }
        }
        else {
            cartData[id] = {}
            cartData[id][size] = 1
        }

        setCartItem(cartData)

    }

    useEffect(() => {
        console.log(cartItem)
    }, [cartItem])


    const getTotalCount = () => {
        let totalCount = 0
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0)
                        totalCount += cartItem[items][item]

                }
                catch (error) {

                }
            }
        }
        return totalCount
    }



    const updateQuantity=async(id,size,quantity)=>{

        let cartData=structuredClone(cartItem)

        cartData[id][size]=quantity;
        setCartItem(cartData)


    }

    // const getCartAmount=()=>{
    //     let totalAmount=0;
    //     for(const items in cartItem)
    //     {
    //         let itemInfo=products.find((product)=>product._id===items)
    //         console.log("item info",itemInfo)
    //         console.log("item price",itemInfo.price)
    //         for(const item in cartItem[items]>0)
    //         {
    //             try{
    //                 if(cartItem[items][item]>0){
    //                     totalAmount+= itemInfo.price *cartItem[items][item]
    //                     console.log("total amount",totalAmount)
    //                 }


    //             }
    //             catch(error){

    //             }
    //         }
    //     }
    //     return totalAmount;

    // }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const productId in cartItem) { // Iterate over product IDs
            let itemInfo = products.find((product) => product._id === productId);

            // Ensure itemInfo is found before proceeding
            if (!itemInfo) {
                console.warn(`Product with ID ${productId} not found in products list.`);
                continue; // Skip to the next product
            }

            // Iterate over the sizes for the current product
            for (const size in cartItem[productId]) {
                const quantity = cartItem[productId][size];
                if (quantity > 0) {
                    totalAmount += itemInfo.price * quantity;
                }
            }
        }
        return totalAmount;
    }

    const getProducts=async()=>{
        try {
           
            const response=await axios.get(backendUrl+'/api/product/list')
        if(response.data.success){
            setProducts(response.data.data)

        }
        else{
            toast.error(response.message)
        }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        products, currency, deliveryFee, showSearch, search, setShowSearch, setSearch,updateQuantity, getCartAmount,cartItem, addToCart, setCartItem, getTotalCount,navigate,backendUrl,setToken,token
    }

    return (

        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )

}

export default ShopContextProvider