const COUNTRY_HEADERS = [
  "x-netlify-country-code",
  "cf-ipcountry",
  "x-vercel-ip-country",
  "x-country-code",
  "cloudfront-viewer-country",
  "x-appengine-country",
];

const DEFAULT_COUNTRY_CODE = "SG";

function normalizeCountryCode(value?: string | null) {
  if (!value) {
    return null;
  }

  const normalized = value.trim().toUpperCase();
  return normalized.length === 2 ? normalized : null;
}

export default defineEventHandler((event) => {
  for (const headerName of COUNTRY_HEADERS) {
    const headerValue = getRequestHeader(event, headerName);
    const countryCode = normalizeCountryCode(headerValue);

    if (countryCode) {
      return { countryCode };
    }
  }

  return { countryCode: DEFAULT_COUNTRY_CODE };
});
