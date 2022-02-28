import axios from 'axios'

export default {

    data() {
        return {
            things: []
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:3000/reddit/hot/books')
            .then(response => {
                this.things = response.data.things.data.children
            })
            .catch(e => {
                console.log(e)
            })

        } 
    }

}