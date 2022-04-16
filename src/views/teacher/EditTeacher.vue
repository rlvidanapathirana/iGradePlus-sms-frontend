<template>
<div>


        <div class="card">
            <div class="card-body">

                <h4>Teacher Information</h4>

                <router-link to="student">
                    <button class="btn btn-outline-primary mb-3 mt-3"><i class="fa fa-chevron-left mx-2" aria-hidden="true"></i> Back to Student List</button>
                </router-link>

                <form action="" v-on:submit.prevent="submitForm">

                    <div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">First Name</label>
                        <input type="text" v-model.trim="$v.items.firstname.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.firstname)}" id="formGroupExampleInput" placeholder=" ">
                        <div v-if="!$v.items.firstname.required" class="text-danger"><small>Name with initial is required*</small></div>

                        </div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Last Name</label>
                        <input type="text" v-model.trim="$v.items.lastname.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.lastname)}" id="formGroupExampleInput2" placeholder=" ">
                        <div v-if="!$v.items.lastname.required" class="text-danger"><small>Full Name is required*</small></div>
                        </div>
                    </div>


                     <div>
                        <div class="row">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" v-model.trim="$v.items.addressline1.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.addressline1)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.addressline1.required" class="text-danger"><small>Address Line1 is required*</small></div>
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" v-model.trim="$v.items.addressline2.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.addressline2)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.addressline2.required" class="text-danger"><small>Address Line2 is required*</small></div>
                            </div>
                        </div>
                     </div>



                     <div>
                            <div class="row my-3">
                                    <div class="col">
                                        <label for="formGroupExampleInput" class="form-label">City</label>
                                        <input type="text" v-model.trim="$v.items.city.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.city)}" placeholder=" " aria-label="First name">
                                        <div v-if="!$v.items.city.required" class="text-danger"><small>City is required*</small></div>
                                    </div>
                                <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Gender</label>
                                <select class="form-select" v-model.trim="$v.items.gender.$model"  aria-label="Default select example">

                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="xxxx">XXXX</option>
                                    </select>
                                    <div v-if="!$v.items.gender.required" class="text-danger"><small>Gender is required*</small></div>

                            </div>
                            </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text"  v-model.trim="$v.items.mobilenumber.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.mobilenumber)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.mobilenumber.required" class="text-danger"><small>Mobile is required*</small></div>

                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">fixed Number</label>
                                <input type="text" v-model.trim="$v.items.fixnumber.$model" class="form-control"  :class="{'is-invalid': validationStatus($v.items.fixnumber)}" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>

                     <div>
                        <div class="row my-3">
                            <div class="col-auto w-50 ">
                                <label for="formGroupExampleInput" class="form-label">Teach Subject</label>
                                <input type="text" v-model.trim="$v.items.teachsubject.$model" class="form-control" placeholder=" " aria-label="Teach Subject">
                                <div v-if="!$v.items.teachsubject.required" class="text-danger"><small>Teach Subject is required*</small></div>
                            </div>

                     </div>

                    <h4> Emergency Contact </h4>

                     <div class="my-3">
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">First name</label>
                        <input type="text" v-model.trim="$v.items.firstnameEMG.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.firstnameEMG)}" id="formGroupExampleInput" placeholder=" ">
                        <div v-if="!$v.items.firstnameEMG.required" class="text-danger"><small>First name is required*</small></div>

                        </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" v-model.trim="$v.items.addressline2EMG.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.addressline2EMG)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.addressline2EMG.required" class="text-danger"><small>Address Line1 is required*</small></div>
                            </div>
                        </div>
                     </div>



                     <div>
                       <label for="formGroupExampleInput" class="form-label">Gender</label>
                                <select class="form-select" v-model.trim="$v.items.genderEMG.$model"  aria-label="Default select example">

                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="xxxx">XXXX</option>
                                    </select>
                                    <div v-if="!$v.items.genderEMG.required" class="text-danger"><small>genderEMG is required*</small></div>
                        <div class="row my3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">City</label>
                                <input type="text" v-model.trim="$v.items.cityEMG.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.cityEMG)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.cityEMG.required" class="text-danger"><small>City is required*</small></div>
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                                <input type="text" v-model.trim="$v.items.mobilenumberEMG.$model" class="form-control"  :class="{'is-invalid': validationStatus($v.items.mobilenumberEMG)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.mobilenumberEMG.required" class="text-danger"><small>Mobile Number is required*</small></div>
                            </div>
                             <div class="col">
                                <label for="formGroupExampleInput" class="form-label">fixed Number</label>
                                <input type="text" v-model.trim="$v.items.fixnumberEMG.$model" class="form-control"  :class="{'is-invalid': validationStatus($v.items.fixnumberEMG)}" placeholder=" " aria-label="Last name">
                            </div>
                        </div>
                     </div>

                     <div class="my-5 d-flex flex-row-reverse bd-highlight">
                         <button  type="button" class="btn btn-outline-secondary">Clear</button>
                         <button  type="submit" class="btn btn-primary btn-dark">Submit</button>
                     </div>




             </div>

             </form>

        </div>



    </div>



</div>
</template>


<script>

import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators' //Import Validator

export default {
  // retrive part
     created(){

        this.getData();
    },
    name: 'addstu',
    data: function() { //data()
        return({
            items: {
                firstname: '',
                lastname: '',
                addressline1: '',
                addressline2: '',
                city: '',
                mobilenumber: '',
                fixnumber: '',
                teachsubject: '',
                gender: '',
                genderEMG: '',
                firstnameEMG: '',
                addressline2EMG: '',
                cityEMG: '',
                mobilenumberEMG: '',
                fixnumberEMG:''
            },
        });

        },

methods: {

        //retrieve
        getData(){

             this.$http.get('http://localhost:8090/api/teachers/find/'+this.$route.params.id)

             .then(function (Response){

               this.items =Response.body;
console.log(this.items)
             })

        },
//

        clear() {
            Object.assign(this.$data, this.$options.data.call(this));
        },
        validationStatus: function(validation) {
            return typeof validation != "undefined" ? validation.$error: false;
        },

        submitForm: function() {
            this.$v.$touch();
            if(this.$v.items.$pendding || this.$v.items.$error) {
                swal("Rejected", "Fill all the required fields correctly !", "error", {
                    button: "Got It!"
                });
                return;
            } else {

                const teacher = {
                    'firstname':this.items.firstname,
                    'lastname':this.items.lastname,
                    'addressline1':this.items.addressline1,
                    'addressline2':this.items.addressline2,
                    'city':this.items.city,
                    'gender':this.items.gender,
                    'mobilenumber':this.items.mobilenumber,
                    'fixnumber':this.items.fixnumber,
                    'teachsubject':this.items.teachsubject,
                    'firstnameEMG':this.items.firstnameEMG,
                    'addressline2EMG':this.items.addressline2EMG,
                    'cityEMG':this.items.cityEMG,
                    'genderEMG':this.items.genderEMG,
                    'mobilenumberEMG':this.items.mobilenumberEMG,
                }



                //  this.$http.put('http://localhost:8000/api/student/update/'+this.$route.params.id, student).then(function (response) {
                //     console.log(response);


                this.$http.put('http://localhost:8090/api/teachers/'+this.$route.params.id, teacher) .then(function (Response){

                  console.log(this.$route.params._id + "Tst param");


                });
                swal("Update Success", "Completed !", "success");
            }

        }

    },

    validations: {
        items: {
            firstname: {
                required,
                // minLength: minLength(5),
                // maxLength: maxLength(30)
                },
            lastname: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(100)
            },
            addressline1: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            addressline2: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            city: {
                required,
                    // minLength: minLength(5),
                    // maxLength: maxLength(20)
            },

            mobilenumber: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },

             fixnumber: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },
            fixnumberEMG: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },

            gender: {
                required,
                // minLength: minLength(4),
                // maxLength: maxLength(10)
            },
             genderEMG: {
                required,
                // minLength: minLength(4),
                // maxLength: maxLength(10)
            },
            teachsubject: {
                required
            },
            firstnameEMG: {
                required,
                // minLength: minLength(5),
                // maxLength: maxLength(50)
            },

            addressline2EMG: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },

            cityEMG: {
                required
            },
            mobilenumberEMG: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            }
        }
    }
}
</script>
