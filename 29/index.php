<!DOCTYPE html>
<html>
<head>
	<title>Menu hover description example in jquery</title>
    <style>
    img{
    	height: 250px;
    	width: 250px;
    	margin-left: 5px; 
    	border: 1px solid gray;
    }
    div{
    	display: inline-block;
    	text-align: center;
    }
    body{
    	text-align: center;
    }
    h2{
    	padding-bottom: 50px;
    }
    span{
    	color: red;
    	padding-bottom: 20px;
    	font-weight: bold;

    }
    img:hover{
    	border: 1px solid red;
    }
    div#description{
    	display: none;
    	border: 3px solid lavender;
    	padding: 10px;
    	background-color: #f5f5f5;
    	position: absolute;
    }
    </style>
</head>
<body>
    <h2><u>Tech engine Today's Menu</u></h2>
    <span>Please Mouse over a Pizza to see description</span><br><br>
    <div class="item" data-description="Price 300, Topin: Tomato">
       <img src="tomato.jpg"><br>
       <h3>Tomato pizza</h3>
    </div>
    <div class="item" data-description="Price 400, Topin: Sweet Corn">
       <img src="sweetcorn.jpg">
       <h3>Sweet corn pizza</h3>
    </div>
    <div class="item" data-description="Price 500, Topin: Cheese">
       <img src="extracheese.jpg">
       <h3>Exta Cheese pizza</h3>
    </div>
    <div class="item" data-description="Price 450, Type: Mushroom">
       <img src="mushroom.jpg">
       <h3>Mushroom pizza</h3>
    </div>
    <div class="item" data-description="Price 500, Type: Pineapple">
       <img src="pineapple.jpg">
       <h3>Pineapple pizza</h3>
    </div>


    <div id="description">Demo Text</div>
    
	<script type="text/javascript" src="../jquery.min.js"></script>
	<script type="text/javascript" src="29.js"></script>
</body>
</html>