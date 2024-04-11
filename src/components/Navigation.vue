<template>
  <div id="navigationComponente">

<!-- Navbar -->
    <div class="navBanner">
      <div class="logo1">
        <img src="../assets/Logos/topleft.png" class="brand-logo responsive-img left leftLogo">
      </div>
      <div class="logo2">
        <img src="../assets//Logos/topright.png" class="brand-logo responsive-img right rightLogo">
      </div>
    </div>
    <div class="containerDos">
      <nav>
        <div class="left">
          <button @click="toggleSidenav" class="hide-on-large-only navToggle">
            <i class="material-icons" style="font-size: 32px; margin-top: 5px">menu</i>
          </button>
        </div>
        <div class="center">
          <img src="../assets/Logos/pdvsa_logo_negro.png" class="hide-on-large-only smallNavLogo">
        </div>
        <div class="navContent">
          <ul>
            <div class="hide-on-med-and-down wideNav">
              <li><a ref="dropdown" data-target="logoutMenu"><i class="material-icons">more_vert</i></a></li>
              <li><router-link to="/dashboard"><span>Dashboard</span></router-link></li>
              <li><router-link to="/portafolio"><span>Portafolio</span></router-link></li>
              <li><router-link to="/user"><span>Usuario</span></router-link></li>
            </div>
          </ul>
        </div>
      </nav>
    </div>

<!-- sidenav -->
<ul class="sidenav sidenav-fixed" ref="sidenav">
<!-- Top -->
<div class="topSidenav">
      <li>
        <div class="bannerContainer">
          <img src="../assets/Logos/pdvsa_logo_rojo.png" class="pdvsaLogo">
        </div>
      </li>
      <li>
        <div class="userContainer">
          <div class="picContainer">
            <img src="../assets/Imagenes/user_pic.jpeg" class="circle z-depth-4 userPic" style="width: 84px; height: 84px;">
          </div>
          <div class="userName">
            <span><h5>Jose Marquez</h5></span>
          </div>
          <div class="userId">
            <span><h5>( {{ indicador }} )</h5></span>
          </div>
        </div>
      </li>
    </div>

<!-- Middle -->
    <div class="bottonSidenav">
      <li  class="subheader"><span>INFORMACIÓN:</span></li>

      <ul ref="collapsible" class="collapsible">
        <li>
          <div class="white-text collapsible-header">
          <i class="material-icons">notifications</i>
          <strong>Notificaciones</strong>
          <span class="new badge red">6</span></div>

          <div class="collapsible-body">
            <ul>
              <li><a href="#!" class="sidenav-close">Proyectos<span class="badge">3</span></a></li>
              <li><a href="#!" class="sidenav-close">Requisitos<span class="badge">2</span></a></li>
              <li><a href="#!" class="sidenav-close">Solicitudes<span class="badge">1</span></a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>

<!-- Botton -->
    <div class="middleSidenav">
      <li>
        <ul class="row">
          <li  class="subheader"><span>NAVEGACIÓN:</span></li>
          <div class="smallNav">
            <li>
              <button @click="movDashboard" class="btn col s6 m6 l6 sidenav-close">
                <i class="material-icons">dashboard</i>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button @click="movPortafolio" class="btn col s6 m6 l6 sidenav-close">
                <i class="material-icons">article</i>
                <span>Portafolio</span>
              </button>
            </li>
            <li>
              <button class="btn col s6 m6 l6 sidenav-close">
                <i class="material-icons">account_circle</i>
                <span>Usuario</span>
              </button>
            </li>
            <li>
              <button @click="cerrarSesion" class="btn col s6 m6 l6 sidenav-close">
                <i class="material-icons">logout</i>
                <span>Salir</span>
              </button>
            </li>
          </div>
        </ul>
      </li>
    </div>
</ul>

<!-- Logout Menu -->
    <ul id="logoutMenu" class="dropdown-content">
      <li class="divider"></li>
      <li><a @click="cerrarSesion" class="logout"><i class="material-icons">logout</i>Salir</a></li>
    </ul>

  </div>
</template>

<script>
export default {
  data: () => ({
    indicador: "",
  }),
  //Sticky Navbar
  mounted() {
    const nav = document.querySelector('nav');
    const navOffset = nav.offsetTop;

    window.addEventListener('scroll', () => {
      if(window.pageYOffset >= navOffset){
        nav.classList.add('sticky', 'pdvsaColor');
      }else{
        nav.classList.remove('sticky', 'pdvsaColor');
      }
    });

  //Dropdown Menu
  this.initDropdown();

  // Sidenav
  this.initSidenav();

  // Collapsible
  this.initCollapsible();

   // Datos de Usuario  
  this.obtenerDatosUsuarioAutenticado();

  },
  methods: {
    cerrarSesion() {
      this.indicador = "";
      localStorage.removeItem("indicador");
      this.$router.push("/");
    },
    initDropdown(){
      const dropdownElement = this.$refs.dropdown;
      this.dropdownInstance = M.Dropdown.init(dropdownElement, {
        hover: true,
        coverTrigger: false,
        constrainWidth: false,
      });
    },

    // Botones
    cerrarSesion() {
      this.indicador = "";
      localStorage.removeItem("indicador");
      this.$router.push("/");
    },

    // Sidenav
    initSidenav(){
      const sidenavElement = this.$refs.sidenav;
      this.sidenavInstance = M.Sidenav.init(sidenavElement);
    },

    toggleSidenav(){
      if(this.sidenavInstance.isOpen === true){
        this.sidenavInstance.close();
      }else{
        this.sidenavInstance.open();
      }
    },

    // Collapsible
    initCollapsible(){
      const collapsibleElement = this.$refs.collapsible;
      this.collapsibleInstance = M.Collapsible.init(collapsibleElement);
    },

    // Datos de Usuario
    obtenerDatosUsuarioAutenticado() {
      this.indicador = localStorage.getItem("indicador") || false;
    },

    // Botones
    cerrarSesion() {
      this.indicador = "";
      localStorage.removeItem("indicador");
      this.$router.push("/");
    },
    movDashboard(){
      this.$router.push('/dashboard');
    },
    movPortafolio(){
      this.$router.push('/portafolio');
    },
  }
};
</script>

<style scoped>
/* Banner */
  .navBanner{
    display: flex;
    justify-content: space-between;
    max-height: 55px;
  }
  .leftLogo{
    margin: 5px 0 0 10px;
    max-height: 40px;
  }
  .rightLogo{
    margin-right: 10px;
    max-height: 55px;
  }

  /* Navbar */
  .sticky{
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  .navBanner{
    background-color: rgb(52, 52, 97);
  }
  nav {
    background-color: rgba(252, 248, 248);
    border-bottom: 1px solid rgba(0, 0, 0, 0.406);
    max-width: auto;
    max-height: 64px;
  }
  .navToggle{
    border: none;
    padding : 0;
    background: none;
    cursor: pointer;
    outline: none;
    margin-left: 20px;
  }
  .smallNavLogo{
    max-height: 40px;
    height: auto;
    margin-top: 10px;
    margin-left: -40px;
  }
  .navContent{
    margin-left: 20px;
  }
  .navContent span{
    font-weight: 700;
    color: rgb(0, 0, 0);
  }
  li a i{
    color: black;
    height: 64px;
    font-size: 28px;
    padding-top: 5px;
  }

/* Logout */
  .dropdown-content{
    background-color: rgba(252, 248, 248);
  }
  .dropdown-content .userInfo{
    font-size: 12px;
  }
  .dropdown-content .logout{
    font-size: 14px;
    color: black;
  }
  .dropdown-content i{
    font-size: 20px;
    margin: 0px;
    padding: 0px;
  }
  /* Sidenav CSS */
  .sidenav{
    background-color: rgb(52, 52, 97);
    border: 0 1px 0 0 solid rgba(0, 0, 0, 0.404);
    z-index: 1000;
  }


/* Top sidenav */
  .bannerContainer{
    height: 114px;
    display: flex;
    align-items: center;
    background-color: rgb(252, 248, 248);
    border-bottom: 2px inset rgb(133, 133, 219);
  }
  .pdvsaLogo{
    margin-left: 45px;
  }
  .userContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -5px;
  }
  .picContainer{
    margin-top: -25px;
  }
  .userPic{
    border: 2px inset rgb(133, 133, 219);
  }
  .userName{
    margin-top: -30px;
  }
  .userId{
    margin-top: -25px;
  }
  .userName h5 {
    color: rgb(252, 248, 248);
    font-weight: 1000;
    letter-spacing: 1px;
  }
  .userId h5{
    font-size: 18px;
    color: rgb(252, 248, 248);
    font-weight: 1000;
    letter-spacing: 1px;
  }
  .topSidenav  button{
    background: none;
    color: white;
    border: none;
    padding-left: 20px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  .bottonSidenav ul .dropdown-content{
    background-color: blueviolet;
  }

/* Middle sidenav */
  .middleSidenav{
    margin-top: 20px;
  }
  .subheader span{
    margin-left: 10px;
    font-size: 14px;
    color: rgba(252, 248, 248, 0.748);
    letter-spacing: 1px;
  }
  .smallNav .btn {
    background-color: rgb(128, 128, 230);
    border-radius: 0px;
  }
  .smallNav .btn:hover{
    background-color: rgb(97, 97, 165);
  }
  .smallNav button{
    display: flex;
    align-items: center;
  }
  .smallNav button i {
    font-size: 25px;
    margin-right: 10px;
  }

/*Small screens */
  @media only screen and (max-width: 430px){
    .leftLogo, .rightLogo{
      height: 30px;
      margin: 0px;
    }
    .pdvsaLogo{
      height: 30px;
    }
  }
</style>

