// DeviceStatus.tsx
import { connection } from 'next/server';

export default async function DeviceStatus() {
  // Memasang request-time boundary secara eksplisit
  await connection();

  // Mengambil waktu saat request terjadi
  const requestTime = new Date().toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
  });

  return (
    <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Status Perangkat</h3>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Online
        </span>
      </div>

      <p className="text-sm text-gray-400">
        Perangkat terhubung ke server utama melalui protokol aman.
      </p>

      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500">
        <span>Waktu Request Masuk:</span>
        <span className="font-mono text-blue-400">{requestTime}</span>
      </div>
    </div>
  );
}