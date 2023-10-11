import { useState } from "react";
import { Person } from "../interfaces/Person";

const AddContact = ({ onAddContact }: any) => {
	const [newPerson, setNewPerson] = useState<Person>();

	const handleAddContact = (e: any) => {
		e.preventDefault();

		if (!newPerson) {
			return;
		}

		onAddContact(newPerson);
		setNewPerson(undefined);
	};

	return (
		<form onSubmit={handleAddContact}>
			<div>
				<h3 style={{ padding: "10px" }}>Add a new contact</h3>
				<label style={{ padding: "10px" }}>
					Name&nbsp;
					<input
						type="text"
						placeholder="Enter the contact name"
						value={newPerson?.name}
						onChange={(e) =>
							setNewPerson({ ...newPerson, name: e.target.value })
						}
					/>
				</label>
				<label style={{ padding: "10px" }}>
					City&nbsp;
					<input
						type="text"
						placeholder="Enter the contact city"
						value={newPerson?.city}
						onChange={(e) =>
							setNewPerson({ ...newPerson, city: e.target.value })
						}
					/>
				</label>
				<button type="submit">Add contact</button>
			</div>
		</form>
	);
};

export default AddContact;
