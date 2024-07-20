import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";
import MenuItemFollow from "./MenuItemFollow";
import { useEffect } from "react";
import ClientOnly from "@/app/components/ClientOnly";
import { useGeneralStore } from "@/app/stores/general";
import { useToast } from "@/components/ui/use-toast";

export default function SideNavMain() {
  let { setRandomUsers, randomUsers } = useGeneralStore();

  const pathname = usePathname();
  const { toast } = useToast();

  useEffect(() => {
    setRandomUsers();
  }, []);

  const handleClickMenu = () => {
    toast({
      description: "Coming Soon...",
      variant: "destructive",
      duration: 3000,
    });
  };

  return (
    <>
      <div
        id="SideNavMain"
        className={`
                    fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto
                    ${pathname === "/" ? "lg:w-[310px]" : "lg:w-[220px]"}
                `}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href="/">
            <MenuItem
              iconString="For You"
              colorString={pathname == "/" ? "#F02C56" : ""}
              sizeString="25"
            />
          </Link>
          <div onClick={handleClickMenu}>
            <MenuItem
              iconString="Following"
              colorString="#000000"
              sizeString="25"
            />
          </div>
          <div onClick={handleClickMenu}>
            <MenuItem iconString="LIVE" colorString="#000000" sizeString="25" />
          </div>

          <div className="border-b lg:ml-2 mt-2" />
          <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
            Suggested accounts
          </h3>

          <div className="lg:hidden block pt-3" />
          <ClientOnly>
            <div className="cursor-pointer">
              {randomUsers?.slice(0, 6).map((user, index) => (
                <MenuItemFollow key={index} user={user} />
              ))}
            </div>
          </ClientOnly>

          <div className="lg:block hidden border-b lg:ml-2 mt-2" />

          <div className="lg:block hidden text-[11px] text-gray-500">
            <p className="pt-4 px-2">©{new Date().getFullYear()} Toktok</p>
          </div>

          <div className="pb-14"></div>
        </div>
      </div>
    </>
  );
}
