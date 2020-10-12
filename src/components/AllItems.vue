<template>
    <div v-if="this.$store.state.items.length">
        
        <ul> 
            
                <li class="item" v-for="(item, index) in allPosts" :key="item.id" >
                    <div class="container">
                        <div class="row">
                            <div class="col-8 row1-1">
                                
                                <strong class="mr-3">{{ index + 1 }}</strong>
                                <p>{{item.title}}</p>
                                
                            </div>
                            <div class="col-4 row1-2">
                                <form>
                                <b-button v-clipboard:copy="item.title"  size="sm" variant="outline-info" class="mr-2" data-toggle="tooltip" data-placement="top" title="copy">
                                    <b-icon icon="files" aria-hidden="true" variant="dark" style="">
                                    </b-icon></b-button>
                                    <b-button  v-on:click="removeItem(item.id)" size="sm" variant="outline-info" data-toggle="tooltip" data-placement="top" title="delete">
                                    <b-icon v-on:click="removeItem(item.id)" size="sm" icon="trash" aria-hidden="true" variant="danger">
                                    </b-icon></b-button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </li>
                
             <!--Итерируем кассив todos и баиндим кадый iтый элемент в переменную todo
                прослушиваем событие нажатия на кнопку удаления, создавая метод для удаления removeTodo -->
        </ul>
    </div>
    
    <h4 v-else><hr> No Items! <hr> </h4>
</template>
<script>
import {mapGetters, mapMutations } from 'vuex';
import Item from '@/components/Item' 
export default {
    //data(){
     //   idItem:
  //},

    //props: {
    //    item
    //},
    methods: {
    ...mapMutations(['deleteItem']),
    removeItem(id){
        this.deleteItem(id)
        //console.log("кнопка нажатa")
        //this.allPosts = this.allPosts.filter(t => t.id == this.Item)
        },
    },
    computed: mapGetters(["allPosts"])
}
</script>

<style scoped>
ul{
        margin-top: 4rem;
        padding-inline-start: 5%;
        padding-inline-end: 5%;
}
    li{
        display: flex;
        justify-content: space-between;
        
        padding: .1rem 2rem;
        margin-top: 1rem;
        border-bottom: 1px solid black;
    }
    .del {
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: bold;
        }
    .row1-1{
        display: flex;
        justify-content: flex-start;
        padding-top: 0.5rem;
    }
    .row1-2{
       display: flex;
        justify-content: flex-end;
    }
    
   
</style>