//Typing data;

import HeaderNavigation from "./header/page";

type HomeDataType = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  //Data Fetching in Next JS;
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!data.ok) {
    throw new Error("Fetching data failed !");
  }
  const posts = await data.json();
  //console.log(posts);
  return (
    <div>
      {/* HeaderNavigation */}
      <HeaderNavigation />
      {/* Main */}
      <main>
        <h1 className="my-8 py-4 text-xl text-center font-semibold">
          This is the Home Page !
        </h1>
        <div className="my-10 mx-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post: HomeDataType) => (
            <div
              key={post.id}
              className="border bg-neutral-300 text-black p-4 rounded-md shadow-lg"
            >
              <p className="py-2">id: {post.id}</p>
              <h2 className="font-bold">title: {post.title}</h2>
              <p className="py-2">body: {post.body}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full h-16 flex justify-center items-center text-center text-black font-bold bg-neutral-50">
        <p>?? 2025 My App. All right reserved.</p>
      </footer>
    </div>
  );
}
