import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary/20">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-2">Page non trouvée</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>Retour à l&apos;accueil</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Nous contacter</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
