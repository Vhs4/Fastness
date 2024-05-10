import React, { useEffect, useState } from 'react';
import Contacts from './Contacts';

interface Message {
    id: number;
    content: string;
}

const Chat: React.FC = () => {
    const [selectedContact, setSelectedContact] = useState<number | null>(null);
    const [messages, setMessages] = useState<{ [key: number]: Message[] }>({});
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        if (selectedContact !== null) {
            const storedMessages = localStorage.getItem(`messages-${selectedContact}`);
            if (storedMessages) {
                setMessages(prevMessages => ({
                    ...prevMessages,
                    [selectedContact]: JSON.parse(storedMessages),
                }));
            }
        }
    }, [selectedContact]);

    useEffect(() => {
        if (selectedContact !== null) {
            localStorage.setItem(`messages-${selectedContact}`, JSON.stringify(messages[selectedContact] || []));
        }
    }, [selectedContact, messages]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim() !== '' && selectedContact !== null) {
            const newMessage: Message = { id: Date.now(), content: inputValue };
            setMessages(prevMessages => ({
                ...prevMessages,
                [selectedContact]: [...(prevMessages[selectedContact] || []), newMessage],
            }));
            setInputValue('');
        }
    };

    const handleSelectContact = (userId: number) => {
        setSelectedContact(userId);
        if (!messages[userId]) {
            setMessages(prevMessages => ({
                ...prevMessages,
                [userId]: [],
            }));
        }
    };

    return (
        <div className="flex h-screen">
            <Contacts onSelectContact={handleSelectContact} />
            <div className="flex-1 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto">
                    {selectedContact !== null && messages[selectedContact] ? (
                        <>
                            <h2 className="text-lg font-semibold mb-4">{`Conversando com pessoa misteriosa ID: ${selectedContact}`}</h2>
                            {messages[selectedContact].map(message => (
                                <div key={message.id} className="mb-2">
                                    <span className="bg-green-300 py-1 px-2 rounded">{message.content}</span>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div className='flex justify-center items-center h-dvh'>
                            <h1>Inicie ao lado sua conversa com alguém</h1>
                        </div>
                    )}
                </div>
                {selectedContact !== null && (
                    <form onSubmit={handleSubmit} className="flex p-4">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Digite uma mensagem..."
                            className="flex-1 mr-2 p-4 border rounded focus:outline-none"
                        />
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                            Enviar
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Chat;