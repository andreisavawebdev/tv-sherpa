import Image from "next/image";

export function PopularShows() {
  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">Popular Shows</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="relative group">
          <Image
            src="https://picsum.photos/250/375"
            alt=""
            width="250"
            height="375"
            className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center rounded-b-lg">
            <h3 className="text-white font-semibold">Show Title 1</h3>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="https://picsum.photos/250/375"
            alt=""
            width="250"
            height="375"
            className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center rounded-b-lg">
            <h3 className="text-white font-semibold">Show Title 2</h3>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="https://picsum.photos/250/375"
            alt=""
            width="250"
            height="375"
            className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center rounded-b-lg">
            <h3 className="text-white font-semibold">Show Title 3</h3>
          </div>
        </div>

        <div className="relative group">
          <Image
            src="https://picsum.photos/250/375"
            alt=""
            width="250"
            height="375"
            className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-center rounded-b-lg">
            <h3 className="text-white font-semibold">Show Title 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
