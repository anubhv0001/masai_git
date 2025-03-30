/*
Problem Statement 1: Order Processing System
You are tasked with building an Order Processing System that manages a list of orders in an e-commerce platform. Each order has the following properties:

{
  "id": number,               // Unique order ID
  "customerName": string,     // Name of the customer
  "items": array of objects,  // Items in the order (each having name, price, quantity)
  "status": string,           // Order status: "pending", "shipped", "delivered", "cancelled"
  "createdAt": Date           // Date when the order was placed
}
The system should provide the following functionalities:

Create an Order Manager using ClosuresA
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
Implement exportOrders() that converts the private order list into a JSON string.
Expected Input & Output
Example 1: Adding and Filtering Orders
Input:
const manager = createOrderManager();
manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
console.log(manager.filterOrders("pending"));

Output:
[
  {
    "id": 1,
    "customerName": "Alice",
    "items": [{ "name": "Laptop", "price": 1000, "quantity": 1 }],
    "status": "pending",
    "createdAt": "2024-03-01T00:00:00.000Z"
  }
]

Example 2: Getting Total Revenue
Input:
console.log(manager.getTotalRevenue());

 */
 
function createOrderManager(){
    class orderManager{
      constructor(){
        this.order=[];
      }
      addOrder(){
        this.order.push(order);
      }
      updateOrder(id,updateOrder){
        const index=this.order.findIndex(order=>order.id===id)
        if (index!==-1){
          this.order[index]={...this.order[index],...updateOrder}
        }
      }
      sortOrder(){
        this.order.sort((a,b)=>{
          new Date(a.cratedDate)-new
          Date(b.cratedDate)
        })
      }
      filterOrder(matches){
        return this.order.filter(order=>{
          return Object.keys(matches).every(key)=>order[key];
        }) 
      }
      getTotalRevenue(){
        return this.TotalRevenue(reduce()=>a+b)
      }
    }
    
     
   }
   
   const manager = createOrderManager();
  manager.addOrder({ id: 1, customerName: "Alice", items: [{ name: "Laptop", price: 1000, quantity: 1 }], status: "pending", createdAt: new Date("2024-03-01") });
  manager.addOrder({ id: 2, customerName: "Bob", items: [{ name: "Phone", price: 500, quantity: 2 }], status: "shipped", createdAt: new Date("2024-03-02") });
  console.log(manager.filterOrders("pending"));
  
   
   
   