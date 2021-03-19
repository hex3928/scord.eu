<script>
    const widgetData = (async () =>
        await fetch(
            "https://discord.com/api/guilds/813061064211955725/widget.json"
        ).then((r) => r.json()))();
</script>

{#await widgetData}
    <div id="widget" class="max-w-6xl mx-auto">
        <div
            class="rounded-t-xl inline-flex w-full space-x-2 bg-skyblue py-1 px-2 md:py-2 md:px-5"
        >
            <img
                class="h-16 w-16 md:h-20 md:w-20 pr-3"
                src="discord-logo.svg"
                alt="The Discord brand logo"
            />
            <p class="text-xl font-semibold">...</p>
        </div>
        <div class="rounded-b-xl bg-lightgray px-5">
            <svg
                class="h-16 w-16 mx-auto animate-spin fill-current text-skyblue"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
            </svg>
        </div>
    </div>
{:then data}
    <div id="widget" class="max-w-6xl mx-auto">
        <div
            class="rounded-t-xl inline-flex w-full space-x-2 bg-skyblue py-1 px-2 md:py-2 md:px-5"
        >
            <img
                class="h-16 w-16 md:h-20 md:w-20 pr-3 select-none"
                src="discord-logo.svg"
                alt="The Discord brand logo"
            />
            <a
                class="my-auto px-6 py-2 md:px-8 md:py-4 bg-white text-black text-lg md:text-xl rounded-md uppercase select-none"
                href={data.instant_invite}>Join</a
            >
            <h1 class="px-2 md:px-4 my-auto text-xl md:text-3xl">
                {data.name}
            </h1>
        </div>
        <div class="rounded-b-xl bg-lightgray p-3">
            <div class="flex flex-row flex-wrap p-0 md:p-5">
                {#each data.members as member}
                    <div
                        class="inline-flex rounded-lg m-1 p-2 bg-darkgray text-xs md:text-sm"
                    >
                        <img
                            class="h-6 w-6 md:h-8 md:w-8 p-1 rounded-full"
                            src={member.avatar_url}
                            alt=""
                        />
                        <p class="m-1 my-auto">
                            {member.username}<span
                                class="text-xs ml-1 select-none"
                                >{member.status === "online" ? "🟢" : ""}</span
                            >
                        </p>
                    </div>
                {/each}
            </div>
            <div class="flex flex-row flex-wrap mt-6 md:mt-10 p-0 md:p-5">
                {#each data.channels as channel}
                    <div class="rounded-lg m-1 p-2 bg-darkgray min-w-0">
                        <p class="whitespace-nowrap truncate">
                            🎙️ {channel.name}
                        </p>
                        <p class="text-xs text-gray-400">{channel.id}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{:catch}
    <div id="widget" class="max-w-6xl mx-auto">
        <div
            class="rounded-t-xl inline-flex w-full space-x-2 bg-skyblue py-1 px-2 md:py-2 md:px-5"
        >
            <img
                class="h-16 w-16 pr-3"
                src="discord-logo.svg"
                alt="The Discord brand logo"
            />
            <p class="text-xl font-semibold">...</p>
        </div>
        <div class="rounded-b-xl bg-lightgray px-5">
            <svg
                class="h-16 w-16 fill-current text-red-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path
                    fill-rule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>
    </div>
{/await}
