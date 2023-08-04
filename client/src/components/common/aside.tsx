import { Link, useLocation } from "react-router-dom";
import { Icon } from ".";
import { menuItemsPerSection } from "../../utils";

export function Aside() {
  const { pathname } = useLocation();

  return (
    <aside className="border-r border-main-500/20 w-72 fixed left-0 top-0 bottom-0 p-4 flex flex-col bg-main-800 text-main-100">
      <nav className="mt-16 flex flex-col gap-6">
        {menuItemsPerSection.map((section) => (
          <div className="flex flex-col gap-4" key={section.name}>
            <span className="font-medium text-sm">{section.name}</span>

            <div className="flex flex-col pl-2 group">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  data-active={pathname === item.href}
                  className="flex gap-2 items-center py-2 transition text-main-400 hover:text-main-300 data-[active=true]:hover:text-primary-500 data-[active=true]:!text-primary-500 data-[active=true]:font-bold"
                >
                  <Icon name={item.icon} className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-16 w-full h-56 bg-main-950 rounded-md"></div>
    </aside>
  );
}
