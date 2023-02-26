class OmegleBot {
	#interval_id;

	constructor(message) {
		this.message = message;
	}
	
	start() {
		#interval_id = setInterval(() => {
			document.querySelector('.disconnectbtn')?.click();
			document.querySelector('.chatmsg')?.innerHTML = this.message;
			document.querySelector('.sendbtn')?.click();
		}, 4_000);
	}
	
	stop() {
		clearInterval(this.#interval_id);
	}
}
