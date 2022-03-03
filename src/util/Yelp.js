const apiKey = "i0oe30_lOLnmAJlfPELkuYiOIpkjRtZbFAXo1fO9q924UpjbgETgDW9k6A26m867SQtuSRsTC3Ryuzx5SXkY-bxQzS3EwHkyag6MUP3-L7MSCiDC7FnFYY6IZyogYnYx"

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {},
        Authorization: `Bearer ${apiKey}`})
        .then((resp)=>{
            return resp.json()
        })
        .then((jsonResponse)=> {
            if (jsonResponse.businesses) { // checks for businesses key, valid response from API
                return jsonResponse.businesses.map((business)=> {
                    return {
                        id:business.id,
                        imageSrc:business.photos[0],
                        name:business.name,
                        address:business.location.address1,
                        city:business.location.city,
                        state:business.location.state,
                        zipCode:business.location.zip_code,
                        category:business.categories[0].alias,
                        rating:business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        })
    }
}

export default Yelp;