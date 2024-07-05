function renping(){
	var a = new Date()
	var stn = (1103515245*a.getSeconds()+12345)%2**32;
	alert(stn);
}