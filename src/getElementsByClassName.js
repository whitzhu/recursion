// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,originalName, answer) {
	
	if(typeof className == 'string'){
		var answer = []
		originalName = className.substr(0);

		if(document.body.className == className){
			
			answer.push(document.body)
			
			if ( getElementsByClassName(document.body, originalName, answer) !== undefined){
				answer.push(getElementsByClassName(document.body, originalName, answer));
			}
			return answer;
			
		}else{
			answer.push(getElementsByClassName(document.body, originalName, answer));
		}
	
	}else{

		var child = className.childNodes;
		for (var i = 0 ; i < child.length; i++){
			if(child[i].childNodes.length >= 0 ){
				getElementsByClassName(child[i], originalName, answer);
			}

			if(typeof child[i].className == 'string'){
				
				if(child[i].className.indexOf( originalName) !== -1 || child[i].className == originalName ){
					answer.push(child[i]);
				}
			}
		}
	}

};
