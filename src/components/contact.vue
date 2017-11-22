
<template>
    <div id="app">
        <div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>

            <!--<div class="hello">
              Counter: {{ $store.state.count }}, Count is: {{ evenOrOdd }}
            </div>-->
        </div>
        <div class="container">
            <div class="row text-center">
                <h3>Clicked: {{ $store.state.count }} times, counter is {{ evenOrOdd }} </h3>
                <button class="btn btn-success" @click="increment">+</button>
                <button class="btn btn-danger" @click="decrement">-</button>

                <button class="btn btn-success" @click="incrementIfOdd">Increment if Odd</button>
                <button class="btn btn-danger" @click="incrementAsync">Increment if SYNC</button>

            </div>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>

    import { mapGetters, mapActions } from 'vuex'
    export default{
        computed: mapGetters([
            'evenOrOdd'
        ]),
        methods: mapActions([
            'increment',
            'decrement',
            'incrementIfOdd',
            'incrementAsync'
        ])
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>