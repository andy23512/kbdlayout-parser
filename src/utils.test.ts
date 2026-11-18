import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, it } from "node:test";
import { getDriverLinks, parseDriverLinks } from "./utils.ts";

const row = (file: string, link: string) =>
  `<tr><td>${file}</td><td>${link}</td></tr>`;
const index = (...tables: string[]) =>
  `<html><body>${tables.map((t) => `<table>${t}</table>`).join("")}</body></html>`;

describe("parseDriverLinks", () => {
  it("collects the href of every row whose first cell is a .dll", () => {
    const html = index(
      row("KBDA1.DLL", `<a href="/KBDA1/">Arabic</a>`) +
        row("kbdarmph.dll", `<a href="/kbdarmph/">Armenian</a>`),
    );
    assert.deepEqual(parseDriverLinks(html), ["/KBDA1/", "/kbdarmph/"]);
  });

  it("matches the .dll extension case-insensitively", () => {
    assert.deepEqual(
      parseDriverLinks(index(row("kbdx.DlL", `<a href="/x/">X</a>`))),
      ["/x/"],
    );
  });

  it("skips rows that are not drivers", () => {
    const html = index(
      `<tr><th>File</th><th>Name</th></tr>` +
        row("readme.txt", `<a href="/readme/">Readme</a>`) +
        row("kbdx.dll", `<a href="/x/">X</a>`),
    );
    assert.deepEqual(parseDriverLinks(html), ["/x/"]);
  });

  it("reads all tables, in order", () => {
    const html = index(
      row("a.dll", `<a href="/a/">A</a>`),
      row("b.dll", `<a href="/b/">B</a>`),
    );
    assert.deepEqual(parseDriverLinks(html), ["/a/", "/b/"]);
  });

  it("returns an empty list when there are no tables", () => {
    assert.deepEqual(parseDriverLinks("<html><body></body></html>"), []);
  });

  it("throws, naming table and row, when the second cell has no link", () => {
    const html = index(
      row("a.dll", `<a href="/a/">A</a>`),
      row("ok.txt", "") + row("b.dll", "no link here"),
    );
    assert.throws(
      () => parseDriverLinks(html),
      /Table 1, Row 1 does not contain a link in the second cell\./,
    );
  });

  it("throws when the link has no href", () => {
    assert.throws(
      () => parseDriverLinks(index(row("a.dll", `<a>A</a>`))),
      /Table 0, Row 0 contains a link in the second cell, but it does not have an href attribute\./,
    );
  });
});

describe("getDriverLinks", () => {
  it("reads the index page from the given path", () => {
    const dir = mkdtempSync(join(tmpdir(), "kbdlayout-parser-utils-"));
    try {
      const path = join(dir, "index.html");
      writeFileSync(path, index(row("a.dll", `<a href="/a/">A</a>`)), "utf-8");
      assert.deepEqual(getDriverLinks(path), ["/a/"]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("throws for a missing index file", () => {
    assert.throws(() => getDriverLinks("/nonexistent/index.html"), /ENOENT/);
  });
});
