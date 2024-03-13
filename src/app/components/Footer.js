import Link from "next/link";

export default function Footer () {
    return (
        <div className="flex flex-1 w-full shadow-inner py-10 bg-slate-50 font-medium text-slate-600">
            <div className="mx-auto w-full max-w-3xl items-center justify-between px-8">
                <div className="flex flex-col float-right text-right">
                    <p className="text-2xl tracking-[-.075em]">World Cup Legacies</p>
                    <p className="text-sm">Copyright &copy;2024</p>
                </div>
                <div className="flex flex-row float-left my-4 text-xl">
                    <Link className="hover:text-black hover:scale-110 mr-3" href="/">Home</Link>
                    <Link className="hover:text-black hover:scale-110 mx-3" href="/Brazil">Brazil</Link>
                    <Link className="hover:text-black hover:scale-110 mx-3" href="/Russia">Russia</Link>
                    <Link className="hover:text-black hover:scale-110 ml-3" href="/Qatar">Qatar</Link>
                </div>
            </div>
      </div>
    )
}
