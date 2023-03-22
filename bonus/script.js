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
			$data = {
				task: this.newTask,
			};

			axios
				.post("./server.php", $data, {
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

			$data = {
				edit: i,
			};

			axios
				.post("./server.php", $data, {
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
			$data = {
				delete: i,
			};

			axios
				.post("./server.php", $data, {
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
