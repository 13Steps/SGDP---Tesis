<script>
  import VueCal from 'vue-cal'
  import 'vue-cal/dist/vuecal.css'

export default {
  components: { VueCal },
}
</script>

<template>
  <div id="vueCalendarComponente">
    <vue-cal
      class="vuecal--rounded-theme"
      xsmall
      hide-view-selector
      active-view="month"
      :disable-views="['week','day','year','years']"
      style="width: 100%;height: 100%">
    </vue-cal>
  </div>
</template>

<style scoped>
/* Green-theme. */
.vuecal__menu, .vuecal__cell-events-count {background-color: rgb(255, 255, 255);}
.vuecal__title-bar {background-color: #ffffff;}
.vuecal__cell--today, .vuecal__cell--current {background-color: rgb(255, 255, 255);}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgb(255, 255, 255);}
.vuecal__cell--selected:before {border-color: rgb(255, 255, 255);}
/* Cells and buttons get highlighted when an event is dragged over it. */
.vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgb(255, 255, 255);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgb(255, 255, 255);}
</style>