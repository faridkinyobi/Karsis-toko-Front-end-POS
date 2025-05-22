import Link from "../../components/atoms/Link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1
                className="text-[10rem] font-extrabold text-transparent bg-clip-text"
                style={{
                    backgroundImage: "url('texture.png')",
                    backgroundSize: "cover",
                }}
            >
                404
            </h1>
            <h2 className="text-2xl font-semibold mb-2">
                Halaman Tidak Ditemukan
            </h2>
            <p className="mb-6 text-base max-w-md">
                Maaf, halaman yang Anda cari tidak tersedia atau telah
                dipindahkan.
            </p>
            <Link
                link="/"
                title="Kembali ke Beranda"
                className="btn btn-link"
            />
        </div>
    );
}
