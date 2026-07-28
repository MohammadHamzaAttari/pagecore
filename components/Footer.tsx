export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} PageCore &mdash; Facebook Video Explanations</p>
      </div>
    </footer>
  )
}
