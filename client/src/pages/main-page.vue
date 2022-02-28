<template>
    <main>
        <h1>Things</h1>
        <ul>
            <li v-for="thing in things" :key="thing._id">{{thing.data.selftext}}</li>
        </ul>
    </main>
</template>

<script src="../static/index.js"></script>