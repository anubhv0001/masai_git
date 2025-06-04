/*You are given two nested objects: profile and updates. Your task is to merge the two objects using the spread operator, 
ensuring that specific nested properties in updates overwrite those in profile.

Steps:
Create two objects:
profile: contains name, age, address (which is an object with properties like city and zipcode).
updates: contains updated age, and an updated address object with a new zipcode and added country property.
Merge the objects using the spread operator, ensuring the updated properties from updates overwrite the existing ones.
Return the new merged object.*/



const profile={
    name:"Anubhav",
    age:24,
    address:{
      city:"Ayodhya",
      zipcode:224001
    }
  };
    const updates={
    age:25,
    address:{
      zipcode:226001,
      country:"USA"
    }
    };
  const mereged={
    ...profile,
    ...updates,
    address:{
      ...profile.address,
      ...updates.address
    }
  }
  console.log(mereged);