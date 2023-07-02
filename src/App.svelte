<!-- NOTE: this component should be written in JavaScript, not TypeScript -->
<!-- If TypeScript is used, the Router library shows a bunch of errors that aren't actually affecting the program -->

<script>

	import { Router, Link, Route } from "svelte-routing";
	import LandingPage from "./routes/LandingPage.svelte";
	import AboutPage from "./routes/AboutPage.svelte";
	import ProjectsPage from "./routes/ProjectsPage.svelte";
  
	export let url = "/";

</script>
  
<Router {url}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/projects">Blog</Link>
	</nav>
	<div>
		<Route path="/" component={LandingPage} />
		<Route path="/about" component={AboutPage} />
		<Route path="/projects" component={ProjectsPage} />
	</div>
</Router>
