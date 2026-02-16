import HeaderOrder from "../components/HeaderOrder"; 


function formatTRY(value) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(value ?? 0);
}

export default function Success({ orderResult }) {
  const boyut = orderResult?.boyut ?? "-";
  const hamur = orderResult?.hamur ?? "-";
  const malzemeler = orderResult?.malzemeler ?? [];
  const secimlerTutari = orderResult?.secimlerTutari ?? 0;
  const toplam = orderResult?.toplam ?? 0;

  return (
    <div className="min-h-screen bg-[#CE2829] text-white">
      <HeaderOrder />
      <main className="mx-auto flex min-h-[calc(50vh-80px)] max-w-[580px] flex-col items-center justify-center px-4 text-center">
        <p className="font-satisfy text-[20px] text-[#FDC913]">
          lezzetin yolda
        </p>
        <h1 className="mt-2 font-roboto text-[56px] font-light leading-[156px] tracking-[1px] text-[#FFFF]">
          SİPARİŞ ALINDI
        </h1>

        <div className="mt-8 h-px w-[420px] max-w-full bg-[#FFFF]" />

        <h2 className="mt-8 text-[13px] font-semibold text-[#FFFF]">
          Position Absolute Acı Pizza
        </h2>

        <div className="mt-8 w-full max-w-[420px] text-left text-[12px] leading-6 text-[#FFFF]">
          <div>
            <span className="font-semibold">Boyut:</span> {boyut}
          </div>
          <div>
            <span className="font-semibold">Hamur:</span> {hamur}
          </div>
          <div className="mt-1">
            <span className="font-semibold">Ek Malzemeler:</span>{" "}
            {malzemeler.length ? malzemeler.join(", ") : "-"}
          </div>
        </div>

        {/* toplam kutusu */}
        <div className="mt-10 w-[250px] rounded-sm border border-white/40 px-5 py-4 text-left text-[#FFFF]">
          <div className="text-[12px] font-semibold">Sipariş Toplamı</div>

          <div className="mt-3 flex items-center justify-between text-[12px] text-white/90">
            <span>Seçimler</span>
            <span>{formatTRY(secimlerTutari)}</span>
          </div>

          <div className="mt-2 flex items-center justify-between text-[12px] font-semibold">
            <span>Toplam</span>
            <span>{formatTRY(toplam)}</span>
          </div>
        </div>
      </main>

    </div>
  );
}
