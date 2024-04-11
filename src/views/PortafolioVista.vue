<template>
<header>
    <Navigation/>
</header>

<main>
    <div class="tituloVista">
        <h2>Portafolio</h2>
        <p>Sistema de Gestion de Portafolio de Proyectos</p>
    </div>

    <div class="customContainer">

        <div class="row">
            <div class="col l12 m12 s12">
                <div class="card-panel hoverable portafolioContainer">

                    <div class="row selectoresBusqueda">
                        <!-- Datepickers -->
                        <div class="col l3 m5 s8 datePicker input-field">
                            <i class="material-icons prefix">calendar_month</i>
                            <input id="fechaInicio" type="text" class="datepicker">
                            <label for="fechaInicio">Inicio</label>
                        </div>
                        <div class="col l3 m5 s8 datePicker input-field">
                            <i class="material-icons prefix">calendar_month</i>
                            <input id="fechaFin" type="text" class="datepicker">
                            <label for="fechaFin">Finalización</label>
                        </div>
                    </div>


                    <div class="tablaEntradas">
                        <div class="col l12 m12 s12">
                            <div class="card-tabs">
                                    <ul class="tabs">
                                        <li class="tab" :class="{ 'active': showTabla === 'proyectos' }">
                                            <a @click="cambioTabla('proyectos')">Proyectos</a>
                                        </li>
                                        <li class="tab" :class="{ 'active': showTabla === 'requerimientos' }">
                                            <a @click="cambioTabla('requerimientos')">Requerimientos</a>
                                        </li>
                                        <li class="tab" :class="{ 'active': showTabla === 'solicitud' }">
                                            <a @click="cambioTabla('solicitud')">Solicitudes</a>
                                        </li>
                                    </ul>
                                </div>
                            <div class="z-depth-2 tablaPrincipal">
                                <div class="tableHeader">
                                    <div class="hide-on-med-and-down aitLogo">
                                        <h4 class="white-text">AIT_logo</h4>
                                    </div>
                                    <div class="busquedaOpciones">
                                        <a class="btn z-depth-0 transparent black-text" @click="openModal(0)">
                                            <i class="material-icons white-text prefix" style="font-size: 38px;">
                                                search
                                            </i>
                                        </a>
                                        <div class="input-field busquedaForm">
                                            <input id="buscarEntrada" type="text">
                                            <label for="buscarEntrada">Buscar</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="tableMain">
                                    <div v-if="showTabla === 'requerimientos'">
                                        <TablaRequerimientos/>
                                    </div>
                                    <div v-else-if="showTabla === 'solicitud'">
                                        <TablaSolicitud/>
                                    </div>
                                    <div v-else>
                                        <TablaProyectos/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row actionBtn right-align">
                        <div class="divider"></div>
                        <a class="btn btnNuevo" @click="openModal(1)">
                            <span>
                                <i class="material-icons">note_add</i>
                                Nuevo
                            </span>
                        </a>
                        <a class="btn btnReporte"  @click="openModal(2)">
                            <span>
                                <i class="material-icons">summarize</i>
                                Reporte
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </div>


    </div>

    <!-- Modal #1 Index === 0-->
    <div class="modal modalTarget" ref="mFiltro">
        <div class="modal-content modalMain">
            <h4>Filtrar busqueda</h4>
            <div class="divider"></div>
        </div>
        <div class="filtrosBusqueda">

        </div>
        <div class="modal-footer modalFooter">
            <div class="divider"></div>
            <a class="btn">
                Cancelar
            </a>
            <a class="btn">
                Aplicar
            </a>
        </div>
    </div>

    <!-- Modal #2  Index === 1-->
    <div class="modal modalTarget" ref="mNuevo" style="max-width: 450px">
        <div class="modal-content">
            <h4>Nueva entrada</h4>
            <p>¿Desea ingresar una nueva solicitud del proyecto?</p>
            <div class="right accionModal">
                <a class="btn">
                    <i class="material-icons">
                        task_alt
                    </i>
                    Aceptar
                </a>
            </div>
        </div>
    </div>

        <!-- Modal #3 Index === 2-->
        <div class="modal modalTarget" ref="mReporte" style="max-width: 450px">
        <div class="modal-content">
            <h4>Generacion de Informe</h4>
            <p>Se genera un informe de cada de las entradas en pantalla.</p>
            <div class="right accionModal">
                <a class="btn">
                    <i class="material-icons">
                        task_alt
                    </i>
                    Aceptar
                </a>
            </div>
        </div>
    </div>

</main>

<footer>

</footer>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import TablaProyectos from '../components/Tablas/TablaProyectos.vue'
import TablaRequerimientos from '../components/Tablas/TablaRequerimientos.vue'
import TablaSolicitud from '../components/Tablas/TablaSolicitud.vue'

export default {
    data(){
        return{
            modalInstances: null,
            showTabla: 'proyectos',
        };
    },
    components:{
        Navigation,
        TablaProyectos,
        TablaRequerimientos,
        TablaSolicitud,
    },
    mounted() {
        // Date pickers
        this.initDatepickers();

        // Selector
        this.initSelecter();

        // Modal
        this.initModals();
    },
    methods: {
        cambioTabla(showTabla){
                this.showTabla = showTabla;
        },

        // Date pickers
        initDatepickers(){
            const datepickerElement = document.querySelectorAll('.datepicker');
            const datepickerInstances = M.Datepicker.init(datepickerElement);
        },

        // Selector
        initSelecter(){
            const selectElement = this.$refs.select;
            this.selectInstance = M.FormSelect.init(selectElement);
        },

        // Modal
        initModals() {
            const modalElements = document.querySelectorAll('.modalTarget');
            this.modalInstances = [];

            modalElements.forEach(element => {
                this.modalInstances.push(M.Modal.init(element));
            });
        },
        openModal(index) {
            if (this.modalInstances[index]) {
                this.modalInstances[index].open();
            }
        },
    },
}
</script>

<style scoped>
/* Clases personalizadas */
.customContainer{
    margin: 20px 30px 0px 30px;
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

/* Portafolio */
.portafolioContainer{
    background-color: rgb(252, 248, 248);
    border: 1px solid rgba(28, 28, 28, 0.342);
}

/* MaterializeCSS*/
.selectoresBusqueda .datePicker label.active{
    color: rgb(52, 52, 97) !important;
    font-weight: 700;
}
.selectoresBusqueda .datePicker i{
    color: rgb(52, 52, 97) !important;
}
.selectoresBusqueda .input-field input[type=text]:focus {
    border-bottom: 1px solid rgb(52, 52, 97) !important;
    box-shadow: none !important;
}

.portafolioSelector .input-field label{
    color: rgb(52, 52, 97) !important;
}

.busquedaOpciones .input-field label {
    color: #e2e2e2 !important;
    transition: none !important;
}
.busquedaOpciones .input-field label.active {
    color: #e2e2e2 !important;
    visibility: hidden !important;
    transition: none !important;
}
.busquedaOpciones .input-field input[type=text] {
    border-bottom: 1px solid #e2e2e2 !important;
    box-shadow: none !important;
}
.busquedaOpciones .input-field input[type=text]:focus {
    border-bottom: 1px solid #e2e2e2 !important;
    box-shadow: none !important;
}
.busquedaOpciones input{
    color: #e2e2e2 !important;
}

/* Tabla Principal */
.tablaPrincipal{
    border: 1px solid rgba(28, 28, 28, 0.342);
}
/* Header Tabla */
.tableHeader{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(52, 52, 97);
    border: 1px solid #2a2a2a;
    max-height: 65px;
    width: 100%;
}
.tableHeader .aitLogo{
    margin-left: 25px;
}
.tableHeader .busquedaOpciones{
    display: flex;
    align-items: center;
    margin-right: 25px;

}
.busquedaOpciones{
    margin-left: 10px;
    gap: 10px;
}
.busquedaOpciones a{
    margin: 0px;
    padding: 0px;
}
.busquedaOpciones .busquedaForm{
    max-width: 150px;
}

/* tabs */
.tabs {
    background-color: rgba(252, 248, 248);
}
.tabs .tab a{
    color: rgb(52, 52, 97);
    font-weight: 700;
    letter-spacing: 1.5px;
    border-radius: 10px 10px 0 0;
}
.tabs .tab a:hover{
    color: rgb(92, 92, 144);
}
.tabs .active{
    border-radius: 10px 10px 0 0;
    background-color: rgba(52, 52, 97);
    
}
.tabs .active a{
    color: rgb(252, 248, 248);
    font-weight: 700;
    letter-spacing: 1.5px;
    border-radius: 10px 10px 0 0;
}

/* Botones */
.actionBtn .btn{
    margin: 20px 10px 0 0;
    background-color: rgb(52, 52, 97) !important;
}
.actionBtn .btn span{
    display: flex;
    gap: 5px;
}
.actionBtn .btn i {
    font-size: 24px;
}



</style>