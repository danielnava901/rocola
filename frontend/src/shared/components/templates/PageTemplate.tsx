import * as React from "react";

type PageTemplateType = {
    children: React.ReactNode
}

const PageTemplate = ({children} : PageTemplateType) => {
    return <div className="w-full h-screen flex flex-col">
        {children}
    </div>
}

export default PageTemplate;