function validate_name(str){
    if(str.length<3){
        document.getElementById("err-name").innerText="name must have 3 or more characters";
		return false;
    }
    else{
        document.getElementById("err-name").innerText="";
		return true;
    }
}

function validate_email(str){
	if(str.length==0){
		document.getElementById("err-email").innerText="invalid email id";
		return false;
	}
	else{
		if( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str)){
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

function validate_con_pass(str){
    let password=document.getElementById("password").value;
	if(password != str){
		document.getElementById("err-con-pass").innerText="password doesn't match";	
		return false;
	}	
	else{
		document.getElementById("err-con-pass").innerText="";	
		return true;
	}	
}

function validate_fields(){
	let res1=validate_email(document.getElementById("email").value);
	let res2=validate_password(document.getElementById("password").value);
    let res3=validate_name(document.getElementById("name").value);
    let res4=validate_con_pass(document.getElementById("confirm-password").value);
	if(res1==true && res2==true && res3==true && res4==true){
		let attribute=document.getElementById("signup-button");
		attribute.disabled=false;

	}
	else{
		let attribute=document.getElementById("signup-button");
		attribute.disabled=true;
	}
}

function signup_check(){
	$.ajax({ 
		url: 'php/register.php', 
		type: 'POST', 
		data: jQuery.param({name:$("#name").val(),email:$("#email").val(),password:$("#password").val()}),
		success: function(response){
			if(response=="signup_success"){
				window.location.href="login.html";
			}
			else if(response=="exist"){
				$("#err-signup").text("email already exist");
			}
		}
	});
}
