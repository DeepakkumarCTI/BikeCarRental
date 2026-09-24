import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CalendarDays, Clock3, MapPin, MessageCircle, User, Mail, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import { getStored, makeId, money, setStored, whatsappUrl } from "../utils";

const ADMIN_WHATSAPP = "919876543210";

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const v = getStored("od_vehicles", []).find(x=>x.id===id);
  const [form,setForm] = useState({name:"",phone:"",email:"",date:"",time:"10:00",pickup:"",drop:"",duration:"1",notes:""});
  const [done,setDone] = useState(false);
  if (!v) return <div className="container-x py-20 text-center">Vehicle not found</div>;

  const submit = (e) => {
    e.preventDefault();
    const booking = { id: makeId("booking"), vehicleId:v.id, vehicleName:v.name, ...form, status:"Enquiry", createdAt:new Date().toISOString() };
    const all = getStored("od_bookings", []); all.unshift(booking); setStored("od_bookings", all);
    const msg = `🚗 ORANGE DRIVE RENTAL ENQUIRY\\n\\nVehicle: ${v.name}\\nCustomer: ${form.name}\\nPhone: ${form.phone}\\nEmail: ${form.email || "N/A"}\\nDate: ${form.date}\\nTime: ${form.time}\\nPickup: ${form.pickup}\\nDrop: ${form.drop}\\nDuration: ${form.duration} day(s)\\nNotes: ${form.notes || "None"}\\n\\nPlease confirm availability and final rental price.`;
    setDone(true);
    window.open(whatsappUrl(ADMIN_WHATSAPP,msg),"_blank","noopener,noreferrer");
  };
  if (done) return <section className="container-x py-20"><div className="mx-auto max-w-2xl rounded-[2rem] border border-emerald-100 bg-white p-8 text-center shadow-soft sm:p-12"><div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-emerald-100 text-emerald-600"><CheckCircle2 size={34}/></div><h1 className="mt-6 text-3xl font-black">Enquiry submitted!</h1><p className="mt-3 leading-7 text-slate-600">Your enquiry has been saved in the rental dashboard and WhatsApp has been opened with the enquiry details.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/vehicles" className="btn-secondary">Browse more vehicles</Link><Link to="/" className="btn-primary">Back to home</Link></div></div></section>;

  return <section className="container-x py-12 sm:py-16">
    <Link to={`/vehicles/${v.id}`} className="mb-6 inline-flex items-center gap-2 font-bold text-slate-500"><ArrowLeft size={17}/> Back</Link>
    <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
      <div className="card overflow-hidden self-start lg:sticky lg:top-28"><img src={v.imageUrl} alt={v.name} className="aspect-[16/10] w-full object-cover"/><div className="p-6"><p className="text-xs font-black uppercase tracking-widest text-orange-500">{v.type} · {v.category}</p><h2 className="mt-2 text-2xl font-black">{v.name}</h2><p className="mt-3 text-slate-500">{money(v.pricePerDay)} / day · {money(v.pricePerHour)} / hour</p></div></div>
      <form onSubmit={submit} className="card p-6 sm:p-8">
        <p className="font-black uppercase tracking-widest text-orange-500">Rental enquiry</p><h1 className="mt-2 text-3xl font-black">Tell us about your trip</h1><p className="mt-2 text-slate-500">We will verify availability and confirm the booking with you.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Field label="Full name" icon={User}><input required className="input" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></Field>
          <Field label="Phone / WhatsApp" icon={Phone}><input required className="input" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91..."/></Field>
          <Field label="Email" icon={Mail}><input type="email" className="input" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></Field>
          <Field label="Pickup date" icon={CalendarDays}><input required type="date" min={new Date().toISOString().split("T")[0]} className="input" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></Field>
          <Field label="Pickup time" icon={Clock3}><input required type="time" className="input" value={form.time} onChange={e=>setForm({...form,time:e.target.value})}/></Field>
          <Field label="Duration (days)" icon={Clock3}><input required min="1" type="number" className="input" value={form.duration} onChange={e=>setForm({...form,duration:e.target.value})}/></Field>
          <Field label="Pickup location" icon={MapPin}><input required className="input" value={form.pickup} onChange={e=>setForm({...form,pickup:e.target.value})} placeholder="Hotel / area / address"/></Field>
          <Field label="Drop location" icon={MapPin}><input required className="input" value={form.drop} onChange={e=>setForm({...form,drop:e.target.value})} placeholder="Return / destination"/></Field>
          <div className="sm:col-span-2"><label className="label">Additional requirements</label><textarea className="input min-h-28" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Driver requirement, child seat, luggage, special request..."/></div>
        </div>
        <div className="mt-6 rounded-2xl bg-orange-50 p-4 text-sm leading-6 text-slate-600"><b className="text-slate-900">Important:</b> This form creates an enquiry, not an automatic final booking. Our team confirms vehicle availability and final pricing.</div>
        <button className="btn-primary mt-6 w-full py-4"><MessageCircle size={19}/> Submit & WhatsApp admin</button>
      </form>
    </div>
  </section>;
}
function Field({label,icon:I,children}) { return <div><label className="label flex items-center gap-2">{I&&<I size={15} className="text-orange-500"/>}{label}</label>{children}</div> }
