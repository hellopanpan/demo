<template>
  <div id="app">
    <nav class="navbar nav-default nav-fixed-up" style="background:#eee">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">
            <img src="./assets/images/logo.png" class="img-responsive" style="max-height:100%;max-width:100%;display:inline-block" ><span class="navbar-title" style="color:#000">Panpan</span>
          </a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav-collapse">
            <span class="sr-only">切换导航</span>
            <span class="icon-bar"></span>
             <span class="icon-bar"></span>
              <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse navbar-left" id="nav-collapse" >
          <ul class="nav navbar-nav">
            <li class="active dropdown">
              <div class="btn-group">
                  <button class="btn navbar-btn" style="background:none"><router-link  to='/home'><span class="glyphicon glyphicon-home"></span> 首页</router-link></button>
                  <button class="btn navbar-btn" data-toggle="dropdown" style="background:none"><span class="caret "  ></span></button>
                    <ul class="dropdown-menu">
                        <li><a href="">aaa</a></li>
                         <li><a href="">aaa</a></li>
                          <li><a href="">aaa</a></li>
                           <li><a href="">aaa</a></li>
                    </ul>
              </div>
            </li>
             <li><router-link  to='/name'><span class="glyphicon glyphicon-list"></span>内容区</router-link></li>
            <li><router-link  to='/person'><span class="glyphicon glyphicon-search"></span> 个人中心</router-link></li>
          </ul>
        </div>
        <form class="navbar-form navbar-right">
          <input type="input" class="form-control">
          <div class="input-group ">
              <span class="input-group-btn">
                <button class="btn"><span class="glyphicon glyphicon-zoom-in"></span></button>>
              </span>
              
          </div>
        </form>
      </div>
     </nav>
    <transition name="fade"><router-view :totle="totle"></router-view></transition>
    <div class="footer navbar">
	   
  	</div>
 </div>
</template>

<script>
import Navview from './components/nav.vue'
import ContentView from './components/content.vue'  
import FllowView from './components/fllowView.vue' 
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showif:true,
      totle:"App.vue上的数据",
    }
  },
  components:{ 
      Navview,
      ContentView,
      FllowView,
      
  },
  methods:mapActions(['increment',"decrement"]),
  computed:mapGetters(['count']),
  mounted(){
    
  }

}
</script>

<style>


</style>
