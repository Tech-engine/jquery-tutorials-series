<!DOCTYPE html>
<html>
<head>
	<title>Live event Handler in jquery</title>
    <style>
     li{
     	font-size: 25px;
     }
     .highlight{
     	background-color: yellow;
     	font-weight: bold;
     }
     p{
     	color: red;
     	font-weight: bold;
     }
	</style>
</head>
<body>
    Add to list
    <input type="text" id="item"></input><br><br>
    Price
    <input type="text" id="price"></input><br><br>
    <input type="button" id="add" value="Add"></input>
    <h2>Menu rate</h2>
    <div>
    	
    	<ol>
			<li data-price="350">Pizza</li>
			<li data-price="50">Dosa</li>
			<li data-price="40">Veg roll</li>
			<li data-price="40">Chapati</li>
			<li data-price="30">Burger</li>
			<li data-price="300">Chicken</li>
			<li data-price="50">Noodles</li>
			<li data-price="70">Thali</li>

		</ol>
    </div>
		
	<p></p>
	<script type="text/javascript" src="../jquery.min.js"></script>
	<script type="text/javascript" src="26.js"></script>
</body>
</html>