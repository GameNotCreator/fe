import Image from "next/image";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  restaurant: "restaurant",
  bar: "bar",
  attraction: "attraction",
  soins: "soins",
  glacier: "glacier",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.restaurant,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "Restaurants",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Restaurants",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Nos restaurants partenaires vous offrent des réductions exclusives. Découvrez les dernières offres et économisez sur vos repas.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Nos restaurants",
  },
  {
    slug: categorySlugs.bar,
    title: "Bars",
    titleShort: "Bars",
    description:
      "Découvrez les bars les plus populaires de la région et profitez de réductions exclusives sur vos consommations.",
    descriptionShort: "Nos bars",
  },
  {
    slug: categorySlugs.attraction,
    title: "Attractions",
    titleShort: "Attractions",
    description:
      "Profitez de réductions exclusives sur les attractions touristiques de la région.",
    descriptionShort: "Nos attractions",
  },
  {
    slug: categorySlugs.soins,
    title: "Soins",
    titleShort: "Soins",
    description:
      "Découvrez les meilleures offres de soins et de bien-être de la région.",
    descriptionShort: "Nos soins",
  },
  {
    slug: categorySlugs.glacier,
    title: "Glaciers",
    titleShort: "Glaciers",
    description:
      "Profitez de deux glaces gratuites par personne dans les glaciers partenaires.",
    descriptionShort: "Nos glaciers",
  },
];

export const articles = [
  {
    // The unique slug to use in the URL. It's also used to generate the canonical URL.
    slug: "paradice",
    // The title to display in the article page (h1). Less than 60 characters. It's also used to generate the meta title.
    title: "Paradice",
    // The description of the article to display in the article page. Up to 160 characters. It's also used to generate the meta description.
    offre: "Deux glaces gratuites par personne",
    // An array of categories of the article. It's used to generate the category badges, the category filter, and more.
    categories: [
      categories.find((category) => category.slug === categorySlugs.glacier),
    ],
    address: "27 rue aboukacem el chebbi la marsa, TUNISIE",  
    // The author of the article. It's used to generate a link to the author's bio page.
    availability: 'Disponible',
    // The date of the article. It's used to generate the meta date.
    publishedAt: "2023-11-20",
    image: {
      // The image to display in <CardArticle /> components.
      src: 'https://www.paradice.tn/sites/default/files/2022-08/paradice-sousse-2.jpg',
      // The relative URL of the same image to use in the Open Graph meta tags & the Schema Markup JSON-LD.
      urlRelative: "https://www.paradice.tn/sites/default/files/2022-08/paradice-sousse-2.jpg",
      alt: "Paradice",
    },
  },
  {
    slug: "lili-land-park",
    title: "Lili Land Park",
    offre: "Entrée gratuite pour les enfants",
    categories: [
      categories.find((category) => category.slug === categorySlugs.attraction),
    ],
    availability: 'Epuise',
    publishedAt: "2023-11-20",
    image: {
      src: 'https://i.pinimg.com/474x/a6/11/72/a611724d57bd42d2d5c912073c2b0cf1.jpg',
      urlRelative: "https://i.pinimg.com/474x/a6/11/72/a611724d57bd42d2d5c912073c2b0cf1.jpg",
      alt: "Lili Land Park",
    },
  },
  {
    slug: "soins-esthetiques",
    title: "Soins Esthétiques",
    offre: "20% de réduction sur tous les soins",
    categories: [
      categories.find((category) => category.slug === categorySlugs.soins),
    ],
    availability: 'Disponible',
    publishedAt: "2023-11-20",
    image: {
      src: 'https://i.pinimg.com/474x/9b/3c/c4/9b3cc4e31be4f0a354a15c00deca5c12.jpg',
      urlRelative: "https://i.pinimg.com/474x/9b/3c/c4/9b3cc4e31be4f0a354a15c00deca5c12.jpg",
      alt: "Soins Esthétiques",
    },
  },
];
