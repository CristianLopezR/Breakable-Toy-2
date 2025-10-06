import { LuPlug } from "react-icons/lu";

export default function Sidebar(){
    return(
        <div>
            <aside className="fixed left-2 top-15 bg-background w-75 rounded-lg h-[90vh] p-2 overflow-y-auto">
                <div className="flex justify-between text-primary-text items-center p-2 mb-4">
                    <h2 className="font-bold">Your library</h2>
                    <a href="upload-song"><LuPlug/></a>
                </div>
            
            </aside>
        </div>
    )
}