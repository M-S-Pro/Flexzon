import { RecommendedTopics } from "./RecommendedTopics"

import { TrendingSection } from "./TrendingSection"


const LpSidebarFile = () => {
  return (


    <aside className=" pt-3  px-2 max-md:px-2  py-2 flex flex-col gap-x-4 
    bg-[var(--bg)] z-[20]   Headerlp w-full    max-md:flex-col-reverse flex-wrap md:sticky md:top-10 h-max">
      <TrendingSection/>
      <RecommendedTopics/>
    <footer className="border-t pr-2  flex gap-x-3 max-md:hidden text-sm">
<div className="py-2">@2024 <b>Records</b> , Inc. all rights reserved  <a href="https://www.linkedin.com/in/muaaz-raza" className=" font-bold no-underline hFont"
 target="_blank" rel="noopener noreferrer">
.
</a>
</div>
    </footer>
    </aside>

  )
}

export default LpSidebarFile
