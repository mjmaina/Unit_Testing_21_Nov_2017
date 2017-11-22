
<template>
    <div id="app">
        <div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/sample">Samples</router-link></li>

            </ul>
            <div id="show-blogs">
                <h4>Show Blog</h4>
                <div v-for="blog in blogs" class="single-blog">
                    <h4>{{ blog.title }}</h4>
                    <article>{{ blog.body }}</article>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                blogs:[]
            }
        },
        methods: {

        },
        created(){
            this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
                console.log(data);
                this.blogs = data.body.slice(0,10);
            })

            }

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
    #show-blogs{
        max-width: 800px;
        margin:0 auto;
    }
    .single-blog{
        padding:20px;
        margin:20px 0px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #eee;
    }
</style>