import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h2 className="font-semibold text-lg mb-2">WelfareGuard</h2>
          <p className="text-muted-foreground">
            AI-powered system ensuring welfare benefits reach the right people by detecting fraud and anamolies
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-medium">Quick Links</span>
          <Link href="/">Home</Link>
          <Link href="/schemes">Schemes</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/admin/dashboard">Admin</Link>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="font-medium">System</span>
          <span className="text-muted-foreground">
            Fraud Detection • Risk Scoring • AI Analysis
          </span>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-4">
        © {new Date().getFullYear()} WelfareGuard. All rights reserved.
      </div>
    </footer>
  )
}