export default function SearchFilter({
  search,
  setSearch,
  kategori,
  setKategori,
  lokasi,
  setLokasi
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">

      <input
        type="text"
        placeholder="Cari wisata..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <select
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Semua Kategori</option>
        <option value="Pantai">Pantai</option>
        <option value="Alam">Alam</option>
      </select>

      <select
        value={lokasi}
        onChange={(e) => setLokasi(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Semua Lokasi</option>
        <option value="Bali">Bali</option>
        <option value="Jawa Timur">Jawa Timur</option>
      </select>

    </div>
  );
}