<template>
  <div id="app" class="backgroundImg">
    <router-view/>
  </div>
</template>

<style>
  *{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .backgroundImg{
    background-image: url('../src/assets/Fondos/sampleBackground.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
  }
  main{
    min-height: 100vh;
  }

/* MaterializeCSS */
  .datepicker-date-display{
    background-color: rgb(52, 52, 97) !important;
  }
  .datepicker-cancel, .datepicker-clear, .datepicker-today, .datepicker-done{
    color: rgb(52, 52, 97) !important;
  }
  .is-today{
    color: rgb(52, 52, 97) !important;
  }
  .is-selected{
    background-color: rgb(52, 52, 97) !important;
    color: white !important;
    font-size: 16px !important;
  }
  .dropdown-content span{
    color: rgb(52, 52, 97) !important;
  }
  input .select-dropdown{
    border-bottom: rgb(52, 52, 97) !important;
  }


</style>


