import axios from "axios";


export default class AboutService {

    baseURL = 'https://albertos-57ecb.firebaseio.com/reviews.json';

    fetchReviews = async () => {
        const res = await axios.get(this.baseURL);
        return Object.keys(res.data).map(key => {
            return {
                ...res.data[key]
            }
        })
    };

    fetchReview = async (review) => {
        await axios.post(this.baseURL, review)
    };
};
