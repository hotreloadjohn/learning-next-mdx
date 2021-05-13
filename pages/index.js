import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Hero from "../components/Hero";

export default function Home({ posts }) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20">
      <Hero />
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
