<template>

<div class="accordion col-2 m-0 p-0 bg-dark" data-bs-spy="scroll" id="accordionExample">
  <nav class="navbar navbar-dark m-0 p-0 w-100">
    <a class="navbar-brand text-centre  m-0 p-3 w-100" href="#">
      <img :src="require('../assets/logo.png')" height="40" alt="vgjvjhvj"/>
    </a>
  </nav>

  <div class="accordion-item">

    <router-link to="/home">
    <button class="btn btn-dark w-100 rounded-0 text-left" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <i class="fas fa-home"></i>
      <span>Dashboard</span>
    </button>
    </router-link>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed btn-dark"   type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <i class="fas fa-user-graduate" ></i>
        <span>Students</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/student"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Student</button></router-link>
          <router-link to="/add-student"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Student</button></router-link>
          <router-link to="/student-report"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Report</button></router-link>

        </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <i class="fas fa-chalkboard-teacher"></i>
        <span>Teachers</span>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <router-link to="/teacher"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">All Teacher</button></router-link>
         <router-link to="/add-teacher"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Teacher</button></router-link>
         <router-link to="/report-teacher"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Teacher Report</button></router-link>
      </div>
    </div>
  </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          <i class="fas fa-user-tie"></i>
          <span>Non Academic Staff</span>
        </button>
      </h2>

      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/staff"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Non Academic Staf</button></router-link>
          <router-link to="/add-staff"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add Non Academic Staf</button></router-link>
          <router-link to="/report-staff"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Report</button></router-link>
        </div>
    </div>
  </div>

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          <i class="fas fa-clock"></i>
          <span>School Events</span>
        </button>
      </h2>

      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <router-link to="/event"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">School Events</button></router-link>
          <router-link to="/add-event"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Add School Events</button></router-link>
          <router-link to="/report-Event"><button type="button" class="btn btn-light w-100 rounded-0 pl-4 text-left">Report</button></router-link>
        </div>
    </div>
  </div>


</div>


</template>

<script>

</script>


<style scoped>
.navbar-brand{
  text-align: center;
}
.accordion-button{
    padding: 15px 10px;
    border: 0;
    outline: none;
    color: white;
}
.accordion-body,.accordion-collapse{
    padding: 0;
    border: 0;



}

i{
  width: 25px;
  margin: 0px 10px 0px 5px;

}
.btn i{
  width: 25px;
  margin: 0px 5px 0px 5 px;
}
.wid{
  height: 500px;
}
</style>
