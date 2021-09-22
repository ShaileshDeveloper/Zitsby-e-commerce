export const wishlistReducer = (state = { wishlistItems: [] }, action) => {
    switch (action.type) {
      case "WISHLIST_ADD_ITEM":
        const item = action.payload;
        const existItem = state.wishlistItems.find((x) => x.product === item.product);
        if (existItem) {
          return {
            ...state,
            wishlistItems: state.wishlistItems.map((x) =>
              x.product === existItem.product ? item : x
            ),
          };
        } else {
          return {
            ...state,
            wishlistItems: [...state.wishlistItems, item],
          };
        }
         default:
         return state
    }
};