'use strict';

function createUpdatedCollection(collectionA, objectB) {
 var result=Array();
  var res=Array();
  for(var i=0;i<collectionA.length;i++)
  {
	  var j=0;
	  for(var n=i;n<collectionA.length;n++)
	  {
		if(collectionA[i]==collectionA[n])
		{
			j++;
		}		
	  }
	   var re = /\W/;
      if( re.test(collectionA[i]) )
	  {var temp=Array();
       temp=collectionA[i].split("-");
       collectionA[i]=temp[0];
	   j=parseInt(temp[1]);
      }
        res.push([collectionA[i],j]);  
        i+=j;  
		i=i-1;			  
  }		
  for(var a=0;a<res.length;a++)  
{  
    for(var d=0;d<objectB.value.length;d++)
	    if(res[a][0]==objectB.value[d])
		{
			res[a][1]-=parseInt(res[a][1]/3);		
		}
var b=Object();
b.key=res[a][0];
b.count=res[a][1];		
 result.push(b);  
}  
  return result;
}


