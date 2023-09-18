<script type="/module">
  let email = "";
  let password = "";
  
  import { createClient } from "@supabase/supabase-js";

  
  const supabaseUrl = "https://qppdbmuuldenakroxuik.supabase.co";
  const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwcGRibXV1bGRlbmFrcm94dWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NTk0MDMsImV4cCI6MjAwNTMzNTQwM30.VmZWHem9EA1xBFHIXGfwD5g1g_gmvMLuWC4O65vCCjE";
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  async function login(event) {
    
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      
      if (error) {
      console.error(error);
      return;
    }
    else{
      localStorage.setItem("supabase.auth.token", data.session.access_token);
    window.location.href = "/extras/admin/dashboard";
    }
  }
    </script>
<div class="gradiant">

<main>
  <body>
    
    <header>
      <img src="https://openstudiocorp.vercel.app/favicon.png" />
      <h1>OpenStudio</h1>
    </header>
    
    <div class="push">
      
      <p>Welcome to the OpenStudio team!</p>
      <p>We are glad to have you here!</p>
      <p>Please enter your email and password for your account then hit submit</p>
      <form
      on:submit={(event) => {
        event.preventDefault();
        login(event).catch(console.error);
      }}
    >
    <!-- make it not reload the page !-->
    
    <div class="email">
      
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} autocomplete="email" />
    </div>
    
    <div class="password">
      <label for="password">Password</label>
      <input type="password" id="password" bind:value={password} autocomplete="old-password" />
    </div>
    <button class="subbutton" type="submit">Login</button>
  </form>
</div>
</body>

</main>

<head>
  
</head>
</div>
  
<style>


  
  * {
    --white: #ffffff;
    --open-studio-purple: #221b37;
    --button-red: rgb(255, 28, 86);
  
    
    
  }
  .password {
    position: relative;
    right: 6%;
    padding: 50px;
    text-align: center;
    border: none;
  }
  img{
    left: 50px;
    border: none;
  }
  
  

  
  header {
    position: relative;
    left: 29vw;
    border: none;
    width: 40vw;
    height: 15vh;
    background-color: var(--open-studio-purple);
    border-radius: 110px;
    border: 5px solid var(--white);
  
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    position: relative;
    transition: ease-in 0.5s ease-out;
  }
  .push {
    position: relative;
    left: 24vw;
    top: 50px;
    width: 50vw;
    height: 50vh;
    background-color: var(--open-studio-purple);
    border-radius: 110px;
    border: 5px solid var(--white);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    
    transition: ease-in 0.5s ease-out;
  }
  header > h1 {
  
    font-size: 3rem;
    margin: 0 0.5rem 0 0.5rem;
    position: relative;
    
    
  }
  
  header > img {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    left: -0px;
    position: relative;
    border: none;
  }
  
  main {
    display: flex;
  
    justify-content: center;
    align-items: center;
    height: 1000px;
  
    border: none;
    position: relative;
    border-top: none;
    padding: 0.59rem;
    
  }
  
  
  </style>
  