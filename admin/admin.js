/**
 * ZAHRA Admin Panel - Core Module
 * 
 * This file contains all modular functions for the admin panel.
 * It provides a clean, reusable interface for:
 * - Authentication & Session Management
 * - Dashboard Statistics
 * - Order Management
 * - Inventory Management
 * 
 * INTEGRATION POINTS:
 * - All Supabase API calls are marked with "SUPABASE INTEGRATION" comments
 * - Replace placeholder function calls with actual database operations
 * - Session management uses Supabase Auth (comments indicate where)
 * 
 * ARCHITECTURE:
 * - Each feature area has its own namespace (AdminAuth, AdminDashboard, AdminOrders, AdminInventory)
 * - All functions return promises for async operations
 * - Error handling is built in with try-catch blocks
 * - Demo data provided for development/testing
 */

// ============================================================================
// ADMIN AUTHENTICATION MODULE
// ============================================================================

const AdminAuth = {
    /**
     * Check if user has active admin session
     * INTEGRATION POINT: Supabase Auth Session Check
     * 
     * @returns {Promise<Object|null>} User object if authenticated, null otherwise
     */
    async checkSession() {
        try {
            // SUPABASE INTEGRATION: Replace with actual session check
            // const { data: { user } } = await supabase.auth.getUser();
            // return user;
            
            // FALLBACK: Check localStorage for development
            const mockAdmin = localStorage.getItem('mockAdmin') === 'true';
            const sessionActive = localStorage.getItem('adminSession');
            return mockAdmin || sessionActive ? { email: localStorage.getItem('adminEmail') } : null;
        } catch (error) {
            console.error('[AdminAuth] Session check error:', error);
            return null;
        }
    },

    /**
     * Login with email and password
     * INTEGRATION POINT: Supabase Email/Password Auth
     * 
     * @param {string} email - Admin email
     * @param {string} password - Admin password
     * @returns {Promise<Object>} Authentication result { data, error }
     */
    async loginWithEmail(email, password) {
        try {
            if (!email || !password) {
                throw new Error('Email and password are required');
            }

            // SUPABASE INTEGRATION: Uncomment for production
            // const { data, error } = await supabase.auth.signInWithPassword({
            //     email,
            //     password
            // });
            // if (error) throw error;
            
            // FALLBACK: Demo login for development
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters');
            }

            // Store mock development session here.
            // In production, this should use Supabase auth session handling.
            localStorage.setItem('adminEmail', email);
            localStorage.setItem('adminSession', 'active');
            localStorage.setItem('mockAdmin', 'true');

            return { data: { user: { email } }, error: null };
        } catch (error) {
            console.error('[AdminAuth] Login error:', error);
            return { data: null, error };
        }
    },

    /**
     * Logout current admin user
     * INTEGRATION POINT: Supabase Auth Logout
     * 
     * @returns {Promise<Object>} Logout result { data, error }
     */
    async logout() {
        try {
            // SUPABASE INTEGRATION: Uncomment for production
            // const { error } = await supabase.auth.signOut();
            // if (error) throw error;

            // Clear development session flags and production session data
            localStorage.removeItem('mockAdmin');
            localStorage.removeItem('adminSession');
            localStorage.removeItem('adminEmail');

            return { data: { message: 'Logged out successfully' }, error: null };
        } catch (error) {
            console.error('[AdminAuth] Logout error:', error);
            return { data: null, error };
        }
    },

    /**
     * Request password reset email
     * INTEGRATION POINT: Supabase Password Reset
     * 
     * @param {string} email - Admin email
     * @returns {Promise<Object>} Reset request result { data, error }
     */
    async requestPasswordReset(email) {
        try {
            if (!email) {
                throw new Error('Email is required');
            }

            // SUPABASE INTEGRATION: Uncomment for production
            // const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            //     redirectTo: `${window.location.origin}/admin/reset-password.html`
            // });
            // if (error) throw error;

            // FALLBACK: Simulate email sending
            console.log(`[AdminAuth] Password reset email would be sent to: ${email}`);
            
            return { 
                data: { message: 'If email exists, you will receive reset link' }, 
                error: null 
            };
        } catch (error) {
            console.error('[AdminAuth] Password reset error:', error);
            return { data: null, error };
        }
    }
};

// ============================================================================
// ADMIN DASHBOARD MODULE
// ============================================================================

const AdminDashboard = {
    /**
     * Load all dashboard statistics
     * INTEGRATION POINT: Multiple Supabase queries for orders and inventory
     * 
     * @returns {Promise<Object>} Dashboard stats object
     */
    async getStats() {
        try {
            // SUPABASE INTEGRATION: Replace with actual database queries
            // Multiple queries needed:
            // 1. const { data: orders } = await SupabaseService.getOrders();
            // 2. const { data: inventory } = await SupabaseService.getInventory();
            
            // FALLBACK: Demo statistics
            const stats = {
                totalOrders: 24,
                processing: 5,
                shipped: 8,
                delivered: 11,
                totalRevenue: 850000,
                inventoryItems: 156,
                lowStockCount: 3,
                ordersThisWeek: 5,
                deliveryRate: 92
            };

            return { data: stats, error: null };
        } catch (error) {
            console.error('[AdminDashboard] Error loading stats:', error);
            return { data: null, error };
        }
    },

    /**
     * Load recent orders for dashboard preview
     * INTEGRATION POINT: Supabase orders table query
     * 
     * @param {number} limit - Number of recent orders to fetch (default: 5)
     * @returns {Promise<Object>} Recent orders array
     */
    async getRecentOrders(limit = 5) {
        try {
            // SUPABASE INTEGRATION: Fetch orders ordered by date descending
            // const { data, error } = await supabase
            //     .from('orders')
            //     .select('*')
            //     .order('placed_at', { ascending: false })
            //     .limit(limit);

            // FALLBACK: Demo recent orders
            const recentOrders = [
                {
                    id: 'ORD-2024-001',
                    customer: 'Amina Hassan',
                    items: 2,
                    total: 45000,
                    status: 'delivered',
                    date: '2024-01-15'
                },
                {
                    id: 'ORD-2024-002',
                    customer: 'Chidi Okafor',
                    items: 1,
                    total: 28500,
                    status: 'shipped',
                    date: '2024-01-14'
                },
                {
                    id: 'ORD-2024-003',
                    customer: 'Blessing Adebayo',
                    items: 1,
                    total: 35000,
                    status: 'processing',
                    date: '2024-01-13'
                }
            ];

            return { data: recentOrders, error: null };
        } catch (error) {
            console.error('[AdminDashboard] Error loading recent orders:', error);
            return { data: null, error };
        }
    },

    /**
     * Load items with low stock
     * INTEGRATION POINT: Supabase inventory query with stock threshold
     * 
     * @param {number} threshold - Stock threshold for "low" items (default: 10)
     * @returns {Promise<Object>} Low stock items array
     */
    async getLowStockItems(threshold = 10) {
        try {
            // SUPABASE INTEGRATION: Query inventory where stock <= threshold
            // const { data, error } = await supabase
            //     .from('inventory')
            //     .select('*')
            //     .lte('stock_quantity', threshold)
            //     .order('stock_quantity', { ascending: true });

            // FALLBACK: Demo low stock items
            const lowStockItems = [
                {
                    name: 'Ankara Print Wrapper',
                    sku: 'APW-001',
                    currentStock: 3,
                    reorderLevel: 10
                },
                {
                    name: 'Gold Headwrap',
                    sku: 'GHW-002',
                    currentStock: 5,
                    reorderLevel: 15
                }
            ];

            return { data: lowStockItems, error: null };
        } catch (error) {
            console.error('[AdminDashboard] Error loading low stock items:', error);
            return { data: null, error };
        }
    }
};

// ============================================================================
// ADMIN ORDERS MODULE
// ============================================================================

const AdminOrders = {
    /**
     * Fetch all orders
     * INTEGRATION POINT: Supabase orders table query
     * 
     * @returns {Promise<Object>} Orders array with metadata
     */
    async getAllOrders() {
        try {
            // SUPABASE INTEGRATION: Fetch all orders from database
            // const { data, error } = await SupabaseService.getOrders();

            // FALLBACK: Demo orders
            const orders = [
                {
                    id: 'ORD-2024-001',
                    customer: 'Amina Hassan',
                    email: 'amina@example.com',
                    items: [
                        { name: 'Ankara Wrapper', quantity: 2, price: 15000 },
                        { name: 'Beads', quantity: 1, price: 5000 }
                    ],
                    total: 45000,
                    status: 'delivered',
                    date: '2024-01-15',
                    shippingAddress: '123 Lagos St, Lagos',
                    phone: '08012345678'
                },
                {
                    id: 'ORD-2024-002',
                    customer: 'Chidi Okafor',
                    email: 'chidi@example.com',
                    items: [
                        { name: 'Gold Headwrap', quantity: 1, price: 28500 }
                    ],
                    total: 28500,
                    status: 'shipped',
                    date: '2024-01-14',
                    shippingAddress: '456 Abuja Ave, Abuja',
                    phone: '08087654321'
                }
            ];

            return { data: orders, error: null };
        } catch (error) {
            console.error('[AdminOrders] Error fetching orders:', error);
            return { data: null, error };
        }
    },

    /**
     * Get order by ID
     * INTEGRATION POINT: Supabase orders table query with ID filter
     * 
     * @param {string} orderId - Order ID to fetch
     * @returns {Promise<Object>} Order details
     */
    async getOrderById(orderId) {
        try {
            if (!orderId) {
                throw new Error('Order ID is required');
            }

            // SUPABASE INTEGRATION: Fetch specific order
            // const { data, error } = await supabase
            //     .from('orders')
            //     .select('*')
            //     .eq('id', orderId)
            //     .single();

            // FALLBACK: Return mock order
            return { 
                data: { id: orderId, status: 'processing' }, 
                error: null 
            };
        } catch (error) {
            console.error('[AdminOrders] Error fetching order:', error);
            return { data: null, error };
        }
    },

    /**
     * Update order status
     * INTEGRATION POINT: Supabase orders table update
     * 
     * @param {string} orderId - Order ID to update
     * @param {string} status - New status (processing, shipped, in-transit, delivered)
     * @param {string} note - Optional status update note
     * @returns {Promise<Object>} Updated order
     */
    async updateOrderStatus(orderId, status, note = '') {
        try {
            if (!orderId || !status) {
                throw new Error('Order ID and status are required');
            }

            // Validate status value
            const validStatuses = ['processing', 'shipped', 'in-transit', 'delivered'];
            if (!validStatuses.includes(status)) {
                throw new Error('Invalid status value');
            }

            // SUPABASE INTEGRATION: Update order status
            // const { data, error } = await supabase
            //     .from('orders')
            //     .update({
            //         status,
            //         status_updated_at: new Date().toISOString(),
            //         status_note: note || null
            //     })
            //     .eq('id', orderId)
            //     .select()
            //     .single();

            console.log(`[AdminOrders] Order ${orderId} status updated to: ${status}`);
            
            return { 
                data: { id: orderId, status, note }, 
                error: null 
            };
        } catch (error) {
            console.error('[AdminOrders] Error updating order status:', error);
            return { data: null, error };
        }
    },

    /**
     * Filter orders by status
     * 
     * @param {Array} orders - All orders array
     * @param {string} status - Status to filter by
     * @returns {Array} Filtered orders
     */
    filterByStatus(orders, status) {
        return orders.filter(order => order.status === status);
    },

    /**
     * Search orders by customer or ID
     * 
     * @param {Array} orders - All orders array
     * @param {string} searchTerm - Search term
     * @returns {Array} Matching orders
     */
    search(orders, searchTerm) {
        const term = searchTerm.toLowerCase();
        return orders.filter(order =>
            order.id.toLowerCase().includes(term) ||
            order.customer.toLowerCase().includes(term) ||
            order.email.toLowerCase().includes(term)
        );
    }
};

// ============================================================================
// ADMIN INVENTORY MODULE
// ============================================================================

const AdminInventory = {
    /**
     * Fetch all products
     * INTEGRATION POINT: Supabase inventory table query
     * 
     * @returns {Promise<Object>} Products array
     */
    async getAllProducts() {
        try {
            // SUPABASE INTEGRATION: Fetch all products
            // const { data, error } = await SupabaseService.getInventory();

            // FALLBACK: Demo products
            const products = [
                {
                    id: 1,
                    name: 'Ankara Print Wrapper',
                    category: 'women',
                    sku: 'APW-001',
                    price: 15000,
                    stock: 23,
                    description: 'Beautiful ankara print wrapper',
                    image: 'https://via.placeholder.com/200'
                },
                {
                    id: 2,
                    name: 'Gold Headwrap',
                    category: 'accessories',
                    sku: 'GHW-002',
                    price: 8500,
                    stock: 45,
                    description: 'Elegant gold-tinted headwrap',
                    image: 'https://via.placeholder.com/200'
                }
            ];

            return { data: products, error: null };
        } catch (error) {
            console.error('[AdminInventory] Error fetching products:', error);
            return { data: null, error };
        }
    },

    /**
     * Add new product
     * INTEGRATION POINT: Supabase inventory table insert
     * 
     * @param {Object} productData - Product details
     * @returns {Promise<Object>} Created product
     */
    async addProduct(productData) {
        const storageKey = 'zahra_products';

        try {
            const { name, category, sku, price, stock, description, image } = productData;

            // Validate required fields
            if (!name || !category || !sku || price === undefined) {
                throw new Error('Missing required product fields');
            }

            // Build the persisted product object
            const savedProduct = {
                id: null,
                name,
                category,
                price,
                image: image || 'https://via.placeholder.com/200?text=No+Image',
                sku,
                stock: stock || 0,
                description: description || '',
                collection: productData.collection || 'Admin Picks',
                originalPrice: productData.originalPrice || null,
                availability: productData.availability || 'In Stock',
                badge: productData.badge || null,
                trending: Boolean(productData.trending),
                loved: Number(productData.loved || 0),
                date: productData.date || new Date().toISOString(),
                colors: Array.isArray(productData.colors) ? productData.colors : (productData.colors ? [productData.colors] : []),
                sizes: Array.isArray(productData.sizes) ? productData.sizes : (productData.sizes ? [productData.sizes] : []),
                variantImages: typeof productData.variantImages === 'object' && productData.variantImages ? productData.variantImages : {}
            };

            let existingProducts = [];
            try {
                const raw = localStorage.getItem(storageKey);
                existingProducts = raw ? JSON.parse(raw) : [];
                existingProducts = Array.isArray(existingProducts) ? existingProducts : [];
            } catch (e) {
                console.warn('[AdminInventory] Invalid zahra_products JSON, resetting to empty array', e);
                existingProducts = [];
            }

            const numericIds = existingProducts
                .map(item => Number(item && item.id))
                .filter(Number.isFinite);
            const nextId = numericIds.length ? Math.max(...numericIds) + 1 : 1;
            savedProduct.id = nextId;

            existingProducts.push(savedProduct);
            localStorage.setItem(storageKey, JSON.stringify(existingProducts));

            console.log('Product saved:', savedProduct);

            return { data: savedProduct, error: null };
        } catch (error) {
            console.error('[AdminInventory] Error adding product:', error);
            return { data: null, error };
        }
    },

    /**
     * Update product
     * INTEGRATION POINT: Supabase inventory table update
     * 
     * @param {number} productId - Product ID
     * @param {Object} productData - Updated product details
     * @returns {Promise<Object>} Updated product
     */
    async updateProduct(productId, productData) {
        try {
            if (!productId) {
                throw new Error('Product ID is required');
            }

            // SUPABASE INTEGRATION: Update product
            // const { data, error } = await supabase
            //     .from('inventory')
            //     .update({
            //         product_name: productData.name,
            //         category: productData.category,
            //         sku: productData.sku,
            //         price: productData.price,
            //         stock_quantity: productData.stock,
            //         description: productData.description,
            //         image_url: productData.image
            //     })
            //     .eq('id', productId)
            //     .select()
            //     .single();

            console.log('[AdminInventory] Product updated:', productId);
            
            return { 
                data: { id: productId, ...productData }, 
                error: null 
            };
        } catch (error) {
            console.error('[AdminInventory] Error updating product:', error);
            return { data: null, error };
        }
    },

    /**
     * Delete product
     * INTEGRATION POINT: Supabase inventory table delete
     * 
     * @param {number} productId - Product ID to delete
     * @returns {Promise<Object>} Deletion result
     */
    async deleteProduct(productId) {
        try {
            if (!productId) {
                throw new Error('Product ID is required');
            }

            // SUPABASE INTEGRATION: Delete product
            // const { error } = await supabase
            //     .from('inventory')
            //     .delete()
            //     .eq('id', productId);

            console.log('[AdminInventory] Product deleted:', productId);
            
            return { 
                data: { message: 'Product deleted successfully' }, 
                error: null 
            };
        } catch (error) {
            console.error('[AdminInventory] Error deleting product:', error);
            return { data: null, error };
        }
    },

    /**
     * Update product stock
     * INTEGRATION POINT: Supabase inventory table update
     * 
     * @param {number} productId - Product ID
     * @param {number} quantity - New stock quantity
     * @returns {Promise<Object>} Updated product
     */
    async updateStock(productId, quantity) {
        try {
            if (!productId || quantity === undefined) {
                throw new Error('Product ID and quantity are required');
            }

            // SUPABASE INTEGRATION: Update stock
            // const { data, error } = await supabase
            //     .from('inventory')
            //     .update({ stock_quantity: quantity })
            //     .eq('id', productId)
            //     .select()
            //     .single();

            console.log(`[AdminInventory] Stock updated for product ${productId}: ${quantity}`);
            
            return { 
                data: { id: productId, stock: quantity }, 
                error: null 
            };
        } catch (error) {
            console.error('[AdminInventory] Error updating stock:', error);
            return { data: null, error };
        }
    },

    /**
     * Filter products by category
     * 
     * @param {Array} products - All products
     * @param {string} category - Category to filter
     * @returns {Array} Filtered products
     */
    filterByCategory(products, category) {
        return products.filter(p => p.category === category);
    },

    /**
     * Find low stock products
     * 
     * @param {Array} products - All products
     * @param {number} threshold - Low stock threshold
     * @returns {Array} Low stock products
     */
    findLowStock(products, threshold = 10) {
        return products.filter(p => p.stock <= threshold);
    },

    /**
     * Search products
     * 
     * @param {Array} products - All products
     * @param {string} searchTerm - Search term
     * @returns {Array} Matching products
     */
    search(products, searchTerm) {
        const term = searchTerm.toLowerCase();
        return products.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.sku.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term)
        );
    }
};

// ============================================================================
// HELPER UTILITIES
// ============================================================================

const AdminUtils = {
    /**
     * Format currency value
     * 
     * @param {number} amount - Amount in naira
     * @returns {string} Formatted currency string
     */
    formatCurrency(amount) {
        return `₦${amount.toLocaleString('en-NG')}`;
    },

    /**
     * Format date
     * 
     * @param {string|Date} date - Date to format
     * @returns {string} Formatted date string
     */
    formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString('en-NG', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    },

    /**
     * Format status for display
     * 
     * @param {string} status - Status code
     * @returns {string} Formatted status text
     */
    formatStatus(status) {
        const statusMap = {
            'processing': 'Processing',
            'shipped': 'Shipped',
            'in-transit': 'In Transit',
            'delivered': 'Delivered',
            'pending': 'Pending',
            'cancelled': 'Cancelled'
        };
        return statusMap[status] || status;
    },

    /**
     * Get status color class
     * 
     * @param {string} status - Status code
     * @returns {string} CSS class for status color
     */
    getStatusClass(status) {
        const classMap = {
            'processing': 'processing',
            'shipped': 'shipped',
            'in-transit': 'in-transit',
            'delivered': 'delivered',
            'pending': 'pending',
            'cancelled': 'danger'
        };
        return classMap[status] || 'info';
    },

    /**
     * Generate unique ID
     * 
     * @returns {string} Unique ID
     */
    generateId() {
        return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    },

    /**
     * Validate email format
     * 
     * @param {string} email - Email to validate
     * @returns {boolean} Is valid email
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * Debounce function for search/filter operations
     * 
     * @param {Function} func - Function to debounce
     * @param {number} delay - Delay in milliseconds
     * @returns {Function} Debounced function
     */
    debounce(func, delay = 300) {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
};

// ============================================================================
// EXPORT MODULES
// ============================================================================

// These modules are now globally available:
// - AdminAuth (authentication functions)
// - AdminDashboard (dashboard statistics)
// - AdminOrders (order management)
// - AdminInventory (inventory/product management)
// - AdminUtils (helper utilities)

console.log('[Admin Module] ZAHRA Admin Panel initialized');
console.log('Available modules: AdminAuth, AdminDashboard, AdminOrders, AdminInventory, AdminUtils');
