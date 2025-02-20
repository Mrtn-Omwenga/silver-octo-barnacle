/**
 * @jest-environment node
 */

import { oauthLogin } from "./oauth-service";

describe("oauthLogin (Integration Test)", () => {
  it("successfully logs in with a valid provider", async () => {
    const provider = 'google';
    const result = await oauthLogin(provider);
    console.log(result);

    expect(result).toHaveProperty('provider');
    expect(result).toHaveProperty('url');
  });

  it("throws an error with an invalid provider", async () => {
    const invalidProvider = 'invalid-provider';
    await expect(oauthLogin(invalidProvider)).rejects.toThrow('Invalid provider: invalid-provider');
  });
});
