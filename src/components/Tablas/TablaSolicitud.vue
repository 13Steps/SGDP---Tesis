<template>
    <div class="table-container">
        <table class="highlight fixedTable">
            <thead>
                <tr class="tableHead">
                    <th>Titulo</th>
                    <th>Estado</th>
                    <th>Solicitante</th>
                    <th>Descripcion</th>
                    <th>Objetivo</th>
                    <th>Alcance</th>
                    <th>Fecha de Creacion</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                <tr class="tableBody">
                    <td>Miranda R2</td>
                    <td>aaa</td>
                    <td>PDVSA</td>
                    <td>dgdgf</td>
                    <td>dff</td>
                    <td>fgg</td>
                    <td>date</td>
                    <td class="actionButtons">
                        <a class="btn-floating" @click="verFicha"><i class="material-icons">visibility</i></a>
                        <a class="btn-floating"><i class="material-icons">edit</i></a>
                        <a class="btn-floating"><i class="material-icons">delete</i></a>
                    </td>
                </tr>
            </tbody>
            <br>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        verFicha(){
            this.$router.push('/fichaEntrada');
        },
    }
};
</script>

<style scoped>
.table-container {
    overflow-x: auto;
}

.fixedTable {
    padding: 8px;
    border-collapse: collapse;
    width: 100%;
}
.tableHead th {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    background-color: #e1dfdf;
    position: sticky;
    top: 0; 
    z-index: 1;
}

.tableBody td {
    padding: 8px;
    text-align: center;
    border: 1px solid #ddd;
    max-width: 250px;
}
.btn-floating i{
    font-size: 16px;
}
.btn-floating{
    background-color: rgb(52, 52, 97);
    margin: 0 2px 0 2px;
}
.btn-floating:hover{
    background-color: rgb(98, 98, 155);
}
</style>