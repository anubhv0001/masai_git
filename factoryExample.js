/*Create a factory function createInventoryItem to represent items in an inventory system. Each item should have
properties like name, category, and price. Add a method describeItem() that outputs the item's details. Extend this
functionality by creating another factory function addItemDiscount, which accepts an inventoryItem object,
a discountPercent, and adds a discountedPrice property based on the discount. Finally, create a method applyDiscount() 
in addItemDiscount that recalculates and outputs the discounted price.

Steps:

Define createInventoryItem to take name, category, and price.
Add a method describeItem() to createInventoryItem to print the item's details.
Define addItemDiscount, which accepts an inventoryItem object and discountPercent.
Calculate discountedPrice based on the original price and discountPercent.
Add a method applyDiscount() to addItemDiscount that logs the discounte*/

function createInventoryItem(name,category,price){
    return {
    name,
    category,
    price,
     describe:function(){
      console.log(`name:${this.name} category:${this.category} price:${this.price}`) 
     }
     
  }
  }
  
  function applyDiscount(inventoryItem,discountPercent){
    const discountedPrice=inventoryItem.price-(inventoryItem.price*discountPercent/100);
    return{
      ...inventoryItem,
      discountedPrice,
      discountPercent,
      applyDiscount(){
        this.discountedPrice=this.price-(this.price*this.discountedPrice/100);
        console.log(`After ${this.discountPercent}% discount,the price is${this.discountedPrice}`)
      }
    }
  }
  const item1=createInventoryItem('Laptop','electronics',6000)
  item1.describe();
  const discountedItem=applyDiscount(item1,10);
  discountedItem.applyDiscount();