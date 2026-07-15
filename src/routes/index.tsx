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
import { useState } from "react";
import heroImage from "@/assets/hero-care.jpg";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [
      { title: "Levando Care — Hemtjänst i Gävle" },
      {
        name: "description",
        content:
          "Levando Care erbjuder varm och professionell hemtjänst i Gävle. Kvalitet och omtanke i ditt eget hem.",
      },
      { property: "og:title", content: "Levando Care — Hemtjänst i Gävle" },
      {
        property: "og:description",
        content: "Där kvalitet möter omtanke. Professionell hemtjänst i Gävle.",
      },
      { property: "og:url", content: "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Levando Care",
          description:
            "Hemtjänst i Gävle. Där kvalitet möter omtanke.",
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

type Lang = "sv" | "en";

const content = {
  sv: {
    navServices: "Tjänster",
    navAbout: "Om oss",
    navAreas: "Områden",
    navContact: "Kontakt",
    call: "Ring",
    heroTag: "Hemtjänst · Gävle",
    heroTitle: "Hemtjänst där kvalitet möter omtanke.",
    heroBody:
      "Levando Care erbjuder varm och professionell hemtjänst i hela Gävle. Vi skapar en trygg miljö där du känner dig delaktig i din egen omsorg — grundad i aktuell forskning och levererad av människor som lyssnar.",
    heroCta: "Kontakta oss",
    heroCta2: "Våra tjänster",
    statLanguages: "Språk",
    statAreas: "Områden",
    statBased: "Baserade i",
    services: [
      { title: "Personlig omvårdnad", body: "Omtänksam hjälp med hygien, påklädning och dagliga rutiner — med värdighet." },
      { title: "Städning", body: "Regelbunden städning och tvätt så ditt hem förblir en lugn och trivsam plats." },
      { title: "Måltider & näring", body: "Vi lagar näringsrika måltider tillsammans, anpassade efter dina önskemål och behov." },
      { title: "Läkemedelsstöd", body: "Pålitliga påminnelser och säker hantering av ordinerade läkemedel enligt vårdplan." },
      { title: "Ärenden & inköp", body: "Matinköp, apoteksbesök och vardagliga ärenden så inget viktigt missas." },
      { title: "Sällskap", body: "Tid att prata, promenera och dela en kopp kaffe — närvaro är en del av god omsorg." },
    ],
    values: [
      { title: "Kvalificerade & reglerade", body: "Utbildad personal som arbetar enligt kvalitetsledningssystem och kollektivavtal." },
      { title: "Omsorg på ditt språk", body: "Vårt team talar svenska, engelska, tigrinja och spanska." },
      { title: "Pålitlig, på dina villkor", body: "Regelbundna scheman, kända ansikten och tid som inte är stressad." },
    ],
    servicesEyebrow: "Våra tjänster",
    servicesTitle: "Vardagligt stöd, levererat med omtanke.",
    servicesLead: "Vi skräddarsyr varje vårdplan efter personen framför oss. Om det finns en tjänst du behöver som inte finns med här, fråga oss gärna.",
    aboutEyebrow: "Om oss",
    aboutTitle: "Ett litet team, helt fokuserat på Gävle.",
    aboutP1: "God hemtjänst är viktigt. Det är därför vi startade Levando Care — ett hemtjänstföretag i Gävle byggt kring en enkel idé: att alla förtjänar att känna sig trygga, respekterade och delaktiga i den omsorg de får hemma.",
    aboutP2: "Vi följer aktuell forskning och håller oss informerade om förändringar som formar omsorgen i vår kommun, så att vi kan fortsätta höja ribban för vad hemtjänst kan vara. Hållbarhet och en hälsosam miljö är en del av hur vi arbetar varje dag.",
    aboutP3: "Vårt team talar svenska och engelska, samt tigrinja och spanska — så att fler grannar kan bli förstådda på sitt eget språk. Du hittar oss i nyrenoverade lokaler på Brynäsgatan 10 i Gävle. Vi träffar dig gärna.",
    roleMd: "Verkställande direktör",
    roleOps: "Verksamhetschef",
    areasEyebrow: "Där vi arbetar",
    areasTitle: "Vi finns i stadsdelar i hela Gävle.",
    areasLead: "Vi är stolta över att erbjuda hemtjänst i dessa områden. Osäker på om vi täcker din gata? Ring oss.",
    contactEyebrow: "Kontakt",
    contactTitle: "Låt oss prata om den omsorg du behöver.",
    contactLead: "Ring, mejla eller kom förbi vårt kontor på Brynäsgatan. Vi tar oss tid att förstå din situation och svara på alla frågor — utan påtryckningar.",
    callUs: "Ring oss",
    email: "E-post",
    visit: "Besök",
    weSpeak: "Vi talar",
    languagesList: "Svenska · Engelska · Tigrinja · Spanska",
    footerTag: "Levando Care · Hemtjänst i Gävle",
    footerRights: "Alla rättigheter förbehållna.",
  },
  en: {
    navServices: "Services",
    navAbout: "About",
    navAreas: "Areas",
    navContact: "Contact",
    call: "Call",
    heroTag: "Hemtjänst · Gävle",
    heroTitle: "Home care where quality meets compassion.",
    heroBody:
      "Levando Care provides warm, professional home care across Gävle. We build a safe environment where you feel involved in your own care — grounded in current research, delivered by people who listen.",
    heroCta: "Get in touch",
    heroCta2: "Our services",
    statLanguages: "Languages",
    statAreas: "Areas served",
    statBased: "Based in",
    services: [
      { title: "Personal care", body: "Compassionate help with hygiene, dressing and everyday routines — delivered with dignity." },
      { title: "Home cleaning", body: "Regular cleaning and laundry so your home stays a calm, comfortable place to live." },
      { title: "Meals & nutrition", body: "Preparing balanced meals together, tailored to your preferences and dietary needs." },
      { title: "Medication support", body: "Reliable reminders and safe handling of prescribed medication in line with care plans." },
      { title: "Errands & shopping", body: "Grocery runs, pharmacy visits and everyday errands so nothing important gets missed." },
      { title: "Companionship", body: "Time to talk, walk and share a coffee — because presence is part of good care." },
    ],
    values: [
      { title: "Qualified & regulated", body: "Trained staff working to a quality management system and collective agreement." },
      { title: "Care in your language", body: "Our team speaks Swedish, English, Tigrinya and Spanish." },
      { title: "Reliable, on your terms", body: "Consistent schedules, familiar faces and time that isn't rushed." },
    ],
    servicesEyebrow: "Our services",
    servicesTitle: "Everyday support, delivered with care.",
    servicesLead: "We tailor every care plan to the person in front of us. If there's a service you need that isn't listed here, please ask.",
    aboutEyebrow: "About us",
    aboutTitle: "A small team, entirely focused on Gävle.",
    aboutP1: "Good home care matters. It's why we started Levando Care — a hemtjänst company based in Gävle, built around a simple idea: that everyone deserves to feel safe, respected and involved in the care they receive at home.",
    aboutP2: "We follow current research and stay informed about the changes shaping care in our community, so we can keep raising the bar for what home care can be. Sustainability and a healthy environment are part of how we work every day.",
    aboutP3: "Our team speaks Swedish and English, as well as Tigrinya and Spanish — so more of our neighbours can be understood in their own words. You'll find us in newly renovated offices on Brynäsgatan 10 in Gävle. We'd love to meet you.",
    roleMd: "Managing Director",
    roleOps: "Operations Manager",
    areasEyebrow: "Where we work",
    areasTitle: "Serving neighbourhoods across Gävle.",
    areasLead: "We're proud to provide home care throughout these areas of the city. Not sure if we cover your street? Give us a call.",
    contactEyebrow: "Get in touch",
    contactTitle: "Let's talk about the care you need.",
    contactLead: "Call us, send an email or drop by our office on Brynäsgatan. We'll take the time to understand your situation and answer every question — no pressure.",
    callUs: "Call us",
    email: "Email",
    visit: "Visit",
    weSpeak: "We speak",
    languagesList: "Swedish · English · Tigrinya · Spanish",
    footerTag: "Levando Care · Home care in Gävle",
    footerRights: "All rights reserved.",
  },
};

const serviceIcons = [HeartHandshake, Sparkles, UtensilsCrossed, Pill, ShoppingBasket, Users];
const valueIcons = [ShieldCheck, Languages, Clock];

const areas = [
  "Andersberg–Stureborg",
  "Bomhus–Järvsta",
  "Brynäs",
  "Central Gävle Norra",
  "Stigslund",
  "Sätra",
];

function Index() {
  const [lang, setLang] = useState<Lang>("sv");
  const t = content[lang];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Values t={t} />
      <Services t={t} />
      <About t={t} />
      <Areas t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

type T = typeof content["sv"];

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-border text-xs font-medium">
      {(["sv", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 uppercase tracking-wider transition-colors ${
            lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function Nav({ t, lang, setLang }: { t: T; lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <HeartHandshake className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg font-bold tracking-tight">
            Levando Care
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition-colors hover:text-primary">{t.navServices}</a>
          <a href="#about" className="transition-colors hover:text-primary">{t.navAbout}</a>
          <a href="#areas" className="transition-colors hover:text-primary">{t.navAreas}</a>
          <a href="#contact" className="transition-colors hover:text-primary">{t.navContact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangToggle lang={lang} setLang={setLang} />
          <a
            href="mailto:info@levandocare.se"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">info@levandocare.se</span>
            <span className="sm:hidden">{t.email}</span>
          </a>
          <a
            href="tel:+46264020897"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-[color:var(--navy-2)]"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+46 26 40 20 897</span>
            <span className="sm:hidden">{t.call}</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }: { t: T }) {
  return (
    <section id="top" className="relative overflow-hidden bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {t.heroTag}
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t.heroBody}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:bg-[color:var(--navy-2)] hover:shadow-lift"
            >
              {t.heroCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-muted"
            >
              {t.heroCta2}
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{t.statLanguages}</dt>
              <dd className="mt-1 font-serif text-xl text-primary">4</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{t.statAreas}</dt>
              <dd className="mt-1 font-serif text-xl text-primary">6</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{t.statBased}</dt>
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

function Values({ t }: { t: T }) {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3">
        {t.values.map((v, i) => {
          const Icon = valueIcons[i];
          return (
            <div key={v.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Services({ t }: { t: T }) {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">{t.servicesEyebrow}</span>
            <h2 className="mt-3 max-w-xl font-serif text-3xl leading-tight sm:text-4xl">{t.servicesTitle}</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{t.servicesLead}</p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <article key={s.title} className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-muted/40">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-xl text-primary">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About({ t }: { t: T }) {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="text-xs font-medium uppercase tracking-wider text-secondary">{t.aboutEyebrow}</span>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{t.aboutTitle}</h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>{t.aboutP1}</p>
          <p>{t.aboutP2}</p>
          <p>{t.aboutP3}</p>
          <div className="grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
            <ContactPerson name="Berhane Yohannes" role={t.roleMd} phone="+46 70 410 12 53" tel="+46704101253" />
            <ContactPerson name="Daniel Ghebregiorgis" role={t.roleOps} phone="+46 79 102 75 87" tel="+46791027587" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPerson({ name, role, phone, tel }: { name: string; role: string; phone: string; tel: string }) {
  return (
    <div>
      <p className="font-serif text-lg text-primary">{name}</p>
      <p className="text-sm text-muted-foreground">{role}</p>
      <a href={`tel:${tel}`} className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline">
        <Phone className="h-3.5 w-3.5" />
        {phone}
      </a>
    </div>
  );
}

function Areas({ t }: { t: T }) {
  return (
    <section id="areas" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-[color:var(--teal-light)]">{t.areasEyebrow}</span>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-primary-foreground sm:text-4xl">{t.areasTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">{t.areasLead}</p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li key={area} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
              <MapPin className="h-4 w-4 text-[color:var(--teal-light)]" />
              <span className="text-sm font-medium">{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact({ t }: { t: T }) {
  return (
    <section id="contact" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 rounded-3xl border border-border bg-card p-10 shadow-soft lg:grid-cols-2 lg:p-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">{t.contactEyebrow}</span>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">{t.contactTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.contactLead}</p>
          </div>
          <div className="space-y-6">
            <ContactRow icon={Phone} label={t.callUs} value="+46 26 40 20 897" href="tel:+46264020897" />
            <ContactRow icon={Mail} label={t.email} value="info@levandocare.se" href="mailto:info@levandocare.se" />
            <ContactRow icon={MapPin} label={t.visit} value="Brynäsgatan 10, 802 80 Gävle" href="https://maps.google.com/?q=Brynäsgatan+10,+802+80+Gävle" />
            <ContactRow icon={Languages} label={t.weSpeak} value={t.languagesList} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-serif text-lg text-primary">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {inner}
      </a>
    );
  }
  return inner;
}

function Footer({ t }: { t: T }) {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <p className="font-serif text-primary">{t.footerTag}</p>
        <p>© {new Date().getFullYear()} Levando Care. {t.footerRights}</p>
      </div>
    </footer>
  );
}
