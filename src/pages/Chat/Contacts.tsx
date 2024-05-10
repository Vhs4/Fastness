import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface User {
    id: number;
    name: string;
}

interface Message {
    id: number;
    userId: number;
    content: string;
}

const Contacts: React.FC<{ onSelectContact: (userId: number) => void }> = ({ onSelectContact }) => {
    const [users, setUsers] = useState<User[]>([]);
    const contactsRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        function handleResize() {
            const contactsHeight = contactsRef.current?.offsetHeight || 0;
            const buttonMarginTop = contactsHeight + 180; // Adjust this value according to your needs
            const button = document.getElementById('restaurantButton');
            if (button) {
                button.style.marginTop = `${buttonMarginTop}px`;
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call it initially
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-1/4 h-screen bg-green-300 overflow-hidden">
            <h2 ref={contactsRef} className="text-lg font-semibold p-4 bg-purple-500 text-white">Contatos</h2>
            <ul className='pt-8 gap-y-2 flex flex-col'>
                {users.map(user => (
                    <li
                        key={user.id}
                        className="px-4 py-2 hover:bg-green-400 cursor-pointer text-white"
                        onClick={() => onSelectContact(user.id)}
                    >
                        Pessoa misteriosa
                        ID: {user.id}
                    </li>
                ))}
            </ul>
            <div className='px-12'>
                <Link to="/restaurantes">
                    <button id="restaurantButton" className='bg-purple-400 rounded-md
                        text-white max-w-full w-52 min-h-12 max-h-full break-words'>
                        Ir para restaurantes
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Contacts;
