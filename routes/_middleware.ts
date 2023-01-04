import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 442,
  site: "teste-mz",
  domains: ["deco-sites-teste-mz.deno.dev"],
});