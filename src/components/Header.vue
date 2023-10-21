<template>
    <div class="flex">
        <span> {{ 'Categories' }} </span>
        <VBtn
            @click="$emit('buttonClick')"
        >
        {{ 'Category' }}
        </VBtn>
    </div>
</template>
<style scoped>
.flex{
    display: flex;
    justify-content: space-between;
    margin: 20px;
}
</style>