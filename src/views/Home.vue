<template>
    <div>
        <px-cards />
    </div>
</template>
<script>
import PxCards from '@/components/PxCards.vue'
import api from '@/api'

export default {
    name:'Home',

    components:{
        PxCards
    },
    data(){
        return{
            results:[]
        }
    },
    created () {
        api.getResults()
        .then(results => this.results = results)
    }
}
</script>