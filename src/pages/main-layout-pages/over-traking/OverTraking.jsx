import LiveMap from "../../../components/map/Livemap";

const OrderTracking = () => {
  const orderId = "654321"; // তোমার অর্ডার আইডি (dynamic করে নিও)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Track Your Order</h2>
      <LiveMap orderId={orderId} />
    </div>
  );
};

export default OrderTracking;