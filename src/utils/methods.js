export default {
  handlePlusTotal(cart) {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const plus = cart.reduce(reducer, 0);
    return plus;
  },
};
