$('.form').on('submit',function(e){
	e.preventDefault();
	$('.error').text('');

	var rules={
	username:function(vaule){
		if(vaule.length>=3 && vaule.length<=18){
			return true;
		}
		return false;
	},

	emall: function(vaule){
		return vaule.indexOf('@')>=0;
	},
	phone: function(vaule){
		var rep = /^1\d{10}$/
		return rep.test(vaule);
	},
	pass: function(vaule){
		if(vaule.length>6 && vaule.length<18){
			return true;
		}
		return false;
	},
	passRepeat: function(vaule){
		if(vaule==allValues['pass']){
			return true;
		}else{
			return false;
		}
	}
}
var getinput='input[type=text],input[type=password],input[type=hidden],input[type=checkout],input[type=radio],select,textarea';
var namelist=$('.form').find(getinput).map(function(index, node) {
	return $(node).attr('name');
               
}).get();
console.log(namelist);
var formValid = true;
var allValues={};

for(var i=0;i<namelist.length; i++){
	var name = namelist[i];
	    var $input = $('.form').find('[name='+name+']');
	    	vaule = $input.val();
	    	type = $input.attr('type');
	    if(type ==='radio'){
	    	vaule = $input.filter('input:checked').val();
	    }else if(type==='checkout'){
	    	vaule = $input.filter('input:checked').map(function(index, node) {
	    		return node.vaule;
	    	}).get().join(',')
	    }
	    allValues[name]=vaule;

}
  console.log(allValues);
messages = {
	username : "长度只能在3-20个字符之间",
	emall : "邮箱格式不正确",
	phone : "格式有误",
	pass: "长度只能在6-20个字符之间",
	passRepeat: "两次输入不一致"
}

nullmess = {
	username : "请输入用户名",
	emall : "请输入邮箱",
	phone : "请输入手机",
	pass: "请输入密码",
	passRepeat: "请确认密码"
}
var errorname ,
	errorvalue ,
	errormessages,
	nullname,
	nullmessages;

for (var name in allValues){
	var va = allValues[name];
		rule = rules[name];
		console.log(rule);
		if(!rule){
			break;
		}
		if(va ===""||va === undefined){
			formValid = false;
			errorname = name;
			errormessages = nullmess[name];
			break;
		}
		var d =rule(va);
		if(d ==false){
			formValid = false;
			errorname = name;
			errorvalue = va;
			errormessages = messages[name];
			console.log(errormessages);
			break;
		}
	console.log(va);
}
console.log(errorname);

var result = {
	errorname:errorname,
	errorvalue:errorvalue,
	errormessages:errormessages,
	valid:formValid
}

var $error =$('<span class="error"></span>').text(result.errormessages);
$('.form').find('[name='+result.errorname+']').parent().next().append($error);

})

