import { navigationItems } from "../../data/navigation";

function NavLinks() {
  return (
    <ul className="flex items-center gap-8">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="text-slate-300 hover:text-blue-500 transition-colors duration-300"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;