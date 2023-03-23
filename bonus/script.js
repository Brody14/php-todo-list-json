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
					console.log(res.data);
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
				.post("./addtask.php", data, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					this.tasks = res.data;
					this.newTask = "";
				});
		},
		editTask(i) {
			//console.log(i);

			let data = {
				edit: i,
			};

			axios
				.post("./edittask.php", data, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					this.tasks = res.data;
				});
		},
		deleteTask(i) {
			//console.log(i);
			let data = {
				delete: i,
			};

			axios
				.post("./deletetask.php", data, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					//console.log(res.data);
					this.tasks = res.data;
				});
		},
	},
	mounted() {
		this.fetchData();
	},
}).mount("#app");
