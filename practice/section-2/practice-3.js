'use strict';

function countSameElements(collection) {
  var result=Array();
  var res=Array();
  var collectionA=Array();
  for(var i=0;i<collection.length;i++)
  {
	 var j=0;
	   var re = /\W/;
	  if( re.test(collection[i]) )
	  {
		  var temp=Array();
  if((collection[i].indexOf("-"))!=-1)
  {temp=collection[i].split("-");}
   
	   if(( collection[i].indexOf("[" ))!=-1)
	  {
       temp=collection[i].split("[");
	  }
	  if(( collection[i].indexOf(":"))!=-1)
	  {
	  temp=collection[i].split(":");
	  }
	   collection[i]=temp[0];
       j=parseInt(temp[1]);
	    for(var h=1;h<j;h++)
	   {collectionA.push(temp[0]);}
	  
  }
  collectionA.push(collection[i]);
  }
	
     for(var f=0;f<collectionA.length;f++)
 {
	 var t=0;
	  for(var n=f;n<collectionA.length;n++)
	  {
		if(collectionA[f]==collectionA[n])
		{
			t++;
		}			
	  }
	  res.push([collectionA[f],t]);  
        f+=t;  
		f=f-1;
  }
  for(var a=0;a<res.length;a++)  
{  
var b=Object();
b.name=res[a][0];
b.summary=res[a][1];
 result.push(b);  
}  
  return result;
}

