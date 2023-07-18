<!-- NOTE: this component should be written in JavaScript, not TypeScript -->
<!-- If TypeScript is used, the Router library shows a bunch of errors that aren't actually affecting the program -->

<script>
  
  import Router from "svelte-spa-router"

  import Navbar from "./components/Shared/Navbar/Navbar.svelte"
  import LandingPage from "./pages/LandingPage.svelte"
  import AboutPage from "./pages/AboutPage.svelte"
  import ProjectsPage from "./pages/ProjectsPage.svelte"
  import NotFound from "./pages/NotFound.svelte"

</script>

<Navbar />
<Router
  routes={{
    "/": LandingPage,
    "/about": AboutPage,
    "/projects": ProjectsPage,

    "*": NotFound
  }}
/>
