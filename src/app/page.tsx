import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { services, serviceCategories } from "@/data/services";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - ConnectCPA Style */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Financial Leadership
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-brand-blue)] mb-8">
                Strategic. Human-Led. Fully Yours.
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Scale your business with strategic CFO services and expert accounting support.
                From bookkeeping and payroll to financial modeling, tax strategy, and more –
                everything you need to grow with clarity and confidence.
              </p>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)] transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book An Intro Call
              </Link>
            </div>

            {/* Right Side - Funnel Graphic */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute inset-0">
                <svg viewBox="0 0 500 600" className="w-full h-full">
                  <defs>
                    <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#EDF2F7", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#E2E8F0", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path d="M 100 50 L 400 50 L 300 550 L 200 550 Z" fill="url(#funnelGradient)" opacity="0.5" />
                  <circle cx="250" cy="150" r="80" fill="none" stroke="#579cc6" strokeWidth="1" opacity="0.3" />
                  <circle cx="380" cy="450" r="40" fill="#3e5a81" />
                  <text x="380" y="458" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">∞</text>
                </svg>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 bg-[var(--color-brand-blue)] text-white px-4 py-2 rounded-lg transform rotate-12 shadow-lg animate-float">
                  <div className="text-xs opacity-80">Fractional</div>
                  <div className="font-bold">CFO</div>
                </div>

                <div className="absolute top-40 right-0 bg-blue-50 px-5 py-3 rounded-xl shadow-md animate-float-delayed">
                  <div className="text-gray-500 text-xs mb-1">Payroll</div>
                  <div className="h-1 w-16 bg-gray-200 rounded mb-1"></div>
                  <div className="h-1 w-12 bg-gray-200 rounded mb-1"></div>
                  <div className="h-1 w-14 bg-gray-200 rounded"></div>
                </div>

                <div className="absolute top-60 left-20 bg-white px-4 py-3 rounded-lg shadow-lg z-20 animate-float">
                  <div className="text-gray-800 font-bold mb-1">Tax Strategy</div>
                  <div className="h-0.5 w-20 bg-gray-100 mb-1"></div>
                  <div className="h-0.5 w-16 bg-gray-100 mb-1"></div>
                  <div className="h-0.5 w-18 bg-gray-100"></div>
                  <div className="mt-2 w-8 h-2 bg-[var(--color-brand-blue)] rounded-full"></div>
                </div>

                <div className="absolute top-48 right-16 w-10 h-10 bg-[var(--color-brand-gold)] rounded-full flex items-center justify-center shadow-lg z-30">
                  <span className="text-white text-lg font-bold">$</span>
                </div>

                <div className="absolute bottom-40 right-20 bg-[var(--color-brand-blue)] text-white px-6 py-3 rounded-full shadow-xl transform -rotate-6 z-20 animate-float-delayed">
                  Bookkeeping
                </div>

                <div className="absolute bottom-48 left-32 bg-gray-800 text-white px-6 py-3 rounded-full shadow-xl transform rotate-3 z-10 animate-float">
                  Financial Modeling
                </div>

                <div className="absolute bottom-60 right-32 text-[var(--color-brand-gold)] text-4xl">
                  ✦
                </div>

                <div className="absolute bottom-20 left-48 text-[var(--color-brand-gold)] text-2xl star-sparkle">
                  ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-[var(--color-brand-blue)] text-lg font-medium mb-12">
            Trusted by growing businesses across {siteConfig.region}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-12 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-5xl mx-auto"></div>

      {/* Who We Are Section - Blue Gradient */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="gradient-blue rounded-3xl p-12 lg:p-20 text-white">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Who We Are</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed opacity-95">
                {siteConfig.businessName} provides fractional CFO and accounting services
                to growing businesses. Led by {siteConfig.founder.name} with over 15 years of experience,
                we partner with organizations generating over {siteConfig.targetRevenue} in revenue,
                helping them gain clarity, control, and confidence in their financial direction.
              </p>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-24 pt-16 border-t border-white/20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">The Result</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed opacity-95">
                Financial clarity and more time to focus on running your business.
                Clean books. Strategic insights. Informed decisions. The financial
                visibility you need to scale confidently and maximize profitability.
              </p>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-24 pt-16 border-t border-white/20">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Why Us</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed opacity-95">
                With deep expertise in startups and real estate industries, we bring strategic
                depth and operational expertise that transforms how businesses approach their
                finances. We act as an extension of your team, providing executive-level financial
                leadership without the full-time cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integration - Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[var(--color-brand-blue)] font-semibold tracking-widest mb-4 text-sm uppercase">
              Your Partner in Growth
            </p>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">Seamless</h2>
            <h2 className="text-5xl font-bold text-gray-900 flex items-center gap-3">
              Integration <span className="star-sparkle text-3xl">✦</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Integrate */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="w-full px-4">
                  <div className="flex gap-4">
                    <div className="flex-1 border rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-2">Revenue Trend</div>
                      <svg className="w-full h-12 text-[var(--color-brand-blue)]" viewBox="0 0 100 40">
                        <path d="M0 30 Q25 5, 50 25 T100 15" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <div className="flex-1 border rounded-lg p-3">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full border-4 border-[var(--color-brand-blue)] border-r-gray-200"></div>
                      <div className="flex justify-center gap-2 text-sm font-bold">
                        <span>62%</span>
                        <span className="text-gray-400">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrate</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We connect with your existing systems, your team, and your workflows.
                No disruption, just enhanced financial visibility from day one.
              </p>
              <Link href="/services" className="text-[var(--color-brand-blue)] font-semibold text-sm inline-flex items-center gap-1">
                Learn more →
              </Link>
            </div>

            {/* Card 2 - Optimize */}
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-3xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Process Automation</div>
                  <div className="text-xs text-gray-500 mb-4">Efficiency</div>
                  <div className="relative w-32 h-16 mx-auto">
                    <div className="absolute w-32 h-16 border-8 border-[var(--color-brand-gold)]/30 rounded-t-full"></div>
                    <div className="absolute w-32 h-16 border-8 border-[var(--color-brand-gold)] rounded-t-full" style={{ clipPath: "polygon(0 0, 75% 0, 75% 100%, 0 100%)" }}></div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-[var(--color-brand-blue)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Optimize</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We streamline processes, implement best practices, and create efficiencies
                that save time and reduce costs across your financial operations.
              </p>
              <Link href="/services" className="text-[var(--color-brand-blue)] font-semibold text-sm inline-flex items-center gap-1">
                Learn more →
              </Link>
            </div>

            {/* Card 3 - Grow */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="w-full px-4">
                  <div className="text-xs text-gray-500 mb-4 text-center">Projected Growth</div>
                  <svg className="w-full h-20 text-[var(--color-brand-blue)]" viewBox="0 0 200 60">
                    <path d="M0 50 Q40 30, 80 40 T140 20 T200 10" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="100" cy="35" r="3" fill="white" stroke="currentColor" strokeWidth="2" />
                    <circle cx="140" cy="20" r="3" fill="white" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <div className="flex justify-between mt-2 text-xs text-gray-400">
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Grow</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                With solid foundations in place, we provide strategic insights and support
                that help you scale with confidence and make data-driven decisions.
              </p>
              <Link href="/services" className="text-[var(--color-brand-blue)] font-semibold text-sm inline-flex items-center gap-1">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <p className="text-[var(--color-brand-blue)] font-semibold tracking-widest mb-4 text-sm uppercase">
                What We Do
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Our Services
              </h2>
            </div>
            <Link
              href="/services"
              className="mt-6 lg:mt-0 inline-flex items-center text-[var(--color-brand-blue)] font-semibold hover:gap-3 transition-all gap-2"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => {
              const categoryServices = services.filter(s => s.category === category.id).slice(0, 3);
              const colors = [
                "from-[var(--color-brand-blue)] to-[var(--color-brand-navy)]",
                "from-[var(--color-brand-gold)] to-[var(--color-gold-dark)]",
                "from-[var(--color-brand-navy)] to-[#1a3a5a]",
                "from-[var(--color-brand-coral)] to-[var(--color-brand-gold)]",
              ];
              return (
                <div key={category.id} className="group">
                  <div className={`bg-gradient-to-br ${colors[index]} rounded-2xl p-6 text-white mb-4 min-h-[200px] flex flex-col justify-between`}>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                    </div>
                    <Link
                      href={`/services?category=${category.id}`}
                      className="inline-flex items-center text-white/90 hover:text-white font-medium text-sm gap-2 mt-4"
                    >
                      Explore
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  <ul className="space-y-2">
                    {categoryServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-gray-600 hover:text-[var(--color-brand-blue)] text-sm flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-gray-400 rounded-full" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section - Dark Background */}
      <section className="bg-gray-800 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--color-brand-blue)] font-semibold tracking-widest mb-4 text-sm uppercase">
                Leadership
              </p>
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Meet {siteConfig.founder.name}
              </h2>
              <p className="text-2xl text-gray-300 mb-4">{siteConfig.founder.title}</p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {siteConfig.founder.shortBio}
              </p>
              <Link
                href="/about"
                className="gradient-blue text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="browser-mockup transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="browser-header">
                  <div className="browser-dot"></div>
                  <div className="browser-dot"></div>
                  <div className="browser-dot"></div>
                </div>
                <div className="p-8 h-80 bg-gray-50 flex items-center justify-center relative">
                  <Image
                    src="/images/josh-miller.jpg"
                    alt={`${siteConfig.founder.name}, ${siteConfig.founder.title}`}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Background browser windows */}
              <div className="absolute -top-8 -left-8 w-full h-full bg-gray-600 rounded-lg transform -rotate-6 opacity-30 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gray-500 rounded-lg transform rotate-6 opacity-20 -z-20"></div>
            </div>
          </div>
        </div>

        {/* Floating icon */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center transform rotate-12 hidden lg:flex">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="gradient-blue rounded-[2.5rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="text-white">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Ready to Transform Your Financial Operations?
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  Whether you need fractional CFO services, accounting support, or strategic
                  financial guidance, we&apos;re here to help your business thrive. Schedule a
                  free consultation to discuss your unique needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Get a free consultation to discuss your business needs.
                </p>
                <ContactForm variant="compact" />
              </div>
            </div>

            {/* Decorative elements */}
            <svg className="absolute top-10 right-10 w-32 h-32 text-white/10" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[var(--color-brand-blue)] font-semibold tracking-widest mb-4 text-sm uppercase">
              Testimonials
            </p>
            <h2 className="text-5xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
              Hear from business leaders who have transformed their financial operations with {siteConfig.businessName}.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative pt-20 mt-12">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--color-brand-blue)] to-[var(--color-brand-navy)] flex items-center justify-center text-white text-2xl font-bold">
                      C1
                    </div>
                  </div>
                  <div className="quote-mark">&ldquo;</div>
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
                  Technology
                </div>
                <h3 className="text-xl font-bold text-gray-900">Client Name</h3>
                <p className="text-[var(--color-brand-blue)] font-medium">
                  Title, <span className="font-bold">Company</span>
                </p>
              </div>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                &ldquo;Testimonial placeholder - Add your client testimonials here to showcase
                the value you provide to growing businesses.&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative pt-20 mt-12">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[var(--color-brand-blue)]">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--color-brand-gold)] to-[var(--color-gold-dark)] flex items-center justify-center text-white text-2xl font-bold">
                      C2
                    </div>
                  </div>
                  <div className="quote-mark">&ldquo;</div>
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
                  Real Estate
                </div>
                <h3 className="text-xl font-bold text-gray-900">Client Name</h3>
                <p className="text-[var(--color-brand-blue)] font-medium">
                  Title, <span className="font-bold">Company</span>
                </p>
              </div>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                &ldquo;Testimonial placeholder - Add your client testimonials here to showcase
                the value you provide to growing businesses.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] relative pt-20 mt-12">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-[var(--color-brand-gold)]">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--color-brand-navy)] to-gray-800 flex items-center justify-center text-white text-2xl font-bold">
                      C3
                    </div>
                  </div>
                  <div className="quote-mark">&ldquo;</div>
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700 mb-4">
                  Professional Services
                </div>
                <h3 className="text-xl font-bold text-gray-900">Client Name</h3>
                <p className="text-[var(--color-brand-blue)] font-medium">
                  Title, <span className="font-bold">Company</span>
                </p>
              </div>
              <p className="text-gray-600 text-center leading-relaxed text-sm">
                &ldquo;Testimonial placeholder - Add your client testimonials here to showcase
                the value you provide to growing businesses.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[var(--color-brand-blue)] font-semibold tracking-widest mb-4 text-sm uppercase">
              Service Areas
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Serving {siteConfig.region}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve businesses throughout Southern California with local expertise and strategic perspective.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Newport Beach", "Irvine", "Costa Mesa", "Huntington Beach", "Laguna Beach", "Orange", "Santa Ana", "Anaheim"].map((city) => (
              <Link
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(/ /g, "-")}`}
                className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)] transition-all shadow-sm"
              >
                {city}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center text-[var(--color-brand-blue)] font-semibold hover:gap-3 transition-all gap-2"
            >
              View All Service Areas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Spacer for sticky CTA */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
