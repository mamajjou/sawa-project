import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-teal-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SAWA Projekt</h3>
            <p className="text-gray-300 mb-4">
              Wir stärken muslimische Jugendliche im Kampf gegen gruppenbezogene Menschenfeindlichkeit und fördern eine
              inklusive Gesellschaft.
            </p>
            <div className="flex items-center">
              <Heart className="text-pink-400 mr-2" size={18} />
              <span className="text-gray-300">Mit Engagement erstellt</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#wer-wir-sind" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Wer wir sind
                </Link>
              </li>
              <li>
                <Link href="#was-wir-tun" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Was wir tun
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Melden Sie sich für unseren Newsletter an, um über unsere Aktivitäten und Veranstaltungen informiert zu
              bleiben.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Ihre E-Mail"
                className="px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-teal-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              >
                Anmelden
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {currentYear} SAWA Projekt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

