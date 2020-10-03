class Movies {
	constructor(val){
		this.obj = val
	}
	static search(arr, search){
			console.log(arr,search)
			const list = arr.filter(m=>m.obj.movieName.toLowerCase().includes(search.toLowerCase()));
			console.log(list);
			return list;
	}
}

export default Movies;