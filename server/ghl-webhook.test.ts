import { describe, expect, it } from "vitest";

describe("GHL Webhook Configuration", () => {
  it("should have GHL_WEBHOOK_URL environment variable set", () => {
    const url = process.env.GHL_WEBHOOK_URL;
    expect(url).toBeDefined();
    expect(url).not.toBe("");
    expect(url).toContain("leadconnectorhq.com");
  });

  it("GHL_WEBHOOK_URL should be a valid URL with the updated trigger ID", () => {
    const url = process.env.GHL_WEBHOOK_URL;
    expect(url).toBeDefined();
    const parsed = new URL(url!);
    expect(parsed.protocol).toBe("https:");
    expect(parsed.hostname).toContain("leadconnectorhq.com");
    expect(url).toContain("6347a42d-3eee-4551-a925-ab3942697a12");
  });
});
