import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { withCors } from "../_shared/cors.ts";
import { newJsonResponse, newMessageResponse } from "../_shared/responses.ts";

Deno.serve((req) =>
  withCors(req, async () => {
    if (req.method !== "GET") {
      return newMessageResponse("Method not allowed", 405);
    }
    const timestamp = Math.floor(Date.now() / 1000);
    return newMessageResponse(`Ping at ${timestamp}`);
  })
);
