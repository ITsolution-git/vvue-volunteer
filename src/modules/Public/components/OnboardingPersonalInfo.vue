<template>
  <div class="onboarding-personal-info">
    <i18n path="onboarding.personalInfo.title" tag="h1" class="display-1 mb-4">
      <span place="accent" class="accented" v-t="'onboarding.personalInfo.title.accent'" />
    </i18n>
    <vv-progress-simple :current="step" :total="3" />
    <router-view />
  </div>
</template>

<script>
import VvProgressSimple from '@/shared/components/ProgressSimple';

export default {
  name: 'OnboardingPersonalInfo',
  components: {
    VvProgressSimple,
  },
  data() {
    return {
      step: 1,
    };
  },
  watch: {
    $route(to) {
      this.step = to.path.slice(-1);
    },
  },
  mounted() {
    this.step = this.$route.path.slice(-1);
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/styles/fonts";

  .onboarding-personal-info {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
