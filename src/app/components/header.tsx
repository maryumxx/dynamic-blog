import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <main>
      <div className="flex md:justify-around mr-5 ml-5 md:m-0 justify-between items-center">
        <div className="text-white hidden md:block">.</div>
        <div>
          <img
            className="md:w-[218px] w-[150px]"
            src="landskapelogo.png"
            alt=""
          />
        </div>
        <div className="justify-center items-center p-2 px-4 bg-[#DDBD97] text-white gap-x-2 text-[10px] w-[127px] h-[38px] rounded-full hidden md:flex">
          <div>
            <p className="font-semibold tracking-widest">FOLLOW</p>
          </div>
          <div>
            <img className="w-3" src="instagram.png" alt="instagram" />
          </div>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <img className="w-7 " src="dots.png" alt="" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-center">
                    <img className="w-[150px]" src="landskapelogo.png" alt="" />
                  </div>
                </SheetTitle>
                <SheetDescription>
                    <div className="flex flex-col space-y-10 mt-10 text-lg ">
                  <Link href="/">
                    <div className="flex items-center gap-x-2">
                      <p className=" ">HOME</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-x-2">
                    <p className=" ">GALLERY</p>
                    <img className="w-2" src="arrow.png" alt="" />
                  </div>
                  <Link href="/allblogs">
                    <div className="flex items-center gap-x-2">
                      <p className=" ">BLOGS</p>
                    </div>
                  </Link>
                  <div className="flex items-center gap-x-2">
                    <p className=" ">ADVENTURES</p>
                    <img className="w-2" src="arrow.png" alt="" />
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className=" ">CATEGORIES</p>
                    <img className="w-2" src="arrow.png" alt="" />
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className=" ">CONTACT</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <p className=" ">ABOUT</p>
                  </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className=" gap-x-10 justify-center pb-5 hidden md:flex">
        <Link href="/">
          <div className="flex items-center gap-x-2">
            <p className="text-[12px] font-bold">HOME</p>
          </div>
        </Link>
        <div className="flex items-center gap-x-2">
          <p className="text-[12px] font-bold">GALLERY</p>
          <img className="w-2" src="arrow.png" alt="" />
        </div>
        <Link href="/allblogs">
          <div className="flex items-center gap-x-2">
            <p className="text-[12px] font-bold">BLOGS</p>
          </div>
        </Link>
        <div className="flex items-center gap-x-2">
          <p className="text-[12px] font-bold">ADVENTURES</p>
          <img className="w-2" src="arrow.png" alt="" />
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-[12px] font-bold">CATEGORIES</p>
          <img className="w-2" src="arrow.png" alt="" />
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-[12px] font-bold">CONTACT</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-[12px] font-bold">ABOUT</p>
        </div>
      </div>
    </main>
  );
}
