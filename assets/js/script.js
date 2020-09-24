function startTracking() {
	// WorldWide
	let ta1 = document.getElementById("ta1");
	let nc1 = document.getElementById("tc1");
	let nd1 = document.getElementById("td1");
	let tc1 = document.getElementById("tc1");
	let ts1 = document.getElementById("ts1");
	let tu1 = document.getElementById("tu1");
	let td1 = document.getElementById("td1");
	// Local
	let ta2 = document.getElementById("ta2");
	let nc2 = document.getElementById("tc2");
	let nd2 = document.getElementById("td2");
	let tc2 = document.getElementById("tc2");
	let ts2 = document.getElementById("ts2");
	let tu2 = document.getElementById("tu2");
	let td2 = document.getElementById("td2");
}

const getLocalData = async (country) => {
	const localData = await fetch(`https://api.thevirustracker.com/free-api?countryTotal=${country}`);
	return await localData.json();
}

const fetchCountry = async (ip) => {
	const country = await fetch(`https://ipapi.co/${ip}/country_code`)
	return await country.text();
}

const getIp = async () => {
	const ip = await fetch('https://api.ipify.org/?format=json')
	return await ip.json();
}

getIp()
	.then(ip => {
		fetchCountry(ip.ip)
			.then(country => {
				getLocalData(country)
					.then(getLocal => {
						let lD = getLocal.countrydata[0];
						ta2.innerHTML = lD.total_active_cases;
						nc2.innerHTML = lD.total_new_cases_today;
						nd2.innerHTML = lD.total_new_deaths_today;
						tc2.innerHTML = lD.total_cases;
						ts2.innerHTML = lD.total_serious_cases;
						tr2.innerHTML = lD.total_recovered;
						tu2.innerHTML = lD.total_unresolved;
						td2.innerHTML = lD.total_deaths;
					})
			})
	})



const worldwideData = async () => {
	const getWorldWide = await fetch(`https://api.thevirustracker.com/free-api?global=stats`);
	return await getWorldWide.json();
}
worldwideData()
	.then(getWorldWide => {
		let wwD = getWorldWide.results[0];
		ta1.innerHTML = wwD.total_active_cases;
		nc1.innerHTML = wwD.total_new_cases_today;
		nd1.innerHTML = wwD.total_new_deaths_today;
		tc1.innerHTML = wwD.total_cases;
		ts1.innerHTML = wwD.total_serious_cases;
		tr1.innerHTML = wwD.total_recovered;
		tu1.innerHTML = wwD.total_unresolved;
		td1.innerHTML = wwD.total_deaths;
	})
