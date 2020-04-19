const apikey = 'Cqct9wQKwninipzRpu0xoLkyz26OjTwuQ4gKlrxe0_m-S4WAGhbnz6JxuOiSYlJEUb8erx-v6TQw9ltjKV8WNvJyS2L59RoMWMve8RQd9gLmGeEYZPT4bJWGwK4pWnYx'


export let Yelp = {
	
		
  search(term , location, sortBy)
  {

	return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}`,
	
			{headers: {Authorization: `Bearer ${apikey}`}

			})
	.then(jsonResponse => jsonResponse.json())
	.then(jsonR => (jsonR.businesses))
	.catch((err) => console.log(err))

	

}

};