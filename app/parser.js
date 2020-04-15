
class Parser {
    static separComma = ', ';    

    static parseObject(obj, result) {			
		let res = [ ];
		if (typeof (obj) === "object") {
			var values = Object.values(obj);						
			values.forEach(value => {				
				if (typeof (value) === "object") {					
					result.push(Parser.parseObject(value, result));							
				}
				else {
					res.push(value);								
				}
			})			
			result.unshift(res.join(Parser.separComma));
		}
		return result;	
	} 

	static parseObjectSimple(obj, result) {			
		let res = [ ];
		if (typeof (obj) === "object") {
			var values = Object.values(obj);						
			values.forEach(value => {				
				if (typeof (value) === "object") {					
					//result.push(Parser.parseObject(value, result));							
				}
				else {
					res.push(value);								
				}
			})			
			result.unshift(res.join(Parser.separComma));
		}
		return result;	
	} 
}