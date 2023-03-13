function validate_email(str){
	if(str.length==0){
		document.getElementById("err-email").innerText="invalid email id";
			return false;
	}
	else{
		if ( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str)){
			document.getElementById("err-email").innerText="";
			return true;
		}
		else{
			document.getElementById("err-email").innerText="invalid email id";
			return false;
		}
	}
}

function validate_password(str){
	if(str.length<5 || str.length>8){
		document.getElementById("err-pass").innerText="password length should be 5 to 8";	
		return false;
	}	
	else{
		document.getElementById("err-pass").innerText="";	
		return true;
	}	
}

function validate_fields(){
	let res1=validate_email(document.getElementById("email").value);
	let res2=validate_password(document.getElementById("password").value);
	if(res1==true && res2==true){
		let attribute=document.getElementById("login-button");
		attribute.disabled=false;

	}
	else{
		let attribute=document.getElementById("login-button");
		attribute.disabled=true;
	}
}

// jquery ajax
function login_check() {
	$.ajax({ 
		url: 'php/login.php', 
		type: 'POST', 
		data: jQuery.param({ email:$("#email").val(),password:$("#password").val()}),
		success: function(response){
			if(response=="login_success"){
				localStorage.setItem("id",$("#email").val());
				window.location.href="profile.html";
			}
			else if(response=="unsuccessfull"){
				$("#err-login").text("login invalid");
			}
		}
	});
}
