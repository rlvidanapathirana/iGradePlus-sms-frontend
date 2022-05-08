<template>
    <div class="card text-center">
        <div class="card-header">
            Report
        </div>
        <div class="card-body">
            <h5 class="card-title">Generate Non Academic Staff Report</h5>
            <p class="card-text"> Generate Non Academic Staff report to get an idea about school </p>
            <button type="button" @click="getReport" class="btn btn-primary"><i class="fas fa-file-download"></i><span class="mx-3">Generate Report</span></button>
        </div>
        <div class="card-footer text-muted">
        </div>
        <div class="row mt-5" v-if="data.length > 0">
      <div class="col">
        <h2 class="text-center">Non Academic Staff Report </h2>
        <line-chart
          :chartData="data"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Non Academic Staff"
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
    allStaff: [],
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
    this.$http.get('http://localhost:8090/api/staff/month')
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
        this.$http.get('http://localhost:8090/api/staff')
        .then(function (response) {
            this.allStaff = response.body;
            this.userArray  = [];
            this.user = [];
            /*create new jspdf object*/
            const doc = new jsPDF()
            /*set array forma using jspdf*/
            this.allStaff.map((u) => {
            this.user = [u.nameInitial, u.address1, u.address2,u.city,u.date,u.Mnumber,u.dob];
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
            doc.addImage(img, 'jpg', 5,100,200,80)
            doc.text("All Non Academic Staff Report", 10, 10);
            doc.setFontSize(10);
            doc.text(a, 10, 90);
            // Or use javascript directly using table auto :
            autoTable(doc, {
            head: [['Name with Initial', 'Address Line 1','Address Line 2','City','Join Date','Mobile number','DOB']],
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
