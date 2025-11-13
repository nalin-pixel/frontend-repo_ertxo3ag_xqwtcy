import { useMemo } from 'react'
import {
  Clock,
  MapPin,
  ShieldCheck,
  DollarSign,
  Handshake,
  Truck,
  Thermometer,
  TestTube,
  Package
} from 'lucide-react'

function Stat({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-white/70 backdrop-blur border border-white/60 shadow-sm">
      <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  )
}

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {kicker && (
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">{kicker}</p>
        )}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
        )}
        <div className="text-gray-700 leading-relaxed text-lg">{children}</div>
      </div>
    </section>
  )
}

export default function App() {
  const nav = useMemo(
    () => [
      { id: 'about', label: 'About' },
      { id: 'problem', label: 'Problem' },
      { id: 'solution', label: 'Solution' },
      { id: 'services', label: 'Services' },
      { id: 'why', label: 'Why Ascend' }
    ],
    []
  )

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-white/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div>
              <p className="font-semibold">Ascend</p>
              <p className="text-xs text-gray-500 -mt-1">Every second counts</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {n.label}
              </button>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-4 py-2 font-medium shadow hover:opacity-95"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-20%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_80%_0%,rgba(79,70,229,0.2),transparent)]" />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-sky-600">Ascend</p>
              <h1 className="text-4xl md:text-6xl font-black leading-tight mt-3">
                A world where no life is lost because help arrived too late
              </h1>
              <p className="mt-5 text-lg text-gray-700">
                We harness drone technology to remove distance and delay as barriers to healthcare. When minutes matter most, help is already on the way.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollTo('solution')}
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-5 py-3 font-semibold shadow hover:opacity-95"
                >
                  Explore the solution
                </button>
                <button
                  onClick={() => scrollTo('services')}
                  className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold hover:bg-slate-50"
                >
                  Our services
                </button>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Stat icon={Clock} title="Every second counts" desc="Rapid response that turns minutes into lives saved." />
                <Stat icon={MapPin} title="Reach beyond roads" desc="Access where ground transport can’t reliably go." />
                <Stat icon={ShieldCheck} title="Cold-chain ready" desc="Protecting sensitive medicines from spoilage." />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white to-slate-100 border border-white/60 shadow-xl p-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(white,transparent_65%)]">
                  <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
                  <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
                </div>
                <div className="relative h-full w-full grid place-items-center">
                  <div className="text-center">
                    <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white grid place-items-center shadow-lg">
                      <Clock className="h-10 w-10" />
                    </div>
                    <p className="mt-4 font-semibold text-gray-800">Drone-powered medical logistics</p>
                    <p className="text-gray-600">Fast, reliable, and built for life-saving impact.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" kicker="About us" title="Every second counts">
        <div className="space-y-4">
          <p>
            At Ascend, we believe that every second counts. Too often, lives are lost simply because help did not arrive in time. Our vision is simple yet bold: a world where no life is lost because help arrived too late.
          </p>
          <p>
            To achieve this, we are building a seamless medical logistics ecosystem powered by drone technology. By uniting healthcare providers, communities, and innovation, we are creating a connected network that delivers life-saving care in real time. No mountain, no distance, and no delay should ever stand between patients and the treatment they deserve.
          </p>
          <p>
            More than technology, Ascend is about people. It’s about mothers who can hold on to hope, children who can grow up healthy, and communities that can thrive because access to care is no longer determined by geography. We exist to make sure that when minutes matter most, help is already on the way.
          </p>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" kicker="The problem" title="Delays cost lives">
        <p>
          When emergencies strike — a mother needs blood during childbirth, a clinic runs out of antivenom, or a remote facility requires vaccines — existing systems are too slow and fragile. Poor roads, rough terrain, and centralized warehouses create predictable delays. Weak cold chains spoil life-saving supplies, while costly emergency couriers cannot scale. The result is preventable deaths, wasted resources, and eroding trust in health systems. Without a new last-mile solution, vulnerable communities remain at risk every hour of every day.
        </p>
      </Section>

      {/* Solution */}
      <Section id="solution" kicker="The solution" title="A connected, drone-powered medical logistics network">
        <div className="space-y-4">
          <p>
            Ascend provides a faster, smarter way to deliver life-saving medical supplies when minutes matter most. Using drone technology, we bypass traffic, poor roads, and difficult terrain to ensure critical items such as blood, antivenom, and vaccines arrive within minutes, not hours.
          </p>
          <p>
            Our drones are equipped to help maintain cold-chain integrity, protecting sensitive medicines from spoilage and waste. Beyond technology, Ascend is building a connected medical logistics ecosystem — linking healthcare providers, communities, and innovation in real time.
          </p>
          <p>
            The result is a system that saves lives, reduces costs, and restores trust in healthcare by ensuring no community is ever out of reach.
          </p>
        </div>
      </Section>

      {/* Services */}
      <section id="services" className="py-20 bg-white/60 border-y border-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">What we deliver</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={Truck} title="Emergency Medical Deliveries" desc="Rapid delivery of blood, antivenom, and life-saving medicines when every second matters." />
            <ServiceCard icon={Thermometer} title="Vaccine & Cold-Chain Logistics" desc="Safe transport of temperature-sensitive supplies with cold-chain assurance." />
            <ServiceCard icon={TestTube} title="Laboratory Sample Transport" desc="Fast, secure movement of diagnostic samples from clinics to labs." />
            <ServiceCard icon={Package} title="Routine Medical Supply Distribution" desc="Scheduled deliveries to hospitals, pharmacies, and rural facilities." />
            <ServiceCard icon={MapPin} title="Remote & Hard-to-Reach Access" desc="Specialized last-mile delivery for isolated communities and clinics." />
            <ServiceCard icon={Handshake} title="Partnership & Integration" desc="Work with governments, NGOs, and providers to embed drone logistics at scale." />
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section id="why" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">Why Choose Ascend</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">Built for impact when minutes matter</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Benefit icon={Clock} title="Speed that Saves Lives" desc="Delivering critical medical supplies in minutes when every second counts." />
            <Benefit icon={MapPin} title="Reach Beyond Roads" desc="Serving remote and underserved areas where ground transport can’t." />
            <Benefit icon={ShieldCheck} title="Cold-Chain Assurance" desc="Safe, reliable delivery of temperature-sensitive medicines and vaccines." />
            <Benefit icon={DollarSign} title="Cost-Effective at Scale" desc="Reducing reliance on expensive and unsustainable emergency couriers." />
            <Benefit icon={Handshake} title="Trusted Partnerships" desc="Collaborating with governments, NGOs, and providers to strengthen health systems." />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-sky-50 to-indigo-50 border-t border-white/60">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">Vision</p>
            <h3 className="text-2xl font-bold mb-3">A world where no life is lost because help arrived too late.</h3>
            <p className="text-gray-700 leading-relaxed">
              We strive to ensure that every community — no matter how remote — can receive life-saving medical supplies in minutes. Time should never be the difference between hope and despair.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-3">Mission</p>
            <h3 className="text-2xl font-bold mb-3">A seamless medical logistics ecosystem powered by drones.</h3>
            <p className="text-gray-700 leading-relaxed">
              We unite healthcare providers, communities, and innovation in a connected network that delivers life‑saving care in real time — overcoming distance, terrain, and delay.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold">Ready to partner for impact?</h3>
          <p className="mt-4 text-lg text-gray-700">
            Let’s bring life‑saving logistics to every community. Share your needs and we’ll be in touch.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:hello@ascend.health"
              className="block rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-6 py-4 font-semibold shadow hover:opacity-95"
            >
              Email us: hello@ascend.health
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Thanks for your interest in Ascend! We will add a contact form in the next iteration.')
              }}
              className="block rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold hover:bg-slate-50"
            >
              Request a demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/60 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ascend. Every second counts.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#about" onClick={(e)=>{e.preventDefault();scrollTo('about')}} className="hover:text-gray-900">About</a>
            <a href="#services" onClick={(e)=>{e.preventDefault();scrollTo('services')}} className="hover:text-gray-900">Services</a>
            <a href="#why" onClick={(e)=>{e.preventDefault();scrollTo('why')}} className="hover:text-gray-900">Why Ascend</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-white/60 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-12 w-12 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}

function Benefit({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-white/70 backdrop-blur border border-white/60">
      <div className="h-10 w-10 rounded-md bg-indigo-100 text-indigo-600 grid place-items-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  )
}
