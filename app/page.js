import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-4">
      <div>Welcome to Teresa International</div>
      <Button variant="outline" className="rounded-full">
        Click me
      </Button>
    </div>
  );
}
