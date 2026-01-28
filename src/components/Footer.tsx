import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const topServices = services.slice(0, 6);
  const topLocations = locations.slice(0, 6);

  return (
    <footer className="bg-white pt-20 pb-0">
      {/* Connect Your Business CTA */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
          <span className="relative inline-block">
            <span className="absolute -inset-1 border-2 border-[var(--color-brand-blue)] rounded-full transform -rotate-2"></span>
            <span className="relative">Connect</span>
          </span>{" "}
          Your Business to Success
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Strategic financial leadership for growing businesses
        </p>
        <Link
          href="/contact"
          className="mt-8 gradient-blue text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 inline-block"
        >
          Book a call now
        </Link>
      </div>

      {/* Dark Footer Section */}
      <div className="bg-gray-800 rounded-t-[3rem] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Card - Overlapping */}
            <div className="lg:col-span-4 relative -mt-32">
              <div className="footer-contact-card">
                <div className="text-3xl font-bold mb-8">
                  BlueCrest<span className="font-normal text-xl">Group</span>
                </div>

                <div className="space-y-6">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.city + ", " + siteConfig.stateAbbr)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div>{siteConfig.city}, {siteConfig.stateAbbr}</div>
                      <div>{siteConfig.region}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>{siteConfig.email}</div>
                  </a>

                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>{siteConfig.phone}</div>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <Link
                    href="/contact"
                    className="w-full bg-gray-800 text-white py-4 rounded-full font-semibold hover:bg-gray-900 transition-all text-center block"
                  >
                    Book a 15-Min Call
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-8">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-8 text-white pt-8">
              <Link
                href="/contact"
                className="text-[var(--color-brand-blue)] text-xl font-semibold hover:text-white transition-colors flex items-center gap-2 mb-12 inline-flex"
              >
                Connect Your Business to Success
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 border-t border-gray-700 pt-8">
                {/* Column 1 - Company */}
                <div>
                  <Link href="/" className="block mb-4 hover:text-[var(--color-brand-blue)] transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="block mb-4 hover:text-[var(--color-brand-blue)] transition-colors">
                    About
                  </Link>
                  <Link href="/contact" className="block hover:text-[var(--color-brand-blue)] transition-colors">
                    Contact
                  </Link>
                </div>

                {/* Column 2 - Services */}
                <div>
                  <h4 className="font-semibold mb-4 text-[var(--color-brand-gold)]">Services</h4>
                  {topServices.slice(0, 3).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block mb-3 text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="text-[var(--color-brand-blue)] text-sm font-medium hover:underline"
                  >
                    View All
                  </Link>
                </div>

                {/* Column 3 - More Services */}
                <div>
                  <h4 className="font-semibold mb-4 text-[var(--color-brand-gold)]">More Services</h4>
                  {topServices.slice(3, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block mb-3 text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                {/* Column 4 - Service Areas */}
                <div>
                  <h4 className="font-semibold mb-4 text-[var(--color-brand-gold)]">Service Areas</h4>
                  {topLocations.slice(0, 3).map((location) => (
                    <Link
                      key={location.slug}
                      href={`/service-areas/${location.slug}`}
                      className="block mb-3 text-gray-400 hover:text-[var(--color-brand-blue)] transition-colors text-sm"
                    >
                      {location.name}
                    </Link>
                  ))}
                  <Link
                    href="/service-areas"
                    className="text-[var(--color-brand-blue)] text-sm font-medium hover:underline"
                  >
                    View All Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                {currentYear} {siteConfig.businessName}. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms
                </Link>
                <Link href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
