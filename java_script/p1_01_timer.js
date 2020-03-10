function generateTimer() {

	let today = new Date();

	let year = today.getFullYear();
	let month = today.getMonth() + 1;
	let day = today.getDate();
	let hour = today.getHours();
	let minute = today.getMinutes();
	let second = today.getSeconds();

	hour = addLeadingZero(hour);
	minute = addLeadingZero(minute);
	second = addLeadingZero(second);

	document.getElementById("timer").innerHTML = day + "/" + month + "/" + year + " | "
												 + hour + ":" + minute + ":" + second;
	setTimeout("generateTimer()", 1000);
}

function addLeadingZero(timePart) {

	if (timePart < 10) {
		timePart = "0" + timePart;
	}
	return timePart;
}