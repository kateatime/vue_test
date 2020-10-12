<template>
    <div v-if="this.$store.state.items.length">
        
        <ul> 
            <div class="container firstContainer">
        <div class="row">
            <div class="col-9 row1-1">Name</div>
            <div class="col-3 row1-2">Date</div>
        </div>
        </div>
                <li class="item li-Item" v-for="(item, index) in allPosts" :key="item.id" >
                    <div class="container">
                        <div class="row">
                            <div class="col-9 row2-1">
                                
                                <strong class="mr-3" >{{ index + 1 }}</strong>
                                <p id="copyText">{{item.title}}</p>
                                
                            </div>
                            <div class="col-3 row2-2">
                                {{item.date}}
                                <form>
                                    <div>
                                        <b-dropdown size="sm"  variant="link" toggle-class="text-decoration-none" no-caret>
                                            <template v-slot:button-content>
                                    <b-icon icon="three-dots-vertical" aria-hidden="true" variant="dark" style="">
                                    </b-icon>
                                                <span class="sr-only">Search</span>
                                            </template>
                                        <b-dropdown-item v-on:click="moveToT(item.id)" href="#">Move to top</b-dropdown-item>
                                        <b-dropdown-item v-on:click="moveToB(item.id)" href="#">Move to bottom</b-dropdown-item>
                                        </b-dropdown>
                                    </div>
                              
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

    methods: {
    ...mapMutations(['MoveToTop']),
    moveToT(id){
        this.MoveToTop(id)
        },
    ...mapMutations(['MoveToBottom']),
    moveToB(id){
        this.MoveToBottom(id)
        }
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
    .li-Item{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        border-bottom: 1px solid black;
    }
    .row1-1{
        display: flex;
        justify-content: flex-start;
    }
    .row2-1{
        display: flex;
        justify-content: flex-start;
    }
    .row1-2{
        display: flex;
        justify-content: flex-start;
    }
    .row2-2{
        display: flex;
        justify-content: flex-start;
        padding-top: 0.1rem;
    }
    .firstContainer{
        border-bottom: 1px solid black;
    }
    
   
</style>