
<template>
    <div id="app">
        <div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/sample">Samples</router-link></li>

            </ul>
            <div id="form">
                <form id="blog" v-if="!submitted">
                    <h3>Add A New Blog Post!</h3>
                    <h4>Blog Title:</h4>
                    <input type="text" size="60px" width="10px" id="title" placeholder="blog title" >
                    <h4>Blog Message:</h4>
                    <textarea type="text" id="msg" placeholder="blog message" >
                    </textarea>
                    <h4>Skills:</h4>
                    Ninja:<input type="radio" id="skills"  >&nbsp; &nbsp;
                    Wizard:<input type="radio" id="skills"  >&nbsp; &nbsp;
                    Mario:<input type="radio" id="skills" >&nbsp; &nbsp;
                    <h4>Author:</h4>
                    <input type="text" size="60" id="author" placeholder="name"/>
                    <br />
                    <br /><button id="btn" v-on:click.prevent="post">Add Blog</button>
                </form>
            </div>
            <div v-if="submitted">
                <h5>You have added the blog</h5>
            </div>

        </div>

        <router-view></router-view>
    </div>
</template>
<script>
 export default{
     data(){
         return{
             message: 'johnie',
             blog: {
                 title: '',
                 msg: '',
                 skills: [],
                 author: ''
             },
             submitted: false,
         }

     },
     methods: {
         post: function(){
             this.$http.post('http://jsonplaceholder.typicode.com/posts',{
                 title: this.blog.title,
                 body: this.blog.msg,
                 userId: 20
             }).then(function(data){
                 console.log(data);
                 this.submitted = true;
             });
         }
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
    #form {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        margin-left: 100px;
        margin-top: 60px;
    }
    textarea {
        width: 300px;
        height: 150px;
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
    #btn{
        margin: 0 auto;
    }
</style>