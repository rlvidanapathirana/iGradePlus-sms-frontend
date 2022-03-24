<template>
    <div class="col-10 p-0" style="z-index: 2000" >
       <nav class="navbar navbar-expand-md navbar-light bg-white text-dark navsty shadow" style="height:60px; width:1170px;margin-left:47px;top:20px;">

                <div class="col-md-4" style="margin-left:460px;">
                      <userAvatar />
                    </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" @click="toggle"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                </div>
                 <div>
                     
                    <router-link to="/about"><button class="btn btn-white text-dark"><i class="fas fa-circle-user"></i></button></router-link>
                </div>
            
        </nav>
        <div class="p-5 dash-content overflow-auto" style="z-index: 100">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import fullscreen from 'vue-fullscreen'
    import Dashboard from '../views/Dashboard'
    import UserAvatar from '../components/UserAvatar.vue'

    import Vue from 'vue'
    Vue.use(fullscreen)
    export default {
    data() {
      return {
        fullscreen: false
      }
    },
    methods: {
      toggle () {
        Dashboard.$refs['fullscreen'].toggle() // recommended
        // Dashboard.fullscreen = !Dashboard.fullscreen // deprecated
      },
      fullscreenChange (fullscreen) {
        Dashboard.fullscreen = fullscreen
      }
    },
    components: {
      userAvatar: UserAvatar
    }
  }
</script>


<style scoped>
.dash-content{
  height: calc(100vh - 80px);
}
.navsty {
  border-radius:20px;
  margin-left:20px;
  margin-top:-10px;
  z-index: 2000;
}
</style>
