function deepEqual(val1, val2){
  if (val1 == val2)
    return true;
  
//  else if ((typeof val1 !== "object" || val1 == null) || (typeof val2 !== "object" || val2 == null))
 //   return false;
   
  else if ((typeof val1 == "object" && val1 !== null) && (typeof val2 == "object" || val2 !== null)){
    
      var xInVal1=0;
      var xInVal2=0;
    
      for (x in val1) 
        xInVal1 += 1;  
      for (x in val2)
        xInVal2 += 1; 
        
      for (x in val2){
        console.log(xInVal2);
          if (deepEqual(val1[x], val2[x]) !== true)
            return false;  
       
      }
    if (xInVal1 == xInVal2)
      return true;
      
  }
  else return false;
