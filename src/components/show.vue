<template>
    <div class="modal">
        <div class="header">
            <h2 
                :class="headerClass"
            >
                 
            </h2>
            <v-btn
                @click="$emit('cancel')"     
            >
                X
            </v-btn>
        </div>
        <div class="body">
            <label for="name">speciality</label><br>
            <input 
                v-model="name"
                placeholder="speciality"  
                class="input" 
            />
            <label for="code">custom code</label><br>
            <input 
                v-model="code" 
                placeholder="custom code" 
                class="input" 
                :disabled="item && item.code"
            />
            <label for="description">administration code</label><br>
            <input 
                v-model="description" 
                placeholder="administration code" 
                class="input" 
            />
        </div>
        <div class="footer">
            <v-btn
                @click="$emit('save',{ name, code, description })"
                class="btn"
            >
                Save
            </v-btn>
            <v-btn
                @click="$emit('cancel')"
            >
                Cancel
            </v-btn>
        </div>
    </div>    
</template>
<script>
export default{
    props: {
        item: Object
    },
    data(){
        return{
            name: this.item?.name || '',
            code: this.item?.code || '',
            description: this.item?.description || '',
            headerClass:'title',
        }
    },
}
</script>
<style scoped>
.header{
    background-color: blue; 
    width: 500px;   
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid blue;
}
.title{
    color:white
}
.body{
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    background-color: white;
    border: 1px solid grey;
    padding: 20px;
}
.btn{
    margin-right:25px;
}
.modal{
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;
    position: absolute;
    top: 20%;
    background-color: white;
    left: 40%;
}
.input {
    border: 1px solid gray;
    width: 400px;
    height: 30px;
    margin-bottom: 12px;
}
.footer{
    display: flex;
    border: 1px solid grey;
    width: 500px;
    justify-content: space-between;
    padding: 20px;
}
</style>