<template>
<div>
         
   
        <div class="card">
            <div class="card-body">

                <h4>Event Information</h4>

                <router-link to="student">
                    <button class="btn btn-outline-primary mb-3 mt-3"><i class="fa fa-chevron-left mx-2" aria-hidden="true"></i> Back to Event List</button>
                </router-link>

                <form action="" v-on:submit.prevent="submitForm">
                    <div class="row g-3 align-items-center d-flex flex-row-reverse">
                            <div class="col-auto">
                                <input type="text"  id="stuID" class="form-control" aria-describedby="passwordHelpInline" placeholder="STU0001" readonly>
                            </div>
                            <div class="col-auto">
                                <label for="stuID" class="col-form-label">Event ID</label>
                            </div>   
                    </div>

                    <div>
                        <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label">Event Name</label>
                        <input type="text" v-model.trim="$v.items.eventName.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.eventName)}" id="formGroupExampleInput" placeholder=" ">
                        <div v-if="!$v.items.eventName.required" class="text-danger"><small>Name  is required*</small></div>
               
                        </div>
                        
                    </div>


                     
                     <div>
                         <div class="row">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Event type</label>
                                <select class="form-select" v-model.trim="$v.items.eventType.$model"  aria-label="Default select example">
                                    
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="xxxx">XXXX</option>                           
                                    </select>
                                    <div v-if="!$v.items.eventType.required" class="text-danger"><small>event is required*</small></div>
                                    
                            </div>
                             <div class="col">
                                        <label for="formGroupExampleInput" class="form-label">Organizer</label>
                                        <input type="text" v-model.trim="$v.items.organizer.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.organizer)}" placeholder=" " aria-label="First name">
                                        <div v-if="!$v.items.organizer.required" class="text-danger"><small>organizer is required*</small></div>
                                    </div>
                        </div>
                    </div>

                    <div>
                        <div class="row">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Chef Gest</label>
                                <input type="text" v-model.trim="$v.items.cheifGest.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.cheifGest)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.cheifGest.required" class="text-danger"><small>Chef Gest is required*</small></div>
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Start Date</label>
                                <input type="date" v-model.trim="$v.items.startDate.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.startDate)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.startDate.required" class="text-danger"><small>Start Date is required*</small></div>
                            </div>
                        </div>
                     </div>
                   
                     <div>
                            <div class="row my-3">
                                   
                                    <div class="col ">
                                        <label for="formGroupExampleInput" class="form-label">End Date</label>
                                        <input type="date" v-model.trim="$v.items.endDate.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.endDate)}" placeholder=" " aria-label="Last name">
                                        <div v-if="!$v.items.endDate.required" class="text-danger"><small>End Date is required*</small></div>
                                    </div>
                                    <div class="col">
                                        <label for="formGroupExampleInput" class="form-label">Start Time</label>
                                        <input type="time"  v-model.trim="$v.items.startTime.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.startTime)}" placeholder=" " aria-label="First name">
                                        <div v-if="!$v.items.startTime.required" class="text-danger"><small>Start Time is required*</small></div>
                                
                                    </div>
                            </div>
                    </div>


                    <div>
                        <div class="row my-3">
                            
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">End Time</label>
                                <input type="time" style="width:500px" v-model.trim="$v.items.endTime.$model" class="form-control"  :class="{'is-invalid': validationStatus($v.items.endTime)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.endTime.required" class="text-danger"><small>End Time is required*</small></div>
                            </div>
                        </div>
                     </div>


 


                     
                     <div>
                        

                    


                    <h4> Location</h4>

                   

                    <div>
                        <div class="row my-3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line1</label>
                                <input type="text" v-model.trim="$v.items.addressLine1.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.addressLine1)}" placeholder=" " aria-label="First name">
                                <div v-if="!$v.items.addressLine1.required" class="text-danger"><small>Address Line1 is required*</small></div>
                            </div>
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Address Line2</label>
                                <input type="text" v-model.trim="$v.items.addressLine2.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.addressLine2)}" placeholder=" " aria-label="Last name">
                                <div v-if="!$v.items.addressLine2.required" class="text-danger"><small>Address Line2 is required*</small></div>
                            </div>
                        </div>
                     </div>



                     <div>
                        <div class="row my3">
                            <div class="col">
                                <label for="formGroupExampleInput" class="form-label">Description</label>
                                <textarea  v-model.trim="$v.items.description.$model" class="form-control" :class="{'is-invalid': validationStatus($v.items.description)}" style="height:150px" placeholder=" " aria-label="First name"></textarea>
                                <div v-if="!$v.items.description.required" class="text-danger"><small>Description is required*</small></div>
                            </div>
                            
                        </div>
                     </div>

                     <div class="my-5 gap-3 d-flex flex-row-reverse bd-highlight">
                         <button  type="button" @click="clear()" class="btn btn-outline-secondary">Clear</button>
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
    created(){

        this.getData();
    },
    
    name: 'addstu',
    data: function() { //data()
        return({
            items: { 
                eventName: '',
                cheifGest: '',
                startDate: '',
                organizer: '',
                endDate: '',
                startTime: '',
                endTime: '',
                 
                eventType: '',
                 
                
                addressLine1: '',
                addressLine2: '',
                description: '',
                 
            },
        });

        },

methods: {

     getData(){

             this.$http.get('http://localhost:8000/api/students/edit/'+this.$route.params.id)

             .then(function (Response){

               this.items =Response.body.students;

             })
        },
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

                const student = {
                    'eventName':this.items.eventName,
                     
                    'cheifGest':this.items.cheifGest,
                    'startDate':this.items.startDate,
                    'organizer':this.items.organizer,
                    'endDate':this.items.endDate,
                    'startTime':this.items.startTime,
                    'endTime':this.items.endTime,
                     
                    'eventType':this.items.eventType,
                     
                    'addressLine1':this.items.addressLine1,
                    'addressLine2':this.items.addressLine2,
                    'description':this.items.description,
                    
                }

                this.$http.post('http://localhost:8000/api/students/add', student).then(function (response) { 
                    console.log(response);
                });
                swal("YOUR MESSAGE WAS SENT SUCCESSFULLY", "THANK YOU!", "success"); 
            }

        }

    },
    validations: {
        items: {
            eventName: {
                required,
                // minLength: minLength(5),
                // maxLength: maxLength(30)
                },
            
            cheifGest: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            startDate: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            organizer: {
                required,
                    // minLength: minLength(5),
                    // maxLength: maxLength(20)
            },
            endDate: {required,
                    // minLength: minLength(5),
                    // maxLength: maxLength(11)
            },
            startTime: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },

             endTime: {
                required,
                numeric,
                minLength: minLength(10),
                maxLength: maxLength(10)
            },

             
            eventType: {
                required,
                // minLength: minLength(4),
                // maxLength: maxLength(10)
            },
            
            addressLine1: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            addressLine2: {
                required,
                // minLength: minLength(1),
                // maxLength: maxLength(30)
            },
            description: {
                required
            }
            
        }
    }
}
</script>



