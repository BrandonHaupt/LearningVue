

<template>
    <button :class="mode">
        <slot></slot>
    </button>
    <!-- <base-button mode="flat"></base-button> -->
</template>


<script>

    export default {
        props: ['mode']
    }

</script>


<style scope>
    button {
        padding: 0.75rem 1.5rem;
        font-family: inherit;
        background-color: #3a0061;
        border: 1px solid #3a0061;
        color: white;
        cursor: pointer;
        transition: .1s ease-in-out;
    }

    button:hover,
    button:active {
        background-color: #1e0032;
        border-color: #270041;
    }

    .flat {
        background-color: transparent;
        color: #3a0061;
        border: none;
    }

    .flat:hover,
    .flat:active {
        background-color: #edd2ff;  
    }
</style>