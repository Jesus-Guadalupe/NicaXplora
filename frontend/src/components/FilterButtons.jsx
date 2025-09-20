export default function FilterButtons({ activeFilter, setActiveFilter }) {
  const filters = ["Favoritos", "Visitados", "Lista de deseos"];

  return (
    <div className="flex justify-center gap-4 lg:flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-6 py-2 rounded-lg font-medium transition-all mt-12
            ${
              activeFilter === filter
                ? "bg-[#21441e] text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}