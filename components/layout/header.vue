<template>
  <header id="header">
    <div class="header-inner">
      <LayoutLogo />
      <NavigationMainMenu />
    </div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  position: sticky;
  top: 0;
  z-index: 100;
  margin-inline: calc(50% - 50vw);
  width: auto;
  padding: 0 $spacing3;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #dde6f0;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: $spacing4;
    max-width: 86em;
    margin-inline: auto;
    min-height: 5.2em;
  }

  @include media(xsm) {
    padding: 0 $spacing4;

    .header-inner {
      min-height: 4.5em;
    }

    #locale-toggle {
      display: none;
    }
  }
}

#header__logo {
  align-self: center;
}

#main-menu {
  align-self: center;
  justify-self: end;
}
</style>
