<template>

<div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-center md:text-left"
      >
        <p></p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Aankoms
        </h1>
        <div class="box w-full">
          <div class="media-center">
     
          <b-table :data="flights" :columns="columns"></b-table>
          </div>
  
        </div>
        <p></p>
      
</div>
      </div>
      </div>
</template>  
        


<script>
import { mapState } from 'vuex';
import * as moment from 'moment';
export default {
   head: {
    script: [
      {
        src: 'https://unpkg.com/buefy/dist/buefy.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/buefy/dist/buefy.min.css'
      }
    ]
  },
    data() {
      return {
        aircraft:[],
        headers: [
          {
            text: 'Flights Arriving',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Arrival Time', value: 'arrival_time' },
          { text: 'Flight No.', value: 'icao' },
          { text: 'Coming From', value: 'country' },
          { text: 'Gate', value: 'gate' },
          { text: 'Status', value: 'delayed' },
        ],
        flights: [
        ],
        columns: [
                {
                    field: 'arrival_time',
                    label: 'Arrival Time',
                },
                {
                    field: 'icao',
                    label: 'Flight No.',
                },
                {
                    field: 'airport_code',
                    label: 'Airport',
                },
                {
                    field: 'country',
                    label: 'Coming From',
                },
                {
                    field: 'gate',
                    label: 'Gate',
                    centered: true
                },
                {
                    field: 'delayed',
                    label: 'Status',
                }
            ]
  }
        
        
        
     
  },
  methods: {
    getColor (item) {
      console.log("Why am I not working?")
      if (item == 'Delayed'){
        console.log('Delayed')
        return 'red'
      } 


      else if (item == 'Unkown') return 'orange'
      else return 'green'
    },
  },
  async fetch() {

      let current_time = new Date()
      let time_back = new Date(
              current_time.getFullYear(), 
              current_time.getMonth(), 
              current_time.getDate(), 
              current_time.getHours() + 2, 
              current_time.getMinutes());
        let flight_status = ['Delayed', 'On time', 'Unkown', 'Waiting at gate']
        let airports = ["GOG", "CPT", "MPM", "BFN", "MBD", "JNB", "DUR", "GRJ", "MQP"]
        let airport_gate = ["A", "B", "C"]
        let airport_gate_no = [0,1,2,3,4]
        let flight_no = ["4Z628", "JE143", "4Z323", "4Z618"]

        for (let i = 0; i < 10; i++) {
           let random_flight = Math.floor(Math.random() * this.$store.state.flights.flights.length);
           let curr_flight = this.$store.state.flights.flights[random_flight];
           time_back = moment(time_back).add(30, 'm').toDate();
           let random = Math.floor(Math.random() * flight_status.length);
            let random_gate = Math.floor(Math.random() * airport_gate.length);
            let random_gate_no = Math.floor(Math.random() * airport_gate_no.length);

            this.flights.push({
                icao: curr_flight.flight_no,
                airport_code: curr_flight.origin,
                country: curr_flight.country,
                gate: airport_gate[random_gate] + "" + airport_gate_no[random_gate_no],
                delayed:  i > 4 ? flight_status[random] : 'Arrived',
                  arrival_time: (moment(time_back)).format('DD-MMM : HH:mm:ss')
            });


          
        
      
      }
      // console.log(this.$store.state.flights.flights)
     
    //   this.flights.reverse()
  }
 
  }
// export default {
//         async asyncData({ params }) {
//         const options = { minDistance: 5, maxDistance: 100 }
//         const flight = flightGenerator(options)

//         console.log(flight.departure)
//         console.log(flight.arrival)

//         flight.print() // Logs all the flight information
//         }
// }
</script>