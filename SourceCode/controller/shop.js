app.controller("shopCtrl", function($scope,FillCart)
{ 
	var men=[
	{name:"Hollister" ,image:"http://i.dailymail.co.uk/fff2/images/2015/11/25/c996689ebbc6de1ae1d6c0106c5dde2a.jpg",content:"semi torn comfort jeans",price:"35"},
	{name:"Savon" ,image:"http://ecx.images-amazon.com/images/I/81sQngZNiGL._UL1500_.jpg",content:"slim and stright fit jeans",price:"45"},
    {name:"American Eagle" ,image:"https://cdn.lookastic.com/white-and-navy-horizontal-striped-polo/american-eagle-outfitters-striped-polo-shirt-m-tall-original-72488.jpg",content:"polo half hand t-shirt",price:"25"},
	{name:"Levis" ,image:"http://images.koovscdn.com/uploads/products/85596_3754e7a6ccc73f65048459747f53adfd_image1_zoom.jpg",content:"ripped shade jeans",price:"30"},
	{name:"Bracelet" ,image:"http://gloimg.rosewholesale.com/ROSE/2015/201510/source-img/1444072247225-P-3203643.jpg?01",content:"semi torn comfort jeans",price:"35"},
	{name:"Bracelet2" ,image:"http://www.rnbjewellery.net/wp-content/uploads/2013/07/Mens-316L-Stainless-Steel-Rubber-Cross-One-of-a-Kind-Bracelet-main.jpg",content:"slim and stright fit jeans",price:"45"},
	{name:"Hollister2" ,image:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=69513769",content:"blue and white full shirt",price:"50"},
	{name:"American Eagle" ,image:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=23951595",content:"full hand shirt",price:"40"},
	{name:"Levis2" ,image:"http://image.dhgate.com/0x0/f2/albu/g3/M00/99/6B/rBVaHVaGf_eAV5_xAAE1ay3Faos736.jpg",content:"shaded straight jeans",price:"45"},
	{name:"Hollister3" ,image:"http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/GJYAAOxyNo9SsR7l/$_35.JPG?set_id=2",content:"white full hand shirt",price:"35"},
	{name:"Hollister4" ,image:"http://nord.imgix.net/Zoom/8/_7052428.jpg",content:"straight fit jeans",price:"50"},
	{name:"Nike" ,image:"http://www.aikensshoes.com/wp-content/uploads/2015/07/nike-casual-shoes-5.jpg",content:"",price:"150"},
	{name:"TimberLand" ,image:"https://smhttp-ssl-33667.nexcesscdn.net/manual/wp-content/uploads/2016/05/camo-timberland-boots-800x533.jpg",content:"",price:"120"},
	{name:"Puma" ,image:"http://fashionbazinga.com/wp-content/uploads/2014/01/puma-limnos-canvas-shoes-buy-black-color-puma-limnos-canvas-shoes-online-at-best-price-shop-online-138919878448kgn.jpg",content:"",price:"125"},
	{name:"Puma2" ,image:"https://www.coolsneakers.dk/wp-content/uploads/2016/05/rihanna-x-puma-creeper-green-bordeaux-01-710x375.jpg",content:"",price:"131"},
	{name:"Addidas" ,image:"https://images.solecollector.com/complex/image/upload/bkyefpaperp2oeeqpfm5.jpg",content:"",price:"132"},
	{name:"Black Band" ,image:"http://www.rnbjewellery.net/wp-content/uploads/2014/07/Vintage-Downtown-Band-Mens-Black-Leather-Bracelet-Cuff-Golden-Hook-Clasp-M.jpg",content:"white full hand shirt",price:"35"},
	{name:"Perrelet" ,image:"https://s-media-cache-ak0.pinimg.com/originals/3a/44/e7/3a44e70810a58b3a39501601567ecec7.jpg",content:"straight fit jeans",price:"50"},
	{name:"Tommy Hilfiger" ,image:"http://www.one-stop-credit-cards.com/wp-content/uploads/2016/02/Men%E2%80%99s-Wallet.jpg",content:"semi formal full hand shirt",price:"20"},
	{name:"Puma3" ,image:"http://i.ebayimg.com/00/s/MzQxWDQ5OQ==/z/BfcAAOxy63FSsmln/$_3.JPG?set_id=2",content:"puma half hand t-shirt",price:"25"},
   {name:"Americian Eagle" ,image:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=2743785",content:"semi formal full hand shirt",price:"20"},
	{name:"Puma4" ,image:"http://www.carlsgolfland.com/media/catalog/product/cache/1/image/1480x1480/9df78eab33525d08d6e5fb8d27136e95/puma_duo_swing_golf_polo_shirt_pool_crimson.jpg",content:"puma half hand t-shirt",price:"25"},
	{name:"Puma5" ,image:"http://www.golfposer.com/media/catalog/product/P/U/PUMA-GOLF-SHIRT-TPCB-SS1502M.jpg",content:"puma half hand t-shirt",price:"31"},
	{name:"Abercrombie&Fitch" ,image:"https://anf.scene7.com/is/image/anf/anf_140328_01_model1?$product-anf-v1$&wid=350&hei=438",content:"straight fit jeans",price:"32"},
	{name:"Abercrombie&Fitch2" ,image:"https://s-media-cache-ak0.pinimg.com/564x/4c/88/e0/4c88e05ee1dce17fbfa634f416af10bb.jpg",content:"full hand shirt",price:"18"},
	{name:"savon2" ,image:"https://images-na.ssl-images-amazon.com/images/G/01/img12/APPAREL/APLUSDETAIL/CARHARTT/c26-B004V3362G-1-l.jpg",content:"straight fit jeans",price:"22"},
	{name:"Vio Jeans" ,image:"http://images.kooves.com/uploads/products/48225_2d8a14291dbf245827d15e9c42cc86d7_image1_default.jpg",content:"VOI JEANS Ripped Twisted Fit Skinny Denims",price:"32"},
	{name:"Abercrombie&Fitch" ,image:"http://www.virtualp.us/images/Abercrombie%20outlet/Abercrombie%20and%20Fitch%20Boreas%20Mountain%20Stripe%20Shirts%20A%20F%202500%20Stripe%20Shirts%202421.jpg",content:"full hand shirt",price:"25"},
	{name:"H&M" ,image:"http://lp.hm.com/hmprod?set=key%5Bsource%5D,value%5B/model/2016/D00%200354426%20019%2096%205023.jpg%5D&set=key%5Brotate%5D,value%5B%5D&set=key%5Bwidth%5D,value%5B%5D&set=key%5Bheight%5D,value%5B%5D&set=key%5Bx%5D,value%5B%5D&set=key%5By%5D,value%5B%5D&set=key%5Btype%5D,value%5BSTILL_LIFE_FRONT%5D&set=key%5Bhmver%5D,value%5B1%5D&set=key%5Bquality%5D,value%5B80%5D&set=key%5Bsize%5D,value%5B346x405%5D&call=url%5Bfile:/mobile/v2/product%5D",content:"formal full hand shirt",price:"40"},
	{name:"Express" ,image:"http://images.express.com/is/image/expressfashion/20_169_2248_488_f?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0",content:"chinese collor full hand shirt",price:"60"},
	{name:"Express2" ,image:"http://images.express.com/is/image/expressfashion/20_169_2248_488_f?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0",content:"chinese collor full hand shirt",price:"60"},
	
];

$scope.men=men;	
var take2=0;
$scope.cart=[];
$scope.quantity=1;
var arraylist=[];
$scope.$watch(function() {
		
$scope.arraylist=FillCart.Getitems();
//console.log($scope.arraylist);
//console.log($scope.arraylist);
angular.forEach($scope.arraylist, function(value1, key1) {
    angular.forEach($scope.men, function(value2, key2) {
    //	console.log("inside for loop");
//  if ($scope.quantity[key2] !== 'undefined') {
        if (value1.itemname === value2.name  ) {
        	console.log("new array List-----"+value1.itemname);
        	console.log("new array List-----"+value1.quantity);
        	console.log("original Array List -----"+value2.name);
        	//console.log("original Array List -----"+value2.name);
             $scope.hiddenbtn[key2] = true;
           //  $scope.quantity[key2]="";
           //  $scope.quantity[key2]= value1.quantity;
      // alert("key value"+key2);
      //   	$scope.quantity[key2]=value1.quantity;
      //   	console.log("inside for loop" + value1.quantity);
      //   	$scope.men.push(EachItem);
      //       here is where you grab the value2.color
      //      $scope.quantity =value1.quantity;
        }
  //  }()
   });
});




});



$scope.addition=function(index,price,name,quantity){
	//alert(quantity);
	//$scope.quantity[index]=quantity;
$scope.hiddenbtn(index);
take2=parseInt(take2)+parseInt(price)*parseInt(quantity);
$scope.take2=take2; 
 FillCart.Setselecteditems(take2);
//alert("check price"+quantity);
 //$location.path('/header');
var EachItem={};
EachItem.itemname =name;
EachItem.itemprice=quantity*price;
EachItem.quantity=quantity;
EachItem.price=price;
$scope.cart.push(EachItem);
FillCart.Setitems($scope.cart);
};



$scope.subraction=function(index,price,name,quantity){
	alert(1);
$scope.hiddenbtn(index);
take2=parseInt(take2)-parseInt(price)*parseInt(quantity);
$scope.take2=take2; 
 FillCart.Setselecteditems(take2);
///alert("check price"+valueprice);
 //$location.path('/header');
var EachItem={};
EachItem.itemname =name;
EachItem.itemprice=quantity*price;
EachItem.quantity=quantity;
EachItem.price=price;
$scope.cart.pop(EachItem);
FillCart.Setitems($scope.cart);

};


$scope.hiddenbtn = function (index) {
 
        
        if (angular.isUndefined($scope.hiddenbtn[index])) {
            $scope.hiddenbtn[index] = true;
        }
        else if (angular.equals($scope.hiddenbtn[index], false)) {
            $scope.hiddenbtn[index] = true;
            
        }
        else if (angular.equals($scope.hiddenbtn[index], true)) {
            $scope.hiddenbtn[index] = false;
        }
        else {
            $scope.hiddenbtn[index] = false;
        }
        
    };
 


$scope.addbutton=false;

$scope.removebutton=true;




});
