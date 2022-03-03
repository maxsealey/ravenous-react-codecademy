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
                        id,
                        imageSrc,
                        name,
                        address,
                        city,
                        state,
                        zipCode,
                        category,
                        rating,
                        reviewCount
                    }
                })
            }
        })
    }
}

export default Yelp;