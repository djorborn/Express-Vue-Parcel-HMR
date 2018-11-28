<template>
    <div id="app">
        <h1>Hellooooo</h1>
    <button @click="getOne">Get</button>
        <h2>{{test}}</h2>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'app',
    data: () => {
        return {
            test: ''
        }
    },
    methods: {
        getOne: function() {
            var _this = this;
            axios.get('/test').then((res) => {
                console.log("Get Request Made!");
                _this.test = res.data;
            })
        }
    }
}
</script>
<style>
body {
    color: #1f1f1f;
    background: #cfd;
}
</style>

