
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  let isDarkMode = false; // Default tema terang
  
  themeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode; // Toggle nilai isDarkMode
    
    // Mengubah emoji berdasarkan tema yang aktif
    if (isDarkMode) {
      themeIcon.textContent = '🌙'; // Emoji Bulan (Tema Gelap)
      document.body.style.backgroundColor = '#343a40'; // Background untuk tema gelap
    } else {
      themeIcon.textContent = '☀️'; // Emoji Matahari (Tema Terang)
      document.body.style.backgroundColor = '#f8f9fa'; // Background untuk tema terang
    }
  });

  // Menampilkan bagian Text to Binary
  function showTextToBinary() {
    hideAllSections();
    document.getElementById('textToBinary').style.display = 'block';
  }

  // Menampilkan bagian Text to Octal
  function showTextToOctal() {
    hideAllSections();
    document.getElementById('textToOctal').style.display = 'block';
  }

  // Menampilkan bagian Text to Decimal
  function showTextToDecimal() {
    hideAllSections();
    document.getElementById('textToDecimal').style.display = 'block';
  }

  // Menampilkan bagian Text to Hexadecimal
  function showTextToHexadecimal() {
    hideAllSections();
    document.getElementById('textToHexadecimal').style.display = 'block';
  }

  
  function pasteText(inputId) {
    navigator.clipboard.readText().then(text => {
      document.getElementById(inputId).value = text;
    }).catch(err => {
      console.error('Failed to read clipboard contents: ', err);
    });
  }


  function convertTextToBinary() {
    let inputText = document.getElementById('textInputBinary').value;
    let binaryResult = document.getElementById('binaryResult');
    let binaryOutput = document.getElementById('binaryOutput');
    

    binaryResult.innerHTML = '';
    binaryOutput.value = '';


    for (let i = 0; i < inputText.length; i++) {
      let binaryValue = inputText[i].charCodeAt(0).toString(2);
      let row = `<tr><td style="min-width: 150px;">${inputText[i]}</td><td>${binaryValue}</td></tr>`;
      binaryResult.innerHTML += row;
      binaryOutput.value += binaryValue + ' ';
    }
  }


  function convertTextToOctal() {
    let inputText = document.getElementById('textInputOctal').value;
    let octalResult = document.getElementById('octalResult');
    let octalOutput = document.getElementById('octalOutput');
    
    // Reset isi tabel hasil dan output
    octalResult.innerHTML = '';
    octalOutput.value = '';


    for (let i = 0; i < inputText.length; i++) {
      let octalValue = inputText[i].charCodeAt(0).toString(8);
      let row = `<tr><td style="min-width: 150px;">${inputText[i]}</td><td>${octalValue}</td></tr>`;
      octalResult.innerHTML += row;
      octalOutput.value += octalValue + ' ';
    }
  }


  function convertTextToDecimal() {
    let inputText = document.getElementById('textInputDecimal').value;
    let decimalResult = document.getElementById('decimalResult');
    let decimalOutput = document.getElementById('decimalOutput');
    
    // Reset isi tabel hasil dan output
    decimalResult.innerHTML = '';
    decimalOutput.value = '';


    for (let i = 0; i < inputText.length; i++) {
      let decimalValue = inputText[i].charCodeAt(0);
      let row = `<tr><td style="min-width: 150px;">${inputText[i]}</td><td>${decimalValue}</td></tr>`;
      decimalResult.innerHTML += row;
      decimalOutput.value += decimalValue + ' ';
    }
  }


  function convertTextToHexadecimal() {
    let inputText = document.getElementById('textInputHexadecimal').value;
    let hexadecimalResult = document.getElementById('hexadecimalResult');
    let hexadecimalOutput = document.getElementById('hexadecimalOutput');
    
    // Reset isi tabel hasil dan output
    hexadecimalResult.innerHTML = '';
    hexadecimalOutput.value = '';


    for (let i = 0; i < inputText.length; i++) {
      let hexadecimalValue = inputText[i].charCodeAt(0).toString(16);
      let row = `<tr><td style="min-width: 150px;">${inputText[i]}</td><td>${hexadecimalValue.toUpperCase()}</td></tr>`;
      hexadecimalResult.innerHTML += row;
      hexadecimalOutput.value += hexadecimalValue.toUpperCase() + ' ';
    }
  }


  function deleteBinaryOutput() {
    document.getElementById('binaryOutput').value = '';
  }


  function copyBinaryOutput() {
    let output = document.getElementById('binaryOutput');
    output.select();
    document.execCommand('copy');
    
  }


  function deleteOctalOutput() {
    document.getElementById('octalOutput').value = '';
  }


  function copyOctalOutput() {
    let output = document.getElementById('octalOutput');
    output.select();
    document.execCommand('copy');
    
  }


  function deleteDecimalOutput() {
    document.getElementById('decimalOutput').value = '';
  }


  function copyDecimalOutput() {
    let output = document.getElementById('decimalOutput');
    output.select();
    document.execCommand('copy');
    
  }


  function deleteHexadecimalOutput() {
    document.getElementById('hexadecimalOutput').value = '';
  }


  function copyHexadecimalOutput() {
    let output = document.getElementById('hexadecimalOutput');
    output.select();
    document.execCommand('copy');
    
  }


  function hideAllSections() {
    document.getElementById('textToBinary').style.display = 'none';
    document.getElementById('textToOctal').style.display = 'none';
    document.getElementById('textToDecimal').style.display = 'none';
    document.getElementById('textToHexadecimal').style.display = 'none';
  }