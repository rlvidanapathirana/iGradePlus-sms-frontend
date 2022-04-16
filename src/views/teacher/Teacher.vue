<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4> Teacher List </h4>

                <router-link to="add-student">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add new Teacher</button>
                </router-link>

                <div class="mt-3">
                    <form class="form-inline my-2 my-lg-0">
                        <input v-model="search" class="form-control w-75 p-3 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>


                <div class="mt-3">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Address Line1</th>
                            <th scope="col">City</th>
                            <th scope="col">First Name Emergency</th>
                            <th scope="col">Teacher Subject</th>
                            <th scope="col">Mobile Number Emergency Contact</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(teacher, index) in filterteachers" :key="index">
                                <th scope="row">{{teacher._id}}</th>
                                <td>{{teacher.firstname}}</td>
                                <td>{{teacher.addressline1}}</td>
                                <td>{{teacher.city}}</td>
                                <td>{{teacher.firstnameEMG}}</td>
                                <td>{{teacher.teachsubject}}</td>
                                <td>{{teacher.mobilenumberEMG}}</td>
                                <td>

                                    <router-link :to="'/Edit-teacher/'+teacher._id">
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    </router-link>

                                    <button class="btn my-0 py-0" @click="deleteItem(teacher)"><i class="fa fa-trash"/></button>
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
export default {
    data() {
        return {
            allTeachers: [],
            search: ''
        }
    },
    created() {
        this.$http.get('http://localhost:8090/api/teachers')
        .then(function (response) {
            console.log(response);
            this.allTeachers = response.body;
        });
    },

    //Delete
    methods: {
        deleteItem(teacher) {
            console.log(teacher);
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8090/api/teachers/" + teacher._id,
                ).then(
                    function(response) {
                        console.log(response);
                    }
                );
                swal(teacher._id + " Data successfully deleted !", {
                icon: "success",
                });
            }
            });
        }
    },

//Search
    computed: {
        filterteachers: function() {
            return this.allTeachers.filter((item)=> {
                return item.firstname.match(this.search) || item.addressline1.match(this.search) || item.addressline2.match(this.search) || item.city.match(this.search) || item.mobilenumber.match(this.search) || item.firstnameEMG.match(this.search) || item.addressline2EMG.match(this.search) ;
            })
        },
    }
}
</script>

<style scoped>
</style>
