function swap(winners,i,j){
  let temp=winners[i];
  winners[i]=winners[j];
  winners[j]=temp;
}

function sortMedals(n,winners) {
 // write code here
 let start=0;
 let mid=0;
 let end=n-1;
 while (mid<=end){
   switch(winners[mid]){
     case 0:
       swap(winners,start,mid);
       start++;
       mid++;
       break;
       case 1:
         mid++;
         break;
         case 2:
           swap(winners,mid,end);
           end--;
   }
 }
 console.log(winners.join(" "))
}