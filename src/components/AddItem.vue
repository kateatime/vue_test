<template>

<form inline @submit.prevent="onSubmit">
    <div class="container">
        <div class="row">

    <!-- prevent позволят при отправке содержимого формы не перезагружать страницу -->
   <div class="col-10">
        <input type="text" class="form-control" placeholder="enter item..." v-model="title"> <!-- с помощью v-model получаем получаем содержимое input'а -->
   </div>
    <b-button type="submit" class="btn btn-info" >Add</b-button>
    </div>
    </div>
   
</form>
</template>
<script>
import { mapMutations} from "vuex";
export default {
        data() {
            return{
                title: ''
            }
    },
    methods: {
        
        ...mapMutations(['createItem']),
        onSubmit(){
            if (this.title.trim()){
        
            this.createItem({
                title: this.title,
                id: Date.now(),
                date: String(new Date().getDate()).padStart(2, '0') + '.' 
                + String(new Date().getMonth() + 1).padStart(2, '0') + '.' 
                + new Date().getFullYear()%2000 +"\u00A0"+"\u00A0"
                + String(new Date().getHours()).padStart(2, '0') + ':' 
                + String(new Date().getMinutes()).padStart(2, '0')
            });
            this.title = "";}
        }

    }
}
</script>
<style scoped>

    form {
        display: flex;
    };
    input {
        width: 100%;
    }
    
</style>