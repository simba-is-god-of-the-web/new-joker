;
console.log('index.js loaded');

$('#login').click(()=>{
	const email = $('#email');
	const password = $('#password');

	//ensure the email isn't empty
	if(!email.val()){
		return email.addClass('error');
	}else{
		email.removeClass('error');
	}
	
	//ensure the email isn't empty
	if(!password.val()){
		return password.addClass('error');
	}else{
		password.removeClass('error');
	}

	$.post('/auth/login', {
			email: $('#email').val(),
			password: $('#password').val()
	})
		.done((token)=>console.log(token))
		.fail((e)=>{
			console.error(e.responseJSON.message);
		});
});
;
