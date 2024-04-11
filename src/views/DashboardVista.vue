<template>
<header>

  <Navigation/>

</header>

<main>

<!-- Titulo Vista -->
<div class="tituloVista">
  <h2>Dashboard</h2>
  <p>Sistema de Gestion de Portafolio de Proyectos</p>
</div>

<div class="customContainer">

<!-- Seccion Charts-->
<div class="row seccionChart">

  <div class="col l8 m8 s12 chartCards proyectosChart">
    <div class="card grey lighten-5 hoverable">
      <div class="card-content">
        <div class="cardTitle">
          <i class="material-icons" style="font-size: 32px;">analytics</i>
          <span>Proyectos Asignados</span>
        </div>
        <div class="divider"></div>
        <ProyectoChart/>
      </div>
    </div>
  </div>

  <div class="col l4 m4 s12 monthCalendar">
    <div class="card hoverable">
      <MonthCalendar/>
    </div>
  </div>

</div>

<!-- Seccion Metricas -->
<div class="row seccionMetricas">

  <div class="col l4 m8 offset-m2 s12 chartCards estadosProyectos">
    <div class="card hoverable">
      <div class="card-content">
        <div class="cardTitle">
          <i class="material-icons">data_usage</i>
          <span>Estados de Proyecto</span>
        </div>
        <div class="divider"></div>
        <div class="chartContainer" style="height: auto;">
          <SemiCircle/>
        </div>
        <div class="row chartMetrics">
          <div class="col l6 m6 s6">
            <span class="btn green lighten-2">Completados</span>
          </div>
          <div class="col l6 m6 s6">
            <span class="btn blue lighten-2">Ejecución</span>
          </div>
        </div>
        <div class="row chartMetrics">
          <div class="col l6 m6 s6">
            <span class="btn amber lighten-2">Revisión</span>
          </div>
          <div class="col l6 m6 s6">
            <span class="btn red lighten-1">Cancelados</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col l4 m6 s12 infoCard totalProyectos">
    <div class="card horizontal --border teal lighten-2 hoverable">
      <div class="cardContent">
        <div class="col l12 m12 s12 cardInfo">
            <i class="material-icons white-text cardIcon" style="font-size: 92px;">folder_open</i>
          <div class="center cardMetrics">
            <span class="white-text cardValue">25</span>
            <span class="white-text cardTitle">Proyectos</span>
          </div>
        </div>
        <div class="col l12 m12 s12 cardAction">
          <a @click="movPortafolio()">
            <span class="teal-text">Ver proyectos</span> 
            <i class="material-icons right teal-text">navigate_next</i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col l4 m6 s12 infoCard totalTareas">
    <div class="card horizontal --border indigo lighten-2 hoverable">
      <div class="cardContent">
        <div class="col l12 m12 s12 cardInfo">
            <i class="material-icons white-text cardIcon" style="font-size: 92px;">task</i>
          <div class="center cardMetrics">
            <span class="white-text cardValue">108</span>
            <span class="white-text cardTitle">Tareas</span>
          </div>
        </div>
        <div class="col l12 m12 s12 cardAction">
          <a @click="movPortafolio()">
            <span class="indigo-text">Ver tareas</span> 
            <i class="material-icons indigo-text">navigate_next</i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col l4 m6 s12 infoCard totalRequerimientos">
    <div class="card horizontal --border deep-orange lighten-2 hoverable">
      <div class="cardContent">
        <div class="col l12 m12 s12 cardInfo">
            <i class="material-icons white-text cardIcon" style="font-size: 92px;">format_list_numbered</i>
          <div class="center cardMetrics">
            <span class="white-text cardValue">25</span>
            <span class="white-text cardTitle">Requerimientos</span>
          </div>
        </div>
        <div class="col l12 m12 s12 cardAction">
          <a @click="movPortafolio()">
            <span class="deep-orange-text">Ver hojas de requerimientos</span> 
            <i class="material-icons deep-orange-text">navigate_next</i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="col l4 m6 s12 infoCard totalSolicitudes">
    <div class="card horizontal --border  amber lighten-1 hoverable">
      <div class="cardContent">
        <div class="col l12 m12 s12 cardInfo">
            <i class="material-icons white-text cardIcon" style="font-size: 92px;">description</i>
          <div class="center cardMetrics">
            <span class="white-text cardValue">219</span>
            <span class="white-text cardTitle">Solicitudes</span>
          </div>
        </div>
        <div class="col l12 m12 s12 cardAction">
          <a @click="movPortafolio()">
            <span class="amber-text">Ver solicitudes</span> 
            <i class="material-icons amber-text">navigate_next</i>
          </a>
        </div>
      </div>
    </div>
  </div>

</div>

</div>
</main>


</template>

<script>
import Navigation from '../components/Navigation.vue';
import ProyectoChart from '../components/Charts/proyectosChart.vue';
import SemiCircle from '../components/Charts/semicircleChart.vue';
import MonthCalendar from '../components/MonthCalendar.vue'

export default {
  components: {
    Navigation,
    ProyectoChart,
    SemiCircle,
    MonthCalendar,
  },
  methods: {
    movPortafolio(){
      this.$router.push('/portafolio');
    },
  }
};
</script>

<style>
/* Clases personalizadas */
.customContainer{
    margin: 20px 30px 0 30px;
}

/*Configuracion General*/
  header, main, footer {
    padding-left: 300px;
  }
  @media only screen and (max-width : 992px) {
    header, main, footer {
      padding-left: 0;
    }
  }
  .tituloVista{
    margin: 0px 0px 20px 0px;
    padding: 30px 0 0 20px;
  }
  .tituloVista h2{
    letter-spacing: 2px;
    font-weight: 550;
    margin: 0px;
    padding: 0px;
  }
  .tituloVista p {
    margin-top: 10px;
    margin-left: 2px;
    font-size: 18px;
    letter-spacing: 2px;
  }
/* chartCards */
  .chartCards .chartContainer{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
  .chartCards .cardTitle{
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
  }
  .chartCards .cardTitle span{
    margin-left: 10px;
    letter-spacing: 1.5px;
  }
  .chartCards .btn{
    font-size: 12px;
  }



/* infoCards */
  .infoCard .cardContent{
    width: 100%;  

  }
  .infoCard .cardInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }
  .infoCard .cardIcon{
    margin-top: 10px;
  }
  .infoCard .cardValue{
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
  .infoCard .cardTitle{
    font-size: 18px;
    font-weight: 600;
    margin-top: -5px;
    color: rgba(21, 20, 20, 0.776)
  }
  .infoCard .cardMetrics{
    display: flex;
    flex-direction: column;
    margin-right: 20px;
  }
  .infoCard .cardAction{
    margin-top: 5px;
    background-color: rgb(255, 255, 255);
  }
  .infoCard .cardAction a{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .infoCard .cardAction:hover{
    background-color: rgba(255, 255, 255, 0.879);
    transition: 0.5s;
  }
  .infoCard .cardAction a span, i{
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

</style>