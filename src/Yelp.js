const apikey = 'SE1UH3C-KigK2VRZ-9j4E23WscctPZMIrMSEXmG5PXYHKFn53mnxTwwzuNi0jQqvjoakeyoYF0vHcuyZq-u1SFznmX8rL27Y4PHYW5uXicSM-cgDPI5wvIyGLKpMYnYx'
const url ='https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}'

export let Yelp = {
	
		
  search(term , location, sortBy)
  {

	return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sortBy=${sortBy}`,
	
			{headers: {Authorization: `Bearer ${apikey}`}

			})
	.then(jsonResponse => jsonResponse.json())
	.then(jsonR => (jsonR.businesses))
	.catch((err) => console.log(err))

	

}

};
