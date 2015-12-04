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


const user = new User('leo','123');

user.validateName()
	.then(function(result){
		return 'validate name ok';
	})
	.then(function(result){
		console.log(result);
	});