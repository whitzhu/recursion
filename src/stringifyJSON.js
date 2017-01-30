// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	function isEmpty(obj){
		for (var key in obj){
			if(obj.hasOwnProperty(key)){
				return true;
			}
		}
		return false;
	}

	if (typeof obj == "number") {
		return obj.toString();
	}else if ( obj === null ){
		return "null";
	}else if( obj === true ){
		return "true";
	}else if( obj === false ){
		return "false";
	}else if (typeof obj == "string"){
		return '"'+ obj + '"';
	
	}else if (Array.isArray(obj) ){
		var newArray = [];

		if (obj.length == 0){
			return '['+ obj +']';
			
		}else{
			for (var i = 0; i < obj.length; i++ ){
				newArray.push(stringifyJSON(obj[i]));
		
			}
			return '['+ newArray.join(',') +']';
		}
	}else{
		var newObj= [];
		if(!isEmpty(obj)){
			return '{' + '}';
		}
		for(var key in obj){
			if (typeof obj[key] == "undefined"){
				return '{' + '}';
			}
			newObj.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
		}
		return '{' + newObj  + '}';
	}

};
