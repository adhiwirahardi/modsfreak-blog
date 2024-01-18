// tokopedia-price.js

async function fetchTokopediaPrice() {
    const tokopediaLink = 'https://www.tokopedia.com/example-product'; // Replace with your actual Tokopedia product URL
  
    try {
      // Fetch data from the server using the provided Axios code
      const response = await axios.request({
        method: 'GET',
        url: 'https://tokopediaapi.p.rapidapi.com/',
        params: {
          act: 'detail',
          slug: tokopediaLink,
          _pretty: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '170edf1e75mshcdad0fa06d17358p133affjsn91c0b968683a',
          'X-RapidAPI-Host': 'tokopediaapi.p.rapidapi.com'
        }
      });
  
      // Extract the price from the response data
      const price = response.data; // Replace with actual extraction logic based on the API response
  
      // Display the price on the page
      document.querySelector('.tokopedia-price-container').innerHTML = `Price on Tokopedia: ${price}`;
    } catch (error) {
      console.error('Error fetching Tokopedia price:', error);
    }
  }
  
  // Call the function when the page is loaded
  window.onload = fetchTokopediaPrice;
  