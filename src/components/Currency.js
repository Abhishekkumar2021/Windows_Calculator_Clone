import React, { useContext, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const StyledDiv = styled.div`
    h1{
		position:absolute;
		text-align: center;
		top:80px;
		color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
					
    }
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-content: center;
	gap: 15px;
	flex-wrap: wrap;
	.first,
	.second {
		position: relative;
		max-width: 100%;
		width: 400px;
		padding: 30px;
		border-radius: 10px;
		box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
		background: ${(props) => (props.light ? "rgb(240,240,256)" : "#2b2e33")};
	

		display: flex;
		flex-direction: column;
		.icon{
			position:absolute;
			top:-40px;
			left: 10px;
			width:70px;
			height:70px;
			display: flex;
			justify-content: center;
			transition: 0.3s ease all;
			align-items: center;
			font-size:32px;
			border-radius: 10px;
			box-shadow: 0 5px 10px rgb(0, 0, 0, 0.1);
			background: ${(props) => (props.light ? "#FFFFCC" : "#413F42")};
			&:hover{
				transform:scale(1.2) rotate(20deg) translateY(-20px);
			}
		}
		input,
		select {
			color-scheme: ${(props) => (props.light ? "light" : "dark")};

			transition: 0.3s ease all;
			padding: 10px 15px;
			background: ${(props) => (props.light ? "white" : "#37383a")};
			border: none;
			outline: none;
			margin: 15px 0;
			font-size: 20px;
			&:focus {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "rgb(109, 153, 234)" : "skyblue")};
			}
			color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
			border-radius: 5px;
		}
		select {
			font-size: 28px;
			font-family: 'Roboto Slab',Roboto serif;		
			text-align: center;	
			&:hover {
				box-shadow: 0px 0px 0px 1px
					${({ light }) => (light ? "rgb(109, 153, 234)" : "skyblue")};
			}
			option {
				font-size: 14px;
				
			}
		}
	}
	@media only screen and (max-width:500px){
		h1{
			font-size:24px;
		}
	}
`;
let symbol= [
    "؋",
    "ALL",
    "دج",
    "$",
    "ƒ",
    "$",
    "MaH",
    "B$",
    ".د.ب",
    "৳",
    "$",
    "Br",
    "BZ$",
    "$",
    "$b",
    "KM",
    "P",
    "R$",
    "$",
    "Лв.",
    "Fbu",
    "Esc",
    "KHR",
    "$",
    "$",
    "$",
    "¥",
    "$",
    "CF",
    "F",
    "₡",
    "kn",
    "฿",
    "$",
    "Kč",
    "Kr",
    "Fdj",
    "RD$",
    "ج.م",
    "ETB",
    "€",
    "$",
    "D",
    "GEL",
    "₵",
    "Q",
    "FG",
    "G",
    "L",
    "HK$",
    "Ft",
    "kr",
    "₹",
    "Rp",
    "د.ع",
    "₪",
    "J$",
    "¥",
    "ا.د",
    "лв",
    "KSh",
    "₩",
    "ك.د",
    "₭",
    "ل.ل.",
    "L",
    "$",
    "د.ل",
    "P",
    "Ar",
    "MK",
    "RM",
    "Rf",
    "UM",
    "Rs",
    "$",
    "MDL",
    "MAD",
    "MT",
    "K",
    "$",
    "Rs",
    "$",
    "C$",
    "₦",
    "ден",
    "Kr",
    "ر.ع.",
    "Rs",
    "B/.",
    "K",
    "Gs",
    "S/.",
    "₱",
    "zł",
    "ر.ق",
    "lei",
    "₽",
    "RF",
    "£",
    "SR",
    "din",
    "Rs",
    "Le",
    "S$",
    "S",
    "R",
    "Rs",
    "£",
    "E",
    "Kr",
    "CHF",
    "LS",
    "NT$",
    "TSh",
    "฿",
    "$",
    "ت.د",
    "TRY",
    "m",
    "Ush",
    "₴",
    "إ.د",
    "£",
    "$",
    "$U",
    "лв",
    "Bs.S",
    "₫",
    "﷼",
    "K"
]
const list = [
	"Afghanistan - Afghani",
	"Albania - Lek",
	"Algeria - Dinar",
	"Argentina - Peso",
	"Aruba - Guilder",
	"Australia - Dollar",
	"Azerbaijan - New Manat",
	"Bahamas, The - Dollar",
	"Bahrain - Dinar",
	"Bangladesh - Taka",
	"Barbados - Dollar",
	"Belarus - Ruble",
	"Belize - Dollar",
	"Bermuda - Dollar",
	"Bolivia - Boliviano",
	"Bosnia and Herzegovina - Convertible Marka",
	"Botswana - Pula",
	"Brazil - Real",
	"Brunei - Dollar",
	"Bulgaria - Lev",
	"Burundi - Franc",
	"Cabo Verde - Escudo",
	"Cambodia - Riel",
	"Canada - Dollar",
	"Cayman Islands - Dollar",
	"Chile - Peso",
	"China - Yuan",
	"Colombia - Peso",
	"Comoros - Franc",
	"Congo - Franc",
	"Costa Rica - Colon",
	"Croatia - Kuna",
	"Cryptocurrency - Bitcoin",
	"Cuba - Peso",
	"Czech Republic - Koruna",
	"Denmark - Krone",
	"Djibouti - Franc",
	"Dominican Republic - Peso",
	"Egypt - Pound",
	"Ethiopia - Birr",
	"Europe - Euro",
	"Fiji - Dollar",
	"Gambia, The - Dalasi",
	"Georgia - Lari",
	"Ghana - Cedi",
	"Guatemala - Quetzal",
	"Guinea - Franc",
	"Haiti - Gourde",
	"Honduras - Lempira",
	"Hong Kong SAR - Dollar",
	"Hungary - Forint",
	"Iceland - Krona",
	"India - Rupee",
	"Indonesia - Rupiah",
	"Iran - Rial",
	"Iraq - Dinar",
	"Israel - Shekel",
	"Jamaica - Dollar",
	"Japan - Yen",
	"Jordan - Dinar",
	"Kazakhstan - Tenge",
	"Kenya - Shilling",
	"Korea - Won",
	"Kuwait - Dinar",
	"Laos - Kip",
	"Lebanon - Pound",
	"Lesotho - Loti",
	"Liberia - Dollar",
	"Libya - Dinar",
	"Macao SAR - Pataca",
	"Madagascar - Malagasy Ariary",
	"Malawi - Kwacha",
	"Malaysia - Ringgit",
	"Maldives - Rufiyaa",
	"Mauritania - Ouguiya",
	"Mauritius - Rupee",
	"Mexico - Peso",
	"Moldova - Leu",
	"Morocco - Dirham",
	"Mozambique - Metical",
	"Myanmar - Kyat",
	"Namibia - Dollar",
	"Nepal - Rupee",
	"New Zealand - Dollar",
	"Nicaragua - Cordoba",
	"Nigeria - Naira",
	"North Macedonia - Denar",
	"Norway - Krone",
	"Oman - Rial",
	"Pakistan - Rupee",
	"Panama - Balboa",
	"Papua New Guinea - Kina",
	"Paraguay - Guarani",
	"Peru - Nuevo Sol",
	"Philippines - Peso",
	"Poland - Zloty",
	"Qatar - Riyal",
	"Romania - New Leu",
	"Russia - Rouble",
	"Rwanda - Franc",
	"Saint Helena, Ascension and Tristan da Cunha - Pound",
	"Saudi Arabia - Riyal",
	"Serbia - Dinar",
	"Seychelles - Rupee",
	"Sierra Leone - Leone",
	"Singapore - Dollar",
	"Somalia - Shilling",
	"South Africa - Rand",
	"Sri Lanka - Rupee",
	"Sudan - Pound",
	"Swaziland - Lilangeni",
	"Sweden - Krona",
	"Switzerland - Franc",
	"Syria - Pound",
	"Taiwan - New Dollar",
	"Tanzania - Shilling",
	"Thailand - Baht",
	"Trinidad and Tobago - Dollar",
	"Tunisia - Dinar",
	"Turkey - Lira",
	"Turkmenistan - Manat",
	"Uganda - Shilling",
	"Ukraine - Hryvna",
	"United Arab Emirates - Dirham",
	"United Kingdom - Pound",
	"United States - Dollar",
	"Uruguay - Peso",
	"Uzbekistan - Som",
	"Venezuela - Bolivar Soberano",
	"Vietnam - Dong",
	"Yemen - Rial",
	"Zambia - Kwacha",
];
const magnitude = [
	1,1,1.64,1.34,0.02,0.02,0.02,0.01,0.004,0.99,0.02,0.04,0.02,0.01,0.08,0.02,0.13,
	0.05,0.02,0.02,23,1.16,45.71,0.01,0.01,9,0.08,44.80,5,22.51,7.59,0.08,
	0.00,0.27,0.26,0.08,2,0.62,0.21,0.58,0.01,0.02,0.61,0.03,0.09,0.09,97,
	1.24,0.27,0.09,4.02,1,0.87,165.35,474,16,0.04,1.74,1,0.008,4.70,1.31,
	14,0.003,149,17,0.18,1.70,0.054,0.09,45,9.13,0.05,0.17,0.41,0.49,0.22,0.21,0.11,
	0.71,21,0.18,1.40,0.02,0.40,4.67,0.65,0.11,0.004,2.26,0.01,0.04,77,0.04,0.59,0.05,
	0.04,0.05,0.61,11,0.01,0.04,1,0.15,145,0.02,6,0.18,4.00,5.02,0.18,0.11,
	0.01,28,0.33,26.20,0.38,0.08,0.034,0.18,0.04,41,0.33,0.04,0.01,0.01,0.45,124.90,0.06,262,
	3,0.19
];

export default function Currency() { 
	const [light] = useContext(ThemeContext);
	const [first, setFirst] = useState("Afghanistan - Afghani");
	const [a, setA] = useState("");
	const [second, setSecond] = useState("Afghanistan - Afghani");
	const [b, setB] = useState("");
	const handleA = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		if(isNaN((x / y) * parseFloat(e.target.value)))
		setB("");
		else
		setB(`${(x / y) * parseFloat(e.target.value)}`)
		if(isNaN(e.target.value))
		setA("")
		else
		setA(e.target.value);
	};
	const handleB = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		if(isNaN((y / x) * parseFloat(e.target.value)))
		setA("");
		else
		setA(`${(y / x) * parseFloat(e.target.value)}`)
		if(isNaN(e.target.value))
		setA("")
		else
		setA(e.target.value);
	};
	const handleFirst = (e) => {
		const indexA = list.indexOf(e.target.value);
		let x = magnitude[indexA];
		const indexB = list.indexOf(second);
		let y = magnitude[indexB];
		if(isNaN((x / y) *  parseFloat(b)))
		setA("")
		else
		setA(`${(x / y) *  parseFloat(b)}`);
		setFirst(e.target.value);
		
	};
	const handleSecond = (e) => {
		const indexA = list.indexOf(first);
		let x = magnitude[indexA];
		const indexB = list.indexOf(e.target.value);
		let y = magnitude[indexB];
		
		if(isNaN((x / y) * parseFloat(a)))
		setB("")
		else
		setB(`${(x / y) * parseFloat(a)}`);
		setSecond(e.target.value);
		
	};
	return (
		<StyledDiv light={light}>
			<h1><BsCurrencyDollar className='icon' /> The currency converter </h1>
			<div className='first'>
				<div className="icon">{symbol[list.indexOf(first)]}</div>
				<select onChange={handleFirst} value={first}>
					{list.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>

				<input id='a' type='text' onChange={handleA} value={a} placeholder="Enter a value..." />
			</div>
			<div className='second'>
			<div className="icon">{symbol[list.indexOf(second)]}</div>
				<select onChange={handleSecond} value={second}>
					{list.map((item, index) => (
						<option key={index}>{item}</option>
					))}
				</select>
				<input id='b' type='text' onChange={handleB} value={b} placeholder="Enter a value..." />
			</div>
		</StyledDiv>
	);
}
