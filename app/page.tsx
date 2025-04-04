import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WorkshopSection } from "@/components/workshop-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        {/* Wer wir sind */}
        <section id="wer-wir-sind" className="py-20 bg-purple-100/70 scroll-mt-16 relative">
          {/* Bottom gradient that transitions to the next section's color */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-purple-100/70 to-teal-100/70 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800">Wer wir sind</h2>

            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p className="mb-6">
                  Mit Sawāʾ starten wir ein aufregendes Projekt, das darauf abzielt, Jugendliche und junge Erwachsene in
                  Moscheegemeinden in Köln und Umgebung zu Multiplikator:innen im Kampf gegen Formen der
                  gruppenbezogenen Menschenfeindlichkeit zu machen. Durch eine siebenteilige Workshopreihe werden die
                  Teilnehmer:innen geschult, eine klare Haltung gegen jegliche Form von Diskriminierung einzunehmen und
                  die erlernten Inhalte in ihr Umfeld weiterzutragen.
                </p>
                <p>
                  Junge Menschen erfahren in ihrem Alltag und im Netz immer häufiger antimuslimische, antisemitische und
                  weitere Formen von Ressentiments. Wir sind uns dieser und ähnlicher gesellschaftlicher
                  Herausforderungen bewusst und stehen mit Sawāʾ entschieden dagegen! Unsere Vision ist es, Jugendlichen
                  und jungen Erwachsenen Halt zu geben, sie zu stärken und eine inklusivere Zukunft zu gestalten, in der
                  sie gehört, gesehen und empowert werden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Was wir tun - Introduction */}
        <section id="was-wir-tun" className="py-20 bg-teal-100/70 scroll-mt-16 relative">
          {/* Bottom gradient that transitions to the next section's color */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-teal-100/70 to-purple-100/70 backdrop-blur-sm"></div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-teal-800">Was wir tun</h2>

            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="text-2xl font-bold text-center mb-6 text-teal-700">Unsere Workshopreihe</h3>
              <div className="prose prose-lg mx-auto">
                <p>
                  Durch unsere siebenteilige Workshopreihe werden die Teilnehmer:innen geschult, eine klare Haltung
                  gegen jegliche Form von Diskriminierung einzunehmen und die erlernten Inhalte in ihr Umfeld
                  weiterzutragen. Jeder Workshop behandelt eine spezifische Form der Diskriminierung und vermittelt
                  praktische Handlungsstrategien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop 1 */}
        <WorkshopSection
          id="workshop-1"
          number="1"
          title="Problembewusstsein schaffen – Antimuslimischer Rassismus"
          description="In diesem ersten Workshop werden die Teilnehmer:innen an das Phänomen der gruppenbezogenen Menschenfeindlichkeit herangeführt. In einem nächsten Schritt lernen sie Antimuslimischen Rassismus mit seinen unterschiedlichen Ursachen, historischen Kontinuitäten, Erscheinungsformen und Funktionsweisen kennen und bekommen die Gelegenheit, über eigene Erfahrungen und Gefühle zu sprechen. Sie setzen sich mit den Folgen für Betroffene auseinander und erarbeiten gemeinsam Handlungsmöglichkeiten."
          image="/images/anti-muslim-racism.png"
          color="purple"
          imagePosition="right"
          nextColor="teal"
        />

        {/* Workshop 2 */}
        <WorkshopSection
          id="workshop-2"
          number="2"
          title="Sichtbar machen – Antisemitismus"
          description={
            'Mit dem Workshop "Sichtbar machen" wird vermittelt, dass gruppenbezogene Menschenfeindlichkeit am Beispiel des Antisemitismus gesamtgesellschaftlich sichtbar gemacht werden muss, um dieser entgegenwirken zu können. Die Teilnehmer:innen lernen Ursachen, Entwicklungen und Ausprägungen von Antisemitismus kennen und werden befähigt, antisemitischen Äußerungen zu widersprechen.'
          }
          image="/images/anti-semitism.png"
          color="teal"
          imagePosition="left"
          nextColor="amber"
        />

        {/* Workshop 3 */}
        <WorkshopSection
          id="workshop-3"
          number="3"
          title="Gehör finden – Sexismus"
          description={
            "In diesem Workshop lernen die Teilnehmer:innen, wie sie Sexismus in ihrem Alltag erkennen, was sie dagegen tun können und welche anderen Diskriminierungskategorien bei Sexismus noch mitgedacht werden sollten. Hierfür wird das Konzept der Intersektionalität vorgestellt und am Beispiel von Frauen mit muslimischem Selbstverständnis reflektiert. Im nächsten Schritt werden positive Beispiele und Handlungsmöglichkeiten erarbeitet und Beratungsstellen vorgestellt, die in Fällen von Diskriminierung oder auch Gewalt helfen können."
          }
          image="/images/gender-inequality.png"
          color="amber"
          imagePosition="right"
          nextColor="rose"
        />

        {/* Workshop 4 */}
        <WorkshopSection
          id="workshop-4"
          number="4"
          title="Verbündete finden und aktivieren – Anti-Schwarzer Rassismus"
          description={
            'Ein wichtiger Weg in der Begegnung von gruppenbezogener Menschenfeindlichkeit ist, sich mit anderen Betroffenen zusammenzutun und gemeinsam aktiv zu werden. Im Workshop "Verbündete finden und aktivieren" wird dies am Beispiel des Anti-Schwarzen Rassismus erarbeitet. Der Workshop thematisiert die Geschichte und Erscheinungsformen des Anti-Schwarzen Rassismus, koloniale Kontinuitäten, weiße ethnozentrische Perspektiven und die Frage, warum Schwarze Vorbilder wichtig für Kinder sind.'
          }
          image="/images/anti-black-racism.png"
          color="rose"
          imagePosition="left"
          nextColor="indigo"
        />

        {/* Workshop 5 */}
        <WorkshopSection
          id="workshop-5"
          number="5"
          title="Sei eine Stimme! – Ableismus"
          description={
            'In "Sei eine Stimme!" lernen die Teilnehmer:innen Möglichkeiten des digitalen Engagements am Beispiel von Ableismus kennen. Es wird der Frage nachgegangen, welche Formen von Ableismus existieren und was dieses Thema mit uns zu tun hat. Die Teilnehmer:innen erarbeiten gemeinsam eine Sensibilisierungskampagne digitalen Engagements gegen Hate Speech und Diskriminierung und wissen für behinderte, chronisch kranke und pathologisierte Menschen einzustehen.'
          }
          image="/images/ageism-ableism.png"
          color="indigo"
          imagePosition="right"
          nextColor="cyan"
        />

        {/* Workshop 6 */}
        <WorkshopSection
          id="workshop-6"
          number="6"
          title="Bring dich ein! – Rassismus gegen Sinti:zze und Rom:nja"
          description={
            "In diesem Workshop wird den Teilnehmer:innen der Rassismus gegen Sinti:zze und Rom:nja nähergebracht. Dabei werden historische Stereotype sowie neuere Erscheinungsformen besprochen und diskutiert. Zum Abschluss der Handlungsmöglichkeiten der Workshopreihe werden hier unterschiedliche Formen des politischen Engagements gezeigt. Dabei wird auf Petitionen, Nachrichten an Abgeordnete, Beteiligung an Bürgerinitiativen und weitere Formen des Engagements eingegangen und den Teilnehmer:innen die Möglichkeit gegeben, diese verschiedenen Formen des politischen Engagements auszuprobieren."
          }
          image="/images/sinti-roma.png"
          color="cyan"
          imagePosition="left"
          nextColor="fuchsia"
        />

        {/* Workshop 7 */}
        <WorkshopSection
          id="workshop-7"
          number="7"
          title="Social Media, Hate Speech und Menschenfeindlichkeit"
          description={
            "Im letzten Workshop der Workshopreihe werden die Gefahren und die Tragweite von Hate Speech in den sozialen Medien, insbesondere TikTok, vermittelt. Zunächst werden sowohl Funktionsweisen und Mechanismen von Social Media als auch deren psychische Auswirkungen besprochen. Im weiteren Verlauf des Workshops wird das Vorgehen auf Social Media menschenfeindlicher Gruppen und Personen anhand des Beispiels von rechten Populist:innen und religiös begründeten Fundamentalist:innen beleuchtet. Die Teilnehmer:innen bekommen damit Instrumente an die Hand, wie Inhalte hinterfragt, Fakten geprüft und Hintergründe wie auch Kompetenzen von Influencer:innen recherchiert werden können, um ein quellenkritisches Denken zu vermitteln."
          }
          image="/images/social-media.jpg"
          color="fuchsia"
          imagePosition="right"
          nextColor="purple"
        />

        {/* Kontakt */}
        <section id="kontakt" className="py-20 bg-purple-100/70 scroll-mt-16 relative">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800">Kontakt</h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-12 bg-purple-600 text-white">
                    <h3 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <svg
                          className="h-6 w-6 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span>info@sawa-projekt.de</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="h-6 w-6 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span>+49 (0) 221 12345678</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="h-6 w-6 mr-3 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div>
                          <p>SAWA Projekt</p>
                          <p>Musterstraße 123</p>
                          <p>50667 Köln</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex space-x-4">
                      <a
                        href="#"
                        className="bg-white text-purple-600 p-2 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-white text-purple-600 p-2 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="bg-white text-purple-600 p-2 rounded-full hover:bg-purple-100 transition-colors"
                      >
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Schreiben Sie uns</h3>
                    <form action="https://formspree.io/f/your-formspree-id" method="POST" className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Ihr Name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Ihre E-Mail-Adresse"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Nachricht
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                          placeholder="Ihre Nachricht"
                          required
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                        Nachricht senden
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

