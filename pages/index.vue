<template>
  <main id="main" class="home">
    <section ref="heroSection" class="hero hero-surface">
      <div class="section-inner hero-inner">
        <div ref="heroCopy" class="hero-copy">
          <h1 ref="heroTitle" :style="heroTitleStyle">Celestial Synthesis</h1>
          <p class="lead" :style="heroLeadStyle">
            Where boundless imagination becomes precise solutions.
          </p>
        </div>
      </div>
    </section>

    <section class="pathways band-light" aria-label="What we build">
      <div class="section-inner">
        <header class="section-header">
          <p class="section-eyebrow">What We Build</p>
          <h2>Software That Helps People Work Smarter</h2>
        </header>
        <div class="pathway-grid">
          <article class="pathway-card">
            <p class="pathway-kicker">Business Solutions</p>
            <h3>
              <span class="pathway-title-line">Need software that</span>
              <span class="pathway-title-line">helps your business move</span>
              <span class="pathway-title-line">faster and with less effort?</span>
            </h3>
            <p>
              We build practical digital solutions for businesses that want to
              improve operations, reduce repetitive work, and create better
              systems for the people behind them.
            </p>
            <div class="pathway-media">
              <img
                src="/images/header/about-us-illustration.webp"
                width="1200"
                height="760"
                alt="Product delivery illustration"
              />
            </div>
            <NuxtLink class="text-link" to="/about">Learn About Celestial Synthesis</NuxtLink>
          </article>
          <article class="pathway-card pathway-card">
            <p class="pathway-kicker">Flagship Product</p>
            <h3>
              <span class="pathway-title-line">FlowR brings clearer</span>
              <span class="pathway-title-line">guidance to websites, tools,</span>
              <span class="pathway-title-line">and team workflows.</span>
            </h3>
            <p>
              As the first product we built, FlowR shows how we turn everyday
              friction into something simple, usable, and easy to share.
            </p>
            <div class="pathway-media">
              <img
                src="/images/products/flowr-illustration.webp"
                width="1400"
                height="840"
                alt="FlowR workflow illustration"
              />
            </div>
            <a class="text-link" href="http://flowr.celestialsynthesis.com/">Explore FlowR</a>
          </article>
        </div>
      </div>
    </section>

    <section class="mission band-white" aria-label="Mission highlights">
      <div class="section-inner mission-inner">
        <header class="section-header">
          <p class="section-eyebrow">Why Teams Trust Us</p>
          <h2>Built By Engineers Who Know Software Beyond The Pitch</h2>
          <p>
            Our team brings more than a decade of experience in software and
            has contributed to mature products used by millions. We value clear
            thinking, practical decisions, and solutions that stay useful long
            after launch.
          </p>
        </header>
        <div class="mission-list">
          <article>
            <span>01</span>
            <div>
              <h3>Real Product Experience</h3>
              <p>
                We are not guessing from the outside. We have helped build
                software at scale and bring that experience into every product
                and client solution we create.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Smart Elegant Solutions</h3>
              <p>
                We believe many complex problems can be solved with a smarter,
                simpler approach that removes friction instead of adding more
                process around it.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Helpful From Start To Finish</h3>
              <p>
                We stay approachable throughout the process, helping teams make
                better decisions early and staying involved until the solution
                works in the real world.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="journey band-blue" aria-label="How we work">
      <div class="section-inner">
        <header class="section-header section-header--compact">
          <p class="section-eyebrow">How We Work</p>
          <h2>From Business Friction To Better Systems</h2>
        </header>
        <div class="journey-grid">
          <article class="journey-step">
            <span class="step-no">01</span>
            <h3>Understand The Problem</h3>
            <p>
              We start by understanding where time, effort, and clarity are
              being lost so the right solution becomes easier to define.
            </p>
          </article>
          <article class="journey-step">
            <span class="step-no">02</span>
            <h3>Shape The Right Solution</h3>
            <p>
              We recommend a practical path forward, whether that means a new
              product, a focused internal tool, or a simpler workflow that gets
              the job done.
            </p>
          </article>
          <article class="journey-step">
            <span class="step-no">03</span>
            <h3>Build And Support</h3>
            <p>
              We deliver with long-term usefulness in mind, so teams can adopt
              the solution with confidence and keep growing from it.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="flowr-spotlight band-dark" aria-label="FlowR spotlight">
      <div class="section-inner spotlight-inner">
        <div class="spotlight-copy">
          <p class="section-eyebrow">Product Spotlight</p>
          <h2>FlowR: A Practical Way To Show People How To Use The Web</h2>
          <p>
            FlowR is the first product we built at Celestial Synthesis. It
            helps people communicate website and tool usage more clearly,
            whether they are guiding family members, onboarding teams, or
            introducing newly released features across departments.
          </p>
          <ul>
            <li>Show someone exactly how to complete a task on a website</li>
            <li>Make internal training easier for browser-based tools</li>
            <li>Help teams explain and adopt new product features faster</li>
          </ul>
          <div class="hero-actions hero-actions--dark">
            <a class="btn btn-primary" href="http://flowr.celestialsynthesis.com/">Learn More About FlowR</a>
            <NuxtLink class="btn btn-secondary" to="/contact"
              >Talk To Our Team</NuxtLink
            >
          </div>
        </div>
        <div class="spotlight-media">
          <img
            src="/images/products/flowr-illustration.webp"
            width="1400"
            height="840"
            alt="FlowR product visual"
          />
        </div>
      </div>
    </section>

    <section class="closing-cta band-accent">
      <div class="section-inner closing-inner">
        <p class="section-eyebrow">See What We Build</p>
        <h2>
          Explore FlowR, or start a conversation about the kind of software
          your business really needs.
        </h2>
        <div class="hero-actions hero-actions--centered">
          <a class="btn btn-primary" href="http://flowr.celestialsynthesis.com/">Explore FlowR</a>
          <NuxtLink class="btn btn-secondary" to="/contact"
            >Talk To The Team</NuxtLink
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const heroSection = ref(null);
const heroCopy = ref(null);
const heroTitle = ref(null);
const heroScrollProgress = ref(0);
const heroViewportHeight = ref(0);
const heroTitleBottomGap = ref(0);

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

function smoothStep(value) {
  return value * value * (3 - 2 * value);
}

function updateHeroMetrics() {
  if (
    !process.client ||
    !heroSection.value ||
    !heroCopy.value ||
    !heroTitle.value
  ) {
    return;
  }

  heroViewportHeight.value = window.innerHeight;
  const sectionHeight = heroSection.value.clientHeight;
  const titleOffset = heroCopy.value.offsetTop + heroTitle.value.offsetTop;
  const titleHeight = heroTitle.value.offsetHeight;
  heroTitleBottomGap.value = Math.max(
    sectionHeight - titleOffset - titleHeight - 18,
    0,
  );
}

function updateHeroScrollProgress() {
  if (!process.client || !heroSection.value) {
    return;
  }

  const rect = heroSection.value.getBoundingClientRect();
  const heroHeight = Math.max(rect.height, window.innerHeight);
  const travelled = Math.min(Math.max(-rect.top, 0), heroHeight);
  heroScrollProgress.value = Math.min(travelled / heroHeight, 1);
}

onMounted(() => {
  updateHeroMetrics();
  updateHeroScrollProgress();
  window.addEventListener("scroll", updateHeroScrollProgress, {
    passive: true,
  });
  window.addEventListener("resize", updateHeroMetrics);
  window.addEventListener("resize", updateHeroScrollProgress);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateHeroScrollProgress);
  window.removeEventListener("resize", updateHeroMetrics);
  window.removeEventListener("resize", updateHeroScrollProgress);
});

const heroTitleStyle = computed(() => {
  const progress = Math.min(heroScrollProgress.value / 0.72, 1);
  const titleTravel = Math.min(
    heroTitleBottomGap.value,
    heroViewportHeight.value * 0.54,
    560,
  );
  return {
    transform: `translate3d(0, ${progress * titleTravel}px, 0)`,
    opacity: `${1 - progress * 0.08}`,
  };
});

const heroLeadStyle = computed(() => {
  const progress = easeOutCubic(heroScrollProgress.value);
  const leadFade = Math.min(progress * 6, 1);
  return {
    transform: `translate3d(0, ${progress * -52}px, 0) scale(${1 - progress * 0.1})`,
    opacity: `${Math.max(1 - leadFade, 0)}`,
  };
});

const fallbackHomeSeo = {
  metaImage: "/images/logos/celestial-synthesis-placeholder.svg",
  metaDescription:
    "Celestial Synthesis builds reliable software products and solutions, including FlowR.",
  metaTitle: "Celestial Synthesis | Software Company",
  keywords:
    "celestial synthesis, software company, flowr, workflow software, product engineering",
};

const { data: home } = await useAsyncData("home", () =>
  queryContent("/pages/home").findOne(),
);

setSeoHead(home.value?.SEOmetaData ?? fallbackHomeSeo);
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  margin-inline: calc(50% - 50vw);
  width: auto;
  padding: 0;
  @include fade-in;

  .section-inner {
    max-width: 86em;
    margin-inline: auto;
    padding: $spacing9 $spacing4;

    @include media(xsm, sm) {
      padding: $spacing6 $spacing4;
    }
  }

  .kicker,
  .section-eyebrow {
    font-family: $font-accent;
    text-transform: none;
    letter-spacing: 0.01em;
    font-weight: 600;
    font-size: $font-size8;
    margin: 0 0 $spacing1;
    color: $base-color;
  }

  h1,
  h2,
  h3 {
    margin-top: 0;
  }

  .lead {
    font-size: clamp(1.1rem, 0.95rem + 0.5vw, 1.5rem);
    line-height: 1.65;
    max-width: 34em;
  }

  .section-header {
    max-width: 46em;
    margin-bottom: $spacing5;

    p:last-child {
      font-size: $font-size6;
      line-height: 1.7;
      color: $grey;
    }
  }

  .section-header--compact {
    max-width: 40em;
  }

  .hero-surface {
    overflow: hidden;
    background:
      linear-gradient(rgba(13, 21, 33, 0.5), rgba(13, 21, 33, 0.5)),
      #dfeaf5 url("/images/header/celestial-synthesis-hero.webp") center
        center / cover no-repeat;
  }

  .band-light {
    background: #f6fbff;
  }

  .band-white {
    background: $white;
  }

  .band-blue {
    background: #eef5fd;
  }

  .band-dark {
    background: #1f2d40;
    color: $white;

    .section-eyebrow {
      color: #bddaf6;
    }

    h2,
    h3,
    p,
    li {
      color: inherit;
    }
  }

  .band-accent {
    background: #e7f1fb;
  }

  .hero-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: calc(100svh - 5.2em);

    @include media(xsm, sm) {
      min-height: calc(100svh - 4.5em);
      padding-block: $spacing6;
    }
  }

  .hero-copy {
    max-width: 52em;
    padding-block: $spacing7;
    will-change: transform, opacity;
    display: grid;
    justify-items: center;

    h1 {
      font-size: clamp(3.2rem, 2.2rem + 3vw, 6.6rem);
      line-height: 0.92;
      max-width: none;
      margin-bottom: $spacing2;
      color: $white;
      letter-spacing: -0.03em;
      text-shadow: 0 0.12em 0.38em rgba(13, 21, 33, 0.22);
      will-change: transform, opacity;
      transform-origin: center top;

      &::before {
        content: none;
      }
    }
  }

  .hero-copy .lead {
    margin-inline: auto;
    font-size: clamp(1.18rem, 1rem + 0.55vw, 1.55rem);
    line-height: 1.6;
    max-width: 28ch;
    color: rgba(255, 255, 255, 0.92);
    text-shadow: 0 0.08em 0.3em rgba(13, 21, 33, 0.18);
    will-change: transform, opacity;
    transform-origin: center top;
  }

  .panel-label,
  .pathway-kicker {
    font-family: $font-accent;
    text-transform: none;
    letter-spacing: 0.01em;
    font-weight: 600;
    font-size: $font-size8;
  }

  .pathway-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: $spacing4;

    @include media(xsm, sm) {
      grid-template-columns: 1fr;
    }
  }

  .pathway-card {
    padding: $spacing5;
    border-radius: $border-radius3;
    background: $white;
    box-shadow: 0 1.2em 2.2em rgba(30, 43, 61, 0.05);
    display: grid;
    align-content: start;

    h3 {
      font-size: clamp(1.5rem, 1.2rem + 1vw, 2.2rem);
      line-height: 1.05;
      min-height: calc(1.05em * 3);
    }

    .pathway-title-line {
      display: block;
    }

    @include media(xsm, sm) {
      h3 {
        min-height: 0;
      }
    }
  }

  .pathway-media {
    margin-top: $spacing3;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: $border-radius2;
    }
  }

  .pathway-card--accent {
    background: #eef5fd;
  }

  .text-link {
    display: inline-block;
    margin-top: $spacing3;
    font-family: $font-accent;
    text-transform: none;
    letter-spacing: 0.01em;
    font-weight: 600;
    color: $base-color;
  }

  .mission-inner {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: $spacing7;
    align-items: start;

    @include media(xsm, sm) {
      grid-template-columns: 1fr;
    }
  }

  .mission-list {
    display: grid;
    gap: $spacing4;

    article {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: $spacing3;
      padding-bottom: $spacing3;
      border-bottom: 1px solid #d9e4f1;
    }

    span {
      font-family: $font-accent;
      font-size: clamp(2.2rem, 1.5rem + 1vw, 3.2rem);
      line-height: 1;
      font-weight: 700;
      color: $base-color;
    }
  }

  .journey-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: $spacing3;

    @include media(xsm, sm) {
      grid-template-columns: 1fr;
    }
  }

  .journey-step {
    padding: $spacing4;
    background: #f8fbff;
    border-radius: $border-radius3;
    box-shadow: 0 1em 2em rgba(30, 43, 61, 0.05);

    .step-no {
      display: inline-block;
      font-family: $font-accent;
      font-size: clamp(2.4rem, 1.8rem + 1vw, 3.4rem);
      line-height: 1;
      margin-bottom: $spacing2;
      color: $base-color;
    }
  }

  .spotlight-inner {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: $spacing6;
    align-items: center;

    @include media(xsm, sm) {
      grid-template-columns: 1fr;
    }
  }

  .spotlight-copy ul {
    padding-left: 1.2em;
    margin: $spacing3 0;
  }

  .spotlight-copy li {
    margin-bottom: $spacing1;
  }

  .spotlight-media img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: $border-radius3;
    background: #f9fafb;
  }

  .closing-cta {
    text-align: center;

    h2 {
      max-width: 18ch;
      margin-inline: auto;
      font-size: clamp(2.1rem, 1.5rem + 2vw, 4rem);
      line-height: 1;
    }
  }

  .hero-actions {
    display: flex;
    gap: $spacing2;
    flex-wrap: wrap;
    margin-top: $spacing3;
    justify-content: flex-start;

    @include media(xsm, sm) {
      justify-content: center;
    }
  }

  .hero-actions--centered {
    justify-content: center;
  }

  .hero-actions--dark {
    @include media(xsm, sm) {
      justify-content: flex-start;
    }
  }

  .btn {
    display: inline-block;
    padding: $spacing1 $spacing3;
    border-radius: 999px;
    font-family: $font-accent;
    text-transform: none;
    font-size: $font-size8;
    letter-spacing: 0.01em;
    font-weight: 600;
    text-align: center;
    transition: $transition2;
  }

  .btn-primary {
    background: $base-color;
    color: $white;
    border: 1px solid $base-color;
  }

  .btn-secondary {
    background: transparent;
    color: inherit;
    border: 1px solid currentColor;
  }

  .btn-primary:hover,
  .btn-secondary:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
}
</style>
