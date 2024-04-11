<template>
    <header>
        <Navigation/>
    </header>

    <main>
        <div class="customContainer">
            <div class="row">
                <div class="col l12 m12 s12">
                    <div class="card-panel hoverable fichaEntrada">
                        <div class="card-content fichaTitle">
                            <h4 class="card-title">
                                Proyecto Prueba
                                <a ref="dropdown" data-target="entradaOpciones" class="btn-flat right">
                                    <i class="material-icons" style="font-size: 32px;">
                                        more_vert
                                    </i>
                                </a>
                            </h4>
                            <div class="descripcionProyecto" style="margin-top: 20px">
                                <h6>Descripción:</h6>
                                <blockquote style="max-width: 1000px">
                                    <p>El proyecto permitirá atender las incidencias y mejoras de código y funcionalidades que surjan de la operatividad del SCADA Miranda R2 a nivel nacional, ya sea donde se encuentra operativo o en los proyectos de migración e implantación que se tengan planificadas.</p>
                                </blockquote>
                            </div>
                        </div>
                        <div class="card-tabs">
                            <ul class="tabs">
                                <li class="tab" :class="{ 'active': tab === 'resumen' }">
                                    <a @click="cambioTab('resumen')">Resumen</a>
                                </li>
                                <li class="tab" :class="{ 'active': tab === 'tareas' }">
                                    <a @click="cambioTab('tareas')">Tareas</a>
                                </li>
                                <li class="tab" :class="{ 'active': tab === 'requerimientos' }">
                                    <a @click="cambioTab('requerimientos')">Requerimientos</a>
                                </li>
                                <li class="tab" :class="{ 'active': tab === 'foro' }">
                                    <a @click="cambioTab('foro')">Discución</a>
                                </li>
                            </ul>
                        </div>
                        <br>
                        <div v-if="tab === 'tareas'">
                            tareas
                            <!-- <TabTareas/> -->
                        </div>
                        <div v-else-if="tab === 'requerimientos'">
                            requerimientos
                        </div>
                        <div v-else-if="tab === 'foro'">
                            Foro
                        </div>
                        <div v-else>
                            <TabResumen/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!-- Dropdown -->
<ul id="entradaOpciones" class="dropdown-content">
    <div class="acctionButton dropdown">
        <li>
            <a>
                <i class="material-icons">summarize</i>
                Reporte
            </a>
        </li>
        <li>
            <a>
                <i class="material-icons">edit</i>
                Editar
            </a>
        </li>
        <li>
            <a>
                <i class="material-icons">delete</i>
                Eliminar
            </a>
        </li>
    </div>
</ul>

    </main>

    <footer>

    </footer>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import TabResumen from '../components/TabsFichaEntrada/TabResumen.vue'
// import TabTareas from '../components/TabsFichaEntrada/TabTareas.vue'

export default {
    data(){
        return{
            tab: 'resumen'
        }
    },
    components: {
        Navigation,
        TabResumen,
        // TabTareas,
    },
    mounted() {
        this.initDropdown();
    },
    methods: {
        cambioTab(nuevaTab){
            this.tab = nuevaTab;
        },

        //Dropdown
        initDropdown(){
            const dropdownElement = this.$refs.dropdown;
            this.dropdownInstance = M.Dropdown.init(dropdownElement, {
                hover: false,
                coverTrigger: false,
                constrainWidth: false,
                alignment: 'right'
            });
    },
    }
};
</script>

<style scoped>
/* General */
.customContainer{
    margin: 20px 30px 0px 30px;
}

/* Carta Principal */
.fichaEntrada{
    background-color: rgb(252, 248, 248);
}
blockquote{
    border-left: 5px solid rgb(52, 52, 97);
}

/* Tabs */
.fichaEntrada ul{
    background-color: transparent !important;
}
.tabs .tab a{
    color: rgb(0, 0, 0);
    font-weight: 600;
}
.tabs .tab a:hover{
    color: rgb(96, 96, 149);
}
.tabs .active a{
    color: rgb(52, 52, 97);
    border-bottom: 2px solid rgb(52, 52, 97);
}
.dropdown{
    background-color: rgb(252, 248, 248);
}
.dropdown a{
    color: rgb(52, 52, 97);
}

</style>