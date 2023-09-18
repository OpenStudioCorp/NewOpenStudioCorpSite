
<main>



  <main>
    <h1>Welcome!</h1>
    <h2>Here is your dashboard</h2>
    <div id="chart-container" style="position: relative         ; left: 100vw; top: 50vh;"></div>
    <div class='chart1' id="chart1"></div>
  </main>



    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script >
    if (localStorage.getItem("supabase.auth.token")) {
        console.log("Logged in");

    }
    else {
        console.log("Not logged in");
        window.location.href = "/extras/admin";
    }

///////////////////////////////import what we need

import { createClient } from '@supabase/supabase-js'


///////////////////////////////setup the varibles

//////////////////////////////setup supabase
const supabaseUrl = "https://qppdbmuuldenakroxuik.supabase.co";
  const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwcGRibXV1bGRlbmFrcm94dWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk3NTk0MDMsImV4cCI6MjAwNTMzNTQwM30.VmZWHem9EA1xBFHIXGfwD5g1g_gmvMLuWC4O65vCCjE";
  const supabase = createClient(supabaseUrl, supabaseKey);




//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////
</script>

 <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  <script>
setTimeout(function() {
  const chartConfig = {
  chart: {
    type: 'line',
    height: 350,
    width: 600, // Add this line to set the width of the chart
    background: '#f5f5f5'
  },
  series: [{
    name: 'sales',
    data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
  }],
  xaxis: {
    categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 600,
        colors: ['#333']
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 600,
        colors: ['#333']
      }
    }
  },
  title: {
    text: 'Sales by Month',
    align: 'center',
    style: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#333'
    }
  },
  subtitle: {
    text: '2021',
    align: 'center',
    style: {
      fontSize: '18px',
      fontWeight: 400,
      color: '#333'
    }
  },
  legend: {
    position: 'top',
    fontSize: '14px',
    fontWeight: 600,
    labels: {
      colors: ['#333']
    }
  }
};
  const chart = new ApexCharts(document.querySelector("#chart1"), chartConfig);
  chart.render();
}, 100);




  </script>

<style>



</style>

</main>