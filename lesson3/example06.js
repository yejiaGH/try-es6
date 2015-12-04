// var promise = Promise.resolve('hello');

var promise = new Promise(function(resolve,reject){
	resolve('hello');
});

promise.then(function(result){
	console.log(result);
});

var promise2 = Promise.reject('error');
promise2.then(null, function(err){
	console.log(err);
});