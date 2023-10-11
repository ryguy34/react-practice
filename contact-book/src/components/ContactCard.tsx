import { Person } from "../interfaces/Person";

const ContactCard = ({ person }: { person: Person }) => {
	return (
		<div>
			<h3>{person.name}</h3>
			<div>
				<em style={{ paddingRight: "10px" }}>City:&nbsp;{person.city}</em>
				<button>Edit</button>
			</div>
			<hr style={{ border: "2px dotted #bbb" }} />
		</div>
	);
};

export default ContactCard;
