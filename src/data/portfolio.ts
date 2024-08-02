import { IData } from "../models/data.interface";

export const PORTFOLIO_DATA: IData = {
	about_me: {
		title: "desarrollador front-end",
		name: "joaquin alejandro albanesi",
		description: [
			"Soy un desarrollador front-end con dos años de experiencia en el desarrollo de aplicaciones web. A lo largo de mi trayectoria, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades tanto técnicas como personales. Me destaco por mi capacidad de planificación y organización, siempre asegurando que los proyectos sigan una estructura clara y eficiente.",
			"Me considero un líder natural y resiliente, capaz de aprender rápidamente y adaptarme a nuevas situaciones. Tengo una gran atención al detalle, lo que me permite entregar un trabajo con un diseño impecable. Además, soy una persona resolutiva y con excelentes habilidades de comunicación, lo que me permite trabajar eficazmente tanto de manera individual como en equipo.",
		],
		img: "/img/profile.webp",
		icon: "/icons/star.svg",
		pdf_url: "/pdf/Joaquin_Albanesi_CV.pdf",
		list: [
			{
				title: "información personal",
				item: [
					{ label: "nombre", value: "joaquin alejandro albanesi" },
					{ label: "edad", value: "22 años" },
					{ label: "ubicación", value: "argentina, buenos aires" },
					{ label: "idiomas", value: "español nativo / inglés basico" },
				],
			},
			{
				title: "experencia",
				item: [
					{
						label: "electricista de mantenimiento",
						value: "2022 - actualidad",
					},
					{ label: "plomero de obras", value: "2022 - 2022" },
				],
			},
			{
				title: "estudios",
				item: [
					{
						label: "curso de angular",
						sublabel: "coderhouse",
						value: "2022 - 2023 (finalizado)",
					},
					{
						label: "ingeniería en informática",
						sublabel: "uade",
						value: "2022 - 2022",
					},
					{
						label: "fotográfo",
						sublabel: "ceiC",
						value: "2018 - 2020 (finalizado)",
					},
					{
						label: "técnico electromecánico",
						sublabel: "e.e.s.t. n° 12 'italia'",
						value: "2014 - 2021 (finalizado)",
					},
				],
			},
		],
	},
	skills: [
		{ label: "angular", icon: "angular" },
		{ label: "react", icon: "react" },
		{ label: "typescript", icon: "typescript" },
		{ label: "sass", icon: "sass" },
		{ label: "bootstrap", icon: "bootstrap" },
		{ label: "git", icon: "git" },
		{ label: "firebase", icon: "firebase" },
		{ label: "MongoDB", icon: "mongodb" },
	],
	projects: [
		{
			title: "money manager",
			subtitle: "web app | 2024",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!",
			stack: [
				{ label: "react", icon: "react" },
				{ label: "typescript", icon: "typescript" },
				{ label: "ant design", icon: "antdesign" },
				{ label: "firebase", icon: "firebase" },
			],
			img: [{ src: "", alt: "" }],
			video_preview: {
				cover: "/videos/projects/moneyManager/cover.webp",
				src: "",
				alt: "",
			},
			url_app: "https://money-manager-ar.web.app/",
			url_github: "https://github.com/AlbanesiDev/react-money-manager",
		},
		{
			title: "hard store",
			subtitle: "web app | 2024",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!",
			stack: [
				{ label: "angular", icon: "angular" },
				{ label: "typescript", icon: "typescript" },
				{ label: "NgRx", icon: "ngrx" },
				{ label: "primeNG", icon: "primeng" },
				{ label: "primeFlex", icon: "primeng" },
				{ label: "firebase", icon: "firebase" },
			],
			img: [{ src: "", alt: "" }],
			video_preview: {
				cover: "/videos/projects/hardStore/cover.webp",
				src: "",
				alt: "",
			},
			url_app: "https://hard-store-ar.web.app",
			url_github: "https://github.com/AlbanesiDev/ecommerce-angular17-hard-store",
		},
		{
			title: "hard store dashboard",
			subtitle: "web app | 2024",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!",
			stack: [
				{
					label: "angular",
					icon: "angular",
				},
				{
					label: "typescript",
					icon: "typescript",
				},
				{
					label: "primeNG",
					icon: "primeng",
				},
				{
					label: "primeFlex",
					icon: "primeng",
				},
				{
					label: "firebase",
					icon: "firebase",
				},
			],
			img: [
				{
					src: "",
					alt: "",
				},
			],
			video_preview: {
				cover: "/videos/projects/hardStoreDashboard/cover.webp",
				src: "",
				alt: "",
			},
			url_app: "https://hard-store-dashboard.web.app",
			url_github: "https://github.com/AlbanesiDev/hard-store-dashboard",
		},
		{
			title: "today weather",
			subtitle: "web app | 2024",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, minus explicabo non voluptate amet eos cupiditate numquam fuga quo accusantium in assumenda. Sint illo numquam inventore nihil modi rem tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quasi, consectetur a placeat sit, dolore cum hic voluptatum doloremque, deserunt ea officiis! Sint reiciendis quasi repellat, eum iusto nesciunt adipisci!",
			stack: [
				{
					label: "angular",
					icon: "angular",
				},
				{
					label: "typescript",
					icon: "typescript",
				},
				{
					label: "primeNG",
					icon: "primeng",
				},
				{
					label: "primeFlex",
					icon: "primeng",
				},
				{
					label: "firebase",
					icon: "firebase",
				},
			],
			img: [
				{
					src: "/img/projects/todayWeather/1.jpg",
					alt: "",
				},
				{
					src: "/img/projects/todayWeather/2.jpg",
					alt: "",
				},
				{
					src: "/img/projects/todayWeather/3.jpg",
					alt: "",
				},
				{
					src: "/img/projects/todayWeather/4.jpg",
					alt: "",
				},
			],
			video_preview: {
				cover: "/videos/projects/todayWeather/cover.webp",
				src: "",
				alt: "",
			},
			url_app: "https://weather-app-2024-albanesi.web.app/",
			url_github: "https://github.com/AlbanesiDev/todays-weather-angular17",
		},
	],
	contact: {
		social_btn: [
			{
				label: "linkedin",
				icon: "linkedin",
				url: "https://www.linkedin.com/in/joaquin-albanesi",
			},
			{
				label: "github",
				icon: "github",
				url: "https://github.com/AlbanesiDev",
			},
			{
				label: "behance",
				icon: "behance",
				url: "https://www.behance.net/joaquinalbanesi2",
			},
			{
				label: "whatsapp",
				icon: "whatsapp",
				url: "https://wa.me/541164681728",
			},
		],
		email: "joaquinalbanesidev@gmailcom",
		form: {
			name: { name: "name", placeholder: "name", type: "text" },
			email: { name: "email", placeholder: "email", type: "email" },
			message: { name: "message", placeholder: "message", type: "text" },
			btn: "send",
		},
	},
};
