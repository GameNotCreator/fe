import Link from "next/link";
import Image from "next/image";

// This is the author avatar that appears in the article page and in <CardArticle /> component
const Avatar = ({ article }) => {
  return (
    <>
          <div className="card mb-10 h-auto max-w-lg px-2">
        <figure>
          <Image width={100} height={100} src="https://www.paradice.tn/sites/default/files/2022-08/paradice-sousse-2.jpg" />

        </figure>
          <div className="card-body">
              <h1 className="card-title mt-3 ml-3">{article.title}</h1>
            <div className="flex flex-col gap-4 mt-3 mx-3">
              <div className="flex gap-3 ">
                <button className="rounded-full bg-gray-300 p-1 shadow-md hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b130d5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-map"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>
                </button>
                <p className="text-xs uppercase underline font-semibold">{article.address}</p>
              
              </div>
            </div>
            <div className="   flex flex-col gap-2 " >
              <p className="text-neutral-500"> A propos </p>
              <p className=" font-semibold px-1"> 
              {article.offre}
              </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
