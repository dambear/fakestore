
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
            <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
                My App
            </h2>
            <ul className="flex flex-col p-4 space-y-4">
                <li>
                    <Link
                        to="/dashboard"
                        className="block px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="block px-4 py-2 rounded hover:bg-gray-700"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;