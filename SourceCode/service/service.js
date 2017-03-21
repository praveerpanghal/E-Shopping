//app.service("myservice",function(){

// this.add=function(a,b)
// {
// return a+b;
// };

// var Result = {};

// var take = "";

// Result.send = function(data){
// 	console.log(data);
// 	take = data;

// }



// Result.give = function(){

// 	return take;
// }

// return Result;

// });
// FillCart.Setselecteditems($scope.MainCart);



// } ); 
app.service("FillCart" , function()

{ 
    var selecteditems=[];
    var items=[];
    return{

        Getselecteditems: function()
        {

            return selecteditems;
        },

        Setselecteditems: function(a)
        {
        	
            selecteditems=a;

            
        },
         Getitems: function()
        {

            return items;
        },

        Setitems: function(b)
        {
            
            items=b;

            
        }
    }


 });
