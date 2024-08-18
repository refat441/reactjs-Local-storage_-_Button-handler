// use local storage to manage cart data 

const addToDb = id =>{
    let shoppingCard;

    //get the shopping card from the local storage 
    const storedcard = localStorage.getItem('shopping-card');
    if(storedcard){
        shoppingCard = JSON.parse(storedcard);
    }
    else{
        shoppingCard = {};
    }

    //For Add Quantity to local storage 
    const quantity = shoppingCard[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
    }
    else{
        shoppingCard[id]=1;
    }
    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));

}

// Remove Data
const removeFromDb = id =>{
    const storedcard = localStorage.getItem('shopping-card');
    if(storedcard){
        const shoppingCard = JSON.parse(storedcard);
        if(id in shoppingCard){
            delete shoppingCard[id];
            localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
        }
    }
}

//delete all data at once 
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-card')
}


export {addToDb, removeFromDb, deleteShoppingCart }