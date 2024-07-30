import { 
    DropdownMenu, 
    DropdownMenuTrigger,  
    DropdownMenuContent, 
    DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { createAirbnbHome } from "../actions";

export async function UserNav() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const createHomewithId = createAirbnbHome.bind(null, {
        userId: user?.id as string,
    });

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>
                    <img src= {
                        user?.picture ?? 
                        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                    }
                     alt="" 
                     className="rounded-full w-8 h-8 hidden lg:block"/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                {user ? (
                    <>
                    <DropdownMenuItem>
                        <form action={createHomewithId} className="w-full">
                            <button type="submit" className="w-full text-start">
                                Airbnb Your Home
                            </button>
                        </form>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href="/my-homes" className="w-full"> My Listings </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/my-favourites" className="w-full"> My Favourites </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="/my-reservations" className="w-full"> My Reservations </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogoutLink className="w-full">Logout</LogoutLink>
                    </DropdownMenuItem>
                    </>
                ) : (
                    <>
                    <DropdownMenuItem>
                        <RegisterLink className="w-full">Register</RegisterLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LoginLink className="w-full">Login</LoginLink>
                    </DropdownMenuItem>
                    </>
                )}
                
            </DropdownMenuContent>
        </DropdownMenu>
    )
}