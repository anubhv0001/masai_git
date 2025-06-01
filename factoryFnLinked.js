/*Create a factory function createInventoryItem to represent items in an inventory system. Each item should have properties like name, category, and price. Add a method describeItem() that outputs the item's details. Extend this functionality by creating another factory function addItemDiscount, which accepts an inventoryItem object, a discountPercent, and adds a discountedPrice property based on the discount. Finally, create a method applyDiscount() in addItemDiscount that recalculates and outputs the discounted price.

Steps:

Define createInventoryItem to take name, category, and price.
Add a method describeItem() to createInventoryItem to print the item's details.
Define addItemDiscount, which accepts an inventoryItem object and discountPercent.
Calculate discountedPrice based on the original price and discountPercent.
Add a method applyDiscount() to addItemDiscount that logs the discountedPrice for the item.*/

function CreateInventoryItem(name,category,price){
  return {
    name,
    category,
    price,
    describeItem(){
      console.log(`Name: ${this.name} ,Category: ${this.category} ,price: ${this.price}`)
    }
  }
}

function addItemDiscount(inventoryItem,discountedPercent){
  inventoryItem.discountedPercent=discountedPercent;
  inventoryItem.discountedPrice=inventoryItem.price-(inventoryItem.price*inventoryItem.discountedPercent/100)


      inventoryItem.applyDiscount=function (){
  this.discountedPrice=this.price-(this.price*this.discountedPercent/100);
  console.log(`Discounted Percent:${this.name}, Discounted price: ${this.discountedPrice}`)
}
return inventoryItem;
}

let item1=CreateInventoryItem('Speaker','Electronoics','2500');
item1.describeItem();
const discountedItem1=addItemDiscount(item1,20);
discountedItem1.applyDiscount();