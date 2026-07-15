import { createFileRoute } from "@tanstack/react-router";
import {
  HeartHandshake,
  Sparkles,
  UtensilsCrossed,
  Pill,
  ShoppingBasket,
  Users,
  Phone,
  Mail,
  MapPin,
  Languages,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-care.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [{ property: "og:url", content: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Levando Care",
          description:
            "Home care services (hemtjänst) in Gävle. Where quality meets compassion.",
          telephone: "+46264020897",
          email: "info@levandocare.se",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Brynäsgatan 10",
            postalCode: "802 80",
            addressLocality: "Gävle",
            addressCountry: "SE",
          },
          areaServed: [
            "Andersberg-Stureborg",
            "Bomhus-Järvsta",
            "Brynäs",
            "Central Gävle North",
            "Stigslund",
            "Sätra",
          ],
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: HeartHandshake,
    title: "Personal care",
    body: "Compassionate help with hygiene, dressing and everyday routines — delivered with dignity.",
  },
  {
    icon: Sparkles,
    title: "Home cleaning",
    body: "Regular cleaning and laundry so your home stays a calm, comfortable place to live.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meals & nutrition",
    body: "Preparing balanced meals together, tailored to your preferences and dietary needs.",
  },
  {
    icon: Pill,
    title: "Medication support",
    body: "Reliable reminders and safe handling of prescribed medication in line with care plans.",
  },
  {
    icon: ShoppingBasket,
    title: "Errands & shopping",
    body: "Grocery runs, pharmacy visits and everyday errands so nothing important gets missed.",
  },
  {
    icon: Users,
    title: "Companionship",
    body: "Time to talk, walk and share a coffee — because presence is part of good care.",
  },
];

const areas = [
  "Andersberg–Stureborg",
  "Bomhus–Järvsta",
  "Brynäs",
  "Central Gävle North",
  "Stigslund",
  "Sätra",
];

const values = [
  {
    icon: ShieldCheck,
    title: "Qualified & regulated",
    body: "Trained staff working to a quality management system and collective agreement.",
  },
  {
    icon: Languages,
    title: "Care in your language",
    body: "Our team speaks Swedish, English, Tigrinya and Spanish.",
  },
  {
    icon: Clock,
    title: "Reliable, on your terms",
    body: "Consistent schedules, familiar faces and time that isn't rushed.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Values />
      <Services />
      <About />
      <Areas />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <HeartHandshake className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight">
            Levando Care
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-primary">
            Services
          </a>
          <a href="#about" className="transition-colors hover:text-primary">
            About
          </a>
          <a href="#areas" className="transition-colors hover:text-primary">
            Areas
          </a>
          <a href="#contact" className="transition-colors hover:text-primary">
            Contact
          </a>
        </nav>
        <a
          href="tel:+46264020897"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-[color:var(--navy-2)]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">+46 26 40 20 897</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Hemtjänst · Gävle
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Home care where quality meets compassion.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Levando Care provides warm, professional home care across Gävle.
            We build a safe environment where you feel involved in your own care —
            grounded in current research, delivered by people who listen.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:bg-[color:var(--navy-2)] hover:shadow-lift"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-muted"
            >
              Our services
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Languages
              </dt>
              <dd className="mt-1 font-serif text-xl text-primary">4</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Areas served
              </dt>
              <dd className="mt-1 font-serif text-xl text-primary">6</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Based in
              </dt>
              <dd className="mt-1 font-serif text-xl text-primary">Gävle</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/30 via-accent/20 to-transparent blur-2xl" />
          <img
            src={heroImage}
            alt="Caregiver gently holding an elderly person's hands"
            width={1600}
            height={1200}
            className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
              <v.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              Our services
            </span>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">
              Everyday support, delivered with care.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            We tailor every care plan to the person in front of us. If there's a
            service you need that isn't listed here, please ask.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-muted/40"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-xl text-primary">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-medium uppercase tracking-wider text-secondary">
            About us
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            A small team, entirely focused on Gävle.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Good home care matters. It's why we started Levando Care — a
            hemtjänst company based in Gävle, built around a simple idea:
            that everyone deserves to feel safe, respected and involved in the
            care they receive at home.
          </p>
          <p>
            We follow current research and stay informed about the changes
            shaping care in our community, so we can keep raising the bar for
            what home care can be. Sustainability and a healthy environment
            are part of how we work every day.
          </p>
          <p>
            Our team speaks Swedish and English, as well as Tigrinya and
            Spanish — so more of our neighbours can be understood in their
            own words. You'll find us in newly renovated offices on
            Brynäsgatan 10 in Gävle. We'd love to meet you.
          </p>
          <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
            <ContactPerson
              name="Berhane Yohannes"
              role="Managing Director"
              phone="+46 70 410 12 53"
              tel="+46704101253"
            />
            <ContactPerson
              name="Daniel Ghebregiorgis"
              role="Operations Manager"
              phone="+46 79 102 75 87"
              tel="+46791027587"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPerson({
  name,
  role,
  phone,
  tel,
}: {
  name: string;
  role: string;
  phone: string;
  tel: string;
}) {
  return (
    <div>
      <p className="font-serif text-lg text-primary">{name}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
      <a
        href={`tel:${tel}`}
        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
      >
        <Phone className="h-3.5 w-3.5" />
        {phone}
      </a>
    </div>
  );
}

function Areas() {
  return (
    <section id="areas" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--teal-light)]">
            Where we work
          </span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-primary-foreground sm:text-4xl">
            Serving neighbourhoods across Gävle.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
            We're proud to provide home care throughout these areas of the
            city. Not sure if we cover your street? Give us a call.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
            >
              <MapPin className="h-4 w-4 text-[color:var(--teal-light)]" />
              <span className="text-sm font-medium">{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 rounded-3xl border border-border bg-card p-10 shadow-soft lg:grid-cols-2 lg:p-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              Get in touch
            </span>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Let's talk about the care you need.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Call us, send an email or drop by our office on Brynäsgatan.
              We'll take the time to understand your situation and answer
              every question — no pressure.
            </p>
          </div>
          <div className="space-y-6">
            <ContactRow
              icon={Phone}
              label="Call us"
              value="+46 26 40 20 897"
              href="tel:+46264020897"
            />
            <ContactRow
              icon={Mail}
              label="Email"
              value="info@levandocare.se"
              href="mailto:info@levandocare.se"
            />
            <ContactRow
              icon={MapPin}
              label="Visit"
              value="Brynäsgatan 10, 802 80 Gävle"
              href="https://maps.google.com/?q=Brynäsgatan+10,+802+80+Gävle"
            />
            <ContactRow
              icon={Languages}
              label="We speak"
              value="Swedish · English · Tigrinya · Spanish"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 font-serif text-lg text-primary">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p className="font-serif text-primary">
          Levando Care · Hemtjänst i Gävle
        </p>
        <p>© {new Date().getFullYear()} Levando Care. All rights reserved.</p>
      </div>
    </footer>
  );
}
