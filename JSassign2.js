function createTable()
{
r = window.prompt("Enter rows",  );
c = window.prompt("Enter columns", );
  
 for(var i=0;i<r;i++)
  {
   var x=document.getElementById('myTable').insertRow(i);
   for(var j=0;j<c;j++)  
    {
     var y=  x.insertCell(j);
     y.innerHTML="R"+i+" C"+j; 
    }
   }
}

