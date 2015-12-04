function asyncFun(a,b,time){

	return new Promise(function(resolve,reject){
		if(typeof a !== 'number' || typeof b !== 'number'){
			reject(new Error('no number'));
		}

		setTimeout(function(){
			resolve(a+b);
		},time);
	});
}

// var resultList = [];
// asyncFun(1,2)
// 	.then(function(result){
// 		resultList.push(result);
// 		return asyncFun(2,3);
// 	})
// 	.then(function(result){
// 		resultList.push(result);
// 	});
// 	
// var promise = Promise.all([asyncFun(1,2),asyncFun(2,3),asyncFun(3,4)]);
var promise = Promise.race([asyncFun('s',2,60),asyncFun(2,3,20),asyncFun(3,4,22)]);
promise.then(function(result){
	console.log(result);
})
.catch(err=>{
	console.log(err);
});
