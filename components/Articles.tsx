import Link from "next/link";
import Article from "./Article";
import { getArticles } from "@/sanity/sanity-utils";

export default async function Articles() {
  const articles = await getArticles();
  return (
    <div>
      <div className="text-center bg-black w-full text-white text-2xl py-3 my-5">
        Recent Articles
      </div>
      <div className="lg:flex lg:flex-row lg:justify-center lg:gap-3 sm:flex-col ">
        {articles.map(
          (article, index) =>
            index < 3 && (
              <div key={article._id} className="flex justify-center">
                <Article
                  key={article._id}
                  id={article._id}
                  createdAt={article._createdAt}
                  title={article.title}
                  slug={article.slug}
                  image={article.image}
                  content={article.content}
                />
              </div>
            )
        )}
      </div>
      <div className="text-center bg-slate-700 text-white text-xl py-3 px-3 mt-3 w-1/3 mx-auto rounded">
        <Link href="/articles">See All Articles</Link>
      </div>
    </div>
  );
}
