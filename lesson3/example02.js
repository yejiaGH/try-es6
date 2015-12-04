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

// const user = new User('yejia');
const user = new User('leo','123');
// user.validateName()
// 	.then(function(success){
// 	console.log(success);
// }).catch(function(err){
// 	console.log(err);
// });
// 
user.validateName()
	.then(function(result){
		return user.validatePassword();
	})
	.then(function(result){
		console.log('validate success');
	})
	.catch(function(err){
		console.log('validate error');
	});