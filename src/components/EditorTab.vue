<template>
    <div class="editor">
        <h2>EDITOR</h2>
        <AddItem/>
        <AllItems/>
    </div>
</template>

<script>

import AddItem from '@/components/AddItem' 
import AllItems from '@/components/AllItems' 
export default {
     components: {
    AddItem, AllItems
  },
  
    
}
</script>
<style scoped>
.editor{
 text-align: center;
}
</style>