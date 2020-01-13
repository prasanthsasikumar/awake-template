<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="PhD Candidate"
      subtitle="University of Auckland"
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Research Focus</h3>
          <p>
            <strong>
              Multimodal Input in Remote Collaboration with Dense Scene
              Reconstruction.
            </strong>
          </p>
          <p>
            Have a keen interest in VR and AR applications and how they may
            assist industry to better solve problems. Currently doing PhD
            research under the supervision of Prof. Mark Billinghurst and Dr.
            Huidong Bai in Empathic Computing Lab at the University of Auckland
          </p>

          <p>
            Previous research in the design, development and testing wearable
            and non weareable haptic interfaces to improve immersion in Virtual
            Reality. This was funded by MBIE as part of NZ/Korea Human-Digital
            Content Interaction for Immersive 4D Home Entertainment project.
          </p>
          <br /><br /><br />
          <quote-card />
          <h3>Side Projects</h3>
          <p>
            I build stuff. Virtual and physical. For both business and pleasure.
            Join me in my development, design and electronics journey. Follow
            the projects spanning
            <strong>New Zealand, Cars, Places and Software development.</strong>
          </p>
        </div>

        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                PhD Research
              </p>
              <p class="subtitle">
                Wearable Remote Fusion
              </p>
              <figure class="image is-1by1">
                <opti-image
                  width="500"
                  height="500"
                  :src="require('~/assets/uploads/wearable-rf.jpg').src"
                  :srcset="require('~/assets/uploads/wearable-rf.jpg').srcSet"
                />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Magic Mirror
              </p>
              <p class="subtitle">
                Just as cool
              </p>
              <figure class="image is-1by1">
                <opti-image
                  width="500"
                  height="500"
                  :src="require('~/assets/uploads/magic-mirror.jpg').src"
                  :srcset="require('~/assets/uploads/magic-mirror.jpg').srcSet"
                />
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                SandBox
              </p>
              <p class="subtitle">
                Augmented Reality SandBox
              </p>
              <figure class="image is-1by1">
                <opti-image
                  width="500"
                  height="500"
                  :src="require('~/assets/uploads/sandbox.jpg').src"
                  :srcset="require('~/assets/uploads/sandbox.jpg').srcSet"
                />
              </figure>
            </article>
          </div>
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
