<template>
  
    <div class="main">
      <div class="but">
      <p v-on:click="newStyle"><router-link to="/" class="new" id="new">Editor</router-link></p>
      <p v-on:click="newStyle2"><router-link to="/preview" class="new2" id="new2">Preview</router-link></p>
      </div>
      <hr>
      <router-view />
  </div>
</template>



<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import EditorTab from '@/components/EditorTab' 
import PreviewTab from '@/components/PreviewTab' 
export default {
  name: 'App',
   data(){
     return{
     }
  },
  components: {
    EditorTab, PreviewTab
  },
   methods: {
     newStyle() {
      let elem = document.getElementById('new');
      let elem2 = document.getElementById('new2');
      elem.style.background = 'none'
      elem2.style.background = 'grey'
      elem.style.borderBottom = 0
      elem2.style.borderBottom = '1px solid'
      //elem.style.outline = none
     },
     newStyle2() {
      let elem = document.getElementById('new')
      let elem2 = document.getElementById('new2')
      elem2.style.background = 'none'
      elem.style.background = 'grey'
      elem2.style.borderBottom = 0
      elem.style.borderBottom = '1px solid'
     }
   }


}
</script>

<style scoped>
template{
  background-image: url(assets/back2.jpg);
}
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 100%;
  /*background-color: RGB(206, 226, 235);
  /*background-image: url(assets/back2.jpg); */
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
hr{
  margin-top: 0;
  padding-top:0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.new{
  color: #000;
  padding: 0.5rem 1rem;
  background: gray;
  display: inline-block;
  outline: none;
  border: 1px solid;
  border-radius: 10px 0 0 0 ;
  border-right: 0.5px;
  
}
.new2{
  color: #000;
  padding: 0.5rem 1rem;
  background: gray;
  display: inline-block;
  outline: none;
  border: 1px solid;
  border-radius: 0 10px 0 0;
  border-right: 0.5px;
}
.new2:hover{
  text-decoration: none;
  color: #000;
}
.new:hover{
  text-decoration: none;
  color: #000;
}
.but{
  display: flex;
  justify-content: flex-end;
  
}
p{
  margin-bottom: 0;
}
</style>
