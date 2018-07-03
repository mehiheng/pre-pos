'use strict';

function createUpdatedCollection(collectionA, objectB) {
 	var result=Array();
  for(var i=0;i<collectionA.length;i++)
  {
	  for(var n=0;n<objectB.value.length;n++)
	  {
		if(collectionA[i].key==objectB.value[n])
		{
			collectionA[i].count=1;
		}			
		if(n==objectB.value.length-1)
			{result.push(collectionA[i]);}
	  }
  }
  return result;
}
