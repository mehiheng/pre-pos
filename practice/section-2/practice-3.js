'use strict';

function countSameElements(collection) {
  var result=Array();
  var res=Array();
  collection.sort();
  for(var i=0;i<collection.length;i++)
  {
	  var j=0;
	   var re = /\W/;
	  if( re.test(collection[i]) )
	  {var temp=Array();
       temp=collection[i].split("-");
	    temp=collection[i].split("[");
		temp=collection[i].split("]");
		temp=collection[i].split(":");
       collection[i]=temp[0];
	   j=parseInt(temp[1]);
	   res.push([collection[i],j]);
      }
	  j=0;
	  for(var n=i;n<collection.length;n++)
	  {
		if(collection[i]==collection[n])
		{
			j++;
		}			
	  }
	  res.push([collection[i],j]);  
        i+=j;  
		i=i-1;
  }
  for(var a=0;a<res.length;a++)  
{  
var b=Object();
b.key=res[a][0];
b.count=res[a][1];
 result.push(b);  
}  
  return result;
}
