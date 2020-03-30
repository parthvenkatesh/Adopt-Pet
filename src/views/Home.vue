<template>
  <div class="home">
    <h1>Adot a pet today</h1>
	<button @click="toggleForm" class="btn btn-primary">Add pet</button>
	<b-form @submit.prevent="onSubmit" v-if="displayForm">
      <b-form-group
        id="input-group-1"
        label="Email name:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.species"
          :options="['cats','dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data(){
	  return{
		  displayForm: false,
		  form :{
			  name:'',
			  age:0,
			  species:null
		  }
	  }
  },
  methods: {
	  ...mapActions([
		  'addPet'
	  ]),
	  toggleForm(){
		  this.displayForm = !this.displayForm
	  },
	  onSubmit(){
		  const {name , age , species} = this.form
			const payload = {
				species,
				pet: {
				name,
				age
				}
			}
		  this.addPet(payload)

		  this.form= {
			  name:'',
			  age:0,
			  species:null
		  }
	  }
  }
}
</script>
