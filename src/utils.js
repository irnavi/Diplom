


export const calculateCartCount = (cartItems) => {
    if (!cartItems || cartItems.length === 0) {
        return 0;
    }
    return cartItems.reduce((total, currentItem) => total + currentItem.count, 0);
  };



  
export function calculateOrderTotal(items) {
    const total = items.reduce((acc, item) => {
      const price = item.discont_price || item.price;
      const itemTotal = price * item.count;
      return acc + itemTotal;
    }, 0);

    return total.toFixed(2);
  }
  