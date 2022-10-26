<script setup>
    import { useStore } from '@nanostores/vue';
    import {birdsStore} from '../../stores/birdsStore.js'
    let $birdsStore = useStore(birdsStore)
</script>

<template>
    <p>
        Total items on the list: {{$birdsStore.length}}
    </p>
</template>