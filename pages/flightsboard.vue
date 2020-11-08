<template>

<div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <!--Left Col-->
      <div
        class="flex flex-col w-full justify-center items-start text-center"
      >
        <!-- <p class="uppercase tracking-loose w-full">What business are you?</p> -->
        <p></p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Aankoms
        </h1>
        <div class="box">
        <article class="media">
          <div class="media-center">
            <!-- <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
            </figure> -->
          </div>
          <div class="media-content">
            <div class="content">
          <b-table :data="flights" :columns="columns"></b-table>
            </div>
          </div>
        </article>
        </div>
        <p></p>
        <!-- <v-data-table
          style="margin: 0px; padding: 0px; width: 100%"
          :headers="headers"
          :items="flights"
          class="elevation-1"
          hide-default-footer
          loading
          loading-text="Laai... vlugte oppad.."
          :sort-by="['arrival_time']"
          :sort-desc="[false]"
          fill-width
          fluid
        >
          <template v-slot:item.delayed="{ item }">
            <v-chip
              class="ma-2"
              text-color="white"
              :color="getColor(item.delayed)" 
              dark
            >
              {{ item.delayed }}
            </v-chip>
          </template>
        </v-data-table> -->
</div>
      </div>
      </div>
</template>  
        
        <!-- :color="this.getColor(item.delayed)" -->


<script>
import * as moment from 'moment';
import flightGenerator from 'random-flight-generator';
export default {
    data() {
      return {
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
      // // this.aircraft = await fetch(
      // //   'api/VirtualRadar/AircraftList.json'
      // // ).then(res => res.json())
      // // // console.log(this.aircraft)
      // // this.za_aircraft =  this.aircraft['acList'].filter(function(aircraft) {
	    // //   return aircraft.Cou == "South Africa"
      // // });
      // // let airlines = this.za_aircraft.filter(function(aircraft) {
      // //   return aircraft.Op
      // // });
      // console.log(airlines);
      // console.log(this.za_aircraf)
      let current_time = new Date()
      let time_back = new Date(
              current_time.getFullYear(), 
              current_time.getMonth(), 
              current_time.getDate(), 
              current_time.getHours() + 2, 
              current_time.getMinutes());
      const options = { 
            minDistance: 5,
             maxDistance: 100,
             includeCountries: ["ZA", "GB","SA"] 
        }
        let flight_status = ['Delayed', 'On time', 'Unkown', 'Waiting at gate']
        let airport_gate = ["A", "B", "C"]
        let airport_gate_no = [0,1,2,3,4]

        for (let i = 0; i < 10; i++) {
            time_back = moment(time_back).add(30, 'm').toDate();
            let random = Math.floor(Math.random() * flight_status.length);
            let random_gate = Math.floor(Math.random() * airport_gate.length);
            let random_gate_no = Math.floor(Math.random() * airport_gate_no.length);
            let generated_flight = flightGenerator(options);
            this.flights.push({
                name: generated_flight.arrival.name,
                icao: generated_flight.arrival.icao,
                country: generated_flight.arrival.country,
                gate: airport_gate[random_gate] + "" + airport_gate_no[random_gate_no],
                delayed:  i > 4 ? flight_status[random] : 'Arrived',
                arrival_time: (moment(time_back)).format('DD-MMM : HH:mm:ss')
        });
        
      
      }
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

<style>

</style>