export default function CardWisata({ data }) {
  return (
    <div className="bg-white shadow rounded overflow-hidden hover:shadow-xl transition">

      <img src={data.gambar} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h2 className="font-bold text-lg">{data.nama}</h2>
        <p className="text-gray-500 text-sm">{data.lokasi}</p>
        <p className="text-yellow-500">⭐ {data.rating}</p>
        <p className="text-green-600">Rp {data.hargaTiket}</p>
      </div>

    </div>
  );
}