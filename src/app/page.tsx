import { readFile } from "node:fs/promises";
import path from "node:path";

export default async function Home() {
  const referencePage = await readFile(
    path.join(process.cwd(), "ref.html"),
    "utf8",
  );

  return (
    <iframe
      title="MAPP Financial Solutions"
      srcDoc={referencePage}
      className="block h-dvh w-full border-0"
    />
  );
}
