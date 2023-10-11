import { useState } from "react";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import { Person } from "../interfaces/Person";

const ContactBook = () => {
	const [persons, setPersons] = useState<Person[]>([]);

	const handleAddContact = (person: Person) => {
		setPersons([...persons, { ...person }]);
	};

	return (
		<div>
			<div>
				<AddContact onAddContact={handleAddContact} />
			</div>
			<div>
				<ul>
					{persons.map((person) => (
						<ContactCard person={person} />
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactBook;
