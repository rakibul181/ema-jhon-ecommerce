import { getStoredCart } from "../utilities/fakedb"

 

export const loadCartandProduct =async()=>{
    const productsdata = await fetch('products.json')
    const products = await productsdata.json()


    const saveCart = getStoredCart()
   

    const initialCart = []
    for(const id in saveCart){
        const addedProduct = products.find(product => product.id ===id)
        const quantity = saveCart[id]
        addedProduct.quantity =quantity
        initialCart.push(addedProduct)
      

    }

    return {products:products,initialCart:initialCart}
}