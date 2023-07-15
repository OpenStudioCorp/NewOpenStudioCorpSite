<!-- NOTE: this component should be written in JavaScript, not TypeScript -->
<!-- If TypeScript is used, the Router library shows a bunch of errors that aren't actually affecting the program -->

<script>
  import { Router, Link, Route } from "svelte-routing"
  import LandingPage from "./pages/LandingPage.svelte"
  import AboutPage from "./pages/AboutPage.svelte"
  import ProjectsPage from "./pages/ProjectsPage.svelte"
  import Navbar from "./components/shared/Navbar/Navbar.svelte"

  export let url = "/"
</script>

<Router {url}>
  <Navbar />
  <Route path="/" component={LandingPage} />
  <Route path="about" component={AboutPage} />
  <Route path="/projects" component={ProjectsPage} />
</Router>
