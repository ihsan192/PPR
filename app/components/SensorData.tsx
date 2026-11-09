import { connection } from 'next/server';

async function getSensorData() {
  // Memasang request-time boundary agar fungsi ini berjalan secara dinamis saat request masuk
  await connection();

  // Menghasilkan nilai acak setelah request-time boundary menggunakan Math.random()
  const temperature = Number((20 + Math.random() * 15).toFixed(1)); // Rentang ~20 - 35 °C
  const light = Math.floor(Math.random() * 100); // Rentang 0 - 100 %
  const distance = Math.floor(50 + Math.random() * 150); // Rentang 50 - 200 cm
  const humidity = Math.floor(40 + Math.random() * 40); // Rentang 40 - 80 %

  return {
    temperature,
    light,
    distance,
    humidity,
    status: "Normal",
  };
}

export default async function SensorData() {
  const data = await getSensorData();

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6 backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Data Sensor Terbaru
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Data berhasil diterima dari server
          </p>
        </div>

        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
          {data.status}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-black/20 p-5">
          <p className="text-sm text-gray-500">
            Suhu
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            {data.temperature}°C
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-5">
          <p className="text-sm text-gray-500">
            LDR
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            {data.light}%
          </p>
        </div>

        <div className="rounded-xl bg-black/20 p-5">
          <p className="text-sm text-gray-500">
            Jarak
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            {data.distance} cm
          </p>
        </div>
        
        <div className="rounded-xl bg-black/20 p-5">
          <p className="text-sm text-gray-500">
            Kelembapan
          </p>

          <p className="mt-2 text-2xl font-bold text-white">
            {data.humidity}%
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-xs text-gray-500">
          ✓ Data sensor berhasil diperbarui
        </p>
      </div>
    </div>
  );
}