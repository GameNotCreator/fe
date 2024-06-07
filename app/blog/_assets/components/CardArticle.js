import Link from "next/link";
import Image from "next/image";

// This is the article card that appears in the home page, in the category page, and in the author's page
const CardArticle = ({
  article,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}) => {
  const TitleTag = tag;

  return (

      <div class="card mx-6 flex h-auto max-w-80 flex-col gap-2 bg-base-100 py-2 md:w-80">
      <Link
          href={`/blog/${article.slug}`}
          className="link link-hover hover:link-primary"
          title={article.title}
          rel="bookmark"
        >
      {article.image?.src && (
        <figure>
          <Image
            class="rounded-2xl px-3"
            src={article.image.src}
            alt={article.image.alt}
            width={600}
            height={338}
          />
        </figure>
      )}
        <div class="flex justify-between px-4">
          <h3 class="font-bold">{article.title}</h3>
          <div class="flex gap-3">
            <h3 class="mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="red"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-activity"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
              </svg>
            </h3>
            <p class="mt-1 text-sm font-semibold">1 Offer</p>
          </div>
        </div>

        <div class="flex justify-between px-4">
        {showCategory && (
          <div className="flex flex-wrap gap-2">
            <h3 className="font-serif">{article.categories[0].title}</h3>
          </div>
        )}
          <div class="flex gap-3">
            <p class="mt-1 text-xs font-semibold text-teal-500">{article.availability}</p>
          </div>
        </div>
        </Link>
      </div>
  );
};

export default CardArticle;
