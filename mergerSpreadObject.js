const profile={
    name:"aman",
    age:24,
    address:{
      city:"Luckhnow",
      zip:"226001"
    }
  };
  const updated={
    age:25,
    address:{
      zipcode:224001,
      country:"India"
    }
  }
  const mergedProfile={
    ...profile,
    ...updated
  }
  console.log(mergedProfile);