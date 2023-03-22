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
			axios.post("./server.php");
		},
	},
	mounted() {
		this.fetchData();
	},
}).mount("#app");
