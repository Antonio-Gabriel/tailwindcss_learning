export function About() {
  return (
    <section className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold md:text-5xl">
            Trusted by developers across the world
          </h2>
          <p className="text-3xl pay-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            sint quis suscipit iste nesciunt libero tenetur! Aperiam quas
            debitis officia officiis nam
          </p>
        </div>

        <div className="grid md:grid-cols-3 md:gap-10 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl flex flex-col gap-2">
            <strong className="text-6xl font-bold text-indigo-600">100%</strong>
            <span className="text-gray-400">Completion</span>
          </div>
          <div className="border py-8 rounded-xl shadow-xl flex flex-col gap-2">
            <strong className="text-6xl font-bold text-indigo-600">24/7</strong>
            <span className="text-gray-400">Delivery</span>
          </div>
          <div className="border py-8 rounded-xl shadow-xl flex flex-col gap-2">
            <strong className="text-6xl font-bold text-indigo-600">100k</strong>
            <span className="text-gray-400">Transactions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
