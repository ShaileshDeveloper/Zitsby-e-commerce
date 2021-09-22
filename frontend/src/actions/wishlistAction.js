import axios from "axios";

export const addToWishlist = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://zitsby-e-commerce-backend-2.shaileshweb.repl.co/products/${id}`);
 

  dispatch({
    type: "WISHLIST_ADD_ITEM",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      
    },
  });

  localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlistItems));
};

