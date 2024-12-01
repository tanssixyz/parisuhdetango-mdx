import { Button } from "@/components/ui/button";

export default async function Home() {
    return (
        <>
            <div className="min-h-full px-4 py-4  sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                <div className="mx-auto max-w-max">
                <div className="flex mt-6">
              <p className="text-4xl font-extrabold text-blue600 sm:text-5xl">
                Ups
              </p>
              <div className="ml-6">
                <div className="pl-6 border-l border-gray500">
                  <h2 className="text-3xl font-bold tracking-tight text-gray900 dark:text-white sm:text-4xl">
                    Something went wrong! - Jotain meni pieleen!
                  </h2>
                  <p className="mt-1 text-lg text-gray500 dark:text-white">
                    Please select from the menu above or go back
                    home
                  </p>
                  <p className="mt-1 text-lg text-gray500 dark:text-white">
                    Valitse yllä olevasta valikosta tai palaa kotiin
                  </p>
                </div>
                <div className="flex mt-10 space-x-3 sm:pl-6">
                  <a
                    href="/"
                    className="inline-flex items-center px-6 py-4 text-sm md:text-4xl font-medium text-white bg-pink-800 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  >
                    Go back home
                  </a>
                </div>
              </div>
            </div>
                </div>
            </div>
        </>
    )
}