<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Students Report</h5>
            <p class="card-text"> Generate Student report to get an idea about institute </p>
            <button type="button" @click="getReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
        </div>
        <div class="card-footer text-muted">
        </div>
        <div class="row mt-5" v-if="data.length > 0">
      <div class="col">
        <h2 class="text-center">Students Report </h2>
        <line-chart
          :chartData="data"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Student"
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
    allStudent: [],
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
    this.$http.get('http://localhost:8090/api/student/month')
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
        this.$http.get('http://localhost:8090/api/student/')
        .then(function (response) {
            this.allStudent = response.body;
            this.userArray  = [];
            this.user = [];
            /*create new jspdf object*/
            const doc = new jsPDF()
            /*set array forma using jspdf*/
            this.allStudent.map((u) => {
            this.user = [u.nameInitil, u.nameFull, u.addressL1,u.city,u.joinDate,u.mNumber,u.email];
            this.userArray.push(this.user);
            } );
            //console.log(this.userArray);
            var img = new Image()
            img.src = 'https://i.ibb.co/tCQSp8z/event.jpg'
            // Use of Date.now() method
              var d = Date(Date.now());
            // Converting the number of millisecond
            // in date string
            var a = d.toString()
            doc.addImage(img, 'jpg', 75,100,80,80)
            doc.text("Student Report", 10, 10);
            doc.setFontSize(10);
            doc.text(a, 10, 90);
            // Or use javascript directly using table auto :
            autoTable(doc, {
            head: [[' Name Initials', 'Full Name','Address','City','Joined Date','Mobile Number','E-Mail']],
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
