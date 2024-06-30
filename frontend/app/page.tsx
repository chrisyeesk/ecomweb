import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Footer from './(customer)/components/footer';
import ShopNowButton from './(customer)/components/shop-now-button';
export function TextareaDemo() {
  return;
}
export default function Home() {
  return (
    <>
      <main className="min-h-screen pt-16 mx-auto w-[100vw] xl:w-[1500px]">
        <div className="bg-gray-100 mb-4 h-[calc(100vh-64px)] sm:h-[700px] md:px-10 xl:py-10 w-full px-3 xl:px-40 flex items-center justify-center rounded-md ">
          <section className="sm:w-[400px] xl:w-[600px]">
            <div className="text-4xl font-bold mb-2">Discover our</div>{' '}
            <div className="text-4xl font-bold mb-2">Latest Collection</div>
            <div className="">Explore our uniquely designed products</div>
            <div className="mb-3">for your home and lifestyle</div>
            <ShopNowButton />
          </section>
          <section>
            <Image
              alt="shoe"
              width={0}
              height={0}
              sizes="100vw"
              className="hidden sm:flex md:w-[400px] xl:w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/headset.webp"
            ></Image>
          </section>
        </div>
        <section className="mb-20 gap-4 grid-cols-1 sm:grid-cols-3 sm:grid">
          <div className="grid-cols-1 mb-4 rounded-md bg-gray-100 overflow-hidden">
            <Image
              alt="clothes"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/clothes.webp"
            />
          </div>
          <div className="grid-cols-1 mb-4 rounded-md bg-gray-100 overflow-hidden">
            <Image
              alt="lamp"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/lamp.webp"
            />
          </div>
          <div className="grid-cols-1 mb-4 rounded-md bg-gray-100 overflow-hidden">
            <Image
              alt="watch"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[600px] transition-transform duration-300 ease-in-out hover:scale-110"
              src="/watch.webp"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
