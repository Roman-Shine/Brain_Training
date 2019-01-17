<template>
  <div class="alert alert-primary">
    <h3>success: {{ stats.success }}</h3>
    <h3>error: {{ stats.error }}</h3>
    <hr>
    <button class="btn btn-primary" @click="$emit('repeat')">Try Again</button>
    <button class="btn btn-primary" @click="$emit('onStartLevel')">Go to first level</button>
    <button class="btn btn-success" @click="$emit('nextLevel')"
                                    v-if="this.level < 3"
    >
      Next Level
    </button>
  </div>
</template>

<script>
export default {
  props: ['stats', 'level']
}
</script>

<style scoped>
  .btn{
    margin: 20px 10px;
  }
</style>
