import Link from "next/link";

// This is the category badge that appears in the article page and in <CardArticle /> component
const Category = ({ category, extraStyle }) => {
  return (
    <Link
      href={`/blog/category/${category.slug}`}
      className={`${
        extraStyle ? extraStyle : ""
      }`}
      title={`Posts in ${category.title}`}
      rel="tag"
    >
      <div className="font-serif">{category.titleShort}</div>
    </Link>
  );
};

export default Category;
