import slugify from "slugify";

export function generateLayoutId(layoutDisplayName: string): string {
  return slugify.default(
    layoutDisplayName
      .replaceAll("É", "")
      .replaceAll("’", "")
      .replaceAll("_", "-"),
    {
      lower: true,
      remove: /[.,()]/g,
    },
  );
}
