import { Link } from 'react-router-dom';
import { NavItem } from 'types';

interface SubmenuProps {
  items: NavItem[];
  isOpen: boolean;
}

const Submenu: React.FC<SubmenuProps> = ({ items, isOpen }) => {
  return (
    <nav
      className="overflow-hidden bg-white transition-all duration-700 ease-[cubic-bezier(.52,0,0,1)]"
      style={{
        maxHeight: isOpen ? '800px' : '0',
      }}
    >
      <div className="flex flex-col py-5 w-4/10">
        {items.map((item, index) => (
          <Link
            to=""
            key={index}
            className="text-xl capitalize text-light-gray"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Submenu;
