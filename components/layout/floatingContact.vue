<template>
  <div class="floating-contact">
    <a
      class="floating-contact__toggle"
      :href="selectedWhatsappUrl"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      :data-country-code="selectedCountryCode"
    >
      <span class="floating-contact__toggle-dot" aria-hidden="true"></span>
      <span class="floating-contact__toggle-copy">
        <strong>WhatsApp us</strong>
        <small>{{ contactLabel }}</small>
      </span>
    </a>
  </div>
</template>

<script setup>
const defaultCountryCode = "SG";
const malaysiaCountryCode = "MY";
const selectedCountryCode = ref(defaultCountryCode);

const defaultMessage = encodeURIComponent(
  "Hi Celestial Synthesis, I would like to ask about an IT or software solution.",
);
const sgWhatsappUrl = `https://wa.me/6594869825?text=${defaultMessage}`;
const myWhatsappUrl = `https://wa.me/60166823630?text=${defaultMessage}`;

const selectedWhatsappUrl = computed(() =>
  selectedCountryCode.value === malaysiaCountryCode
    ? myWhatsappUrl
    : sgWhatsappUrl,
);

const contactLabel = computed(() =>
  selectedCountryCode.value === malaysiaCountryCode
    ? "Malaysia line"
    : "Singapore line",
);

onMounted(async () => {
  try {
    const response = await $fetch("/api/visitor-country");
    selectedCountryCode.value =
      response?.countryCode === malaysiaCountryCode
        ? malaysiaCountryCode
        : defaultCountryCode;
  } catch {
    selectedCountryCode.value = defaultCountryCode;
  }
});
</script>

<style lang="scss" scoped>
.floating-contact {
  position: fixed;
  right: $spacing4;
  bottom: $spacing4;
  z-index: 120;
  display: grid;
  justify-items: end;
  gap: $spacing2;

  @include media(xsm, sm) {
    right: $spacing3;
    bottom: $spacing3;
    left: $spacing3;
  }
}

.floating-contact__toggle {
  display: inline-grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-items: start;
  gap: 0.65rem;
  padding: 0.95rem 1.25rem;
  border: 0;
  border-radius: 999px;
  background: linear-gradient(135deg, #1e7f3e, #25ad59);
  color: $white;
  font-family: $font-accent;
  font-size: $font-size7;
  font-weight: 700;
  letter-spacing: 0.01em;
  box-shadow: 0 1em 2.4em rgba(20, 110, 24, 0.26);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 1.2em 2.8em rgba(20, 110, 24, 0.3);
  }

  @include media(xsm, sm) {
    width: 100%;
  }
}

.floating-contact__toggle-copy {
  display: grid;
  gap: 0.05rem;

  strong,
  small {
    line-height: 1.1;
  }

  small {
    font-size: 0.78rem;
    font-weight: 600;
    opacity: 0.88;
  }
}

.floating-contact__toggle-dot {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 0 0 0.28rem rgba(255, 255, 255, 0.16);
  flex: 0 0 auto;
}
</style>
