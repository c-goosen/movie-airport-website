<template>
  <section>
<div class="pt-24">
    <div
      class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
    >
      <div
        class="flex flex-col w-full justify-center items-start text-center md:text-left"
      >
        <p></p>
        <h1 class="my-4 text-5xl font-bold leading-tight">
          Boek Vlug
        </h1>
        <div class="box w-full">
          <div class="media-center">
              <b-field grouped group-multiline>
                <div class="block w-full container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <b-field label="Kies bestemming">
                      <b-autocomplete
                          rounded
                          v-model="name"
                          :data="filteredDataArray"
                          placeholder="e.g. Kaapstad"
                          icon="magnify"
                          clearable
                          >
                          <template slot="empty">No results found</template>
                      </b-autocomplete>
                  </b-field>
                  <b-field label="Kies Vertrek Datum">
                  <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    placeholder="Kliek om te kies..."
                    icon="calendar-today"
                    trap-focus>
                  </b-datepicker>
                  </b-field>
            
                  <b-field label="Kies keerdatum">
                  <b-datepicker
                      v-model="selected"
                      :show-week-number="showWeekNumber"
                      placeholder="Kliek om te kies..."
                      icon="calendar-today"
                      trap-focus>
                  </b-datepicker>
                  </b-field>
                </div>
                <div class="block container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                 <b-field label="Klas van vervoer">
                  <b-select placeholder="Economy" required>
                      <option value="flint">Economy</option>
                      <option value="silver">Business</option>
                      <option value="silver">First</option>
                      <option value="silver">Premium</option>
                  </b-select>
              </b-field>

              <b-field label="Nommer van Volwassenes">
                <b-numberinput type="is-info" v-model="adults" placeholder="1" :min="1"></b-numberinput>
              </b-field>
              <b-field label="Nommer van Kinders">
                <b-numberinput type="is-info" v-model="children" placeholder="0" :min="0"></b-numberinput>
              </b-field>
              <b-field label="Nommer van Babas">
                <b-numberinput type="is-info" v-model="infants" placeholder="0" :min="0"></b-numberinput>
              </b-field>
                </div>

                <div class="block container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <div class="buttons">
                    <p></p>
                    <br>
                  <button class="button is-medium is-info" @click="confirm">
                      Boek Vlug
                  </button>
                </div>
              </div>
              <!-- Below b-field forms part of layout -->
            </b-field>
            
          </div>
                  
  
        </div>
        <p></p>
      
</div>
      </div>
      </div>
  </section>
</template>  


<script>
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
      methods: {
            confirm() {
                this.$buefy.dialog.confirm({
                    message: 'Boek vlug, alle details korrek?',
                    onConfirm: () => this.$buefy.toast.open('Vlug geboek!')
                })
            }
            },
        data() {
            return {
              adults: undefined,
              children: undefined,
              infants: undefined,
              selected: new Date(),
              showWeekNumber: false,
                data: [
                    'Kaapstad',
                    'Durban',
                    'Johannesburg',
                    'Windhoek',
                    'Bloemfontuin',
                    'jQuery',
                    'Meteor',
                    'Node.js',
                    'Polymer',
                    'React',
                    'RxJS',
                    'Vue.js'
                ],
                name: '',
                selected: null
            }
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>