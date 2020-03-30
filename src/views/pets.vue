<template>
    <div>
		<h1>{{ animal.name }}</h1>
		{{ animal }}
		
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
		animal : {}
    }
  },
  computed:{
	  ...mapState([
		  'dogs',
		  'cats'
	  ])
  },
  mounted(){
	  
	  let animal = this[this.$route.params.species][this.$route.params.id]
	  this.animal = animal
  }
}
</script>