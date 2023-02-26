export default class OmegleBot {
	#interval_id;

	constructor(message) {
		this.message = message;
	}
	
	start() {
		this.#interval_id = setInterval(() => {
			document.querySelector('.disconnectbtn')?.click();
			const message_box = document.querySelector('.chatmsg');
			if (message_box) message_box.innerHTML = this.message;
			document.querySelector('.sendbtn')?.click();
		}, 4_000);
	}
	
	stop() {
		clearInterval(this.#interval_id);
	}
}
