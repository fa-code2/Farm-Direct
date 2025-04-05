import React from 'react'

const Final = () => {
  return (
    <>

            <header class="main-header">
                <div class="container">
                    <div class="logo">FarmDirect 🌱</div>
                    <div class="header-actions">
                        <nav class="main-nav">
                            <ul>
                                <li><a href="#home" onclick="showView('consumer-view', true)">Home</a></li>
                                <li><a href="#products-section">Products</a></li>
                                <li><a href="#join">Join Us</a></li>
                                <li><a href="#" title="Shopping Cart">🛒 (0)</a></li>
                            </ul>
                        </nav>
                        <button id="farmer-login-toggle" class="btn btn-secondary btn-sm">Farmer Login</button>
                    </div>
                </div>
            </header>

            <section class="pincode-check">
                <div class="container">
                    <label for="pincode-input">Check Delivery Area:</label>
                    <input type="text" id="pincode-input" placeholder="Enter Pincode" maxlength="6">
                    <button id="pincode-check-btn" class="btn btn-sm">Check</button>
                </div>
            </section>

            <main class="container" id="main-content">

                <div id="consumer-view">

                    <section id="products-section">
                        <h2>Explore Fresh Produce</h2>
                        <div class="category-filters">
                            <button class="btn category-btn btn-sm active" onclick="filterProducts('all')">All</button>
                            <button class="btn category-btn btn-sm" onclick="filterProducts('vegetable')">Vegetables</button>
                            <button class="btn category-btn btn-sm" onclick="filterProducts('fruit')">Fruits</button>
                            <button class="btn category-btn btn-sm" onclick="filterProducts('grain')">Grains</button>
                            <button class="btn category-btn btn-sm" onclick="filterProducts('dairy')">Dairy</button>
                            <button class="btn category-btn btn-sm" onclick="filterProducts('spice')">Spices</button>
                        </div>

                        <div class="product-grid" id="product-listing">

                            <div class="product-card" data-category="vegetable" onclick="showProductDetail({ id: 1, name: 'Organic Tomatoes', category: 'Vegetable', price: '₹55 / kg', farmer: 'Ram Singh', image: 'https://placehold.co/600x400/FF7E79/333?text=Tomatoes', description: 'Plump, juicy organic tomatoes bursting with flavour. Grown sustainably near Kharagpur. Ideal for salads, sauces, or just eating fresh.' })">
                                <img src="https://placehold.co/600x400/FF7E79/333?text=Tomatoes" alt="Fresh Tomatoes">
                                <div class="product-info">
                                    <h4>Organic Tomatoes</h4>
                                    <p class="product-category">Vegetable</p>
                                    <p class="product-farmer">Ram Singh</p>
                                    <p class="product-price">₹55 / kg</p>
                                </div>
                            </div>
                            <div class="product-card" data-category="vegetable" onclick="showProductDetail({ id: 2, name: 'Sweet Carrots', category: 'Vegetable', price: '₹45 / kg', farmer: 'Sita Devi', image: 'https://placehold.co/600x400/FFAF61/333?text=Carrots', description: 'Crisp, naturally sweet carrots harvested at peak freshness. Perfect for snacking, cooking, or adding color to your meals.' })">
                                <img src="https://placehold.co/600x400/FFAF61/333?text=Carrots" alt="Carrots">
                                <div class="product-info">
                                    <h4>Sweet Carrots</h4>
                                    <p class="product-category">Vegetable</p>
                                    <p class="product-farmer">Sita Devi</p>
                                    <p class="product-price">₹45 / kg</p>
                                </div>
                            </div>
                            <div class="product-card" data-category="fruit" onclick="showProductDetail({ id: 3, name: 'Seasonal Mangoes (Langra)', category: 'Fruit', price: '₹130 / kg', farmer: 'Bengal Orchards', image: 'https://placehold.co/600x400/FFF176/333?text=Mangoes', description: 'Deliciously sweet and fibrous Langra mangoes, a seasonal favourite from local orchards. Limited stock available.' })">
                                <img src="https://placehold.co/600x400/FFF176/333?text=Mangoes" alt="Mangoes">
                                <div class="product-info">
                                    <h4>Seasonal Mangoes (Langra)</h4>
                                    <p class="product-category">Fruit</p>
                                    <p class="product-farmer">Bengal Orchards</p>
                                    <p class="product-price">₹130 / kg</p>
                                </div>
                            </div>
                            <div class="product-card" data-category="grain" onclick="showProductDetail({ id: 4, name: 'Aged Basmati Rice', category: 'Grain', price: '₹95 / kg', farmer: 'Punjab Harvest Co.', image: 'https://placehold.co/600x400/f5f5f5/444?text=Basmati+Rice', description: 'Premium long-grain Basmati rice, carefully aged for over a year to enhance its distinct aroma and fluffy texture upon cooking.' })">
                                <img src="https://placehold.co/600x400/f5f5f5/444?text=Basmati+Rice" alt="Basmati Rice">
                                <div class="product-info">
                                    <h4>Aged Basmati Rice</h4>
                                    <p class="product-category">Grain</p>
                                    <p class="product-farmer">Punjab Harvest Co.</p>
                                    <p class="product-price">₹95 / kg</p>
                                </div>
                            </div>
                            <div class="product-card" data-category="vegetable" onclick="showProductDetail({ id: 5, name: 'Fresh Spinach Bunch', category: 'Vegetable', price: '₹35 / bunch', farmer: 'Green Valley Farms', image: 'https://placehold.co/600x400/AED581/333?text=Spinach', description: 'Tender green spinach leaves, packed with nutrients. Locally sourced and delivered fresh for maximum taste and health benefits.' })">
                                <img src="https://placehold.co/600x400/AED581/333?text=Spinach" alt="Spinach">
                                <div class="product-info">
                                    <h4>Fresh Spinach Bunch</h4>
                                    <p class="product-category">Vegetable</p>
                                    <p class="product-farmer">Green Valley Farms</p>
                                    <p class="product-price">₹35 / bunch</p>
                                </div>
                            </div>
                            <div class="product-card" data-category="dairy" onclick="showProductDetail({ id: 6, name: 'Farm Fresh Paneer', category: 'Dairy', price: '₹120 / 250g', farmer: 'Gopal Dairy', image: 'https://placehold.co/600x400/E1F5FE/444?text=Paneer', description: 'Soft and creamy Malai Paneer made from fresh, full-cream milk sourced directly from local farms. Excellent for curries and grilling.' })">
                                <img src="https://placehold.co/600x400/E1F5FE/444?text=Paneer" alt="Paneer">
                                <div class="product-info">
                                    <h4>Farm Fresh Paneer</h4>
                                    <p class="product-category">Dairy</p>
                                    <p class="product-farmer">Gopal Dairy</p>
                                    <p class="product-price">₹120 / 250g</p>
                                </div>
                            </div>
                            <div class="product-card" data-category="spice" onclick="showProductDetail({ id: 7, name: 'Sundried Turmeric Powder', category: 'Spice', price: '₹70 / 100g', farmer: 'Spice Routes Farm', image: 'https://placehold.co/600x400/FFCA28/444?text=Turmeric', description: 'Vibrant yellow turmeric powder, ground from high-curcumin sundried turmeric fingers. Adds color, flavour, and health benefits.' })">
                                <img src="https://placehold.co/600x400/FFCA28/444?text=Turmeric" alt="Turmeric Powder">
                                <div class="product-info">
                                    <h4>Sundried Turmeric Powder</h4>
                                    <p class="product-category">Spice</p>
                                    <p class="product-farmer">Spice Routes Farm</p>
                                    <p class="product-price">₹70 / 100g</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="product-detail-view" class="hidden">
                        <button id="back-to-products" class="btn btn-sm" onclick="showView('consumer-view', true)">← Back to Products</button>
                        <div class="product-detail-content">
                            <div class="product-detail-image">
                                <img id="detail-img" src="" alt="Product Image">
                            </div>
                            <div class="product-detail-info">
                                <h2 id="detail-name">Product Name</h2>
                                <p class="detail-category" id="detail-category">Category</p>
                                <p class="detail-price" id="detail-price">Price</p>
                                <p class="detail-farmer">Sold by: <strong id="detail-farmer">Farmer Name</strong></p>
                                <p class="detail-description" id="detail-description">Product description goes here...</p>
                                <div class="detail-actions">
                                    <button class="btn btn-warning" onclick="alert('Add to Cart clicked! (Demo)')">🛒 Add to Cart</button>
                                    <button class="btn btn-info" onclick="alert('Message Farmer clicked! Feature coming soon. (Demo)')">✉ Message Farmer</button>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="join" class="join-farmer">
                        <div class="container">
                            <h2>Empower Your Farm with FarmDirect</h2>
                            <p>Connect directly with consumers in your area and beyond. We provide the platform, you provide the freshness. Grow your business sustainably.</p>
                            <ul>
                                <li>Expand your reach instantly to a wider online customer base.</li>
                                <li>Benefit from our transparent pricing model ensuring fair returns for your hard work.</li>
                                <li>Access exclusive contract farming opportunities for stable income and bulk sales.</li>
                                <li>Utilize tools like Crop Yield Prediction to optimize your planning and harvests.</li>
                                <li>Build relationships through direct messaging and feedback from consumers.</li>
                                <li>Simplified listing process and dedicated support for our farmer partners.</li>
                            </ul>
                            <button class="btn btn-lg" onclick="alert('Sign Up form would appear here! (Demo)')">Register Your Farm Today!</button>
                        </div>
                    </section>

                </div>

                <div id="farmer-view" class="hidden">
                    <h2>Farmer Dashboard 🧑‍🌾</h2>

                    <nav class="dashboard-nav">
                        <ul>
                            <li><button class="btn btn-sm btn-warning" onclick="showDashboardContent('dashboard-overview')">📊 Overview</button></li>
                            <li><button class="btn btn-sm" onclick="showDashboardContent('list-product')">➕ List New Product</button></li>
                            <li><button class="btn btn-sm btn-info" onclick="showDashboardContent('predict-yield')">🌱 Predict Crop Yield</button></li>
                            <li><button class="btn btn-sm" onclick="showDashboardContent('view-contracts')">📄 Contract Farming</button></li>
                            <li><button class="btn btn-sm btn-secondary" onclick="showDashboardContent('my-products')">📦 My Products</button></li>
                        </ul>
                    </nav>

                    <div id="dashboard-area">

                        <div id="dashboard-overview-content" class="dashboard-content">
                            <h3>Farm Overview</h3>
                            <div class="dashboard-overview">
                                <div class="stat-card">
                                    <h4>Active Listings</h4>
                                    <div class="stat-value">12</div>
                                    <div class="stat-label">Products Online</div>
                                </div>
                                <div class="stat-card">
                                    <h4>Pending Orders</h4>
                                    <div class="stat-value">3</div>
                                    <div class="stat-label">Awaiting Confirmation</div>
                                </div>
                                <div class="stat-card">
                                    <h4>Total Sales (Month)</h4>
                                    <div class="stat-value">₹ 8,500</div>
                                    <div class="stat-label">April 2025 (Est.)</div>
                                </div>
                                <div class="stat-card">
                                    <h4>Active Contracts</h4>
                                    <div class="stat-value">1</div>
                                    <div class="stat-label">Bulk Buyer Agreements</div>
                                </div>
                            </div>
                            <p>Welcome back! Use the navigation above to manage your FarmDirect activities.</p>
                        </div>

                        <div id="list-product-content" class="dashboard-content hidden">
                            <h3>List a New Product</h3>
                            <form id="list-product-form" class="list-product-form">
                                <div class="form-group">
                                    <label for="product-name">Product Name:</label>
                                    <input type="text" id="product-name" required placeholder="e.g., Fresh Red Onions">
                                </div>
                                <div class="form-group">
                                    <label for="product-category-select">Category:</label>
                                    <select id="product-category-select" required>
                                        <option value="">-- Select Category --</option>
                                        <option value="vegetable">Vegetable</option>
                                        <option value="fruit">Fruit</option>
                                        <option value="grain">Grain</option>
                                        <option value="dairy">Dairy</option>
                                        <option value="spice">Spice</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
                                    <div class="form-group">
                                        <label for="product-price-input">Price (₹):</label>
                                        <input type="number" id="product-price-input" required min="1" placeholder="e.g., 30">
                                    </div>
                                    <div class="form-group">
                                        <label for="product-unit">Per Unit:</label>
                                        <input type="text" id="product-unit" required placeholder="e.g., kg, piece, litre">
                                    </div>
                                    <div class="form-group">
                                        <label for="product-quantity">Quantity Available:</label>
                                        <input type="number" id="product-quantity" required min="1" placeholder="e.g., 50">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="product-description">Description:</label>
                                    <textarea id="product-description" rows="4" placeholder="Describe your product, its quality, origin, etc."></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="product-image">Upload Product Image:</label>
                                    <input type="file" id="product-image" accept="image/*">
                                </div>
                                <button type="submit" class="btn">List This Product</button>
                            </form>
                        </div>

                        <div id="predict-yield-content" class="dashboard-content hidden">
                            <h3>AI Crop Yield Prediction Tool (Beta)</h3>
                            <p>Get an estimate based on your inputs. Accuracy depends on data quality.</p>
                            <form id="ai-prediction-form-farmer" class="prediction-form">
                                <div class="form-group"><label for="location-f">Location (Village/Area):</label><input type="text" id="location-f" required placeholder="e.g., Gopali near Kharagpur"></input></div>
                                <div class="form-group"><label for="crop-f">Crop Type:</label><select id="crop-f" required><option value="">-- Select Crop --</option><option value="rice_kharif">Rice (Kharif)</option><option value="rice_rabi">Rice (Rabi)</option><option value="wheat">Wheat</option><option value="maize">Maize</option><option value="potato">Potato</option><option value="mustard">Mustard</option><option value="tomato">Tomato</option></select></div>
                                <div class="form-group"><label for="soil-f">Dominant Soil Type:</label><select id="soil-f" required><option value="">-- Select Soil --</option><option value="alluvial_gangetic">Alluvial (Gangetic)</option><option value="laterite_red">Laterite/Red</option><option value="sandy_loam">Sandy Loam</option><option value="clayey">Clayey</option></select></div>
                                <div class="form-group"><label for="area-f">Area (Acres):</label><input type="number" id="area-f" min="0.1" step="0.1" required placeholder="e.g., 2.5"></div>
                                <button type="submit" class="btn btn-info">Predict Yield</button>
                            </form>
                            <div id="prediction-output-farmer" class="prediction-result">Enter details above to get prediction...</div>
                        </div>

                        <div id="view-contracts-content" class="dashboard-content hidden">
                            <h3>Contract Farming Opportunities</h3>
                            <p>Connect with verified bulk buyers for guaranteed sales contracts.</p>
                            <div style="background-color: var(--light-gray); padding: 1rem; border-radius: var(--border-radius); margin-top: 1rem;">
                                <h4>Available Contract Example:</h4>
                                <p><strong>Buyer:</strong> Regional Restaurant Chain <br>
                                <strong>Crop Needed:</strong> Premium Quality Onions <br>
                                <strong>Quantity:</strong> 500 kg / month <br>
                                <strong>Price Offered:</strong> ₹25 / kg (Grade A) <br>
                                <strong>Duration:</strong> 6 Months
                                </p>
                                <button class="btn btn-sm btn-success" style="margin-top: 0.5rem;" onclick="alert('Apply to Contract clicked! (Demo)')">Apply Now</button>
                            </div>
                            <p style="margin-top: 1rem;"><em>More available contracts would be listed here. You can also manage your applications and active agreements.</em></p>
                        </div>

                        <div id="my-products-content" class="dashboard-content hidden">
                            <h3>Your Active Listings</h3>
                            <p>Manage pricing, quantity, and availability of your products.</p>
                            <div style="border: 1px solid var(--medium-gray); padding: 1rem; border-radius: var(--border-radius); margin-top: 1rem;">
                                <h4 style="margin-bottom: 0.5rem;">Organic Tomatoes</h4>
                                <p><strong>Status:</strong> Online | <strong>Price:</strong> ₹55 / kg | <strong>Available:</strong> 35 kg</p>
                                <button class="btn btn-sm btn-secondary" onclick="alert('Edit Product clicked! (Demo)')">Edit</button>
                                <button class="btn btn-sm btn-danger" style="margin-left: 0.5rem;" onclick="alert('Remove Product clicked! (Demo)')">Remove</button>
                            </div>
                            <div style="border: 1px solid var(--medium-gray); padding: 1rem; border-radius: var(--border-radius); margin-top: 1rem;">
                                <h4 style="margin-bottom: 0.5rem;">Aged Basmati Rice</h4>
                                <p><strong>Status:</strong> Online | <strong>Price:</strong> ₹95 / kg | <strong>Available:</strong> 150 kg</p>
                                <button class="btn btn-sm btn-secondary" onclick="alert('Edit Product clicked! (Demo)')">Edit</button>
                                <button class="btn btn-sm btn-danger" style="margin-left: 0.5rem;" onclick="alert('Remove Product clicked! (Demo)')">Remove</button>
                            </div>
                            <p style="margin-top: 1rem;"><em>All your other active products would appear here.</em></p>
                        </div>

                    </div>

                </div>

            </main>

            <footer class="main-footer">
                <div class="container">
                    <p>&copy; 2025 FarmDirect Marketplace. Connecting Kharagpur's Farms to You.</p>
                    <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Contact Us</a></p>
                </div>
            </footer>

            <script>
                const consumerView = document.getElementById('consumer-view');
                const farmerView = document.getElementById('farmer-view');
                const productListingSection = document.getElementById('products-section');
                const productListingGrid = document.getElementById('product-listing');
                const productDetailView = document.getElementById('product-detail-view');
                const farmerLoginToggle = document.getElementById('farmer-login-toggle');
                const dashboardArea = document.getElementById('dashboard-area');
                const categoryButtons = document.querySelectorAll('.category-btn');
                const pincodeInput = document.getElementById('pincode-input');
                const pincodeCheckBtn = document.getElementById('pincode-check-btn');

                let isFarmerLoggedIn = false;

                function showView(viewId, showProductList = false) {
                    consumerView.classList.add('hidden');
                    farmerView.classList.add('hidden');
                    productListingSection.classList.add('hidden');
                    productDetailView.classList.add('hidden');


                    if (viewId === 'consumer-view') {
                        consumerView.classList.remove('hidden');
                        if (showProductList) {
                            productListingSection.classList.remove('hidden');
                        } else {
                            productListingSection.classList.remove('hidden');
                        }

                    } else if (viewId === 'farmer-view') {
                        farmerView.classList.remove('hidden');
                        showDashboardContent('dashboard-overview');

                    } else if (viewId === 'product-detail-view') {
                        consumerView.classList.remove('hidden');
                        productListingSection.classList.add('hidden');
                        productDetailView.classList.remove('hidden');
                    }
                }


                function showProductDetail(product) {
                    document.getElementById('detail-img').src = product.image;
                    document.getElementById('detail-img').alt = product.name;
                    document.getElementById('detail-name').textContent = product.name;
                    document.getElementById('detail-category').textContent = product.category;
                    document.getElementById('detail-price').textContent = product.price;
                    document.getElementById('detail-farmer').textContent = product.farmer;
                    document.getElementById('detail-description').textContent = product.description;
                    showView('product-detail-view');
                    window.scrollTo(0, 0);
                }


                function filterProducts(category) {
                    const products = productListingGrid.querySelectorAll('.product-card');
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    const activeButton = document.querySelector('.category-btn'[onclick="filterProducts('${category}')"]);
                    if (activeButton) {
                        activeButton.classList.add('active');
                    }

                    products.forEach(product => {
                        if (category === 'all' || product.getAttribute('data-category') === category) {
                            product.classList.remove('hidden');
                        } else {
                            product.classList.add('hidden');
                        }
                    });
                    showView('consumer-view', true);
                }


                if (pincodeCheckBtn) {
                    pincodeCheckBtn.addEventListener('click', () => {
                        const pincode = pincodeInput.value.trim();
                        if (pincode.match(/^\d{6}$/)) {
                            const availablePincodes = ['721301', '721302', '721305', '700001', '713343'];
                            if (availablePincodes.includes(pincode)) {
                                alert("✅ Great! Delivery is available to pincode ${pincode}.");
                            } else {
                                alert("❌ Sorry, delivery is currently unavailable for pincode ${pincode}. Check back later!");
                            }
                        } else {
                            alert('⚠ Please enter a valid 6-digit Indian pincode.');
                        }
                    });
                }


                if (farmerLoginToggle) {
                    farmerLoginToggle.addEventListener('click', () => {
                        isFarmerLoggedIn = !isFarmerLoggedIn;
                        if (isFarmerLoggedIn) {
                            showView('farmer-view');
                            farmerLoginToggle.textContent = 'Logout';
                            farmerLoginToggle.classList.remove('btn-secondary');
                            farmerLoginToggle.classList.add('btn-danger');
                        } else {
                            showView('consumer-view', true);
                            farmerLoginToggle.textContent = 'Farmer Login';
                            farmerLoginToggle.classList.remove('btn-danger');
                            farmerLoginToggle.classList.add('btn-secondary');
                        }
                    });
                }


                function showDashboardContent(contentId) {
                    const contentAreas = dashboardArea.querySelectorAll('.dashboard-content');
                    contentAreas.forEach(area => area.classList.add('hidden'));

                    const areaToShow = document.getElementById(contentId + '-content');
                    const welcomeArea = document.getElementById('dashboard-overview-content');

                    if (areaToShow) {
                        areaToShow.classList.remove('hidden');
                    } else if(contentId === 'dashboard-overview') {
                        welcomeArea.classList.remove('hidden');
                    } else {
                        console.warn("Dashboard content not found:", contentId);
                        welcomeArea.classList.remove('hidden');
                        welcomeArea.querySelector('p').textContent = "Selected feature area could not be loaded.";
                    }
                }


                const listProductForm = document.getElementById('list-product-form');
                if (listProductForm) {
                    listProductForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        alert('✅ Product listed successfully! (Demo)');
                        listProductForm.reset();
                        showDashboardContent('my-products');
                    });
                }



                const predictionFormFarmer = document.getElementById('ai-prediction-form-farmer');
                const predictionOutputFarmer = document.getElementById('prediction-output-farmer');

                if (predictionFormFarmer) {
                    predictionFormFarmer.addEventListener('submit', (event) => {
                        event.preventDefault();
                        const area = document.getElementById('area-f').value;
                        const crop = document.getElementById('crop-f').value;

                        if (!area || !crop) {
                            predictionOutputFarmer.textContent = '⚠ Please fill in all required fields.';
                            predictionOutputFarmer.style.color = '#orange';
                            return;
                        }
                        predictionOutputFarmer.innerHTML = '⏳ Calculating prediction...';
                        predictionOutputFarmer.style.color = '#333';

                        setTimeout(() => {
                            const estimatedYield = (parseFloat(area) * (Math.random() * 8 + 3)).toFixed(1);
                            const selectedCropText = document.getElementById('crop-f').selectedOptions[0].text;
                            predictionOutputFarmer.textContent = "✅ Estimated Yield for ${selectedCropText}: ${estimatedYield} Tonnes (Demo Result)";
                            predictionOutputFarmer.style.color = 'var(--primary-dark)';
                        }, 1800);
                    });
                }


                document.addEventListener('DOMContentLoaded', () => {
                    showView('consumer-view', true);
                    filterProducts('all');
                });

            </script>

        </body>
        </html>
    </>
  )
}

export default Final = () => {