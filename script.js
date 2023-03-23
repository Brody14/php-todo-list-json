const { createApp } = Vue;

createApp({
	data() {
		return {
			title: "ToDo List",
			tasks: [],
			newTask: "",
		};
	},
	methods: {
		fetchData() {
			axios
				.get("./server.php")
				.then((res) => {
					//console.log(res.data);
					this.tasks = res.data;
				})
				.catch((error) => {
					this.tasks = [];
				});
		},
		addTask() {
			if (!this.newTask.trim()) {
				return;
			}

			let data = {
				task: this.newTask.trim(),
			};

			axios
				.post("./server.php", data, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					this.tasks = res.data;
					this.newTask = "";
				});
		},
	},
	mounted() {
		this.fetchData();
	},
}).mount("#app");
