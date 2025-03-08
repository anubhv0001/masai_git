let person = {
    role: "admin",
    experience: 7,
    active: true,
    department: "IT"
  };
  
  function getAccess(person) {
    if (person.role == "admin") {
      if (person.active) {
        if (person.experience > 5) {
          if (person.department == "IT") {
            return "Full IT Admin Access";
          } else {
            return "Full General Admin Access";
          }
        } else {
          return "Limited Admin Access";
        }
      } else {
        return "Admin Access Revoked";
      }
    } else if (person.role == "manager") {
      if (person.active) {
        if (person.experience > 3) {
          if (person.department == "Sales") {
            return "Full Sales Manager Access";
          } else {
            return "Full Manager Access";
          }
        } else {
          return "Limited Manager Access";
        }
      } else {
        return "Manager Access Revoked";
      }
    } else if (person.role == "user") {
      if (person.active) {
        if (person.department == "Support") {
          return "Priority Support Access";
        } else {
          return "User Access";
        }
      } else {
        return "User Access Revoked";
      }
    } else {
      return "Invalid Role";
    }
  }
  
  console.log(getAccess(person)); 
  
  
  
  