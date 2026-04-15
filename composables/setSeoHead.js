export default function (seoData = {}) {
    const fallbackSeo = {
        metaTitle: 'Celestial Synthesis',
        metaDescription: 'Celestial Synthesis builds reliable software products and solutions.',
        keywords: 'celestial synthesis, software company',
        metaImage: '/images/logos/celestial-synthesis-placeholder.svg',
    };
    const resolvedSeo = {
        ...fallbackSeo,
        ...(seoData || {}),
    };

    const rtc = useRuntimeConfig();
    const cEnv = rtc.public.cloudinaryEnvUrl;
    const assetUrlBase = `${cEnv}/image/upload/c_scale/w_600/q_auto:best`;
    const metaImage = resolvedSeo.metaImage || fallbackSeo.metaImage;
    const isAbsolute = /^([a-z0-9]*:|.{0})\/\/.*$/i.test(metaImage);
    const imageUrl = computed(() => isAbsolute ? metaImage : `${assetUrlBase}${metaImage}`);

    useSeoMeta({
        title: resolvedSeo.metaTitle,
        description: resolvedSeo.metaDescription,
        keywords: resolvedSeo.keywords,
        ogTitle: resolvedSeo.metaTitle,
        ogDescription: resolvedSeo.metaDescription,
        ogImage: imageUrl,
    });
}