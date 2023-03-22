const { createApp } = Vue;

createApp({
	data() {
		return {
			title: "ToDo List",
			newTask: "",
		};
	},
	methods: {
		fetchData() {
			axios.get("./server.php");
		},
		addTask() {
			axios.post("./server.php");
		},
	},
	mounted() {
		this.fetchData();
	},
}).mount("#app");
