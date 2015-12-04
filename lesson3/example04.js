'use strict';

class User{
	constructor(name,password){
		this.name = name;
		this.password = password;
	}

	validateName(cb){
		let name = this.name;
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				if(name === 'leo'){
					resolve('success');
				}else{
					reject('error');
				}
			},200);
			
		});
	}

	validatePassword(cb){
		let password = this.password;
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				if(password === '123'){
					resolve('success');
				}else{
					reject('error');
				}
			},200);
			
		});
	}
}


// const user = new User('leoxx','123');
const user = new User('leo','1235');

user.validateName()
	.then(function(result){
		throw new Error('first error!');
		// return 'validate name ok';
		// return user.validatePassword();
	},function(err){
		console.log('second error!');
	})
	.catch(function(err){
		console.log(err);
		return user.validatePassword();
	})
	// .then(function(result){
	// 	console.log(result);
	// },function(err){
	// 	console.log(err);
	// });
	// 
	// .then(function(result){
	// 	console.log(result);
	// })
	// .catch(function(err){
	// 	console.log('validatePassword pwd err');
	// });
	// 
	// .then(function(result){
	// 	console.log(result);
	// },function(err){
	// 	console.log('validate pwd err 1');
	// })
	// .catch(function(err){
	// 	console.log('validatePassword pwd err 2');
	// });
	// 
	.then(function(result){
		console.log(result);
	},function(err){
		console.log('validate pwd err 1');
		throw new Error('xx');
	})
	.catch(function(err){
		console.log('validate pwd err 2');
	})