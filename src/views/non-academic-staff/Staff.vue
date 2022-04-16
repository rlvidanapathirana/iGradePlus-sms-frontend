<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4>All Non Academic Staff</h4>

                <router-link to="add-staff">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add Non Academic Staf</button>
                </router-link>


                    <div class="mt-3">
                    <form class="form-inline my-2 my-lg-0">
                        <input v-model="search" class="form-control w-75 p-3 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>

                <div class="mt-3">
                    <table class="table table-hover overflow-auto w-100">
                        <thead>
                            <tr>
                            <th scope="col">Emp ID</th>
                            <th scope="col">Name with Initial</th>
                            <!-- <th scope="col">Full Name</th> -->
                            <th scope="col">Address line1</th>
                            <th scope="col">Address line2</th>
                            <th scope="col">city</th>
                            <th scope="col">Join date</th>
                            <th scope="col">Mobile number</th>
                            <!-- <th scope="col">Land number</th> -->
                            <!-- <th scope="col">Email</th> -->
                            <!-- <th scope="col">Gender</th> -->
                            <th scope="col">DOB</th>
                            <th scope="col">NIC</th>
                            <!-- <th scope="col">Department</th>
                            <th scope="col">Special</th> -->
                            <!-- <th scope="col">Gardian name</th>
                            <th scope="col">Gardian type</th>
                            <th scope="col">address3</th>
                             <th scope="col">address4</th>
                            <th scope="col">city of gardian</th>
                            <th scope="col">Gardian number</th> -->
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(staff, index) in filterStaff" :key="index">
                                <th scope="row">{{staff._id}}</th>
                                <td>{{staff.nameInitial}}</td>
                                <!-- <td>{{staff.fullName}}</td> -->
                                <td>{{staff.address1}}</td>
                                <td>{{staff.address2}}</td>
                                <td>{{staff.city}}</td>
                                <td>{{staff.date}}</td>
                                <td>{{staff.Mnumber}}</td>
                                <!-- <td>{{staff.gender}}</td> -->
                                <td>{{staff.dob}}</td>
                                <td>{{staff.nic}}</td>
                                <!-- <td>{{staff.department}}</td>
                                <td>{{staff.special}}</td> -->
                                <td>
                                    <router-link :to="'/Edit-Employee/'+staff.id ">
                                            <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    </router-link>

                                    <button class="btn my-0 py-0" @click="deleteItem(staff)"><i class="fa fa-trash"/></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default{
        data(){
            return {

                 allStaff:[],
                 search: ''
            }
         },


        created(){
              this.$http.get('http://localhost:8090/api/staff').then
              (function(response){

                console.log(response);
                this.allStaff = response.body;

                });
        },

        methods:{
            deleteItem(staff) {
                console.log(staff);
                swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this record!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    this.$http.delete("http://localhost:8090/api/staff/" + staff._id,
                    //Tocken
                    {
                     headers: {
                     token:
                         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyM2QzZmI2NTc1ZjgwYmMwN2Q4YjY1MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODIwNjIwOCwiZXhwIjoxNjQ4NjM4MjA4fQ.P2-cQGCJEbmIVM_YH8zJ_6LR_vw4cU6IE1uoVTJ1oFc"
                 }}

                 ).then(
                        function(response) {

                            console.log(response);
                        }
                    );
                    swal(staff._id + " Employee successfully deleted !", {
                    icon: "success",
                    });
                }
                });
            }
            },


        //Search
            computed: {
                filterStaff: function() {
                return this.allStaff.filter((items)=> {
                    return   items.nameInitial.match(this.search) ||
                             items.address1.match(this.search) ||
                             items.address2.match(this.search) ||
                             items.city.match(this.search) ||
                             items.date.match(this.search) ||
                             items.Mnumber.match(this.search );
                })
            }
        }
    }



</script>

<style scoped>

</style>
