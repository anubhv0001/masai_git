Implement a function createOrderManager() that returns an object with methods to add orders, update orders, filter orders, sort orders, and export orders to JSON.
The internal order list should be private (cannot be accessed directly).
Add Orders using Closures & Higher-Order Functions
Implement an addOrder(order) method inside createOrderManager() that stores orders in a private array.
Update Order Status using this & Function Methods
Implement an updateOrder(id, newStatus) method to update the status of an order.
Ensure that this correctly refers to the Order Manager object when updating.
Filter Orders using Higher-Order Functions
Implement filterOrders(status) to return only the orders matching the given status.
This function should use .filter().
Sort Orders by Date using Sorting & Method Chaining
Implement sortOrders(by) where by can be "date" (ascending) or "status" (alphabetical order using localeCompare).
The method should return a new sorted array without modifying the original order list.
Generate Order Summary using reduce()
Implement getTotalRevenue() that returns the total revenue generated from all orders.
Export Orders as JSON using JSON Methods
Implement exportOrders() that converts the private order list into a JSON string.*/

function createOrderManager(){
  let orders=[];
  
  function addOrder(order){
    orders.push({
      id:order.id,
      name:order.name,
      items:order.items,
      status:order.status,
      date:order.date
      
    })
  }
}
function updateOrder(id,newStatus){
  const order=orders.find((order=>order.id===id));
  if (order){
    order.status=newStatus;
  }
  else{
    console.log("Order Not Found");
  }
}
function sortOrders(){
  orders.sort((a,b)=>new Date(a.date)-new Date(b.date));
  
  function  generateOrderSummary(){
    return orders.reduce((summary,order)=>{
      summary.totalOrders++;
      summary.totalQuantity+=order.quantity;
      summary.totalQuantity+=order.price*order.quantity;
      return summary;
    })
  }
}
  function exportJson(){
    return JSON.stringify(orders);
  }
  const manager = createOrderManager();
manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
