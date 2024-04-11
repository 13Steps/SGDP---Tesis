<template>
    <div id="loginVista">
<!-- Bannner -->
            <div class="row">
                <div class="bannerPagina">
                    <img src="../assets/Logos/topleft.png" class="brand-logo responsive-img left leftLogo">
                    <img src="../assets//Logos/topright.png" class="brand-logo responsive-img right rightLogo">
                </div>
            </div>
        
        
<!-- Login -->
        <div class="container">
            <div class="row login">
                <div class="col l8 offset-l2 m8 offset-m2 s8 offset-s2">
                    <div class="row z-depth-3 card">
                        <div class="col l5 m5 s12 imgLogin">
                        
                        </div>
                        <div class="col l7 m7 s12 card-content">
                            <div class="formLogin">
                                <span class="card-title center">
                                    <h4>
                                        Iniciar Sesion
                                    </h4>
                                    <div class="divider"></div>
                                </span>
                                <form class="formLogin">
                                    <div class="input-field userLogin">
                                        <i class="material-icons prefix">account_circle</i>
                                        <input v-model="indicador" id="username" type="text" class="validate" autocomplete="off">
                                        <label for="username">Usuario</label>
                                    </div>
                                    <div class="input-field passwordLogin">
                                        <i class="material-icons prefix">lock</i>
                                        <input v-model="password" id="password" type="password" class="validate" autocomplete="off">
                                        <label for="password">Contraseña</label>
                                    </div> 
                                    <button @click="iniciarSesion" class="btn-flat white-text loginButton" type="submit" name="action">
                                        Iniciar Sesión
                                    </button>
                                </form>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginVista',
    data : () => ({
        indicador : '',
        password : ''
    }),
    methods: {
        async iniciarSesion() {

            const formData = {
                indicador : this.indicador,
                password : this.password
            }

            localStorage.setItem('indicador', formData.indicador);
            this.$router.push('/dashboard')

            // la api para autenticarme
            // const resp = await fetch('localhos:3000/api/autenticacion', formData);
            // const dataResp = await resp.json();

            // if(dataResp.status == 200) {
                // localStorage.setItem('indicador'     , formData.indicador);
                // this.$router.push('/proyectos')
            // }


            // si pasa le das acceso

            // sino una alerta

        }
    }
}
</script>

<style scoped>
#loginVista{
    background: rgb(244,28,28);
    background: linear-gradient(166deg, rgba(244,28,28,1) 38%, rgba(166,4,4,1) 69%, rgba(0,0,0,0.850577731092437) 100%);
    width: 100vw;
    height: 100vh;
}

/* Bannner */
.bannerPagina{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(52, 52, 97);
    border: 1px solid rgba(24, 24, 24, 0.603);
}
.bannerPagina img{
    max-width: 100%;
    max-height: 100%;
}
.bannerPagina .leftLogo{
    max-height: 50px;
    padding: 4px;
}
.bannerPagina .rightLogo{
    max-height: 50px;

}
.rightLogo{
    background-color: rgb(254, 254, 254);
}

/* Login */
.login{
    margin-top: 90px;
}
.btn-flat{
    background-color: rgb(52, 52, 97);
}
.card{
    background-image: url('../assets/Imagenes/OilTowers.jpeg');
}
.card-content{
    background-color: rgb(254, 254, 254);
}
.formLogin{
    margin-top: 25px;
}
.formLogin .input-field{
    max-width: 250px;
}
.formLogin .loginButton{
    margin-top: 40px;
}
.input-field .active{
    color: rgb(52, 52, 97) !important;
}
.input-field input[type=text]:focus, .input-field input[type=password]:focus{
    border-bottom: 2px solid rgb(52, 52, 97) !important;
    box-shadow: none !important;
    transition: none !important;
}
</style>    