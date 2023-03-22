const { createApp } = Vue;

createApp({
	data() {
		return {
			title: "ToDo List",
		};
	},
	methods: {
		fetchData() {
			axios.get("./server.php");
		},
	},
	mounted() {
		this.fetchData();
	},
}).mount("#app");
