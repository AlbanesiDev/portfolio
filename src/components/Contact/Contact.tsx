import { useState } from "react";
import { IContact, ISocialButton } from "../../models/data.interface";
import { navigateTo } from "../../utils/navigateTo";
import { Button, DynamicIcon } from "..";
import "./Contact.css";

interface ContactProps {
	data: IContact;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [successMessage, setSuccessMessage] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
		setErrors({
			...errors,
			[name]: "",
		});
	};

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const newErrors = { name: "", email: "", message: "" };
		let isValid = true;

		if (formData.name.length < 3) {
			newErrors.name = "El nombre debe tener al menos 3 caracteres.";
			isValid = false;
		}
		if (formData.name.length === 0) {
			newErrors.name = "El nombre es obligatorio.";
			isValid = false;
		}

		if (!validateEmail(formData.email)) {
			newErrors.email = "El correo electrónico no es válido.";
			isValid = false;
		}
		if (formData.email.length === 0) {
			newErrors.email = "El correo electrónico es obligatorio.";
			isValid = false;
		}

		if (formData.message.length < 20 || formData.message.length > 200) {
			newErrors.message = "El mensaje debe tener entre 20 y 200 caracteres.";
			isValid = false;
		}
		if (formData.message.length === 0) {
			newErrors.message = "El mensaje es obligatorio.";
			isValid = false;
		}

		setErrors(newErrors);

		if (isValid) {
			e.preventDefault();
			if (Object.values(errors).every((x) => x === "")) {
				try {
					const response = await fetch("/api/sendMail", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(formData),
					});

					if (response.ok) {
						setSuccessMessage("Correo enviado exitosamente");
						setFormData({
							name: "",
							email: "",
							message: "",
						});
					} else {
						setErrors({
							...errors,
							// form: "Hubo un problema al enviar el correo.",
						});
					}
				} catch (error) {
					setErrors({
						...errors,
						// form: "Hubo un problema al enviar el correo.",
					});
				}
			} else {
				console.log("Hay errores en el formulario.");
			}
		}
	};

	return (
		<div className="container__wide contact__container">
			<div className="contact__social">
				<div className="social__button__container">
					{data.social_btn.map((item: ISocialButton, index) => (
						<SocialButton key={index} handleClick={() => {}} data={item}></SocialButton>
					))}
				</div>
				<div className="social__button__email">
					<span className="contact__email__label ">Si lo prefiere por correo electrónico.</span>
					<a className="contact__email link__cursor" href="mailto:joaquinalbanesidev@gmail.com">
						<img src="/icons/arrow_sub_right.svg" alt="arrow" />
						<span>JoaquinAlbanesiDev@gmail.com</span>
					</a>
				</div>
			</div>
			<div className="contact__form__container">
				<p>
					Si tiene una consulta general o sobre un proyecto, envíeme un correo electrónico o rellene
					el formulario.
				</p>
				{successMessage}
				<form className="contact__form">
					<h3>Introduzca sus datos.</h3>
					<div>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Nombre*"
							value={formData.name}
							onChange={handleChange}
						/>
						{errors.name && <small className="error">{errors.name}</small>}
					</div>

					<div>
						<input
							id="email"
							name="email"
							type="text"
							placeholder="Correo electrónico*"
							value={formData.email}
							onChange={handleChange}
						/>
						{errors.email && <small className="error">{errors.email}</small>}
					</div>
					<div>
						<textarea
							id="message"
							name="message"
							placeholder="Escribe tu mensaje aqui..."
							value={formData.message}
							onChange={handleChange}
						></textarea>

						{errors.message && <small className="error">{errors.message}</small>}
					</div>
					<Button className="submit__button send__cursor" onClick={handleSubmit}>
						Enviar
					</Button>
				</form>
			</div>
		</div>
	);
};

interface SocialButtonProps {
	handleClick: () => void;
	data: ISocialButton;
}

const SocialButton: React.FC<SocialButtonProps> = ({ data }) => {
	const handleNavigate = (url: string) => {
		navigateTo(url);
	};
	return (
		<button className="social__button link__cursor" onClick={() => handleNavigate(data.url)}>
			<div className="social__button__icon">
				<DynamicIcon iconName={data.icon}></DynamicIcon>
			</div>
			<div className="social__button__label">
				<img src="/icons/arrow_sub_right.svg" alt="" />
				<span>{data.label}</span>
			</div>
		</button>
	);
};

export { Contact };
