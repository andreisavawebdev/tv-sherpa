export function Features() {
  return (
    <section className="mt-24">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
          <div className="text-4xl text-blue-500 mb-4">
            <svg
              className="mx-auto w-16 h-16"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <h3 className="text-2xl text-blue-400 font-bold mb-4">
            Discover Shows
          </h3>
          <p className="text-gray-300">
            Explore thousands of TV shows with our advanced recommendation
            engine.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
          <div className="text-4xl text-green-500 mb-4">
            <svg
              className="mx-auto w-16 h-16"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl text-blue-400 font-bold mb-4">
            Track Progress
          </h3>
          <p className="text-gray-300">
            Keep track of your watching status, episodes, and seasons
            effortlessly.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition duration-300">
          <div className="text-4xl text-purple-500 mb-4">
            <svg
              className="mx-auto w-16 h-16"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0113 16v1h-.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
          </div>
          <h3 className="text-2xl text-blue-400 font-bold mb-4">
            Connect & Share
          </h3>
          <p className="text-gray-300">
            Follow friends, share recommendations, and join TV show communities.
          </p>
        </div>
      </div>
    </section>
  );
}
