import { IData } from "../models/data.interface";

export const PORTFOLIO_DATA: IData = {
	about_me: {
		title: "desarrollador front-end",
		name: "joaquin alejandro albanesi",
		description: [
			"Tengo dos años de experiencia en el desarrollo de aplicaciones web y a lo largo de mi trayectoria, he trabajado en diversos proyectos que me han permitido perfeccionar mis habilidades tanto técnicas como personales. Me destaco por mi capacidad de planificación y organización, siempre asegurando que los proyectos sigan una estructura clara y eficiente.",
			"Me considero un profesional resiliente y adaptable, siempre dispuesto a aprender y enfrentar nuevos retos. Mi atención al detalle y mi compromiso con la excelencia garantizan resultados de alta calidad. Además, mis habilidades de comunicación y mi capacidad para trabajar tanto de manera autónoma como en equipo, me permiten contribuir significativamente al éxito de cualquier proyecto.",
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
				"Money Manager es una aplicación minimalista y sencilla diseñada para ayudar a los usuarios a gestionar sus finanzas personales de manera eficiente. La aplicación permite a los usuarios agregar fácilmente sus ingresos y gastos, y seguir sus transacciones diarias y mensuales. Además, los usuarios pueden consultar sus registros financieros de meses anteriores y visualizar gráficos y estadísticas detalladas para un mejor entendimiento de sus hábitos de gasto e ingreso.",
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
				"Hard Store E-commerce es una plataforma en línea desarrollada para la venta de hardware de PC, ofreciendo una experiencia completa para los entusiastas y profesionales del hardware. Los usuarios pueden registrarse, iniciar sesión de manera segura y guardar productos en su lista de favoritos. La tienda cuenta con un avanzado sistema de búsqueda y filtros que facilita encontrar componentes específicos rápidamente.",
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
				"Hard Store Dashboard es la aplicación administrativa que gestiona y soporta la tienda en línea. Desarrollada para facilitar la administración y optimizar las operaciones, esta herramienta permite a los administradores agregar, actualizar y organizar el catálogo de productos, así como supervisar a los usuarios registrados y sus actividades. También se encarga de la gestión del personal administrativo, permitiendo un control de acceso basado en roles, y de la personalización y actualización de la página principal de la tienda. Por otro lado, la aplicación permite la gestión de pedidos para manejar y procesar los pedidos de los clientes de manera eficiente.",
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
				"Today Weather es una aplicación meticulosamente diseñada para brindar información meteorológica precisa y detallada en tiempo real. Te permite acceder a una amplia gama de datos climáticos esenciales, desde la temperatura actual hasta la calidad del aire, con una interfaz intuitiva y funciones personalizables.",
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
