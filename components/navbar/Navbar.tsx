import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full rounded-t-lg text-secondary-foreground p-4">
      <div className="container mx-auto flex justify-center space-x-4">
        <Link href="/" className="font-semibold text-primary/75 hover:text-card-foreground">Inicio</Link>
        <Link href="/acerca-de" className="font-semibold text-primary/75 hover:text-card-foreground">Docs</Link>
        <Link href="/contacto" className="font-semibold text-primary/75 hover:text-card-foreground">Contacto</Link>
      </div>
    </nav>
  )
}