import { createIdentity, PocketIc } from "@dfinity/pic";
import type { Actor } from "@dfinity/pic";
import { afterAll, beforeAll, expect, it } from "vitest";
import { idlFactory } from "../../src/frontend/src/declarations/backend.did.js";
import type { _SERVICE } from "../../src/frontend/src/declarations/backend.did";
import { registerCaller } from "./test-utils";

const PIC_URL = process.env.POCKET_IC_URL ?? "";
const BACKEND_WASM = process.env.BACKEND_WASM ?? "";
const BASELINE_WASM = process.env.BACKEND_WASM_BASELINE;

let pic: PocketIc | undefined;
let actor: Actor<_SERVICE>;
let canisterId: Parameters<PocketIc["createActor"]>[1];

beforeAll(async () => {
  pic = await PocketIc.create(PIC_URL);
  if (BASELINE_WASM === undefined) {
    ({ actor, canisterId } = await pic.setupCanister<_SERVICE>({ idlFactory, wasm: BACKEND_WASM }));
  } else {
    const installed = await pic.setupCanister<_SERVICE>({ idlFactory, wasm: BASELINE_WASM });
    await pic.upgradeCanister({ canisterId: installed.canisterId, wasm: BACKEND_WASM, arg: new Uint8Array() });
    ({ actor, canisterId } = installed);
  }
});

afterAll(async () => {
  await pic?.tearDown();
});

it("publishes the temporary scaffold API to anonymous visitors", async () => {
  await expect(actor.getApiDoc()).resolves.toContain("StioAIhacking starter backend API");
  await expect(actor.getApiDoc()).resolves.toContain("No application records");
  await expect(actor.getCallerUserRole()).resolves.toEqual({ guest: null });
  await expect(actor.isCallerAdmin()).resolves.toBe(false);
});

it("registers signed-in callers without sharing administrator authority", async () => {
  const owner = await registerCaller(pic!.createActor<_SERVICE>(idlFactory, canisterId), createIdentity("owner"));
  const member = await registerCaller(pic!.createActor<_SERVICE>(idlFactory, canisterId), createIdentity("member"));

  await expect(owner.getCallerUserRole()).resolves.toEqual({ admin: null });
  await expect(owner.isCallerAdmin()).resolves.toBe(true);
  await expect(member.getCallerUserRole()).resolves.toEqual({ user: null });
  await expect(member.isCallerAdmin()).resolves.toBe(false);
});
