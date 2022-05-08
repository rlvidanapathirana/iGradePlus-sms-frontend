<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Events Report</h5>
            <p class="card-text"> Generate event report to get an idea about institute </p>
            <button type="button" @click="getReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
        </div>
        <div class="card-footer text-muted">
        </div>
        <div class="row mt-5" v-if="data.length > 0">
      <div class="col">
        <h2 class="text-center">Event Report </h2>
        <line-chart
          :chartData="data"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Event"
        />
      </div>
    </div>
    </div>
</template>

<script>
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
import LineChart from "../../components/chart/LineChart.vue";
import { randomBytes } from 'crypto';

export default {
    components: {
    LineChart
  },
    name: 'pdf',
    data(){
    return{
    allEvent: [],
    userArray:[],
    user: [],
    data: [],
    arrMonth: [],
    chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      positiveChartColors: {
        borderColor: "#077187",
        pointBorderColor: "#0E1428",
        pointBackgroundColor: "#AFD6AC",
        backgroundColor: "#74A57F"
      },
    }
},
mounted() {
    this.$http.get('http://localhost:8090/api/events/month')
        .then(function (response) {

            this.data = response.body;
            //console.log(this.data);
        },
        )
  },
    methods: {
        /*
        *click generate button call that function
        */
        getReport: function() {
        this.$http.get('http://localhost:8090/api/events')
        .then(function (response) {
            this.allEvent = response.body;
            this.userArray  = [];
            this.user = [];
            /*create new jspdf object*/
            const doc = new jsPDF()
            /*set array forma using jspdf*/
            this.allEvent.map((u) => {
            this.user = [u.eventName, u.cheifGest, u.startDate,u.organizer,u.endDate,u.startTime,u.endTime];
            this.userArray.push(this.user);
            } );
            //console.log(this.userArray);
            var img = new Image()
            img.src = 'https://i.ibb.co/7VLScqs/staff-report.png'
            // Use of Date.now() method
              var d = Date(Date.now());
            // Converting the number of millisecond
            // in date string
            var a = d.toString()
            doc.addImage(img, 'jpg', 5,160,200,80)
            doc.text("Event Report", 15, 10);
            doc.setFontSize(10);
            doc.text(a, 10, 150);
            // Or use javascript directly using table auto :
            autoTable(doc, {
            head: [['Event Name', 'cheifGest','start Date','organizer','end Date','start Time','end Time']],
            body: this.userArray,
            },10,14)
            //save pdf
            doc.save(randomBytes(8).toString('hex')+'.pdf');
        });
        }
    }
}
</script>
<style scoped>
</style>
