import Link from 'next/link';
import Header from '@/component/header'
export default function Page() {
  console.log("server side ...");
  
  return (
    <main className="flex min-h-screen flex-col p-6 nav-root">
      <Header/>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg  px-6 py-10 md:w-2/5 md:px-20">
          <div
            className="relative w-0 h-0 border-l-[15px] border-r-[15px] 
            border-b-[26px] border-l-transparent border-r-transparent border-b-black"
          />
         <div>
         </div>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> 
          </Link>
          <Link
            href="/accounts"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Accounts</span> 
          </Link>
          
          <a
            href="/about"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>About us2</span> 
          </a>
          <Link
            href="/skeleton"
            className="flex items-center gap-5 self-start rounded-lg bg-emerald-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-400 md:text-base"
          >
            <span>Skeleton</span>
          </Link>

        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        </div>
      </div>
    </main>
  );
}
