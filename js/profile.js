function set_info(){
	// load profile data from monogodb
	$.ajax({ 
		url: 'php/profile.php', 
		type: 'POST', 
		data: jQuery.param({email:localStorage.getItem("id"),process:"load"}),
		success: function(response){
			if(response!="error"){
				
				var res=JSON.parse(response);
				document.getElementById("name").value=res[0];
				document.getElementById("nick_name").value=res[1];
				document.getElementById("email").value=res[2];
				document.getElementById("dob").value=res[3];
				document.getElementById("phone").value=parseInt(res[4]);
				document.getElementById("profession").value=res[5];
			}
		}
	});
}

function log_out(){
	localStorage.clear();
	window.location.href="login.html";
}

let nick,dob,phone,profession;

function set_value(){
	nick=document.getElementById("nick_name").value;
	dob=document.getElementById("dob").value;
	phone=document.getElementById("phone").value;
	profession=document.getElementById("profession").value;
}

function revert_value(){
	document.getElementById("nick_name").value=nick;
	document.getElementById("dob").value=dob;
	document.getElementById("phone").value=phone;
	document.getElementById("profession").value=profession;
}

function edit_on(){

	document.getElementById("edit").setAttribute("hidden",true);
	document.getElementById("save").removeAttribute("hidden");
	document.getElementById("cancel").removeAttribute("hidden");

	document.getElementById("nick_name").removeAttribute("disabled");
	document.getElementById("dob").removeAttribute("disabled");
	document.getElementById("phone").removeAttribute("disabled");
	document.getElementById("profession").removeAttribute("disabled");

}

function edit_off(){
	document.getElementById("edit").removeAttribute("hidden");
	document.getElementById("save").setAttribute("hidden",true);
	document.getElementById("cancel").setAttribute("hidden",true);

	document.getElementById("nick_name").setAttribute("disabled",true);
	document.getElementById("dob").setAttribute("disabled",true);
	document.getElementById("phone").setAttribute("disabled",true);
	document.getElementById("profession").setAttribute("disabled",true);
}

function edit(){
	edit_on();
	set_value();
}

function cancel(){
	edit_off();
	revert_value();
}

function save(){
	set_value();
	$.ajax({ 
		url: 'php/profile.php', 
		type: 'POST', 
		data: jQuery.param({email:localStorage.getItem("id"),process:"update",nick_u:nick,dob_u:dob,phone_u:phone,profession_u:profession}),
		success: function(response){
			if(response=="update_success"){
				alert("updated successfullt");
			}
			else{
				alert(response);
			}
		}
	});

	edit_off();
}