 const BASE_URL =
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const FALLBACK_URL =
    "https://latest.currency-api.pages.dev/v1/currencies";


const fromCurrency =
    document.getElementById("fromCurrency");

const toCurrency =
    document.getElementById("toCurrency");

const amount =
    document.getElementById("amount");

const message =
    document.getElementById("message");

const form =
    document.getElementById("currencyForm");

const swapBtn =
    document.getElementById("swapBtn");

const fromFlag =
    document.getElementById("fromFlag");

const toFlag =
    document.getElementById("toFlag");


for (let currency in countryList) {

    const optionFrom =
        document.createElement("option");

    optionFrom.value = currency;
    optionFrom.innerText = currency;

    if (currency === "USD") {
        optionFrom.selected = true;
    }

    fromCurrency.appendChild(optionFrom);


    const optionTo =
        document.createElement("option");

    optionTo.value = currency;
    optionTo.innerText = currency;

    if (currency === "INR") {
        optionTo.selected = true;
    }

    toCurrency.appendChild(optionTo);
}


function updateFlag(select, image) {

    const currency = select.value;

    const countryCode =
        countryList[currency];

    image.src =
        `https://flagsapi.com/${countryCode}/flat/64.png`;
}


async function getRates(currency) {

    const code =
        currency.toLowerCase();

    const url =
        `${BASE_URL}/${code}.json`;

    try {

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error("Primary API failed");
        }

        return await response.json();

    } catch (error) {

        const fallback =
            `${FALLBACK_URL}/${code}.json`;

        const response =
            await fetch(fallback);

        if (!response.ok) {
            throw new Error("API unavailable");
        }

        return await response.json();
    }
}


async function convertCurrency() {

    const value =
        Number(amount.value);

    if (!value || value <= 0) {

        message.innerText =
            "Please enter a valid amount.";

        return;
    }


    const from =
        fromCurrency.value.toLowerCase();

    const to =
        toCurrency.value.toLowerCase();


    if (from === to) {

        message.innerText =
            `${value} ${fromCurrency.value} = ${value.toFixed(2)} ${toCurrency.value}`;

        return;
    }


    message.innerText =
        "Loading exchange rate...";


    try {

        const data =
            await getRates(from);


        const rates =
            data[from];


        if (!rates) {
            throw new Error("Currency data not found");
        }


        const rate =
            rates[to];


        if (!rate) {
            throw new Error("Exchange rate not found");
        }


        const result =
            value * rate;


        message.innerText =
            `${value} ${fromCurrency.value} = ${result.toFixed(2)} ${toCurrency.value}`;

    } catch (error) {

        console.error(error);

        message.innerText =
            "Unable to get exchange rate.";

    }
}


fromCurrency.addEventListener(
    "change",
    function () {

        updateFlag(
            fromCurrency,
            fromFlag
        );

        convertCurrency();
    }
);


toCurrency.addEventListener(
    "change",
    function () {

        updateFlag(
            toCurrency,
            toFlag
        );

        convertCurrency();
    }
);


amount.addEventListener(
    "input",
    function () {

        if (amount.value !== "") {
            convertCurrency();
        }

    }
);


form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        convertCurrency();

    }
);


swapBtn.addEventListener(
    "click",
    function () {

        const temp =
            fromCurrency.value;

        fromCurrency.value =
            toCurrency.value;

        toCurrency.value =
            temp;


        updateFlag(
            fromCurrency,
            fromFlag
        );

        updateFlag(
            toCurrency,
            toFlag
        );


        convertCurrency();

    }
);


updateFlag(
    fromCurrency,
    fromFlag
);

updateFlag(
    toCurrency,
    toFlag
);

convertCurrency();