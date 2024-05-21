// Sample data for cryptocurrencies
const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "ARU TOKEN", symbol: "ARUT" }
  ];
  
  // Function to populate the cryptocurrency options in the forms
  function populateCryptoOptions() {
    const buyCryptoSelect = document.getElementById("buy-crypto");
    const sellCryptoSelect = document.getElementById("sell-crypto");
  
    cryptocurrencies.forEach(crypto => {
      const option = document.createElement("option");
      option.text = `${crypto.name} (${crypto.symbol})`;
      option.value = crypto.symbol;
  
      buyCryptoSelect.appendChild(option.cloneNode(true));
      sellCryptoSelect.appendChild(option.cloneNode(true));
    });
  }
  
  // Function to simulate buying cryptocurrency
  function buyCrypto() {
    const amount = document.getElementById("buy-amount").value;
    const crypto = document.getElementById("buy-crypto").value;
  
    alert(`Buying ${amount} ${crypto}`);
  }
  
  // Function to simulate selling cryptocurrency
  function sellCrypto() {
    const amount = document.getElementById("sell-amount").value;
    const crypto = document.getElementById("sell-crypto").value;
  
    alert(`Selling ${amount} ${crypto}`);
  }
  
  // Call the function to populate crypto options when the page loads
  window.onload = populateCryptoOptions;