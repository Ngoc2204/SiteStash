import React from "react";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  Phone,
  MapPin,
  Star,
  CheckCircle2,
  ArrowRight,
  Shield,
  Coffee,
  Building,
  ShoppingBag,
  Sparkles,
  Zap,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";

interface DemoPageProps {
  params: Promise<{
    templateType: string;
  }>;
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { templateType } = await params;

  if (templateType === "dental") {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        {/* Top bar */}
        <div className="bg-sky-900 text-white text-xs py-2 px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> Hotline 24/7: 1900 6868
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Mở cửa: 08:00 - 20:00 (Cả CN)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-sky-800 px-2 py-0.5 rounded text-[11px]">Cơ sở Hà Nội & TP.HCM</span>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-20 shadow-xs">
          <div className="flex items-center gap-2 font-bold text-xl text-sky-800">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-black">
              +
            </div>
            <span>DENTAL PRO</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-sky-600">Dịch Vụ</a>
            <a href="#doctors" className="hover:text-sky-600">Đội Ngũ Bác Sĩ</a>
            <a href="#pricing" className="hover:text-sky-600">Bảng Giá</a>
            <a href="#reviews" className="hover:text-sky-600">Khách Hàng</a>
          </nav>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md shadow-sky-600/20">
            Đặt Lịch Ngay
          </button>
        </header>

        {/* Hero */}
        <section className="bg-gradient-to-r from-sky-50 via-blue-50 to-white py-16 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full">
                ★ Viện Nha Khoa Thẩm Mỹ Tiêu Chuẩn Quốc Tế
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Kiến Tạo Nụ Cười Hoàn Mỹ, Tự Tin Tỏa Sáng
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed">
                Đội ngũ tiến sĩ, bác sĩ tu nghiệp tại Đức & Hoa Kỳ. Ứng dụng công nghệ quét hàm 3D iTero 5D Plus không đau, bảo hành răng sứ lên tới 20 năm.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button className="bg-sky-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-sky-600/25">
                  Tư Vấn Miễn Phí
                </button>
                <button className="border border-slate-300 text-slate-700 px-5 py-2.5 rounded-xl font-semibold text-sm">
                  Xem Bảng Giá
                </button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-sky-100 space-y-4">
              <h3 className="font-bold text-base text-slate-800 border-b pb-2">
                Đăng Ký Khám & Nhận Ưu Đãi 30%
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Họ và tên của bạn *"
                  className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50"
                  defaultValue="Trần Minh Hằng"
                />
                <input
                  type="text"
                  placeholder="Số điện thoại / Zalo *"
                  className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50"
                  defaultValue="0988 123 456"
                />
                <select className="w-full border border-slate-200 rounded-lg p-2.5 text-sm bg-slate-50 text-slate-700">
                  <option>Dán sứ Veneer thẩm mỹ</option>
                  <option>Trồng răng Implant kỹ thuật số</option>
                  <option>Niềng răng trong suốt Invisalign</option>
                  <option>Tẩy trắng răng Laser Whitening</option>
                </select>
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2.5 rounded-lg font-bold text-sm shadow-md">
                  Gửi Yêu Cầu Khám Ngay
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12 px-6 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Dịch Vụ Nha Khoa Chuyên Nghiệp</h2>
            <p className="text-slate-500 text-xs mt-1">Đầy đủ trang thiết bị đạt chứng nhận ISO 9001:2015</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Bọc Răng Sứ Thẩm Mỹ", price: "Từ 1.500.000đ/răng", tag: "Hot" },
              { title: "Niềng Răng Invisalign", price: "Trả góp 0% lãi suất", tag: "Công nghệ Mỹ" },
              { title: "Trồng Răng Implant", price: "Bảo hành trọn đời", tag: "Thụy Sĩ" },
            ].map((s, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-sky-500 transition-colors shadow-sm">
                <span className="text-[10px] bg-sky-100 text-sky-700 font-bold px-2 py-0.5 rounded">{s.tag}</span>
                <h3 className="font-bold text-base text-slate-900 mt-2">{s.title}</h3>
                <p className="text-sky-600 font-bold text-sm mt-1">{s.price}</p>
                <p className="text-xs text-slate-500 mt-2">Thực hiện an toàn, quy trình vô trùng khép kín 1:1 cho từng khách hàng.</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (templateType === "restaurant") {
    return (
      <div className="min-h-screen bg-[#110e0c] text-[#f7f2ed] font-serif">
        {/* Header */}
        <header className="px-8 py-6 flex justify-between items-center border-b border-amber-900/30">
          <div className="text-2xl font-bold tracking-widest text-amber-400">
            ARTISAN <span className="text-xs tracking-normal block font-sans text-amber-200/60">COFFEE & BISTRO</span>
          </div>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-amber-100/70 font-sans">
            <span className="hover:text-amber-300 cursor-pointer">Menu Đồ Uống</span>
            <span className="hover:text-amber-300 cursor-pointer">Không Gian</span>
            <span className="hover:text-amber-300 cursor-pointer">Sự Kiện Acoustic</span>
            <span className="hover:text-amber-300 cursor-pointer">Đặt Bàn</span>
          </nav>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-sans text-xs uppercase tracking-widest px-5 py-2.5 rounded-full font-bold shadow-lg shadow-amber-600/30">
            Đặt Bàn VIP
          </button>
        </header>

        {/* Hero */}
        <section className="py-20 px-8 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-sans">
            — Hạt Cà Phê Thượng Hạng & Ẩm Thực Tinh Tế —
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal leading-tight text-amber-50">
            Nơi Từng Giọt Cà Phê Kể Lại Một Câu Chuyện Nghệ Thuật
          </h1>
          <p className="text-sm font-sans text-amber-200/70 max-w-xl mx-auto leading-relaxed">
            Tuyển chọn hạt Arabica Cầu Đất & Geisha Panama rang mộc thủ công, kết hợp thực đơn bánh ngọt Pháp tươi mỗi ngày.
          </p>
          <div className="pt-4 flex justify-center gap-4 font-sans">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full">
              Xem Thực Đơn Signature
            </button>
            <button className="border border-amber-600/50 hover:border-amber-400 text-amber-200 text-xs uppercase tracking-wider px-6 py-3 rounded-full">
              Khám Phá Không Gian Quán
            </button>
          </div>
        </section>

        {/* Signature Menu */}
        <section className="py-12 px-8 max-w-4xl mx-auto border-t border-amber-900/40">
          <h2 className="text-center text-2xl text-amber-300 mb-8 tracking-wide">
            Thực Đơn Signature Tuyển Chọn
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 font-sans">
            {[
              { name: "Cold Brew Quế Hoa", price: "75.000₫", desc: "Ủ lạnh 24 giờ cùng hoa quế Tây Bắc thanh mát" },
              { name: "Artisan Egg Coffee", price: "68.000₫", desc: "Cà phê trứng kem béo mịn công thức truyền thống" },
              { name: "Matcha Latte Yến Mạch", price: "82.000₫", desc: "Bột trà xanh Uji Kyoto hảo hạng với sữa hạt" },
              { name: "Croissant Bơ Pháp", price: "55.000₫", desc: "Bánh sừng bò ngàn lớp thơm lừng nướng mới mỗi sáng" },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/30 flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-sm text-amber-100">{m.name}</h4>
                  <p className="text-xs text-amber-200/60 mt-1">{m.desc}</p>
                </div>
                <span className="text-sm font-bold text-amber-400 shrink-0 ml-4">{m.price}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (templateType === "realestate") {
    return (
      <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
        <header className="px-8 py-5 flex justify-between items-center border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20">
          <div className="font-black text-xl tracking-wider text-white flex items-center gap-2">
            <Building className="w-6 h-6 text-amber-400" />
            <span>GRAND HORIZON</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm text-slate-300">
            <span>Dự Án Biệt Thự</span>
            <span>Penthouse & Sky Villa</span>
            <span>Mặt Bằng 3D</span>
            <span>Chính Sách Bán Hàng</span>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs">
            Tải Brochure & Bảng Giá
          </button>
        </header>

        <section className="py-20 px-8 max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Dự Án Nghỉ Dưỡng Thượng Lưu Ven Biển
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white">
            Grand Horizon Villas – Tuyệt Tác Kiến Trúc Giữa Lòng Vịnh Ngọc
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Sở hữu lâu dài 100% căn biệt thự view biển triệu đô. Bàn giao full nội thất cao cấp nhập khẩu từ Ý, bến du thuyền riêng và sân golf 18 lỗ.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 text-left">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="text-xs text-slate-400">Giá khởi điểm</p>
              <p className="text-lg font-bold text-amber-400">18.5 Tỷ ₫</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="text-xs text-slate-400">Diện tích khuôn viên</p>
              <p className="text-lg font-bold text-white">350 - 800 m²</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="text-xs text-slate-400">Pháp lý dự án</p>
              <p className="text-lg font-bold text-emerald-400">Sổ hồng vĩnh viễn</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (templateType === "fashion") {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
        <header className="px-6 py-4 flex justify-between items-center border-b border-neutral-800">
          <div className="font-extrabold text-2xl tracking-[0.2em]">A U R A</div>
          <div className="hidden sm:flex gap-6 text-xs uppercase tracking-widest text-neutral-400">
            <span>New Arrivals</span>
            <span>Lookbook Summer</span>
            <span>Minimalist Chic</span>
            <span>Sale 40%</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <ShoppingBag className="w-5 h-5 text-neutral-200" />
            <span className="bg-white text-black font-bold px-3 py-1 rounded-full text-xs">Bag (2)</span>
          </div>
        </header>

        <section className="py-16 px-6 max-w-5xl mx-auto text-center space-y-4">
          <span className="text-[11px] uppercase tracking-widest text-neutral-400">Summer Capsule Collection 2026</span>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight">Elegance in Simplicity</h1>
          <p className="text-xs text-neutral-400 max-w-md mx-auto">
            Chất liệu Linen & Lụa tơ tằm thượng hạng, phong cách tối giản chuẩn Parisian Chic.
          </p>
          <div className="pt-4">
            <button className="bg-white text-black font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors">
              Khám Phá BST Mới
            </button>
          </div>
        </section>
      </div>
    );
  }

  if (templateType === "saas") {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
        <header className="px-8 py-4 flex justify-between items-center border-b border-slate-800">
          <div className="font-black text-xl tracking-tight text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-400" />
            <span>NOVA CLOUD</span>
          </div>
          <div className="hidden md:flex gap-6 text-xs text-slate-300 font-medium">
            <span>Tính Năng</span>
            <span>Tích Hợp API</span>
            <span>Bảng Giá</span>
            <span>Khách Hàng</span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl">
            Dùng Thử Miễn Phí 14 Ngày
          </button>
        </header>

        <section className="py-20 px-8 text-center max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Nền tảng phân tích dữ liệu thế hệ mới
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Tự Động Hóa Vận Hành Doanh Nghiệp Với AI Siêu Tốc
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Kết nối toàn bộ dữ liệu bán hàng, marketing và tài chính trên 1 dashboard thời gian thực duy nhất.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/30">
              Bắt Đầu Ngay
            </button>
            <button className="bg-slate-900 border border-slate-700 text-slate-300 text-xs font-semibold px-6 py-3 rounded-xl">
              Xem Video Demo 2 Phút
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Fallback Agency
  return (
    <div className="min-h-screen bg-black text-white font-sans p-8">
      <header className="flex justify-between items-center border-b border-zinc-800 pb-6">
        <span className="font-black text-2xl tracking-tighter">ZENITH.AGENCY</span>
        <span className="text-xs text-zinc-400">Digital Design & Growth Studio</span>
      </header>
      <section className="py-24 max-w-4xl space-y-6">
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05]">
          WE CRAFT DIGITAL EXPERIENCES THAT CONVERT.
        </h1>
        <p className="text-zinc-400 text-sm max-w-xl">
          Đoạt giải thưởng Awwwards Site of the Day 2025. Chuyên thiết kế website thương hiệu và phát triển giải pháp số đột phá.
        </p>
        <button className="bg-white text-black font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-zinc-200">
          Khởi Động Dự Án Cùng Chúng Tôi
        </button>
      </section>
    </div>
  );
}
