import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = '$'
    const deliveryFee = '10'
    const [search, setSearch] = useState()
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({})

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

    const value = {
        products, currency, deliveryFee, showSearch, search, setShowSearch, setSearch,updateQuantity, cartItem, addToCart, setCartItem, getTotalCount
    }

    return (

        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )

}

export default ShopContextProvider