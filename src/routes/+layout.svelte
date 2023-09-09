<script>
  import Footer from '../lib/Footer.svelte'
  import Nav from '../lib/Nav.svelte'
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  // $: if (browser && analyticsId) {
  //   webVitals({
  //     path: $page.url.pathname,
  //     params: $page.params,
  //     analyticsId
  //   })
  // }



  /** @type {import('./$types').LayoutServerData} */
  export let data;

  $: if (browser && data?.analyticsId) {
      webVitals({
          path: $page.url.pathname,
          params: $page.params,
          analyticsId: data.analyticsId
      });
  }
</script>

<Nav />
<main>
  <slot />
  <Footer />
</main>

<style global>
  @import './global.css';
</style>
