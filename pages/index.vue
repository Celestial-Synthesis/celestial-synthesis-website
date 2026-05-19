<template>
  <main id="main" class="home">
    <section ref="heroSection" class="hero hero-surface">
      <div class="section-inner hero-inner">
        <div ref="heroCopy" class="hero-copy">
          <h1 ref="heroTitle" :style="heroTitleStyle">Celestial Synthesis</h1>
          <p class="lead" :style="heroLeadStyle">
            <span class="lead-line">Where boundless imagination</span>
            <span class="lead-line">becomes precise solutions.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="pathways band-light" aria-label="What we build">
      <div class="section-inner">
        <header class="section-header">
          <p class="section-eyebrow">What We Can Build For You</p>
          <h2>
            From a simple business website to the software your team depends on
            daily.
          </h2>
          <p>
            Paid traffic only matters if visitors quickly understand whether you
            can solve their problem. We make that path clear, practical, and
            grounded in real delivery experience.
          </p>
        </header>
        <div class="pathway-grid">
          <article class="pathway-card">
            <p class="pathway-kicker">Business Websites</p>
            <h3>
              <span class="pathway-title-line"
                >Landing pages and company websites</span
              >
              <span class="pathway-title-line"
                >that explain your value clearly</span
              >
              <span class="pathway-title-line">and convert better.</span>
            </h3>
            <p>
              When your business needs a sharper online presence, we build pages
              that present your offer cleanly, support marketing, and make it
              easy for interested prospects to contact you.
            </p>
            <div class="pathway-media">
              <img
                src="/images/header/website-illustration.webp"
                width="1200"
                height="760"
                alt="Website and product planning illustration"
              />
            </div>
            <NuxtLink class="text-link" to="/contact"
              >Talk About Your Website</NuxtLink
            >
          </article>
          <article class="pathway-card">
            <p class="pathway-kicker">Business Systems And SaaS</p>
            <h3>
              <span class="pathway-title-line"
                >Internal tools, workflow systems,</span
              >
              <span class="pathway-title-line">customer platforms, and</span>
              <span class="pathway-title-line">full SaaS products.</span>
            </h3>
            <p>
              We work with businesses that need more than a brochure site,
              whether that means operations software, a product MVP, or a more
              complex platform that needs to scale over time.
            </p>
            <div class="pathway-media">
              <img
                src="/images/header/business-system-illustration.webp"
                width="1400"
                height="840"
                alt="Business systems and SaaS illustration"
              />
            </div>
            <NuxtLink class="text-link" to="/contact"
              >Discuss Your Software Idea</NuxtLink
            >
          </article>
        </div>
      </div>
    </section>

    <section class="audience band-white" aria-label="Who we help">
      <div class="section-inner audience-inner">
        <header class="section-header section-header--compact">
          <p class="section-eyebrow">Who This Is For</p>
          <h2>
            You likely need us if your business is facing one of these problems.
          </h2>
        </header>
        <div class="audience-notes">
          <article class="audience-note">
            <p class="audience-item__kicker">Visibility</p>
            <h4>Website traffic is not becoming real enquiries.</h4>
            <p>
              Better positioning, structure, and calls to action can turn more
              interest into conversation.
            </p>
          </article>
          <article class="audience-note">
            <p class="audience-item__kicker">Operations</p>
            <h4>Too much important work is still being handled manually.</h4>
            <p>
              Internal tools and workflow systems can remove repeated work and
              improve day-to-day visibility.
            </p>
          </article>
          <article class="audience-note">
            <p class="audience-item__kicker">New Product</p>
            <h4>You need a capable team to shape and build the first version.</h4>
            <p>
              We help define what to build first so the product starts with a
              cleaner scope and better technical decisions.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="ai-solutions band-blue"
      aria-label="AI integration and AI-powered solutions"
    >
      <div class="section-inner ai-solutions-layout">
        <div class="ai-overview">
          <header class="section-header section-header--compact ai-overview__header">
            <p class="section-eyebrow">AI Integration</p>
            <h2>
              We can help you turn AI from a buzzword into a useful business
              capability.
            </h2>
            <p>
              We build AI-powered solutions that fit into real operations,
              whether that means adding AI features into an existing product,
              creating internal AI assistants, or automating work with the
              right human review in place.
            </p>
          </header>
          <ul class="ai-pillars" aria-label="AI capabilities overview">
            <li>Product AI integration</li>
            <li>Internal AI assistants</li>
            <li>Automation with human checks</li>
          </ul>
        </div>
        <div class="ai-feature-list">
          <article class="ai-feature">
            <span class="ai-feature__no">01</span>
            <div>
              <h3>AI features inside your existing product</h3>
              <p>
                We can integrate AI into websites, internal systems, and
                customer-facing software without forcing a full rebuild.
              </p>
            </div>
          </article>
          <article class="ai-feature">
            <span class="ai-feature__no">02</span>
            <div>
              <h3>Internal copilots and knowledge assistants</h3>
              <p>
                From search and summarisation to guided workflows, we can create
                AI tools that help teams move faster and make better use of
                company knowledge.
              </p>
            </div>
          </article>
          <article class="ai-feature">
            <span class="ai-feature__no">03</span>
            <div>
              <h3>AI-powered automation with human checks</h3>
              <p>
                We focus on useful automation, clear review points, and
                responsible rollout so the result is workable in the real
                world, not just impressive in a demo.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="mission band-white" aria-label="Mission highlights">
      <div class="section-inner mission-inner">
        <header class="section-header">
          <p class="section-eyebrow">Why Businesses Engage Us</p>
          <h2>
            Clear thinking, right-sized scope, and software built for real use.
          </h2>
          <p>
            We focus on understanding the practical problem first, then matching
            the solution to the level of complexity your business actually
            needs.
          </p>
        </header>
        <div class="mission-list">
          <article>
            <span>01</span>
            <div>
              <h3>Business-First Problem Solving</h3>
              <p>
                We help clarify the problem before recommending the build, so
                you do not spend time and budget solving the wrong thing.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Solutions That Fit The Actual Need</h3>
              <p>
                Some teams need a sharper website, others need a workflow tool
                or product MVP. We help define the right scope instead of
                forcing a larger project than necessary.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Built For Long-Term Use</h3>
              <p>
                We build with clarity, maintainability, and adoption in mind so
                the result stays useful after launch instead of becoming another
                system your team avoids.
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
          <h2>From business friction to a software plan that makes sense.</h2>
        </header>
        <div class="journey-grid">
          <article class="journey-step">
            <span class="step-no">01</span>
            <h3>Clarify The Real Need</h3>
            <p>
              We start with the business problem, the workflow, and the decision
              points that matter before recommending any build.
            </p>
          </article>
          <article class="journey-step">
            <span class="step-no">02</span>
            <h3>Recommend The Right Scope</h3>
            <p>
              Sometimes the answer is a fast website project. Sometimes it is an
              internal tool or SaaS platform. We help you choose the right level
              of solution.
            </p>
          </article>
          <article class="journey-step">
            <span class="step-no">03</span>
            <h3>Build For Real Use</h3>
            <p>
              We build with adoption, maintainability, and long-term usefulness
              in mind so the software stays valuable after launch.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="flowr-spotlight band-dark" aria-label="FlowR spotlight">
      <div class="section-inner spotlight-inner">
        <div class="spotlight-copy">
          <p class="section-eyebrow">Product Spotlight</p>
          <h2>
            FlowR shows how we turn everyday friction into a clear software
            product.
          </h2>
          <p>
            FlowR is our own product, built to make website and tool guidance
            easier to communicate. It is a useful example of how we approach
            software: identify friction, simplify the user experience, and make
            the result practical enough to use immediately.
          </p>
          <ul>
            <li>Turn a practical pain point into a focused digital product</li>
            <li>
              Design for usability instead of adding unnecessary complexity
            </li>
            <li>
              Ship software that can support training, onboarding, and adoption
            </li>
          </ul>
          <div class="hero-actions hero-actions--dark">
            <a
              class="btn btn-primary"
              href="http://flowr.celestialsynthesis.com/"
              >Learn More About FlowR</a
            >
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
        <p class="section-eyebrow">Start The Conversation</p>
        <h2>
          If you need an IT or software solution, start with a practical
          conversation and we will help you scope the right next move.
        </h2>
        <div class="hero-actions hero-actions--centered">
          <NuxtLink class="btn btn-primary" to="/contact"
            >Talk To The Team</NuxtLink
          >
          <NuxtLink class="btn btn-secondary" to="/contact"
            >Ask About Your Project</NuxtLink
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

    .hero-kicker {
      margin: 0 0 $spacing2;
      color: rgba(255, 255, 255, 0.84);
      font-family: $font-accent;
      font-size: $font-size8;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1 {
      font-size: clamp(3.2rem, 2.2rem + 3vw, 6.6rem);
      line-height: 0.92;
      max-width: 12ch;
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
    max-width: 38ch;
    color: rgba(255, 255, 255, 0.92);
    text-shadow: 0 0.08em 0.3em rgba(13, 21, 33, 0.18);
    will-change: transform, opacity;
    transform-origin: center top;
  }

  .hero-copy .lead-line {
    display: block;
  }

  .hero-actions--hero {
    margin-top: $spacing4;
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

  .audience-inner {
    display: grid;
    gap: $spacing4;
  }

  .audience-item__kicker {
    margin: 0;
    font-family: $font-accent;
    font-size: $font-size8;
    line-height: 1.2;
    font-weight: 700;
    color: $base-color;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .audience-note {
    padding: $spacing4;
    border-radius: $border-radius3;
    background: rgba(255, 255, 255, 0.86);
    border: 1px solid rgba(42, 77, 111, 0.08);
    box-shadow: 0 1em 2em rgba(30, 43, 61, 0.04);

    h4 {
      font-size: clamp(1.2rem, 1.05rem + 0.45vw, 1.45rem);
      line-height: 1.15;
      margin-bottom: $spacing2;
    }

    p:last-child {
      margin-bottom: 0;
    }
  }

  .audience-notes {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: $spacing3;

    @include media(xsm, sm) {
      grid-template-columns: 1fr;
    }
  }

  .ai-solutions-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: $spacing5;
    align-items: start;

    @include media(xsm, sm) {
      grid-template-columns: 1fr;
    }
  }

  .ai-overview {
    display: grid;
    gap: $spacing3;
    padding: $spacing5;
    border-radius: $border-radius3;
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(42, 77, 111, 0.08);
    box-shadow: 0 1.2em 2.2em rgba(30, 43, 61, 0.05);
  }

  .ai-overview__header {
    margin-bottom: 0;
  }

  .ai-pillars {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing2;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 0.95rem;
      border-radius: 999px;
      background: rgba(42, 77, 111, 0.08);
      color: $base-color;
      font-family: $font-accent;
      font-size: $font-size8;
      font-weight: 600;
      letter-spacing: 0.01em;
    }
  }

  .ai-feature-list {
    display: grid;
    gap: $spacing3;
    padding-left: clamp(0.7rem, 0.4rem + 0.8vw, 1.25rem);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0.35rem;
      top: 0.5rem;
      bottom: 0.5rem;
      width: 1px;
      background: linear-gradient(rgba(42, 77, 111, 0.2), rgba(42, 77, 111, 0.04));
    }
  }

  .ai-feature {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: $spacing3;
    align-items: start;
    padding: $spacing4;
    border-radius: $border-radius3;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(42, 77, 111, 0.08);
    box-shadow: 0 1em 2em rgba(30, 43, 61, 0.04);
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: calc(-1 * clamp(0.7rem, 0.4rem + 0.8vw, 1.25rem));
      top: 1.55rem;
      width: 0.72rem;
      height: 0.72rem;
      border-radius: 999px;
      background: $base-color;
      box-shadow: 0 0 0 0.42rem rgba(142, 197, 255, 0.18);
    }

    h3 {
      font-size: clamp(1.35rem, 1.18rem + 0.55vw, 1.7rem);
      line-height: 1.15;
      margin-bottom: $spacing2;
    }

    p {
      margin-bottom: 0;
    }
  }

  .ai-feature__no {
    min-width: 2.45rem;
    font-family: $font-accent;
    font-size: clamp(2rem, 1.55rem + 0.8vw, 2.7rem);
    font-weight: 700;
    line-height: 1;
    color: $base-color;
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
