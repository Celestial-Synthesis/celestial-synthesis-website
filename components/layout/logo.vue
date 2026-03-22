<template>
  <div id="header__logo" class="company-logo">
    <NuxtLink to="/" aria-label="Celestial Synthesis home">
      <img
        src="/images/logos/celestial-synthesis.webp"
        alt="Celestial Synthesis logo"
      />
      <span>Celestial Synthesis</span>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.company-logo {
  height: 3em;
  margin: 0;
  width: max-content;
  display: flex;
  align-items: center;

  a {
    display: inline-flex;
    align-items: center;
    gap: $spacing2;
  }

  img {
    position: relative;
    height: 3em;
    width: auto;
  }

  span {
    display: inline-block;
    max-width: 7.6em;
    font-size: 1.08rem;
    font-style: normal;
    font-family: $font-main;
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 1.05;
    color: $dark-grey;
    text-wrap: balance;

    @include media(xsm) {
      max-width: 6.8em;
      font-size: 0.92rem;
    }
  }
}

</style>
