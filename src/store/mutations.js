export default{
	savePetData: (state,{species,pet}) => {
		state[species].push(pet)
	}
}