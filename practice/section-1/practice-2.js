'use strict';

function collectSameElements(collectionA, collectionB) {
	var result=new Array();
	for(var i=0;i<collectionA.length;i++)
	{
    for(var j=0;j<collectionB.length;j++)
	{
	for(var n=0;n<collectionB[j].length;n++)
	{
		if(collectionA[i]==collectionB[j][n])
	{
	 result.push(collectionA[i]);
	}
	}
	}
	}
  return result;
}
