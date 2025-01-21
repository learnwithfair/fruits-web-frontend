// Add click event for grand tab
document.querySelectorAll('.nav-link-grand').forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link-grand').forEach(link => link.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
        if (this.textContent.trim() === 'Vegetables') {
            // Show the son category
            menuContainer = document.getElementById('menu-container');
            menuContainer.innerHTML = `
              <!-- Pineapple Ginger Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image4.png" class="card-img-top mb-3"
                        alt="Pineapple Ginger Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Pineapple Ginger Juice</h6>
                    </div>
                </div>
            </div>
          
            <!-- Orange Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image2.png" class="card-img-top mb-3" alt="Orange Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Fresh Squeezed Orange Juice</h6>
                    </div>
                </div>
            </div>
            <!-- Celery Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image3.png" class="card-img-top mb-3" alt="Celery Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Celery Juice</h6>
                    </div>
                </div>
            </div>
              <!-- Strawberry Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image1.png" class="card-img-top mb-3" alt="Strawberry Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Strawberry Juice</h6>
                    </div>
                </div>
            </div>
          
            `;
        } else {
            // Hide the son category if any other item is clicked
            menuContainer = document.getElementById('menu-container');
            menuContainer.innerHTML = `
              <!-- Strawberry Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image1.png" class="card-img-top mb-3" alt="Strawberry Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Strawberry Juice</h6>
                    </div>
                </div>
            </div>
            <!-- Orange Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image2.png" class="card-img-top mb-3" alt="Orange Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Fresh Squeezed Orange Juice</h6>
                    </div>
                </div>
            </div>
            <!-- Celery Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image3.png" class="card-img-top mb-3" alt="Celery Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Celery Juice</h6>
                    </div>
                </div>
            </div>
            <!-- Pineapple Ginger Juice -->
            <div class="col-md-3">
                <div class="menu-card">
                    <img src="../../assets/images/menu/image4.png" class="card-img-top mb-3"
                        alt="Pineapple Ginger Juice">
                    <div class="card-body text-center">
                        <h6 class="menu-card-title">Pineapple Ginger Juice</h6>
                    </div>
                </div>
            </div>
            `;
        }
    });
});

// Add click event for father tab
document.querySelectorAll('.nav-link-father').forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link-father').forEach(link => link.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
        // console.log(this);
        if (this.textContent.trim() === 'Bottled +') {
            // Show the son category
            document.getElementById('son-category').style.display = 'block';
        } else {
            // Hide the son category if any other item is clicked
            document.getElementById('son-category').style.display = 'none';
        }
    });
});
// Add click event for son tab
document.querySelectorAll('.nav-link-son').forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' class from all links
        document.querySelectorAll('.nav-link-son').forEach(link => link.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});


// click on product display menu product details
// Select the elements
// Select all menu-card elements
const menuCards = document.querySelectorAll('.menu-card');
const menuDetails = document.getElementById('menu-product-details');
const crossButton = document.getElementById('cross');

// Add click event listener to each menu-card
menuCards.forEach((card) => {
    card.addEventListener('click', () => {
        menuDetails.style.display = 'flex'; // Show the menu-details container
    });
});

// Hide the menu-details when the cross button is clicked
crossButton.addEventListener('click', () => {
    menuDetails.style.display = 'none';
});

// conditional amount 
document.querySelectorAll('.menu-amount-link').forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' class from all links
        document.querySelectorAll('.menu-amount-link').forEach(link => link.classList.remove('active'));
        // Add 'active' class to the clicked link
        this.classList.add('active');
    
        const innerValue = document.getElementById('amount');
        const gramContainer = document.getElementById('menu-gram-container');
        const unitContainer = document.getElementById('menu-unit-container');

        if (this.textContent.trim() === 'Grams') {
            // Show the gram container and hide the unit container
            gramContainer.style.display = 'block';
            unitContainer.style.display = 'none';
            innerValue.value = "250 g"; // Default value for grams
        } else if (this.textContent.trim() === 'Units') {
            // Show the unit container and hide the gram container
            unitContainer.style.display = 'block';
            gramContainer.style.display = 'none';
            innerValue.value = 5; // Default value for units
        }
    });
});

// logic for plus and minus button 
  // Select the buttons and input field
  const minusButton = document.getElementById('menu-minus');
  const plusButton = document.getElementById('menu-plus');
  const amountInput = document.getElementById('amount');

  // Function to parse the value (number and unit)
  function parseValue(value) {
    const match = value.match(/^(\d+)\s*(gm|kg|unit)?$/); // Match number and unit (optional)
    if (match) {
      return { number: parseInt(match[1]), unit: match[2] || null }; // Default to no unit if absent
    }
    return { number: 250, unit: 'gm' }; // Default to 250 gm if invalid input
  }

  // Function to update the input field value
  function updateValue(number, unit) {
    if (unit) {
      amountInput.value = `${number} ${unit}`;
    } else {
      amountInput.value = `${number}`;
    }
  }

  // Add click event listener to the plus button
  plusButton.addEventListener('click', () => {
    const { number, unit } = parseValue(amountInput.value); // Extract current value and unit
    let increment;

    if (unit === "gm") {
      increment = 10; // Increment by 10 gm
      const newValue = number + increment;
      updateValue(newValue, "gm");
    } else if (unit === "kg") {
      increment = 0.1; // Increment by 0.1 kg
      const newValue = (number + increment).toFixed(1);
      updateValue(newValue, "kg");
    } else {
      increment = 1; // Increment by 1 for counting unit
      const newValue = number + increment;
      updateValue(newValue, null);
    }
  });

  // Add click event listener to the minus button
  minusButton.addEventListener('click', () => {
    const { number, unit } = parseValue(amountInput.value); // Extract current value and unit
    let decrement;

    if (unit === "gm") {
      decrement = 10; // Decrement by 10 gm
      const newValue = Math.max(0, number - decrement); // Minimum value is 250 for gm
      updateValue(newValue, "gm");
    } else if (unit === "kg") {
      decrement = 0.1; // Decrement by 0.1 kg
      const newValue = Math.max(5, (number - decrement).toFixed(1)); // Minimum value is 5 for kg
      updateValue(newValue, "kg");
    } else {
      decrement = 1; // Decrement by 1 for counting unit
      const newValue = Math.max(0, number - decrement); // Minimum value is 0 for unit
      updateValue(newValue, null);
    }
});
const buttons = document.querySelectorAll('.menu-amount-btn');
const amountInputValue = document.getElementById('amount'); // Select the input field

// Loop through each button and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerText; // Get the value of the clicked button
     // Extract unit from the button text
     amountInputValue.value = `${buttonValue}`; // Set the input field value with the unit
  });
});

