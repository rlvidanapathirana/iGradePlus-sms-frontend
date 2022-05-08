<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4> Event List </h4>

                <router-link to="/add-event">
                    <button class="btn btn-primary mt-3"><i class="fa fa-plus mx-2" aria-hidden="true"></i> Add new Event</button>
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
                            <th scope="col">Event ID</th>
                            <th scope="col">Event Name</th>
                            <th scope="col">Event Type</th>
                            <th scope="col">Organizer</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">End Time</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(event, index) in filterEvents" :key="index">
                                <th>{{event._id.substring(0,4)}}</th>
                                <td>{{event.eventName}}</td>
                                <td>{{event.eventType}}</td>
                                <td>{{event.organizer}}</td>
                                <td>{{event.startDate}}</td>
                                <td>{{event.endDate}}</td>
                                <td>{{event.startTime}}</td>
                                <td>{{event.endTime}}</td>
                                <td>

                                    <router-link :to="'/Edit-Event/'+event._id">
                                    <button class="btn my-0 py-0"><i class="fas fa-edit"/></button>
                                    </router-link>

                                    <button class="btn my-0 py-0" @click="deleteItem(event)"><i class="fa fa-trash"/></button>
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
            allEvents: [],
            search: ''
        }
    },
    created() {
        this.$http.get('http://localhost:8090/api/events')
        .then(function (response) {
            console.log(response);
            this.allEvents = response.body;
        });
    },

    //Delete
    methods: {
        deleteItem(event) {
            console.log(event);
            swal({
            title: "Are you sure?",
            text: "do you want to delete record!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$http.delete("http://localhost:8090/api/events/" + event._id,
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
                swal(event._id + " Data successfully deleted !", {
                icon: "success",
                });
            }
            });
        }
    },

//Search
    computed: {
        filterEvents: function() {
            return this.allEvents.filter((item)=> {
                return item.eventName.match(this.search) || item.eventType.match(this.search) || item.organizer.match(this.search) || item.startDate.match(this.search) || item.endDate.match(this.search) || item.startTime.match(this.search) || item.endTime.match(this.search) ;
            })
        },
    }
}
</script>

<style scoped>
</style>