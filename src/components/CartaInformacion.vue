<template>
    <div class="card horizontal z-depth-2 indigo lighten-5">
        <div class="fichasContainer">
            <div class="fichaInformativa hoverable ">
                <span>
                    <i class="material-icons">
                        area_chart
                    </i>
                    Linea de Negocios:
                </span>
                <h6 class="center">Gas</h6>
            </div>
            <div class="fichaInformativa hoverable ">
                <span>
                    <i class="material-icons">
                        area_chart
                    </i>
                    Tipo de Proyecto:
                </span>
                <h6 class="center">Desarrollo de Software</h6>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.fichasContainer{
    display: flex;
    width: 100%;
}
.fichaInformativa{
    width: 100%;
    padding: 20px;
    border: 1px solid black;
}
.fichaInformativa span{
    font-size: 18px;
    font-weight: 600;
    align-items: center;
    gap: 5px;
}


</style>