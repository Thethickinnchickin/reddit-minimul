<template>
    <main>
        <h1>Things</h1>
        <ul>
            <li v-for="thing in things" :key="thing._id">{{thing}}</li>
        </ul>
    </main>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            things: []
        }
    },
    
    async created() {
        let response = await axios.get('localhost:3000/reddit/hot/books')
        .then(response => {
            console.log(response)
            this.things = response
        })
        .catch(e => {
            console.log(e)
        })
        return {
            things: response
        }
    }
}
</script>