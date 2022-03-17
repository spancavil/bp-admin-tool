import axios from 'axios';

class NftService {
    async getNft (){
        return await axios.get('/responseNftList.json')
        .then (response => {
            return response.data
        })
    }
}

export default new NftService()