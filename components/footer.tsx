import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-8">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div>
            <p className="text-muted-foreground">
              Made with ❤️ by{" "}
              <Link
                href="https://github.com/manish2504"
                target="_blank"
                className="text-foreground transition hover:text-primary"
              >
                Manish
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

