import Image from "next/image";

export function Hero() {
  return (
    <section className="text-center mt-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
        Discover, Track and Enjoy your Favorite Shows
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        TV Sherpa helps you keep track of your watched shows, get personalized
        recommendations and never miss an episode again.
      </p>
      <div className="flex justify-center space-x-4 mb-16">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition duration-300">
          Get Started - It&apos;s Free!
        </button>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <Image
          src="https://picsum.photos/200/300"
          alt=""
          width="200"
          height="300"
          className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
        <Image
          src="https://picsum.photos/200/300"
          alt=""
          width="200"
          height="300"
          className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
        <Image
          src="https://picsum.photos/200/300"
          alt=""
          width="200"
          height="300"
          className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
        <Image
          src="https://picsum.photos/200/300"
          alt=""
          width="200"
          height="300"
          className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}
