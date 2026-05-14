import { useState } from "react";
import CardWisata from "../components/CardWisata";
import SearchFilter from "../components/SearchFilter";

/* =========================
   AUTO GENERATE 100 DATA
========================= */
const generateData = () => {
  const kategoriList = ["Pantai", "Gunung", "Danau", "Hutan", "Air Terjun"];
  const lokasiList = ["Bali", "Jawa Timur", "Jawa Barat", "Sumatera", "Lombok"];

  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    nama: `Wisata ${i + 1}`,
    kategori: kategoriList[i % kategoriList.length],
    lokasi: lokasiList[i % lokasiList.length],
    rating: (Math.random() * 2 + 3).toFixed(1),
    hargaTiket: Math.floor(Math.random() * 50000 + 10000),
    gambar: `https://picsum.photos/400/300?random=${i}`,

    // nested 1
    fasilitas: {
      parkir: true,
      toilet: true,
      wifi: i % 2 === 0
    },

    // nested 2
    koordinat: {
      lat: -8 + Math.random(),
      lng: 115 + Math.random()
    },

    // nested 3
    kontak: {
      telp: "08123456789",
      email: `wisata${i}@mail.com`
    }
  }));
};

const data = generateData();

/* =========================
   COMPONENT
========================= */
export default function GuestPage() {
  const [search, setSearch] = useState("");
  const [kategori, setKategori] = useState("");
  const [lokasi, setLokasi] = useState("");

  const filtered = data.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()) &&
    (kategori ? item.kategori === kategori : true) &&
    (lokasi ? item.lokasi === lokasi : true)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <SearchFilter
        search={search}
        setSearch={setSearch}
        kategori={kategori}
        setKategori={setKategori}
        lokasi={lokasi}
        setLokasi={setLokasi}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <CardWisata key={item.id} data={item} />
        ))}
      </div>

    </div>
  );
}