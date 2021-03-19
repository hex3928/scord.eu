<script>
    let menu;

    const toggleMenu = () => (menu = !menu);
</script>

<nav class="fixed inset-x-0 z-50 top-0 w-full h-24 md:h-28">
    <div
        class="flex flex-row flex-wrap flex-shrink-0 items-center py-2 px-5 bg-black select-none"
    >
        <div class="items-center flex md:hidden mx-3">
            <button
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-skyblue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                on:click={toggleMenu}
            >
                <svg
                    id="open-icon"
                    title="open"
                    class="{menu ? 'hidden' : 'block'} h-9 w-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    id="close-icon"
                    title="close"
                    class="{menu ? 'block' : 'hidden'} h-9 w-9"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <div class="inline-flex font-koho text-3xl md:text-6xl uppercase mx-2">
            <img
                class="w-16 h-16 md:w-24 md:h-24 fill-pulse text-lg"
                src="icon.svg"
                alt="Icon"
            />
            <h1 id="title" class="my-auto mx-6">Scord</h1>
        </div>

        <div class="hidden md:block font-koho font-bold text-lg">
            <a
                href="#home"
                class="bg-skyblue transition duration-500 ease-in-out opacity-80 hover:opacity-100 hover:text-white py-3 px-6 mx-3 rounded-md"
                >Home</a
            >
            <a
                href="#widget"
                class="bg-skyblue transition duration-500 ease-in-out opacity-80 hover:opacity-100 hover:text-white py-3 px-6 mx-3 rounded-md"
                >Widget</a
            >
            <a
                href="https://discord.com/invite/f4CVdGFH2v"
                target="_blank"
                rel="noreferrer"
                class="m-1 bg-white text-black transition duration-500 ease-in-out opacity-80 hover:opacity-100 py-3 px-6 mx-3 rounded-md uppercase"
                >Join</a
            >
        </div>

        <div class="{menu ? 'block' : 'hidden'} md:hidden">
            <div class="inline-flex flex-wrap px-2 pt-2 pb-3 my-6">
                <a
                    href="#home"
                    class="m-1 bg-skyblue opacity-80 hover:opacity-100 hover:text-white py-3 px-6 mx-3 rounded-md"
                    >Home</a
                >
                <a
                    href="#widget"
                    class="m-1 bg-skyblue opacity-80 hover:opacity-100 hover:text-white py-3 px-6 mx-3 rounded-md"
                    >Widget</a
                >
                <a
                    href="https://discord.com/invite/f4CVdGFH2v"
                    class="m-1 bg-white text-black opacity-80 hover:opacity-100 py-3 px-6 mx-3 rounded-md uppercase"
                    >Join</a
                >
            </div>
        </div>
    </div>
</nav>

<style>
    #title {
        text-shadow: 2px 2px 8px rgb(0, 216, 245);
    }
</style>
