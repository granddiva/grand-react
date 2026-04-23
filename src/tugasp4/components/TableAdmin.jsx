export default function TableAdmin({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border">

        <thead className="bg-gray-200">
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Kategori</th>
            <th>Lokasi</th>
            <th>Rating</th>
            <th>Harga</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center border-t">
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.kategori}</td>
              <td>{item.lokasi}</td>
              <td>{item.rating}</td>
              <td>{item.hargaTiket}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}