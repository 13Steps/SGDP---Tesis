<template>
    <div id="tabResumen">

        <div class="row">
            <div class="col l3 m5 offset-m1 s6">
                <div class="card cartaFecha teal z-depth-2 hoverable">
                    <div class="cardContent">
                        <div class="cardIcon">
                            <i class="material-icons">
                                calendar_month
                            </i>
                        </div>
                        <div class="cardInfo center">
                            <h4>24</h4>
                            <span>Abril 2024</span>
                        </div>
                    </div>
                    <div class="white teal-text center cardLabel">
                        <h6>Fecha de Inicio</h6>
                    </div>
                </div>
            </div>
            <div class="col l3 m5 s6">
                <div class="card cartaFecha  indigo lighten-2 z-depth-2 hoverable">
                    <div class="cardContent">
                        <div class="cardIcon">
                            <i class="material-icons">
                                calendar_month
                            </i>
                        </div>
                        <div class="cardInfo center">
                            <h4>31</h4>
                            <span>Mayo 2026</span>
                        </div>
                    </div>
                    <div class="white indigo-text center cardLabel">
                        <h6>Fecha de Finalización</h6>
                    </div>
                </div>
            </div>
            <div class="col l6 hide-on-med-and-down">
                <CartaInformativa/>
            </div>
        </div>

        <div class="row">
            <div class="col l4 m8 offset-m2 hide-on-small-only">
                <div class="card miembrosEntrada">
                    Listado de los trabajadores
                </div>
            </div>

            <div class="col l8 m12 s12">
                <div class="card ganttContainer">
                    Contenedor del Gantt
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col l6 m6 s12">
                <div class="card-panel completacionChart">
                    Contiene chart de real vs planificado
                </div>
            </div>
            <div class="col l6 m6 s12">
                <div class="card-panel costoChart">
                    Chart de Costo de proyecto
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CartaInformativa from '../CartaInformacion.vue';

export default {
    components:{
        CartaInformativa,
    },
    data() {
        return {
            
        }
    },
    mounted() {
        // Collapsible
        this.collapsibleInit();    
    },
    methods: {
        collapsibleInit(){
            const collapsibleElement = document.querySelectorAll('.collapsible');
            this.collapsibleInstances = M.Collapsible.init(collapsibleElement);
        }
    },

}

</script>

<style scoped>
.cartaFecha .cardContent{
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.cartaFecha .cardIcon i{
    padding: 20px 0 0 0;
    color: white;
    font-size: 74px;
    font-weight: bolder;
}

.cartaFecha .cardInfo{
    display: flex;
    flex-direction: column;
    color: white;
}

.cartaFecha .cardInfo h4{
    font-size: 36px;
    margin-bottom: 0;
}

.cartaFecha .cardLabel h6{
    font-weight: 800;
    
}



</style>
