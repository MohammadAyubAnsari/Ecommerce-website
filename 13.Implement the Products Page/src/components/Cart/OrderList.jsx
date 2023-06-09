import OrderItem from "./OrderItem";

const OrderList = (props) => {
  const orderItems = props.orders.map((order) => (
    <OrderItem
      key={order.id}
      id={order.id}
      title={order.title}
      imageSrc={order.imageSrc}
      price={order.price}
      quantity={order.quantity}
      // onRemove={() => props.onRemove(order.id)}
    />
  ));

  return <div>{orderItems}</div>;
};

export default OrderList;
