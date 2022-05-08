<template>
<div>
  <div class="sidenav">
        <div class="login-main-text">
            <h2>Application<br> Register Page</h2>
            <p>register from here to access.</p>
        </div>
      </div>
      <div class="main">
        <div class="col-md-3 col-sm-12">
            <div class="login-form">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                    <label>User Name</label>
                    <input type="text" class="form-control" placeholder="User Name" v-model="userName">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="Email Address" v-model="email">
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-secondary">Register</button>
                <router-link to="login">
                <div>
                if you have an account and you want to <button>Login</button>
                </div> </router-link>
            </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'register',
    data : function (){
        return{
            userName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit : function (){
                const user = {
                        username:this.userName,
                        email : this.email,
                        password : this.password
                }
                console.log(user);
                this.$http.post('http://localhost:8090/api/auth/register', user).then(function (response) {
                      swal("User Account Created", "THANK YOU!", "success");
                });
        }
    }
}
</script>

<style scoped>
body {
    font-family: "Lato", sans-serif;
}
.main-head{
    height: 150px;
    background: #FFF;
}
.sidenav {
    height: 100%;
    background-color: #000;
    overflow-x: hidden;
    padding-top: 20px;
}
.main {
    padding: 0px 10px;
}

@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
}

@media screen and (max-width: 450px) {
    .login-form{
        margin-top: 10%;
    }

    .register-form{
        margin-top: 10%;
    }
}

@media screen and (min-width: 768px){
    .main{
        margin-left: 40%;
    }

    .sidenav{
        width: 40%;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
    }

    .login-form{
        margin-top: 80%;
    }

    .register-form{
        margin-top: 20%;
    }
}


.login-main-text{
    margin-top: 20%;
    padding: 60px;
    color: #fff;
}

.login-main-text h2{
    font-weight: 300;
}

.btn-black{
    background-color: #000 !important;
    color: #fff;
}
</style>
