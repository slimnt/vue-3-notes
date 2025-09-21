<template>
    <div class="wrapper">
        <AppHeader />
        <div class="wrapper-content">
            <div class="container">
                <router-view />
            </div>
        </div>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
    }
};
</script>

<style>
</style>
