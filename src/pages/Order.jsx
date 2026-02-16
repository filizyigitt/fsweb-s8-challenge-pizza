import { useMemo, useState } from "react";
import axios from "axios";
import HeaderOrder from "../components/HeaderOrder";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


const BASE_PRICE = 85.5;
const TOPPING_PRICE = 5;
const MAX_TOPPINGS = 10;
const MIN_TOPPINGS = 4;

const TOPPINGS = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Sarımsak",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
];

function formatTRY(value) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(value);
}

export default function Order({ setOrderResult }) {
  const navigate = useNavigate();

  const [isim, setIsim] = useState("");
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [not, setNot] = useState("");
  const [adet, setAdet] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const secimlerTutari = useMemo(
    () => malzemeler.length * TOPPING_PRICE,
    [malzemeler]
  );

  const toplam = useMemo(
    () => (BASE_PRICE + secimlerTutari) * adet,
    [secimlerTutari, adet]
  );

  const isValid =
    isim.trim().length >= 3 &&
    boyut &&
    hamur &&
    malzemeler.length >= MIN_TOPPINGS &&
    malzemeler.length <= MAX_TOPPINGS &&
    adet >= 1;

  function toggleMalzeme(item) {
    setMalzemeler((prev) => {
      const exists = prev.includes(item);
      if (exists) return prev.filter((x) => x !== item);
      if (prev.length >= MAX_TOPPINGS) return prev;
      return [...prev, item];
    });
  }

  function dec() {
    setAdet((p) => Math.max(1, p - 1));
  }
  function inc() {
    setAdet((p) => p + 1);
  }

  async function handleSubmit(e) {
  e.preventDefault();
  if (!isValid) return;

  const payload = {
    isim: isim.trim(),
    boyut,
    hamur,
    malzemeler,
    ozel: not,
    adet,
    secimlerTutari,
    toplam,
  };

  setIsSubmitting(true);

  try {
    const res = await axios.post("https://reqres.in/api/pizza", payload, {
      headers: { "x-api-key": "reqres-free-v1" },
    });

    console.log("Sipariş Özeti (API Response):", res.data);

    // App.jsx'teki state'e gönder 
    setOrderResult({
      ...payload,
      api: res.data,
    });

    navigate("/success");
  } catch (err) {
    console.error("API Hatası:", err);
  } finally {
    setIsSubmitting(false);
  }
}


  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <HeaderOrder />

     <main className="bg-[#FAF7F2] px-4 pb-16">
  <div className="mx-auto w-full max-w-[980px]">

    
    <div className="relative mx-auto mt-0 flex h-[140px] max-w-[520px] justify-center overflow-hidden">
      <img
        src="images/iteration-2-images/pictures/form-banner.png"
        alt="Pizza"
        className="absolute -top-[220px] h-[350px] w-[700px] object-cover"
      />
    </div>

    
    <div className="mx-auto mt-6 max-w-[520px]">
      <h1 className="text-[16px] font-semibold text-[#292929]">
        Position Absolute Acı Pizza
      </h1>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-[18px] font-extrabold text-[#292929]">
          85.50₺
        </span>

        <div className="flex items-center gap-14 text-[15px] text-[#9B9B9B]">
          <span className="text-[#5F5F5F]">4.9</span>
          <span>(200)</span>
        </div>
      </div>

      <p className="mt-4 text-[15px] leading-5 text-[#6F6F6F]">
       Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
            
            <form id="pizza-form" onSubmit={handleSubmit} className="mt-6">
              
              <div className="mt-6">
                <label className="text-[12px] font-bold text-[#292929]">
                <span className="text-[#CE2829]">*</span>
                </label>
                <input
                  id="name-input"
                  value={isim}
                  onChange={(e) => setIsim(e.target.value)}
                  placeholder="Adınızı giriniz"
                  className="mt-2 h-10 w-[150px] rounded-md border border-[#E4E4E4] bg-white px-3 text-[12px] outline-none focus:border-[#CE2829]"
                />
              </div>
<div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end">
  <div className="shrink-0">
    <p className="text-[12px] font-bold text-[#292929]">
      Boyut Seç <span className="text-[#CE2829]">*</span>
    </p>

    {/* BUTONLAR*/}
    <div className="mt-[12px] flex items-center gap-[12px]">
      {["S", "M", "L"].map((s) => {
        const selected = boyut === s;

        return (
          <button
            key={s}
            type="button"
            onClick={() => setBoyut(s)}
            className={[
              "grid h-9 w-9 place-items-center rounded-full text-[12px] font-extrabold transition",
              selected
                ? "bg-[#292929] text-white"
                : "bg-[#F3F3F3] text-[#5F5F5F] hover:bg-[#EDEDED]",
            ].join(" ")}
            aria-pressed={selected}
          >
            {s}
          </button>
        );
      })}
    </div>
  </div>

  {/* HAMUR */}
  <div className="w-[130px] sm:w-[260px]">
    <p className="text-[12px] font-bold text-[#292929]">
      Hamur Seç <span className="text-[#CE2829]">*</span>
    </p>

    <select
      value={hamur}
      onChange={(e) => setHamur(e.target.value)}
      className="mt-3 h-10 w-full rounded-md border border-[#E6E6E6] bg-white px-3 text-[12px] text-[#5F5F5F] outline-none focus:border-[#CE2829]"
    >
      <option value="" disabled>
        --Hamur Kalınlığı 
      </option>
      <option value="İnce">İnce</option>
      <option value="Orta">Orta</option>
      <option value="Kalın">Kalın</option>
    </select>
  </div>
</div>


              {/* ek malzemeler */}
              <div className="mt-8">
                <p className="text-[12px] font-bold text-[#292929]">
                  Ek Malzemeler
                </p>
                <p className="mt-1 text-[11px] text-[#5F5F5F]">
                  En Fazla 10 malzeme seçebilirsiniz. 5₺
                </p>

                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-3">
                  {TOPPINGS.map((t) => {
                    const checked = malzemeler.includes(t);
                    return (
                      <label
                        key={t}
                        className="flex cursor-pointer items-center gap-2 text-[12px] text-[#292929]"
                      >
                        <input
                          type="checkbox"
                          className="peer hidden"
                          checked={checked}
                          onChange={() => toggleMalzeme(t)}
                        />
                        <span className="grid h-6 w-6 place-items-center rounded-[4px] border border-[#D9D9D9] bg-white peer-checked:bg-[#FDC913] peer-checked:border-[#FDC913]">
                          {checked ? "✓" : ""}
                        </span>
                        <span className="text-[#5F5F5F]">{t}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* not */}
              <div className="mt-8 w-[350px]">
                <p className="text-[12px] font-bold text-[#292929]">
                  Sipariş Notu
                </p>
                <textarea
                  value={not}
                  onChange={(e) => setNot(e.target.value)}
                  placeholder="Siparişine eklemek istediğin bir not var mı?"
                  className="mt-2 h-16 w-full resize-none rounded-md border border-[#E4E4E4] bg-white px-3 py-2 text-[12px] outline-none focus:border-[#CE2829]"
                />
              </div>

              <div className="mt-6 h-px w-full bg-[#E6E6E6]" />

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr]">
                <div className="inline-flex h-11 items-center">
                  <button
                    type="button"
                    onClick={dec}
                    className="h-11 w-11 bg-[#FDC913] text-[18px] font-black"
                  >
                    -
                  </button>
                  <div className="grid h-11 w-11 place-items-center border-y border-[#E6E6E6] bg-white text-[24px] font-bold text-[#292929]">
                    {adet}
                  </div>
                  <button
                    type="button"
                    onClick={inc}
                    className="h-11 w-11 bg-[#FDC913] text-[18px] font-black"
                  >
                    +
                  </button>
                </div>

                <div className="w-full max-w-[360px] justify-self-end rounded-md border border-[#E6E6E6] bg-white p-5">
                  <h3 className="text-[14px] font-bold text-[#292929]">
                    Sipariş Toplamı
                  </h3>

                  <div className="mt-3 flex items-center justify-between text-[12px] text-[#5F5F5F]">
                    <span>Seçimler</span>
                    <span>{formatTRY(secimlerTutari)}</span>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-[12px] font-bold text-[#CE2829]">
                    <span>Toplam</span>
                    <span>{formatTRY(toplam)}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    className="mt-4 h-12 w-full rounded-md bg-[#FDC913] font-black text-[#292929] disabled:opacity-60"
                    title={
                      !isValid
                        ? "İsim (3+), boyut, hamur ve 4-10 malzeme seçmelisin."
                        : ""
                    }
                  >
                    SİPARİŞ VER
                  </button>
                </div>
              </div>
            </form>
          </div>
        
      </main>
      <Footer />
    
      </div>
    

  );
}
