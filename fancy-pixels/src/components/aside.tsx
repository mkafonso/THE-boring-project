import { Icon } from ".";
import { menuItemsPerSection } from "../utils";

export function Aside() {
  return (
    <aside className="border-r border-main-500/20 lg:w-80 w-14 fixed left-0 top-0 bottom-0 lg:px-6 px:4 py-4 flex flex-col">
      <nav className="mt-16 flex flex-col gap-6">
        {menuItemsPerSection.map((section) => (
          <div className="flex flex-col gap-4" key={section.name}>
            <span className="font-medium text-sm lg:flex hidden">
              {section.name}
            </span>

            <div className="flex flex-col lg:pl-2 group lg:items-start items-center">
              {section.items.map((item) => (
                <a
                  key={item.href}
                  href="#"
                  // data-active={pathname.includes(item.href)}
                  className="flex gap-2 items-center py-2 transition text-main-600 dark:text-main-400 hover:text-main-400 dark:hover:text-main-300 data-[active=true]:hover:text-primary-500 data-[active=true]:!text-primary-500 data-[active=true]:font-bold"
                >
                  <Icon name={item.icon} className="w-5 h-5" />
                  <span className="lg:flex hidden">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="mt-16 w-full h-80 bg-main-800 rounded-md"></div>
    </aside>
  );
}
