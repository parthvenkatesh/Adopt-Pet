export default{
	addPet: ({commit}, payload) => {
		commit('savePetData',payload)
	}
}