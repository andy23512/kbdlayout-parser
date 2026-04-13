import { generateLanguagesTreeArtifacts } from "./languages-tree.ts";

try {
  const data = generateLanguagesTreeArtifacts();
  console.log(
    `Generated language tree artifacts with ${data.length} root nodes.`,
  );
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to generate language tree artifacts: ${message}`);
  process.exitCode = 1;
}
