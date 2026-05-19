import type { Config, Context } from "@netlify/edge-functions";

export default async function visitorCountry(
  request: Request,
  context: Context,
) {
  const headers = new Headers(request.headers);
  const countryCode = context.geo.country?.code?.trim().toUpperCase();

  if (countryCode) {
    headers.set("x-netlify-country-code", countryCode);
  }

  return context.next(new Request(request, { headers }));
}

export const config: Config = {
  path: "/api/visitor-country",
};
